// 1. 모든 mdx 파일에서 사용된 이미지 파일을 리스트로 만든다.
// 2. 이미지 폴더에서 모든 이미지 파일의 목록을 만든다.
// 3. 1과 2를 비교해 교집합을 제외한 이미지 목록을 만든다.

const fss = require('fs');
const fs = require('fs').promises;
const path = require('path');

// 파일 유무 체크
const fileLists = ['imagePaths.txt', 'imagePathsAll.txt'];

for (let i in fileLists) {
    if (fss.existsSync(fileLists[i])) {
        fs.unlink(fileLists[i]);
    } else {
        fs.writeFile(fileLists[i], '', { flag: 'w' }, function (err) {
            if (err) throw err;
            console.log("It's saved!");
        })
    }
}

// 이미지 파일 경로를 저장할 집합
const imagePathsSet = new Set();

// docs 폴더의 모든 mdx 파일을 찾는 재귀 함수
async function findImagesInMdxFiles(dir) {
    const files = await fs.readdir(dir, { withFileTypes: true });

    for (const file of files) {
      if (file.isDirectory()) {
          await findImagesInMdxFiles(path.join(dir, file.name)); // 디렉토리면 재귀적으로 탐색 계속
      } else if (file.name.endsWith('.mdx')) {
          const data = await fs.readFile(path.join(dir, file.name), 'utf8');
          const imagePaths = data.match(/!\[.*?\]\((.*?)\)/g); // Markdown 이미지 링크 추출
          const imagePaths2 = data.match(/img=['"](.*?)['"]/g);
          
          //https로 시작하는 경우 제외
          if (imagePaths) {
              imagePaths.forEach((imgPath) => {
                  const match = imgPath.match(/\((.*)\)/);
                  if (match && !match[1].startsWith('https://') && !match[1].startsWith('타 프로젝트')) {
                      imagePathsSet.add(match[1].replace('/img/', '')); // 이미지 경로 집합에 저장
                  }
              });
          } 
          if (imagePaths2) {
              imagePaths2.forEach((imgPath) => {
                  const match2 = imgPath.match(/img=['"](.*?)['"]/);
                  if (match2) {
                      imagePathsSet.add(match2[1]); // 이미지 경로 집합에 저장
                  }
              });
          }
      }
    }
}

// 이미지 파일 경로를 텍스트 파일로 출력하는 함수
async function saveImagePathsToTextFile(docsDir, outputPath) {
    await findImagesInMdxFiles(docsDir);
    
    // 이미지 경로가 저장된 집합을 배열로 변환
    const imagePathsArray = Array.from(imagePathsSet).sort();
    
    // 이미지 경로를 개행문자와 함께 합친 문자열 생성
    const imagePathString = imagePathsArray.join('\n');

    // 파일에 이미지 경로 문자열 쓰기
    await fs.appendFile(outputPath, imagePathString, 'utf8');
    console.log(docsDir, '문서의 이미지 경로가 imagePaths.txt 파일로 저장되었습니다.');
}

const imgFileList = 'imagePaths.txt';

// 사용 예 - 'docs' 폴더 내의 모든 mdx 파일을 검색하여 imagePaths.txt 파일로 이미지 경로 저장
saveImagePathsToTextFile("docs", imgFileList)
    .catch((error) => {
        console.error('An error occurred:', error);
    });

saveImagePathsToTextFile("blog", imgFileList)
    .catch((error) => {
        console.error('An error occurred:', error);
    });

saveImagePathsToTextFile("crw-data", imgFileList)
    .catch((error) => {
        console.error('An error occurred:', error);
    });

// 모든 이미지를 리스트로 불러오기
const directoryPath = 'static';

// 재귀적으로 디렉토리를 탐색하고 파일 목록을 가져오는 함수
async function readFilesInDirectory(directory) {
    try {
        const files = await fs.readdir(directory, { withFileTypes: true });
        
        const allImages = new Set(); // 모든 이미지 파일 집합
        for (const file of files) {
            if (file.isDirectory()) {
                await readFilesInDirectory(path.join(directory, file.name));
            } else if (file.isFile() && file.name.match(/.jpg|.jpeg|.png|.gif|.bmp|.webp|.svg/g)) {
                
                if (file.name.endsWith('-en.png') || file.name.endsWith('-en.svg') || file.name.endsWith('-ja.png') || file.name.endsWith('-ja.svg')) {
                    continue
                } else {
                    allImages.add(path.join(directory, file.name).replace('static/img/', ''));
                }
            } 
            else {
                console.log(path.join(directory, file.name))
            }
        }
        const allimagepathArray = Array.from(allImages).sort();
        const allimagepathStr = allimagepathArray.join('\n');
        fs.appendFile("imagePathsAll.txt", allimagepathStr, 'utf-8');
    } catch (err) {
        console.error('Error reading directory:', err);
    }
}

// 디렉토리와 그 하위 디렉토리의 이미지 파일 정보를 수집
readFilesInDirectory(directoryPath)
    .then(() => {
        console.log("Complete");
    })
    .catch((err) => {
        console.error('Error:', err);
    });