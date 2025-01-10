// 서비스 릴리스 노트 크롤링 및 스타일 입혀서 mdx 전환
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const urls = [
    // 'https://docs.whatap.io/release-notes/service/service-2_6_x',
    // 'https://docs.whatap.io/release-notes/service/service-2_7_x',
    // 'https://docs.whatap.io/release-notes/service/service-2_8_x',
    // 'https://docs.whatap.io/release-notes/service/service-2_9_x',
    'https://docs.whatap.io/release-notes/service/service-2_10_x',
    'https://docs.whatap.io/release-notes/service/service-2_11_x',
    'https://docs.whatap.io/release-notes/service/service-2_12_x',
];

// 제품명별로 생성된 파일명을 묶는 객체
const productFiles = {};

// 각 URL을 처리
const processUrls = async () => {
    for (const url of urls) {
        try {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);
            const segments = url.split('/');
            const lastUrl = segments[segments.length - 1];
            const seg2 = lastUrl.split('-');
            const lastUrl2 = seg2[0]; // lastUrl2 정의

            $('section.remark-sectionize-h2').each((index, element) => {
                const version = $(element).find('h2').text().trim();
                const date = $(element).find('h2 + p').text().trim();

                $(element).find('h3').each((index, h3Element) => {
                    let productName = $(h3Element).text().trim().replace(/\u200B/g, '');

                    if (productName === '공통') {
                        productName = 'Common';
                    } else if (productName === '신규 기능 출시') {
                        productName = 'NewFC';
                    } else if (productName === 'AWS Log') {
                        productName = 'AWSLog';
                    }

                    const fileName = `./crw-data/crwld-service-24q4/_import-24q4-${lastUrl2}-${productName}.mdx`.trim();

                    let mdxContent = '';

                    if (fs.existsSync(fileName)) {
                        mdxContent = fs.readFileSync(fileName, 'utf-8');
                    }

                    const featuresByFeatureName = {};

                    const h4Elements = $(h3Element).nextUntil('h3', 'h4');
                    if (h4Elements.length > 0) {
                        h4Elements.each((index, h4Element) => {
                            const featureName = $(h4Element).text().trim();
                            const nextUl = $(h4Element).next('ul').first();
                            const nextP = $(h4Element).next('p').first();
                            const featureInUl = nextUl.find('code.Feature, code.New, code.Changed');
                            const featureInP = nextP.find('code.Feature, code.New, code.Changed');
                            const features = new Set();
                            featureInUl.each((idx, code) => {
                                features.add($(code).parent().html().trim());
                            });
                            featureInP.each((idx, code) => {
                                features.add($(code).parent().html().trim());
                            });

                            if (features.size === 0) return;

                            if (!featuresByFeatureName[featureName]) {
                                featuresByFeatureName[featureName] = [];
                            }

                            features.forEach(feature => {
                                featuresByFeatureName[featureName].push(feature);
                            });
                        });
                    } else {
                        const nextUl = $(h3Element).next('ul').first();
                        const nextP = $(h3Element).next('p').first();
                        const featureInUl = nextUl.find('code.Feature, code.New, code.Changed');
                        const featureInP = nextP.find('code.Feature, code.New, code.Changed');
                        const features = new Set();
                        featureInUl.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });
                        featureInP.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });

                        if (features.size === 0) return;

                        featuresByFeatureName[""] = [];

                        features.forEach(feature => {
                            featuresByFeatureName[""].push(feature);
                        });
                    }

                    updateMDXContent(fileName, mdxContent, version, featuresByFeatureName, productName, lastUrl2);

                    if (!productFiles[productName]) {
                        productFiles[productName] = [];
                    }

                    if (!productFiles[productName].includes(fileName)) {
                        productFiles[productName].push(fileName);
                    }

                });
            });

            let productFilesContent = '';

            Object.keys(productFiles).forEach(productName => {
                const filesList = productFiles[productName].map(file => {
                    const cleanFileName = file.replace(/\u200B/g, '');
                    return `import ${productName}_24q4 from ".${cleanFileName}";\n\n<${productName}_24q4 />\n`;
                }).join('\n');
                const cleanProductName = productName.replace(/\u200B/g, '');
                productFilesContent += `## \`${cleanProductName}\`\n\n${filesList}\n`;
            });

            const newFilesMDX = `./crw-data/crwld-service-24q4/_import-new-files-${lastUrl2}.mdx`; // newFilesMDX 정의
            if (fs.existsSync(newFilesMDX)) {
                const existingFilesContent = fs.readFileSync(newFilesMDX, 'utf-8');
                const existingFilesSet = new Set(existingFilesContent.split('\n').map(line => line.trim()));
                const newFilesSet = new Set(productFilesContent.split('\n').map(line => line.trim()));
                const mergedFilesSet = new Set([...existingFilesSet, ...newFilesSet]);
                const mergedFilesArray = Array.from(mergedFilesSet);
                const mergedFilesContent = mergedFilesArray.join('\n\n') + '\n\n';
                productFilesContent = mergedFilesContent;
            }

            fs.writeFileSync(newFilesMDX, productFilesContent);
            console.log(`New files MDX updated: ${newFilesMDX}`);

        } catch (error) {
            console.error('Error fetching web page:', error);
        }
    }
}

// 기존 MDX 파일과 새로운 기능을 비교하고 내용을 업데이트
function updateMDXContent(fileName, existingContent, version, newContent, productName, lastUrl2) {
    let updatedContent = existingContent;

    Object.keys(newContent).forEach(featureName => {
        const featureHeader = `#### ${featureName}`;
        if (!updatedContent.includes(featureHeader)) {
            updatedContent += `${featureHeader}\n\n`;
        }

        newContent[featureName].forEach(feature => {
            const existingFeature = `#### ${featureName}`;
            const newFeatureContent = `- ${feature} <code class='changelog-service'>${version}</code>`;
            if (updatedContent.includes(existingFeature)) {
                updatedContent = updatedContent.replace(existingFeature, `${existingFeature}\n\n${newFeatureContent}`);
            } else {
                updatedContent += `${newFeatureContent}\n\n`;
            }
        });
    });

    updatedContent = updatedContent.replace(/^\s*####\s*$/gm, "");

    fs.writeFileSync(fileName, updatedContent);
    console.log(`MDX file updated: ${fileName}`);

    const backupFileName = `./crw-data/backup/_import-backup-24q4-${lastUrl2}-${productName}.mdx`;
    fs.copyFileSync(fileName, backupFileName);
    console.log(`Backup file created: ${backupFileName}`);
}

// 각 URL 처리 시작
processUrls();
