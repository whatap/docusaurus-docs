// 2 다국어 - 다국어 문서 경로 설정 확인 및 링크 이미지 경로 수정
const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const urls = {
    ko: [
        // 'https://whatap.github.io/whatap-docs/release-notes/service/service-2_10_x',
        // 'https://docs.whatap.io/release-notes/service/service-2_12_x',
    ],
    en: [
        // 'https://docs.whatap.io/en/release-notes/service/service-2_7_x',
        // 'https://docs.whatap.io/en/release-notes/service/service-2_9_x',
        'https://docs.whatap.io/en/release-notes/service/service-2_12_x',
    ],
    ja: [
        // 'https://docs.whatap.io/ja/release-notes/service/service-2_7_x',
        // 'https://docs.whatap.io/ja/release-notes/service/service-2_9_x',
        'https://docs.whatap.io/ja/release-notes/service/service-2_12_x',
    ]
};

async function extractFeaturesAndUpdateMDXDocuments() {
    for (const lang in urls) {
        const languageUrls = urls[lang];
        const allFeatures = [];

        try {
            for (const url of languageUrls) {
                const response = await axios.get(url);
                const $ = cheerio.load(response.data);

                const features = [];
                $('section.remark-sectionize-h2').each((index, element) => {
                    const version = $(element).find('h2').text().trim();
                    let date = $(element).find('h2 + p').text().trim();
                    if (lang === 'en') {
                        date = formatDateToISO(parseDate(date, lang)); // 영문(en) 날짜를 ISO 형식으로 변환
                    }
                    console.log(`${version} - ${date} [${lang}]`);

                    $(element).find('h3').each((index, h3Element) => {
                        const featureName = $(h3Element).text().trim().replace(/\u200B/g, '');
                        console.log(featureName);

                        const h4Elements = $(h3Element).nextUntil('h3', 'h4');
                        if (h4Elements.length > 0) {
                            h4Elements.each((index, h4Element) => {
                                const featureName2 = $(h4Element).text().trim().replace(/\u200B/g, '');

                                const nextUl = $(h4Element).next('ul').first();
                                const nextP = $(h4Element).next('p').first();
                                const featureInUl = nextUl.find('code.Feature, code.New');
                                const featureInP = nextP.find('code.Feature, code.New');

                                const featureDetails = [];

                                featureInUl.each((idx, code) => {
                                    featureDetails.push($(code).parent().html().trim());
                                });
                                featureInP.each((idx, code) => {
                                    featureDetails.push($(code).parent().html().trim());
                                });

                                if (featureDetails.length > 0) {
                                    features.push({ version, date, feature: featureName, feature2: featureName2, details: featureDetails });
                                }
                            });
                        } else {
                            const nextUl = $(h3Element).next('ul').first();
                            const nextP = $(h3Element).next('p').first();
                            const featureInUl = nextUl.find('code.Feature, code.New');
                            const featureInP = nextP.find('code.Feature, code.New');

                            const featureDetails = [];

                            featureInUl.each((idx, code) => {
                                featureDetails.push($(code).parent().html().trim());
                            });
                            featureInP.each((idx, code) => {
                                featureDetails.push($(code).parent().html().trim());
                            });

                            if (featureDetails.length > 0) {
                                features.push({ version, date, feature: featureName, details: featureDetails });
                            }
                        }
                    });
                });

                features.sort((a, b) => parseDate(b.date, lang) - parseDate(a.date, lang));
                allFeatures.push(...features);
            }

            // 파일 경로를 로케일에 따라 다르게 설정
            let mdxFilePath;
            switch (lang) {
                case 'ko':
                    mdxFilePath = `./crw-data/overview/_changelog_overview.mdx`;
                    break;
                case 'en':
                    mdxFilePath = `./i18n/en/crw-data/overview/_changelog_overview.mdx`;
                    break;
                case 'ja':
                    mdxFilePath = `./i18n/ja/crw-data/overview/_changelog_overview.mdx`;
                    break;
                default:
                    mdxFilePath = `./crw-data/overview/_changelog_overview.mdx`;
                    break;
            }
            
            updateOrCreateMDXDocument(mdxFilePath, allFeatures, lang);
        } catch (error) {
            console.error(`Error extracting features for ${lang}:`, error);
        }
    }
}

