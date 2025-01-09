import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function expressDate() {
    const {frontMatter} = useDoc();
    const { i18n: {currentLocale} } = useDocusaurusContext();
    const lastUpdateDate = frontMatter.last_update.date;

    const formatDate = (date, locale) => {
        const parsedDate = new Date(date);
        const year = parsedDate.getFullYear();
        const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
        const day = parsedDate.getDate().toString().padStart(2, '0');
    
        if (locale === 'ko') {
            return `${year}년 ${month}월 ${day}일`;
        } else if (locale === 'ja') {
            return `${year}年${month}月${day}日`;
        } else if (locale === 'en') {
            const monthNames = [
                'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
            ];
            return `${monthNames[parsedDate.getMonth()]} ${day}, ${year}`;
        }
    };

    return (
        <p>{formatDate(lastUpdateDate, currentLocale)}</p>
    );
}