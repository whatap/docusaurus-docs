import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import koLocale from './ko.json';
import enLocale from './en.json';
import jaLocale from './ja.json';
import whatapReport from './whatap-report.json';
import entraLocale from './msentraid.json';

function isSplittableArray(input, delimiter = ',') {
    if (typeof input !== 'string') {
        return false;
    }
    return input.includes(delimiter);
}

const ReplacementLocaleText = ({sid, className, anchor, replace, type, days, report, entra}) => {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    let whatapLocale;
    switch (currentLocale) {
        case "ko":
            whatapLocale = koLocale;
            break;
        case "en":
            whatapLocale = enLocale;
            break;
        case "ja":
            whatapLocale = jaLocale;
    }
    try {
        let oText = "";

        if (report) {
            oText = whatapReport[sid]?.[currentLocale] || "";
        } else if (entra) {
            oText = entraLocale[sid]?.[currentLocale] || "";
        } else if (isSplittableArray(sid)) {
            const sidArray = sid.split(",");
            oText = sidArray.map(s => whatapLocale[s]?.trim() || "").join(" ").trim();
        } else {
            if (type) {
                const oType = whatapLocale[type] || "";
                oText = whatapLocale[sid]?.replace(/\{type\}|\{object\}|\{category\}/g, oType) || "";
                if (replace === "({count})") {
                    oText = oText.replace(replace, '(N)').trim();
                }
            } else if (replace) {
                switch (replace) {
                    case "noSpace":
                        oText = whatapLocale[sid]?.replace('&nbsp;', ' ') || "";
                        break;
                    case "br":
                        oText = whatapLocale[sid]?.replace('</br>', ' ').replace('\n', '') || "";
                        break;
                    case "ITM06005":
                    case "horizontal":
                    case "vertical":
                        const modeType = whatapLocale[replace] || "";
                        oText = whatapLocale[sid]?.replace('{type}', modeType) || "";
                        break;
                    case "ms":
                        oText = whatapLocale[sid]?.replace('{unit}', replace) || "";
                        break;
                    default:
                        oText = whatapLocale[sid]?.replace(replace, '').trim() || "";
                }
            } else {
                oText = whatapLocale[sid] || "";
            }

            switch (sid) {
                case "TTL08288":
                    oText = whatapLocale[sid]?.replace('{n}', replace) || "";
                    break;
                case "BTN07717":
                    oText = whatapLocale[sid]?.replace('{days}', days) || "";
                    break;
                case "TTL07769":
                    oText = whatapLocale[sid]?.replace('({count})', '').trim() || "";
                    break;
                case "TTL06865":
                    oText = whatapLocale[sid]?.toUpperCase() || "";
                    break;
                case "hitmap":
                    if (currentLocale === "en") {
                        oText = whatapLocale[sid]?.[0] + whatapLocale[sid]?.substring(1).toLowerCase() || "";
                    }
                    break;
            }
        }

        return <span className={className} id={anchor}>{oText}</span>;

    } catch (e) {
        console.error(`Error rendering locale text for SID: ${sid}`, e);
        return null;
    }
};

export default ReplacementLocaleText;
