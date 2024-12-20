import React, {memo} from 'react';
import {translate} from '@docusaurus/Translate';
import clsx from 'clsx'; // 추가
import {
  useVisibleBlogSidebarItems,
  BlogSidebarItemList,
} from '@docusaurus/plugin-content-blog/client';
import {NavbarSecondaryMenuFiller} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// 링크 변환 함수 추가
const convertLinkForLanguage = (link, currentLang) => {
  if (currentLang !== 'en-US' && currentLang !== 'ja-JP') {
    return link; // 기본 언어일 경우 변환하지 않음
  }

  // /blog/overview와 같은 링크를 /en/blog/overview로 변환
  const langPrefix = currentLang === 'en-US' ? '/en' : '/ja';
  // 기존 링크에서 /blog/overview 와 같은 경로를 찾아서 언어에 맞게 앞에 추가
  if (link.startsWith('/blog/')) {
    return langPrefix + link; // 예: /en/blog/overview
  }

  return link; // 다른 링크는 그대로 반환
};

const ListComponent = ({items}) => {
  return (
    <BlogSidebarItemList
      items={items}
      ulClassName="menu__list"
      liClassName="menu__list-item"
      linkClassName={clsx('menu__link', styles.menuLink)} // 추가
      // linkActiveClassName={styles.active}
      linkActiveClassName="menu__link--active"
    />
  );
};

function BlogSidebarMobileSecondaryMenu({sidebar}) {
  const sidebarData = require('../_meta.json'); // _meta.json 로드
  const items = useVisibleBlogSidebarItems(sidebar.items);

  // 데스크탑에서 사용한 getItemTitle 함수 추가
  const getItemTitle = (permalink) => {
    const item = items.find(
      (sideitem) => sideitem.permalink.replace(/(\/en|\/ja)/g, '') === permalink
    );
    return item ? item.title : permalink;
  };

  // 현재 언어를 가져오는 함수 (예: 'en-US', 'ja-JP')
  const currentLang = document.documentElement.lang;

  return (
    <ul className="menu__list">
      {sidebarData.map((category, index) => {
        // 'iflang' 클래스를 가진 카테고리 숨기기
        const isLangHidden = (category.className === 'iflang') 
          && (currentLang === 'en-US' || currentLang === 'ja-JP');

        // 조건에 맞으면 해당 카테고리를 숨김 처리
        if (isLangHidden) return null;

        return (
          <li key={index} className={clsx(category.className, styles.menuCategory)}>
            <div>
              {category.link ? (
                <Link
                  isNavLink
                  to={convertLinkForLanguage(category.link, currentLang)}
                  className="menu__link"
                  // activeClassName="menu__link--active"
                  >
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
            <ul>
              {category.items.map((item, itemIndex) => {
                // 'iflang' 클래스를 가진 항목 숨기기
                const isItemLangHidden = item.className === 'iflang' && (currentLang === 'en-US' || currentLang === 'ja-JP');
                
                // 조건에 맞으면 해당 항목을 숨김 처리
                if (isItemLangHidden) return null;

                return (
                  <li key={itemIndex} className={item.className ? styles[item.className] : ''}>
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
}

function BlogSidebarMobile(props) {
  return (
    <NavbarSecondaryMenuFiller
      component={BlogSidebarMobileSecondaryMenu}
      props={props}
    />
  );
}

export default memo(BlogSidebarMobile);