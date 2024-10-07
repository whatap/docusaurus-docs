// BlogPostPage/index.js
import React from 'react';
import { useTranslation } from '@docusaurus/theme-common';
import TranslationWarning from '../../components/TranslationWarning';

const BlogPostPage = ({ content }) => {
  const { metadata } = content;
  const { i18n } = useTranslation();

  // 포스트의 언어를 확인합니다.
  const hasTranslation = metadata.lang === i18n.currentLocale;

  return (
    <div>
      {!hasTranslation && <TranslationWarning />} {/* 번역이 없으면 경고 메시지 표시 */}
      <h1>{metadata.title}</h1>
      <div>{content}</div>
    </div>
  );
};

export default BlogPostPage;