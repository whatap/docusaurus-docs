import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import whatapLocale from './whatap-locale.json';
import whatapReport from './whatap-report.json';
import entraLocale from './msentraid.json';

function isSplittableArray(input, delimiter = ',') {
    // Check if input is a string
    if (typeof input !== 'string') {
        return false;
    }

    // Split the string using the delimiter
    const splitArray = input.split(delimiter);

    // Check if the split resulted in more than one element
    return splitArray.length > 1;
}

const ReplacementLocaleText = ({sid, className, anchor, replace, type, days, report, entra}) => {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    try {
        if (report) {
            let oText = whatapReport[sid][`${currentLocale}`];
            return (
                <span class={className} id={anchor}>{oText}</span>
            );
        } else if (entra) {
            let oText = entraLocale[sid][`${currentLocale}`];
            return (
                <span class={className} id={anchor}>{oText}</span>
            );
        } else if (isSplittableArray(sid)) {
            const sidArray = sid.split(",");
            let oText = "";
    
            for (let i=0;i<sidArray.length;i++) {
                oText += whatapLocale[sidArray[i]][`${currentLocale}`].trim() + " ";
            }
            const uiText = oText.trim();
            return (
                <span class={className} id={anchor}>{uiText}</span>
            );
        } else {
            let oText;
            if (type) {
                // console.log(sid, '222222');
                let oType = whatapLocale[`${type}`][`${currentLocale}`];
                oText = whatapLocale[sid][`${currentLocale}`].replace(/(\{type\}|\{object\}|\{category\})/g, oType)
                if (replace == "({count})") {
                    oText = oText.replace(replace, '(N)').trim();
                }
            } else if (replace) {
                if (replace === "noSpace") {
                    oText = whatapLocale[sid][`${currentLocale}`].replace('&nbsp;', ' ');
                } else if (replace === "br") {
                    oText = whatapLocale[sid][`${currentLocale}`].replace('</br>', ' ').replace('\n', '');
                } else if (replace == "ITM06005") {
                    let oType = whatapLocale["ITM06005"][`${currentLocale}`];
                    oText = whatapLocale[sid][`${currentLocale}`].replace('{type}', oType)
                } else if (replace == "horizontal" || replace == "vertical") {
                    let oType = whatapLocale[`${replace}`][`${currentLocale}`];
                    oText = whatapLocale[sid][`${currentLocale}`].replace('{mode}', oType)
                } else if (replace === "ms") {
                oText = whatapLocale[sid][`${currentLocale}`].replace('{unit}', replace)
            } else {
                    oText = whatapLocale[sid][`${currentLocale}`].replace(replace, '').trim();
                }
            } else {
                oText = whatapLocale[sid][`${currentLocale}`];
            }
            if (sid == "TTL08288") {
                oText = whatapLocale[sid][`${currentLocale}`].replace('{n}', replace);
            }
            if (sid == "BTN07717") {
                oText = whatapLocale[sid][`${currentLocale}`].replace('{days}', days);
            }
            if (sid == "TTL07769") {
                oText = whatapLocale[sid][`${currentLocale}`].replace('({count})', '').trim();
            }
            if (sid == "TTL06865") {
                oText = whatapLocale[sid][`${currentLocale}`].toUpperCase();
            }
            if (sid == "hitmap" && currentLocale == "en") {
                // 첫글자 제외 다른 문자 소문자로 변경
                oText = whatapLocale[sid][`${currentLocale}`].substring(0,1) + whatapLocale[sid][`${currentLocale}`].substring(1).toLowerCase();
            }
            const uiText = oText;
            return (
                <span class={className} id={anchor}>{uiText}</span>
            );
        }
    } catch(e) {
        console.log(e, sid);
    }
}

export default ReplacementLocaleText;