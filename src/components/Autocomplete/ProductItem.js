import React, { createElement } from 'react';
import Link from '@docusaurus/Link';
import {
    Highlight,
    Snippet,
} from 'react-instantsearch';

export function ProductItem({ hit, components }) {
    const docsURL = "https://docs.whatap.io";
    
    const titles = [ hit.hierarchy_radio_lvl0, hit.hierarchy_radio_lvl1, hit.hierarchy_radio_lvl2, hit.hierarchy_radio_lvl3, hit.hierarchy_radio_lvl4, hit.hierarchy_radio_lvl5 ];
    const title = titles.filter(
        (element, i) => element !== null
    );
    const durl = hit.url.replace(docsURL, "").replace("#__docusaurus_skipToContent_fallback", "")

    return (
        <div className="aa-ItemContent">
            <Link to={durl} target="_blank">
                <div className="aa-ItemTitle">
                    <div key={hit.id}>
                            <h3>{title[0]}</h3>
                            <div className='hit-breadcrums'>
                                <span className="hit-name lvl0">
                                    <components.Highlight attribute="hierarchy_lvl0" hit={hit} />
                                </span>
                                {hit.hierarchy_lvl1 && (
                                    <span className="hit-name">
                                        <components.Highlight attribute="hierarchy_lvl1" hit={hit} />
                                    </span>
                                )}
                                {hit.hierarchy_lvl2 && (
                                    <span className="hit-name">
                                        <components.Highlight attribute="hierarchy_lvl2" hit={hit} />
                                    </span>
                                )}
                                {hit.hierarchy_lvl3 && (
                                    <span className="hit-name">
                                        <components.Highlight attribute="hierarchy_lvl3" hit={hit} />
                                    </span>
                                )}
                                {hit.hierarchy_lvl4 && (
                                    <span className="hit-name">
                                        <components.Highlight attribute="hierarchy_lvl4" hit={hit} />
                                    </span>
                                )}
                                {hit.hierarchy_lvl5 && (
                                    <span className="hit-name last">
                                        <components.Highlight attribute="hierarchy_lvl5" hit={hit} />
                                    </span>
                                )}
                            </div>
                        {hit.content && (
                            <div className="content">
                                <components.Snippet attribute="content" hit={hit} />
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}