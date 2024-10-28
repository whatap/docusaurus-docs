import { AnnotationHandler, InnerLine } from "codehike/code";
import styles from './styles.module.css';
import clsx from 'clsx';

export const lineNumbers: AnnotationHandler = {
  name: "line-numbers",
  Line: (props) => {
    // props에서 lineRanges 가져오기
    const lineRanges = props.lineRanges || [];
    console.log('lineRanges:', lineRanges); // 디버그용 로그

    const shouldHighlight = isLineInRange(props.lineNumber, lineRanges);
    const width = props.totalLines.toString().length + 1;

    return (
      <div className={styles.flex}>
        <span
          className={clsx(styles.textright, styles.opacity50, styles.selectnone)}
          style={{ minWidth: `${width}ch` }}
        >
          {props.lineNumber}
        </span>
        <InnerLine merge={props} className={clsx(styles.flex_1, styles.pl_2, shouldHighlight && styles.numhighlight)} />
      </div>
    );
  },
};

function isLineInRange(lineNumber: number, ranges: { start: number; end: number }[]) {
  if (!ranges || ranges.length === 0) {
    return false;
  }
  return ranges.some(({ start, end }) => lineNumber >= start && lineNumber <= end);
}
