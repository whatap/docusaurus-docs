import { RawCode, Pre } from "codehike/code";
import { CopyButton } from "./codes/button";
import { callout } from "./codes/callout";
import { className } from "./codes/classname";
import { diff } from "./codes/diff";
import { mark } from "./codes/mark";
import { lineNumbers } from "./codes/line-numbers";
import { parseLineRanges, isLineInRange } from './codes/lineUtils'; // 유틸리티 함수 사용
import clsx from 'clsx';
import styles from './codes/styles.module.css';

export function MyCode({ codeblock }: { codeblock: RawCode }) {
  // meta에서 title과 showLineNumbers, line ranges를 선택적으로 추출
  const titleMatch = codeblock.meta?.match(/title=('|\")([^>]+?)('|")/);
  const showLineNumbersMatch = codeblock.meta?.match(/showLineNumbers/);
  const lineRangesMatch = codeblock.meta?.match(/{(.+?)}/);

  // title 값을 추출하거나 null로 설정
  const codeTitle = titleMatch ? titleMatch[2] : null;
  // showLineNumbers가 있으면 true, 없으면 false로 설정
  const showLineNumbers = !!showLineNumbersMatch;
  // 라인 범위를 추출하거나 빈 배열로 설정
  const lineRanges = lineRangesMatch ? parseLineRanges(lineRangesMatch[1]) : [];

  // handlers 배열 생성
  const handlers = [callout, mark, diff, className];

  if (showLineNumbers) {
    handlers.push(lineNumbers); // showLineNumbers가 true일 때만 추가
  }

  return (
    <div className={clsx('theme-code-block', `language-${codeblock.lang}`, styles.codeBlockContainer)}>
      <CopyButton text={codeblock.code} />
      {codeTitle ? (
        <div className={styles.codeBlockTitle}>{codeTitle}</div>
      ) : null}
       <Pre
        className={styles.codeBlock}
        code={codeblock}
        handlers={handlers}
        style={{ background: "#212121", color: "#fafafa" }}
        Line={(lineProps) => (
          <lineNumbers.Line {...lineProps} lineRanges={lineRanges} />
        )}
      />
    </div>
  );
}
