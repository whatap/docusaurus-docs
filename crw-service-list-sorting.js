// 서비스 기능 상세 정렬 옵션(내림차순 오름차순)
const fs = require('fs');
const path = require('path');

// MDX 파일이 있는 폴더 경로
const folderPath = 'crw-data/crwld-service-24q4';

// 버전 비교 함수
const compareVersions = (a, b, order = 'asc') => {
    const versionA = a.match(/Service (\d+\.\d+\.\d+)/);
    const versionB = b.match(/Service (\d+\.\d+\.\d+)/);

    if (versionA && versionB) {
        const compareResult = versionA[1].localeCompare(versionB[1]);
        return order === 'desc' ? -compareResult : compareResult;
    }

    return 0;
};

// 섹션을 정렬하는 함수
const sortSections = (content, order) => {
    const sections = content.split(/(?=^#### )/gm);
    let firstSection = '';
    if (!sections[0].startsWith('#### ')) {
        firstSection = sections.shift();
    }

    const sortedSections = sections.map(section => {
        const [header, ...lines] = section.split('\n');
        const content = lines.join('\n').trim();
        const items = content.split(/^- /gm).map(item => item.trim()).filter(Boolean);
        const sortedItems = items.sort((a, b) => compareVersions(a, b, order));

        return `${header}\n\n${sortedItems.map(item => `- ${item}`).join('\n\n')}`;
    });

    const sortedFirstSectionItems = firstSection.split(/^- /gm).map(item => item.trim()).filter(Boolean).sort((a, b) => compareVersions(a, b, order));

    return [
        sortedFirstSectionItems.map(item => `- ${item}`).join('\n\n'),
        ...sortedSections
    ].join('\n\n').trim();
};

// 폴더 내의 모든 MDX 파일을 읽고 정렬하는 함수
const sortMDXFiles = (order = 'asc') => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return console.error('폴더를 읽는 중 오류 발생:', err);
        }

        files.filter(file => path.extname(file) === '.mdx').forEach(file => {
            const filePath = path.join(folderPath, file);

            fs.readFile(filePath, 'utf-8', (err, content) => {
                if (err) {
                    return console.error('파일을 읽는 중 오류 발생:', err);
                }

                const sortedContent = sortSections(content, order);

                fs.writeFile(filePath, sortedContent, (err) => {
                    if (err) {
                        return console.error('파일을 쓰는 중 오류 발생:', err);
                    }

                    console.log(`파일이 성공적으로 정렬되었습니다: ${file}`);
                });
            });
        });
    });
};

// MDX 파일 정렬 실행
sortMDXFiles('asc');  // 'asc' 또는 'desc'로 정렬 순서 설정
