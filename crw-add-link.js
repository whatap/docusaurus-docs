// 기존 파일에 링크 주기
const fs = require('fs');
const path = require('path');

// 폴더 경로
const folderPath = './crw-data/crwld-service-24q4';

// 폴더 내 파일 목록 읽기
fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    // 각 파일에 대해 처리
    files.forEach(file => {
        const filePath = path.join(folderPath, file);

        // 파일인지 확인
        fs.stat(filePath, (err, stats) => {
            if (err) {
                console.error('Error reading file stats:', err);
                return;
            }

            if (stats.isFile()) {
                // 파일이면 내용 수정
                modifyFile(filePath);
            }
        });
    });
});

// 파일 내용 수정 함수
function modifyFile(filePath) {
    // MDX 파일 내용 읽기
    let fileContent = fs.readFileSync(filePath, 'utf-8');

    // 정규식 정의
    const regex = /<code class='changelog-service'>(Service\s\d+\.\d+\.\d+\u200B+)<\/code>/g;

    // 파일 내용 수정
    fileContent = fileContent.replace(regex, (match) => {
        // 버전에서 숫자 추출 및 링크 생성
        const versionMatch = match.match(/(Service\s\d+\.\d+\.\d+)/);
        if (versionMatch) {
            const version = versionMatch[1];
            const versionMatch2 = version.match(/(\d+\.\d+)\.\d+/);
            if (versionMatch2) {
                const versionNumbers = versionMatch2[1];
                const versionLinkPart = versionNumbers.replace(/\./g, '_');
                const versionLink = `https://docs.whatap.io/release-notes/service/service-${versionLinkPart}_x`;
                return `<code class='changelog-service'><a href="${versionLink}">${match}</a></code>`;
            }
        }
        return match;
    });

    // 수정된 내용으로 파일 덮어쓰기
    fs.writeFileSync(filePath, fileContent);
    console.log(`File updated: ${filePath}`);
}