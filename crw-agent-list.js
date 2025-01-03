// 23년 파이썬 날짜 기술 다르게 있음
// import 파일 목록 생성 추가
// changed 뺀 것
// 파일명 목록 Nodejs dotnet 변환 필요
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

// URL 배열 정의
const urls = [
    'https://docs.whatap.io/release-notes/server/server-2_7_5',
    // 'https://docs.whatap.io/release-notes/db/dbx-2_2_7',
    // 'https://docs.whatap.io/release-notes/db/dbx-2_3_0',
    // 'https://docs.whatap.io/release-notes/db/dbx-2_2_4',
    // 'https://docs.whatap.io/release-notes/db/dbx-2_2_5',
    // 'https://docs.whatap.io/release-notes/db/dbx-2_2_6',
];

// 순차적으로 각 URL을 처리하는 함수
const processUrlsSequentially = async () => {
    // 제품명별로 생성된 파일명을 묶는 객체
    const productFiles = {};
    let lastUrl2;

    for (const url of urls) {
        try {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);
            let mdxContent = '';
            let contentSet = new Set();

            const version = $('header').text().trim();
            const versionName = $('header').text().trim().split(" ")[0];;
            const date = $('header + p').text().trim();
            console.log(versionName);

            // 기능 상세 데이터 처리 로직
            const sectionElements = $('*').find('section.remark-sectionize-h2');
            if (sectionElements.length > 0) {
                $('section.remark-sectionize-h2').each((index, element) => {
                    let productName;
                    $(element).find('h2').each((index, h2Element) => {
                        // 제품군 내 제품명
                        productName = $(h2Element).text().trim(); // productName 할당
                        console.log(productName);

                        // 기능 상세
                        const nextUl = $(h2Element).next('ul').first();
                        const nextP = $(h2Element).next('p').first();

                        const featureInUl = nextUl.find('code.Feature, code.New, code.Deprecated, code.Deprecate');
                        const featureInP = nextP.find('code.Feature, code.New, code.Deprecated, code.Deprecate');

                        // 중복 제거한 기능 상세 가져오기
                        const features = new Set();
                        featureInUl.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });
                        featureInP.each((idx, code) => {
                            features.add($(code).parent().html().trim());
                        });

                        // 출력할 필요 없는 경우는 건너뛰기
                        if (features.size === 0) return;

                        // 중복 체크 및 MDX 형식으로 데이터 생성하여 파일 내용에 추가
                        const content = `#### <code class='changelog-service'>${version}</code>` + ` <code class='changelog-date'>${date}</code>` + `\n`;
                        if (!contentSet.has(content)) {
                            mdxContent += content + '\n';
                            contentSet.add(content);
                        }
                        mdxContent += `##### ${productName}` + `\n\n` + [...features].map(feature => `- ${feature}`).join('\n\n') +
                            '\n\n';
                    });

                    // mdx 파일명 목록에 추가
                    if (!productFiles[versionName]) {
                        productFiles[versionName] = [];
                    }
                    const segments = url.split('/');
                    const lastUrl = segments[segments.length - 1];
                    const seg2 = lastUrl.split('-');
                    lastUrl2 = seg2[0];
                    const fileName = `./crw-data/crwld-agent-24q4/_import-agent-24q4-${lastUrl2}.mdx`;
                    productFiles[versionName].push(fileName);
                    console.log('테스트');
                });

            } else {
                const ulContents = $('header + p').next('ul');
                const featureInUl = ulContents.find('code.Feature, code.New, code.Deprecated, code.Deprecate');

                const pContents = $('header + p').next('p');
                const featureInP = pContents.find('code.Feature, code.New, code.Deprecated, code.Deprecate');

                const features = new Set();
                featureInUl.each((idx, code) => {
                    features.add($(code).parent().html().trim());
                });
                featureInP.each((idx, code) => {
                    features.add($(code).parent().html().trim());
                });

                if (features.size === 0) return;

                const content = `#### <code class='changelog-service'>${version}</code>` + ` <code class='changelog-date'>${date}</code>` + `\n`;
                if (!contentSet.has(content)) {
                    mdxContent += content + '\n';
                    contentSet.add(content);
                }
                mdxContent += [...features].map(feature => `- ${feature}`).join('\n\n') +
                    '\n\n';

                // mdx 파일명 목록에 추가
                const versionName = $('header').text().trim().split(" ")[0];
                if (!productFiles[versionName]) {
                    productFiles[versionName] = [];
                }
                const segments = url.split('/');
                const lastUrl = segments[segments.length - 1];
                const seg2 = lastUrl.split('-');
                lastUrl2 = seg2[0];
                const fileName = `./crw-data/crwld-agent-24q4/_import-agent-24q4-${lastUrl2}.mdx`;
                productFiles[versionName].push(fileName);
            }

            // mdx 파일 생성 또는 추가
            const fileName = `./crw-data/crwld-agent-24q4/_import-agent-24q4-${lastUrl2}.mdx`;
            let existingContent = '';
            if (fs.existsSync(fileName)) {
                existingContent = fs.readFileSync(fileName, 'utf-8');
            }

            const updatedContent = existingContent + mdxContent;

            fs.writeFileSync(fileName, updatedContent);
            console.log(`MDX file updated for ${url}`);

        } catch (error) {
            console.error('Error fetching web page:', error);
        }
    }

    // mdx 파일명 목록을 내용으로 하는 mdx 파일 생성 또는 추가
    await generateFilesListMDX(productFiles);
};

// mdx 파일명 목록을 내용으로 하는 mdx 파일 생성 함수
const generateFilesListMDX = async (productFiles) => {
    let productFilesContent = '';

    Object.keys(productFiles).forEach(versionName => {
        const filesList = productFiles[versionName].map(file => {
            const cleanFileName = file.replace(/\u200B/g, '');

            // 특정 버전명 수정 
            if (versionName === 'Node.js') {
                versionName = 'Nodejs';
            } else if (versionName === '.NET'){
                versionName = 'DOTNET';
            }

            return `<div class='indentTab'>\n\nimport ${versionName}_agent_24q4 from ".${cleanFileName}";\n\n<${versionName}_agent_24q4 />\n\n</div>\n`;
        }).join('\n');
        const cleanversionName = versionName.replace(/\u200B/g, '');
        productFilesContent += `### \`${cleanversionName}\`\n\n${filesList}\n`;
    });

    const newFilesMDX = `./crw-data/crwld-agent-24q4/_import-new-files-list.mdx`; // newFilesMDX 정의
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
};

// 함수 호출
processUrlsSequentially();