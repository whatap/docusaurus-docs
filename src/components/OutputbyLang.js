import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function OutputbyLang({ko, en, ja}) {
    const {
        i18n: {currentLocale},
    } = useDocusaurusContext();
    let outContent;

    if (currentLocale == 'ko') {
        outContent = ko;
    } else if (currentLocale == 'en') {
        outContent = en;
    } else if (currentLocale == 'ja') {
        outContent = ja;
    }
    const printCode = 'https://www.youtube.com/embed/' + outContent;
    return (
        <div class="video-container">
            <iframe 
                width="800" 
                height="500" 
                type="text/html" 
                border="none" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                src={printCode}
                >
            </iframe>
        </div>
    );
}