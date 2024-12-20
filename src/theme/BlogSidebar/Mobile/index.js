import React, { memo, useState, useEffect } from 'react';
import { translate } from '@docusaurus/Translate';
import clsx from 'clsx';
import { useVisibleBlogSidebarItems } from '@docusaurus/plugin-content-blog/client';
import { NavbarSecondaryMenuFiller } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const convertLinkForLanguage = (link, currentLang) => {
  if (currentLang !== 'en-US' && currentLang !== 'ja-JP') {
    return link; // 기본 언어
  }

  const langPrefix = currentLang === 'en-US' ? '/en' : '/ja';
  if (link.startsWith('/blog/')) {
    return langPrefix + link; // 예: /en/blog/overview
  }

  return link;
};

const BlogSidebarMobileSecondaryMenu = ({ sidebar }) => {
  const [currentLang, setCurrentLang] = useState(''); // 현재 언어 상태

  useEffect(() => {
    setCurrentLang(document.documentElement.lang); // HTML lang 속성 가져오기
  }, []);

  const sidebarData = require('../_meta.json');
  const items = useVisibleBlogSidebarItems(sidebar.items);

  const getItemTitle = (permalink) => {
    const item = items.find(
      (sideitem) => sideitem.permalink.replace(/(\/en|\/ja)/g, '') === permalink
    );
    return item ? item.title : permalink;
  };

  return (
    <ul className="menu__list">
      {sidebarData.map((category, index) => {
        const isLangHidden =
          category.className === 'iflang' &&
          (currentLang === 'en-US' || currentLang === 'ja-JP');

        if (isLangHidden) return null;

        return (
          <li key={index} className={clsx(category.className, styles.menuCategory)}>
            <div>
              {category.className === 'iflink' && (currentLang === 'en-US' || currentLang === 'ja-JP') ? (
                // 다국어 조건에서 iflink > div > a 비활성화 처리
                <div style={{ pointerEvents: 'none', color: 'gray', cursor: 'not-allowed' }}>
                  {category.link ? (
                    <Link
                      isNavLink
                      to={convertLinkForLanguage(category.link, currentLang)}
                      className="menu__link">
                      {category.tr_code ? (
                        translate({
                          id: `${category.tr_code}`,
                        })
                      ) : (
                        category.label
                      )}
                    </Link>
                  ) : (
                    <span>{category.label}</span>
                  )}
                </div>
              ) : (
                // 비활성화되지 않은 링크 처리
                <div>
                  {category.link ? (
                    <Link
                      isNavLink
                      to={convertLinkForLanguage(category.link, currentLang)}
                      className="menu__link">
                      {category.tr_code ? (
                        translate({
                          id: `${category.tr_code}`,
                        })
                      ) : (
                        category.label
                      )}
                    </Link>
                  ) : (
                    <span>{category.label}</span>
                  )}
                </div>
              )}
            </div>
            <ul>
              {category.items.map((item, itemIndex) => {
                const isItemLangHidden =
                  item.className === 'iflang' &&
                  (currentLang === 'en-US' || currentLang === 'ja-JP');

                if (isItemLangHidden) return null;

                return (
                  <li
                    key={itemIndex}
                    className={item.className ? styles[item.className] : ''}>
                    <Link
                      isNavLink
                      to={convertLinkForLanguage(item.link, currentLang)}
                      className="menu__link"
                      activeClassName="menu__link--active">
                      {getItemTitle(item.link)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

function BlogSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default memo(BlogSidebarMobile);