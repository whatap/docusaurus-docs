import { AnnotationHandler, InnerLine, BlockAnnotation } from "codehike/code";
import styles from './styles.module.css';

export const diff: AnnotationHandler = {
  name: "diff",
  onlyIfAnnotated: true,
  transform: (annotation: BlockAnnotation) => {
    const color = annotation.query == "-" ? "#f85149" : "#3fb950"
    return [annotation, { ...annotation, name: "mark", query: color }]
  },
  Line: ({ annotation, ...props }) => (
    <>
      <div className={styles.annot}>
        {annotation?.query}
      </div>
      <InnerLine merge={props} />
    </>
  ),
}