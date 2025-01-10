// 브라우저 예외 처리 추가
const fs = require('fs').promises;
const path = require('path');

// 폴더 경로
const folderPath = './crw-data/crwld-agent-24q4';

async function processFiles() {
    try {
        const files = await fs.readdir(folderPath);

        for (const file of files) {
            const filePath = path.join(folderPath, file);
            const stats = await fs.stat(filePath);

            if (stats.isFile()) {
                await modifyFile(filePath);
                console.log(`File updated: ${filePath}`);
            }
        }
    } catch (err) {
        console.error('Error reading or processing files:', err);
    }
}

async function modifyFile(filePath) {
    try {
        let fileContent = await fs.readFile(filePath, 'utf-8');

        const regex = /<code class='changelog-service'>([\w\s.+-]+(?:\sAgent)?)\sv(\d+\.\d+(?:\.\d+)?[a-zA-Z]?)<\/code>/g;

        fileContent = fileContent.replace(regex, (match, product, version) => {
            let productName = product.replace(/\s+Agent/, '').toLowerCase();

            if (productName === '.net') {
                productName = 'dotnet';
            } else if (productName === 'go') {
                productName = 'golang';
            } else if (productName === 'kubernetes') {
                productName = 'k8s';
            } else {
                productName = productName.replace(/\./g, '');
            }

            productName = productName.replace(/\s+/g, '-');

            const versionLinkPart = version.replace(/\./g, '_');
            const versionLink = generateVersionLink(productName, versionLinkPart);

            return `<code class='changelog-service'><a href="${versionLink}">${product} v${version}</a></code>`;
        });

        await fs.writeFile(filePath, fileContent, 'utf-8');
    } catch (err) {
        console.error(`Error modifying file ${filePath}:`, err);
    }
}

function generateVersionLink(productName, versionLinkPart) {
    let versionLinkDB = `${productName}/${productName}`;
    if (versionLinkDB === 'xos/xos') {
        versionLinkDB = 'db/xos';
    } else if (versionLinkDB === 'dbx/dbx') {
        versionLinkDB = 'db/dbx';
    } else if (productName === 'browser'){
        return `https://docs.whatap.io/release-notes/${versionLinkDB}-v${versionLinkPart}`;
    }
    return `https://docs.whatap.io/release-notes/${versionLinkDB}-${versionLinkPart}`;
}

processFiles();


// if (versionLink = 'browser/browser')
// if (productName === 'browser')