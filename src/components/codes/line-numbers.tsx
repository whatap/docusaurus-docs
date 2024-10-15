import { AnnotationHandler, InnerLine } from "codehike/code"
import styles from './styles.module.css'
import clsx from 'clsx'

export const lineNumbers: AnnotationHandler = {
  name: "line-numbers",
  Line: (props) => {
    const width = props.totalLines.toString().length + 0
    return (
      <div className={styles.flex}>
        <span
          className={clsx(styles.textright, styles.opacity50, styles.selectnone)}
          style={{ minWidth: `${width}ch` }}
        >
          {props.lineNumber}
        </span>
        <InnerLine merge={props} className={clsx(styles.flex_1, styles.pl_2)} />
      </div>
    )
  },
}