// src/components/TranslationWarning.js
// import React from 'react';

// const TranslationWarning = () => (
//   <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
//       {syntheticTitle && (
//         <header>
//           <Heading as="h1">{syntheticTitle}</Heading>
//         </header>
//       )}
//       {frontMatter.isTranslationMissing && (
//         <Admonition type="warning" title="Not translated">
//           This page is currently being translated. We will complete the translation as soon as possible.
//         </Admonition>
//       )}
//       <MDXContent>{children}</MDXContent>
//   </div>
// );

// export default TranslationWarning;

// src/components/TranslationWarning.js
import React from 'react';
import clsx from 'clsx'; // clsx가 사용되는 경우 추가
import { Admonition } from '@docusaurus/theme-common'; // Admonition 컴포넌트 가져오기

const TranslationWarning = () => (
  <div className={clsx('translation-warning')}>
    <Admonition type="warning" title="Not Translated">
      This page is currently being translated. We will complete the translation as soon as possible.
    </Admonition>
  </div>
);

export default TranslationWarning;