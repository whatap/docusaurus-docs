import React from 'react';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Stats,
    Highlight,
    ClearRefinements,
    RefinementList,
    Configure,
    Snippet,
    Pagination
} from 'react-instantsearch';
import Layout from '@theme/Layout';
import './style.css';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function App() {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    const lang = currentLocale; // 현재 페이지의 언어를 호출

    const docsURL = "https://docs.whatap.io"; // 문서 URL

    // MeiliSearch 클라이언트 설정
    const { searchClient } = instantMeiliSearch(
        'https://meilsearch.whatap.io',
        'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk',
        {
            placeholderSearch: false,
            finitePagination: true,
        }
    );
    
    const Hit = ({ hit }) => {
        // 검색 결과 데이터 셋으로부터 문서 경로를 만드는 함수
        const titles = [ hit.hierarchy_radio_lvl0, hit.hierarchy_radio_lvl1, hit.hierarchy_radio_lvl2, hit.hierarchy_radio_lvl3, hit.hierarchy_radio_lvl4, hit.hierarchy_radio_lvl5 ];
        const title = titles.filter(
            (element, i) => element !== null
        );
        const durl = hit.url.replace(docsURL, "").replace("#__docusaurus_skipToContent_fallback", "")
        return (
            <div key={hit.id}>
                <Link to={durl} target="_blank">
                    <h3>{title[0]}</h3>
                    {/* 문서 경로를 표시하는 단계 */}
                    <div className='hit-breadcrums'>
                        <div className="hit-name lvl0">
                            <Highlight attribute="hierarchy_lvl0" hit={hit} />
                        </div>
                        {hit.hierarchy_lvl1 && (
                            <div className="hit-name">
                                <Highlight attribute="hierarchy_lvl1" hit={hit} />
                            </div>
                        )}
                        {hit.hierarchy_lvl2 && (
                            <div className="hit-name">
                                <Highlight attribute="hierarchy_lvl2" hit={hit} />
                            </div>
                        )}
                        {hit.hierarchy_lvl3 && (
                            <div className="hit-name">
                                <Highlight attribute="hierarchy_lvl3" hit={hit} />
                            </div>
                        )}
                        {hit.hierarchy_lvl4 && (
                            <div className="hit-name">
                                <Highlight attribute="hierarchy_lvl4" hit={hit} />
                            </div>
                        )}
                        {hit.hierarchy_lvl5 && (
                            <div className="hit-name last">
                                <Highlight attribute="hierarchy_lvl5" hit={hit} />
                            </div>
                        )}
                    </div>
                </Link>
                {hit.content && (
                    <div className="hit-name">
                        <Snippet attribute="content" hit={hit} />
                    </div>
                )}
            </div>
        )
    }

    return (
        <Layout>
            <div className="ais-InstantSearch">
            <h1>
                {translate({
                    id: 'theme.SearchPage.emptyResultsTitle',
                    message: 'Search the documentation',
                    description: 'The search page title for empty query',
                })}
            </h1>
            <InstantSearch 
                indexName="whatap" // 문서 인덱스 이름
                searchClient={searchClient}
                routing={true}
                future={{
                    preserveSharedStateOnUnmount: true
                }}
                >
                <div className="left-panel">
                    <ClearRefinements />
                    <h2>Category</h2>
                    {/* 문서 카테고리를 표시하는 모듈 */}
                    <RefinementList 
                        searchable
                        attribute="hierarchy_lvl0" 
                        limit="50"
                        // transformItems={transformItems}
                    />
                    {/* 문서 검색 결과를 표시하는 모듈 */}
                    <Configure
                        hitsPerPage={20}
                        attributesToSnippet={['description:20']}
                        snippetEllipsisText={'...'}
                        filters={`lang=${lang} AND hierarchy_lvl0!=Documentation`}
                        // 필터를 통해 현재 페이지의 언어와 카테고리가 분류되지 않은 문서는 출력하지 않음
                    />
                    <Stats />
                </div>
                <div className='mobile-refine'>
                    <RefinementList 
                        attribute="hierarchy_lvl0" 
                        limit="10"
                        showMore={true}
                    />
                </div>
                <div className="right-panel">
                    <SearchBox />
                    <Pagination showLast={true} />
                    <Hits hitComponent={Hit} />
                    <Pagination showLast={true} />
                </div>
            </InstantSearch>
            </div>
        </Layout>
    );
}