function updateOrCreateMDXDocument(filename, newFeatures, lang) {
    let existingFeatures = [];

    if (fs.existsSync(filename)) {
        const content = fs.readFileSync(filename, 'utf-8');
        existingFeatures = content.trim().split('\n\n').map(line => {
            const match = line.match(/<code class='changelog-date'>(.*?)<\/code>/);
            const featureMatch = line.match(/<code class='changelog-overview'>(.*?)<\/code>/);
            return {
                line,
                date: match ? parseDate(match[1], lang) : null,
                feature: featureMatch ? featureMatch[1] : ''
            };
        });
    }

    const filteredNewFeatures = newFeatures.filter(newFeature => {
        return !existingFeatures.some(existingFeature => {
            return existingFeature.feature === newFeature.feature && existingFeature.date.getTime() === parseDate(newFeature.date, lang).getTime();
        });
    });

    const allFeatures = [...existingFeatures, ...filteredNewFeatures];
    allFeatures.sort((a, b) => b.date - a.date);

    createOrUpdateMDXDocument(filename, allFeatures, lang);

    // 날짜 재정렬 후에 백업 파일 생성
    sortByDateAndRewriteMDXWithBackup(filename);
}

function createOrUpdateMDXDocument(filename, features, lang) {
    try {
        let documentContent = '';

        features.forEach(feature => {
            if (feature.line) {
                documentContent += `${feature.line}\n\n`;
            } else {
                if (feature.version) {
                    documentContent += `- <code class='changelog-overview'>${feature.feature}</code>`;
                    documentContent += `\n<code class='changelog-date'>${feature.date}</code>`;
                    const versionLink = createVersionLink(feature.version, lang);
                    documentContent += ` <code class='changelog-service'><a href="${versionLink}"><img src="../img/ic-link.svg" width="18px" height="18px" class="ico-link medium-zoom-image"></img> ${feature.version}</a></code>\n`;
                    if (feature.feature2) {
                        documentContent += `<br/><code class='changelog-overview2'>${feature.feature2}</code>\n`;
                        feature.details.forEach(detail => {
                            documentContent += `  - ${detail}\n`;
                        });
                    } else {
                        feature.details.forEach(detail => {
                            documentContent += `  - ${detail}\n`;
                        });
                    }
                    documentContent += `\n`;
                }
            }
        });

        fs.writeFileSync(filename, documentContent);
        console.log(`MDX Document updated or created: ${filename}`);
    } catch (error) {
        console.error('Error updating or creating MDX document:', error);
    }
}

function createVersionLink(version, lang) {
    if (version) {
        const versionMatch = version.match(/(Service\s\d+\.\d+\.\d+)/);
        if (versionMatch) {
            const versionStr = versionMatch[1];
            const versionNumbersMatch = versionStr.match(/(\d+\.\d+)\.\d+/);
            if (versionNumbersMatch) {
                const versionNumbers = versionNumbersMatch[1];
                const versionLinkPart = versionNumbers.replace(/\./g, '_');
                switch (lang) {
                    case 'en':
                        return `https://docs.whatap.io/en/release-notes/service/service-${versionLinkPart}_x`;
                    case 'ja':
                        return `https://docs.whatap.io/ja/release-notes/service/service-${versionLinkPart}_x`;
                    default:
                        return `https://docs.whatap.io/release-notes/service/service-${versionLinkPart}_x`;
                }
            }
        }
    }
    return '#';
}

function sortByDateAndRewriteMDXWithBackup(filename) {
    sortByDateAndRewriteMDX(filename);
    createBackup(filename);
}

