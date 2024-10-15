import { RawCode, Pre, highlight } from "codehike/code"
import { CopyButton } from "./codes/button"
import { callout } from "./codes/callout"
import { className } from "./codes/classname"
import clsx from 'clsx'
import styles from './codes/styles.module.css'

export function MyCode({ codeblock }: { codeblock: RawCode }) {
  console.log(codeblock);
  const codeTitle = codeblock.meta.replace(/title=('|")([^>]+?)('|")/g, '$2');
  
  return (
    <div className={clsx('theme-code-block', `language-${codeblock.lang}`, styles.codeBlockContainer)}>
      <CopyButton text={codeblock.code} />
      {codeblock.meta ? (
        <div className={styles.codeBlockTitle}>{codeTitle}</div>
      ) : null}
      <Pre
        className={styles.codeBlock}
        code={codeblock}
        handlers={[callout]}
        style={{ background: "#212121", color: "#fafafa" }}
      />
    </div>
  )
}

// title='CommonJS'
// <div class="language-javascript codeBlockContainer_Ckt0 theme-code-block" style="--prism-color: #bfc7d5; --prism-background-color: #292d3e;"><div class="codeBlockTitle_Ktv7">CommonJS</div><div class="codeBlockContent_biex"><pre tabindex="0" class="prism-code language-javascript codeBlock_bY9V thin-scrollbar" style="color: rgb(191, 199, 213); background-color: rgb(41, 45, 62);"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color: rgb(191, 199, 213);"><span class="token keyword" style="font-style: italic;">var</span><span class="token plain"> whatap </span><span class="token operator" style="color: rgb(137, 221, 255);">=</span><span class="token plain"> </span><span class="token function" style="color: rgb(130, 170, 255);">require</span><span class="token punctuation" style="color: rgb(199, 146, 234);">(</span><span class="token string" style="color: rgb(195, 232, 141);">'whatap'</span><span class="token punctuation" style="color: rgb(199, 146, 234);">)</span><span class="token punctuation" style="color: rgb(199, 146, 234);">.</span><span class="token plain">NodeAgent</span><span class="token punctuation" style="color: rgb(199, 146, 234);">;</span><br></span></code></pre><div class="buttonGroup__atx"><button type="button" aria-label="클립보드에 코드 복사" title="복사" class="clean-btn"><span class="copyButtonIcons_eSgA" aria-hidden="true"><svg viewBox="0 0 24 24" class="copyButtonIcon_y97N"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg><svg viewBox="0 0 24 24" class="copyButtonSuccessIcon_LjdS"><path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path></svg></span></button></div></div></div>