function createBackup(filename) {
    const backupFolder = './crw-data/backup';
    if (!fs.existsSync(backupFolder)) {
        fs.mkdirSync(backupFolder);
    }

    const backupFileName = path.join(backupFolder, `_changelog_overview_backup_${Date.now()}.mdx`);
    fs.copyFileSync(filename, backupFileName);
    console.log(`Backup created: ${backupFileName}`);
}

function determineLocale(dateString) {
    // 날짜 문자열 기준 로케일 설정
    if (/年/.test(dateString)) {
        return 'ja'; // 일본어
    } else if (/년/.test(dateString)) {
        return 'ko'; // 한국어
    } else if (/^\w+\s\d+,\s\d{4}$/.test(dateString)) {
        return 'en'; // 영어 (날짜 형식: "Month Day, Year")
    } else if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
        return 'iso'; // ISO 형식 (YYYY-MM-DD)
    }
    return null; // 로케일을 결정할 수 없는 경우
}

function sortByDateAndRewriteMDX(filename) {
    try {
        const content = fs.readFileSync(filename, 'utf-8');
        const features = content.trim().split('\n\n').map(line => {
            const match = line.match(/<code class='changelog-date'>(.*?)<\/code>/);
            const dateString = match ? match[1] : null;
            // 기본 로케일 ko, 날짜 문자열에 따라 로케일 결정
            const locale = dateString ? determineLocale(dateString) || 'ko' : 'ko';
            return { line, date: dateString ? parseDate(dateString, locale) : null };
        });

        features.sort((a, b) => b.date - a.date);  // 최신 날짜가 상단에 오도록 내림차순 정렬
        const sortedContent = features.map(item => item.line).join('\n\n');
        fs.writeFileSync(filename, sortedContent);
        console.log(`MDX file sorted and updated: ${filename}`);
    } catch (error) {
        console.error('Error sorting and rewriting MDX file:', error);
    }
}

function parseDate(dateString, locale) {
    if (locale === 'ko') {
        const match = dateString.match(/(\d+)년 (\d+)월 (\d+)일/);
        if (match) {
            const year = parseInt(match[1]);
            const month = parseInt(match[2]) - 1;
            const day = parseInt(match[3]);
            return new Date(year, month, day);
        }
    } else if (locale === 'en') {
        // ISO 형식인지 먼저 확인
        if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
            const match = dateString.match(/(\d{4})-(\d{2})-(\d{2})/);
            if (match) {
                const year = parseInt(match[1]);
                const month = parseInt(match[2]) - 1;
                const day = parseInt(match[3]);
                return new Date(year, month, day);
            }
        }

        const match = dateString.match(/(\w+)\s(\d{1,2}),\s(\d{4})/);
        if (match) {
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            const month = monthNames.indexOf(match[1]);
            const day = parseInt(match[2]);
            const year = parseInt(match[3]);

            if (month >= 0 && !isNaN(day) && !isNaN(year)) {
                return new Date(year, month, day);
            }
        }
    } else if (locale === 'ja') {
        const match = dateString.match(/(\d{4})年(\d{2})月(\d{2})日/);
        if (match) {
            const year = parseInt(match[1]);
            const month = parseInt(match[2]) - 1;
            const day = parseInt(match[3]);
            return new Date(year, month, day);
        }
    } else if (locale === 'iso') {
        const match = dateString.match(/(\d{4})-(\d{2})-(\d{2})/);
        if (match) {
            const year = parseInt(match[1]);
            const month = parseInt(match[2]) - 1;
            const day = parseInt(match[3]);
            return new Date(year, month, day);
        }
    }

    console.error('Unsupported or invalid date format:', dateString);
    return new Date(); // 기본값: 현재 날짜
}

function formatDateToISO(date) {
    // 날짜를 ISO 형식으로 변환
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

extractFeaturesAndUpdateMDXDocuments();