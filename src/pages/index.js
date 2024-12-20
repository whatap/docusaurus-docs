import React, {useState, createElement} from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';
import {
    meilisearchAutocompleteClient,
    getMeilisearchResults,
} from '@meilisearch/autocomplete-client';
import '@algolia/autocomplete-theme-classic';
import { Autocomplete } from '@site/src/components/Autocomplete/Autocomplete.js';
import { ProductItem } from '@site/src/components/Autocomplete/ProductItem.js';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx'; 
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import * as Icons from '@site/src/components/Autocomplete/icons.js';

const searchClient = meilisearchAutocompleteClient({
    url: 'https://meilsearch.whatap.io',
    apiKey: 'dgoMBc2t6fVzILDGqhh63uBXACGOmJbKNnE_Xv8_Hqk',
})

function App() {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    const lang = currentLocale;

    return (
        <div className={styles.appcontainer}>
            <Autocomplete
                openOnFocus={false}
                getSources={({ query }) => [
                    {
                        sourceId: 'products',
                        getItems() {
                            const description = getMeilisearchResults({
                                searchClient: searchClient,
                                queries: [
                                    {
                                        indexName: 'whatap',
                                        query,
                                        params: {
                                            hitsPerPage: 10,
                                            attributesToSnippet: ['description:10'],
                                            snippetEllipsisText: '...',
                                            filters: [`lang=${lang} AND hierarchy_lvl0!=Documentation`],
                                        },
                                    }
                                ],
                            })
                            return description
                        },
                        templates: {
                            item({ item, components }) {
                                return <ProductItem hit={item} components={components}/>;
                            },
                        },
                    },
                ]}
                onSubmit={(event) => {
                    // Code to run when the form submits
                    const Searchparam = event.state.query;
                    if (Searchparam) {
                        const searchUrl = `search?whatap%5Bquery%5D=${encodeURIComponent(Searchparam)}`;
                        window.location.href = searchUrl;
                    }
                }}
                onStateChange={(state) => {
                    // 검색 결과 목록에서 Enter를 입력하면 해당 item으로 이동하는 코드
                    const curid = state.state.activeItemId !== null ? state.state.activeItemId : false;
                    if (curid !== false) {
                        const activeUrl = state.state.collections[0].items[curid].url;
                        const curOrigin = window.location.origin;
                        const goUrl = activeUrl.replace("https://docs.whatap.io", curOrigin);
                        window.onkeydown = (e) => {
                            if (e.keyCode === 13) {
                                window.location.href = goUrl;
                            }
                        }
                    }
                }}
            />
        </div>
    );
}

function Step({children, order}) {
    return (
        <div className={clsx('guide-col d-flex', styles.flexcolumn)}>
            <div className={styles.innercontent}>
                <img src={useBaseUrl(`/img/number-0${order}.png`)} className={styles.iconumber} />
                {children}
            </div>
        </div>
    )
}
function RightArrow() {
    return (
        <div className={styles.rightarrowcontainer}>
            <svg className={styles.rightarrow} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,50 L0,100"></path></svg>
            <svg className={styles.downarrow} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 0 L50 100 L100 0"></path></svg>
        </div>
    )
}
function Description({children}) {
    return (
        <p className={clsx(styles.textleft, styles.small)}>
            {children}
        </p>
    )
}
function ThereeSteps() {
    return (
        <section className={clsx(styles.gettingStart, styles.guide, styles.justifycontentcenter)}>
            <Step order={1}>
                <Link to="quick-guide#account" className={styles.guidelink}>
                    <Heading as="h5" className={styles.inline}>
                        {translate({
                            id: "index.pages.register",
                            message: "회원 가입"
                        })}
                    </Heading>
                    <Description>
                        {translate({
                            id: "index.pages.register.desc",
                            message: "와탭 모니터링 서비스를 이용하려면 회원 가입을 진행하세요. 15일간 무료 체험할 수 있습니다."
                        })}
                    </Description>
                </Link>
            </Step>
            <RightArrow/>
            <Step order={2}>
                <Link to="quick-guide#cproject" className={styles.guidelink}>
                    <Heading as="h5" className={styles.inline}>
                        {translate({
                            id: "index.pages.project",
                            message: "프로젝트 생성"
                        })}
                    </Heading>
                    <Description>
                        {translate({
                            id: "index.pages.project.desc",
                            message: "프로젝트를 생성하고 액세스 키를 발급 받으세요."
                        })}
                    </Description>
                </Link>
            </Step>
            <RightArrow/>
            <Step order={3}>
                <Link to="quick-guide#install" className={styles.guidelink}>
                    <Heading as="h5" className={styles.inline}>
                        {translate({
                            id: "index.pages.agentInstall",
                            message: "에이전트 설치"
                        })}
                    </Heading>
                    <Description>
                        {translate({
                            id: "index.pages.agentInstall.desc",
                            message: "모니터링 대상에 에이전트를 설치하세요."
                        })}
                    </Description>
                </Link>
            </Step>
            <RightArrow/>
            <Step order={4}>
                <Link to="quick-guide#dashboard" className={styles.guidelink}>
                    <Heading as="h5" className={styles.inline}>
                        {translate({
                            id: "index.pages.viewDashboard",
                            message: "대시보드 조회하기"
                        })}
                    </Heading>
                    <Description>
                        {translate({
                            id: "index.pages.viewDashboard.desc",
                            message: "에이전트 설치 후 데이터가 와탭 서버로 전달되면 대시보드 메뉴에서 프로젝트의 전체 현황을 실시간으로 조회할 수 있습니다."
                        })}
                    </Description>
                </Link>
            </Step>
        </section>
    )
}

function FlexCard({icons, product, type, url, children, status}) {
    if (type === 'document') {
        const IconComponent = Icons[icons]; 

        return (
            <div className={styles.flexProd}>
                <Link to={url} className={styles.alignDocument}>
                    <div className={styles.document}>
                        <div className={styles.logoDocu}>
                            {IconComponent ? (
                                <IconComponent className={styles.doculogo} />
                            ) : (
                                <img src={useBaseUrl(`/img/${icons}`)} className={styles.doculogo} />
                            )}
                        </div>
                        <div className={styles.title}>{children}</div>
                    </div>
                </Link>
            </div>
        )
    }
    return (
        <div className={styles.flexProd}>
            {status ? (
                <div className={styles.beta}>{status}</div>
            ) : null}
            <Link to={url} className={styles.alignCenter}>
                <div className={styles.product}>
                    <div className={styles.logo}>
                        <img src={useBaseUrl(`/img/${icons}`)} />
                    </div>
                    <div className={styles.desc}>
                        <div className={styles.title}>{product}</div>
                        <div className={styles.type}><code className={clsx(`${type}`, styles.tag)}>{type}</code></div>
                        <Description>{children}</Description>
                    </div>
                </div>
            </Link>
        </div>
    )
}

function RecommendedDoc() {
    const { i18n: {currentLocale} } = useDocusaurusContext();
    if (currentLocale == "ko") {
        return (
            <>
                <Link to={useBaseUrl("server/server-inventory-map")} className={clsx(styles.white, styles.underline)}>서버 인벤토리 맵</Link>,&nbsp;
                <Link to={useBaseUrl("kubernetes/node-map")} className={clsx(styles.white, styles.underline)}>노드 맵</Link>,&nbsp;
                <Link to={useBaseUrl("mssql/monitoring-intro")} className={clsx(styles.white, styles.underline)}>SQL Server V2</Link>,&nbsp;
                <Link to={useBaseUrl("java/linked-projects")} className={clsx(styles.white, styles.underline)}>APM: 연계 프로젝트 관리</Link>,&nbsp;
                <Link to={useBaseUrl("postgresql/cloudsettings")} className={clsx(styles.white, styles.underline)}>DB: 클라우드 설정</Link>
            </>
        );
    } else if (currentLocale == "en") {
        return (
            <>
                <Link to={useBaseUrl("server/server-inventory-map")} className={clsx(styles.white, styles.underline)}>Server inventory map</Link>,&nbsp;
                <Link to={useBaseUrl("kubernetes/node-map")} className={clsx(styles.white, styles.underline)}>Node Map</Link>,&nbsp;
                <Link to={useBaseUrl("mssql/monitoring-intro")} className={clsx(styles.white, styles.underline)}>SQL Server V2</Link>,&nbsp;
                <Link to={useBaseUrl("java/linked-projects")} className={clsx(styles.white, styles.underline)}>APM: Correlated project management</Link>,&nbsp;
                <Link to={useBaseUrl("postgresql/cloudsettings")} className={clsx(styles.white, styles.underline)}>DB: Cloud Settings</Link>
            </>
        );
    } else if (currentLocale == "ja") {
        return (
            <>
                <Link to={useBaseUrl("server/server-inventory-map")} className={clsx(styles.white, styles.underline)}>サーバーインベントリマップ</Link>,&nbsp;
                <Link to={useBaseUrl("kubernetes/node-map")} className={clsx(styles.white, styles.underline)}>ノードマップ</Link>,&nbsp;
                <Link to={useBaseUrl("mssql/monitoring-intro")} className={clsx(styles.white, styles.underline)}>SQL Server V2</Link>,&nbsp;
                <Link to={useBaseUrl("java/linked-projects")} className={clsx(styles.white, styles.underline)}>APM: 連携プロジェクト管理</Link>,&nbsp;
                <Link to={useBaseUrl("postgresql/cloudsettings")} className={clsx(styles.white, styles.underline)}>DB: クラウド設定</Link>
            </>
        );
    }
}

export default function pages() {

    return (
        <Layout>

        <Head>
            <meta name="robots" content="noindex, nofollow"/>
            <title>
                {translate({
                    id: "index.pages.metaTitle",
                    message: "실시간 옵저버빌리티 플랫폼 | WhaTap Docs"
                })}
            </title>
        </Head>
        <article className={styles.main}>
            <div className={styles.homehero}>
                <div className={styles.headtitle}>
                    <h1 className={styles.frontheading}>
                        {translate({
                            id: "index.pages.welcome.para",
                            message: "와탭 Docs 페이지에 오신 것을 진심으로 환영합니다."
                        })}
                    </h1>
                </div>
                <App />
                <div className={clsx(styles.white, styles.textleft, styles.newdoc)}>
                    <b>
                        {
                            translate({
                                id: "index.pages.welcome.recommend",
                                message: "추천 문서: "
                            })
                        }
                    </b>
                    
                    <RecommendedDoc/>
                </div>
            </div>

            <ThereeSteps />

            <section className={clsx('row nav-tiles', styles.justifycardcontent)}>

                <Heading as="h2" className={styles.textcenter}>
                    {translate({
                        id: "index.pages.section.gettingStart",
                        message: "시작하기 전에"
                    })}
                </Heading>

                <div className={styles.flexContainer}>

                    <FlexCard icons="WhaTaplogo" type="document" url="whatap-overview" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.gettingStart.whatapOverview",
                                message: "와탭 모니터링 서비스"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.gettingStart.whatapOverview.desc",
                                message: "다양한 플랫폼을 아우르는 통합 모니터링"
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Support" type="document" url="support-env" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.gettingStart.support",
                                message: "지원 환경"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.gettingStart.support.desc",
                                message: "서비스를 이용하기 전에 지원 환경을 확인하세요."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Home" type="document" url="main-ui-intro-v2" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.gettingStart.home",
                                message: "홈 화면 안내"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.gettingStart.home.desc",
                                message: "서비스 초기 화면 사용 방법을 안내합니다."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Mobile" type="document" url="mobile-app" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.gettingStart.mobileApp",
                                message: "모바일 앱"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.gettingStart.mobileApp.desc",
                                message: "모바일 앱 사용 방법을 안내합니다."
                            })}
                        </Description>
                    </FlexCard>

                </div>
            </section>
            <section className={clsx('row nav-tiles', styles.justifycardcontent)}>

                <Heading as="h2" className={styles.textcenter} id="shortcut-product">
                    {translate({
                        id: "index.pages.section.product",
                        message: "상품"
                    })}
                </Heading>
                
                <div className={styles.flexContainer}>

                    <FlexCard icons="index-icon/product-java-l.svg" product="Java" type="Application" url="java/introduction">
                        {translate({
                            id: "index.pages.section.product.java",
                            message: "WAS, 배치 애플리케이션 등 JVM 환경에서 동작하는 모든 애플리케이션에 적용할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-nodejs-l.svg" product="Node.js" type="Application" url="nodejs/introduction">
                        {translate({
                            id: "index.pages.section.product.nodejs",
                            message: "비동기 기반 트랜잭션 분석을 통해 단일 스레드 플로우를 10초마다 분석해 병목구간이나 에러 내역을 파악할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-php-l.svg" product="PHP" type="Application" url="php/introduction">
                        {translate({
                            id: "index.pages.section.product.php",
                            message: "PHP 8.3, Alpine Linux까지 적용 가능하며, 트레이스 상에서 SQL, HTTP 호출, Redis 호출 정보를 확인할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-python-l.svg" product="Python" type="Application" url="python/introduction">
                        {translate({
                            id: "index.pages.section.product.python",
                            message: "웹 프레임워크, 서버, 배치 등 주요 애플리케이션에 적용 가능하며, DB 쿼리, 외부 호출을 추적해 지연 구간을 식별할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-dotnet-l.svg" product=".NET" type="Application" url="dotnet/introduction">
                        {translate({
                            id: "index.pages.section.product.dotnet",
                            message: ".NET 프레임워크 4.5를 대응해 .NET 기반의 IIS, Console, 서비스, 윈도우 응용 프로그램을 모니터링합니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-go-l.svg" product="Go" type="Application" url="golang/introduction">
                        {translate({
                            id: "index.pages.section.product.go",
                            message: "Go API를 이용해 Go 애플리케이션의 웹 요청 및 응답 트랜잭션, 일반 단위 트랜잭션, SQL, HTTP 호출 등을 추적할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-server-l.svg" product="Server" type="Server" url="server/introduction">
                        {translate({
                            id: "index.pages.section.product.server",
                            message: "물리 서버 및 클라우드, 스케일 아웃 환경에도 적용 가능하며, 대규모 자원 및 사용률이 높은 위험 자원의 모니터링, 인벤토리 관리를 지원합니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-kubernetes-l.svg" product="Kubernetes" type="Container" url="kubernetes/introduction">
                        {translate({
                            id: "index.pages.section.product.k8s",
                            message: "쿠버네티스 클러스터, 노드, 애플리케이션, 로그를 한번에 한눈에 확인할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-postgresql-l.svg" product="PostgreSQL" type="Database" url="postgresql/monitoring-intro">
                        {translate({
                            id: "index.pages.section.product.postgresql",
                            message: "성능지표 및 SQL, Lock, Slow SQL을 모니터링하고 추이 분석 및 비교할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-oracle-l.svg" product="Oracle" type="Database" url="oracle/monitoring-intro">
                        {translate({
                            id: "index.pages.section.product.oracle",
                            message: "성능 지표 및 SQL, Lock, 병렬 쿼리 정보를 모니터링하고 추이 분석 및 비교할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-oracle-l.svg" product="Oracle Pro" type="Database" url="oracle-pro/monitoring-intro">
                        {translate({
                            id: "index.pages.section.product.oraclePro",
                            message: "데이터베이스 서버의 메모리에 직접 접근하여 부하없이 성능정보를 1초에 수십번까지 모니터링할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-mysql-l.svg" product="MySQL" type="Database" url="mysql/monitoring-intro">
                        {translate({
                            id: "index.pages.section.product.mysql",
                            message: "MySQL, MariaDB의 성능 지표 및 SQL, Lock, Slow SQL을 모니터링하고 추이 분석 및 비교할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-mssql-l.svg" product="SQL Server" type="Database" url="mssql/monitoring-intro">
                        {translate({
                            id: "index.pages.section.product.mssql",
                            message: "성능 지표 및 SQL, Lock 정보를 모니터링하고 추이 분석 및 비교할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-tibero-l.svg" product="Tibero" type="Database" url="tibero/monitoring-intro">
                        {translate({
                            id: "index.pages.section.product.tibero",
                            message: "성능 지표 및 SQL, Lock, 병렬 쿼리 정보를 모니터링하고 추이 분석 및 비교할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-cubrid-l.svg" product="CUBRID" type="Database" url="cubrid/monitoring-intro">
                        {translate({
                            id: "index.pages.section.product.cubrid",
                            message: "성능 지표 및 SQL, Lock, 병렬 쿼리 정보를 모니터링하고 추이 분석 및 비교할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-altibase-l.svg" product="Altibase" type="Database" url="altibase/monitoring-intro">
                        {translate({
                            id: "index.pages.section.product.altibase",
                            message: "성능 지표 및 SQL, Lock, 병렬 쿼리 정보를 모니터링하고 추이 분석 및 비교할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-redis-l.svg" product="Redis" type="Database" url="redis/monitoring-intro">
                        {translate({
                            id: "index.pages.section.product.redis",
                            message: "성능 지표 모니터링과 추이 분석 및 비교할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-mongodb-l.svg" product="Mongodb" type="Database" url="mongodb/monitoring-intro">
                        {translate({
                            id: "index.pages.section.product.mongodb",
                            message: "성능 지표 모니터링과 추이 분석 및 비교할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-url-l.svg" product="URL" type="URL" url="url/url-intro">
                        {translate({
                            id: "index.pages.section.product.url",
                            message: "운영 중인 사이트의 최종 사용자 입장에서 HTTP 상태 코드로 접속 문제를 자동으로 확인할 수 있습니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-rum-l.svg" product="Browser" type="Browser" url="browser">
                        {translate({
                            id: "index.pages.section.product.browser",
                            message: "브라우저 애플리케이션에 접속한 최종 사용자의 상호 작용에 관한 성능을 모니터링하고 분석합니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-aws-l.svg" product="Amazon CloudWatch" type="Cloud" url="amazon-cloudwatch/install-agent">
                        {translate({
                            id: "index.pages.section.product.awsCloudWatch",
                            message: "Amazon CloudWatch API를 통해 주기적으로 메트릭을 검색하고 저장합니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-aws-ecs-l.svg" product="Amazon ECS" type="Cloud" url="amazon-ecs/introduction">
                        {translate({
                            id: "index.pages.section.product.awsEcs",
                            message: "META API 및 cgroup 디렉토리를 통해 도커 컨테이너별 자원 사용량을 실시간으로 수집합니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-aws-log-l.svg" product="AWS Log" type="Cloud" url="aws-log/introduction">
                        {translate({
                            id: "index.pages.section.product.awsLog",
                            message: "AWS Resource에서 생성되어 AWS S3, AWS CloudWatch Log Group에 저장되는 로그들을 수집, 저장합니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-azure-l.svg" product="Azure Monitor" type="Cloud" url="azure/install-agent">
                        {translate({
                            id: "index.pages.section.product.azure",
                            message: "Azure Monitor API를 통해 주기적으로 메트릭을 검색하고 저장합니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-naver-l.svg" product="Naver Cloud Monitoring" type="Cloud" url="ncloud/install-agent">
                        {translate({
                            id: "index.pages.section.product.ncloud",
                            message: "Naver Cloud Monitoring API를 통해 주기적으로 메트릭을 검색하고 저장합니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-oracle-l.svg" product="Oracle Cloud Monitor" type="Cloud" url="oracle-cloud/install-agent">
                        {translate({
                            id: "index.pages.section.product.oci",
                            message: "Oracle Cloud Monitor API를 통해 주기적으로 메트릭을 검색하고 저장합니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-npm-l.svg" product="Network Performance Monitoring" type="Network" url="npm/introduction">
                        {translate({
                            id: "index.pages.section.product.network",
                            message: "프로세스의 네트워크 통신 정보를 가시화하여 성능 분석 및 장애 파악에 사용합니다."
                        })}
                    </FlexCard>

                    <FlexCard icons="index-icon/product-feature-l.svg" product="Feature Project" type="Features" url="features/introduction" status="Beta">
                        {translate({
                            id: "index.pages.section.product.feature",
                            message: "기존 모니터링 제품을 사용자가 모니터링하고자 하는 소프트웨어에 맞게 재포장해 최적화된 모니터링 솔루션을 제공합니다."
                        })}
                    </FlexCard>

                </div>
            </section>

            <section className={clsx('row nav-tiles', styles.justifycardcontent)}>

                <Heading as="h2" className={styles.textcenter}>
                    {translate({
                        id: "index.pages.section.management",
                        message: "관리"
                    })}
                </Heading>
                
                <div className={styles.flexContainer}>

                    <FlexCard icons="Account" type="document" url="account/account-manage" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.management.account",
                                message: "계정 관리"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.management.account.desc",
                                message: "회원 가입을 통해 계정을 생성하고 관리하세요."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Multifactor" type="document" url="account/mfa" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.management.multiFactor",
                                message: "멀티팩터 인증"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.management.multiFactor.desc",
                                message: "멀티팩터 인증을 통해 보안을 강화하세요."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Multifactor" type="document" url="account/sso" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.management.sso",
                                message: "SSO 계정 연동"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.management.sso.desc",
                                message: "하나의 아이디와 비밀번호를 이용해 간편하게 로그인하세요."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Billing" type="document" url="management/billing" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.management.billing",
                                message: "결제"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.management.billing.desc",
                                message: "트라이얼로 무료로 시작하고 필요한 만큼 이용하세요."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Project" type="document" url="project/project-manage" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.management.project",
                                message: "프로젝트 관리"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.management.project.desc",
                                message: "프로젝트는 모니터링 단위입니다. 프로젝트에 대해 알아보세요."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="IntegratedManage" type="document" url="project/integrated-manage" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.management.organize",
                                message: "통합 관리"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.management.organize.desc",
                                message: "조직과 그룹, 프로젝트를 체계적으로 관리할 수 있습니다."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Tools" type="document" url="management/maintenance" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.management.maintenance",
                                message: "정비 계획"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.management.maintenance.desc",
                                message: "등록한 작업 시간에 알림을 일시 중지할 수 있습니다."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="UserBehavior" type="document" url="management/userbehavior" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.management.userbehavior",
                                message: "사용자 행위"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.management.userbehavior.desc",
                                message: "프로젝트에서 수행 중인 사용자의 행동을 추적할 수 있습니다."
                            })}
                        </Description>
                    </FlexCard>
                
                </div>
            </section>

            <section className={clsx('row nav-tiles', styles.justifycardcontent)}>

                <Heading as="h2" className={styles.textcenter}>
                    {translate({
                        id: "index.pages.section.updates",
                        message: "최신 업데이트"
                    })}
                </Heading>
                
                <div className={styles.flexContainer}>

                    <FlexCard icons="Newfunc" type="document" url="blog/overview" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.updates.news",
                                message: "새로운 기능"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.updates.news.desc",
                                message: "새롭게 출시된 기능을 확인해보세요."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Notes" type="document" url="release-notes" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.updates.release",
                                message: "릴리스 노트"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.updates.release.desc",
                                message: "최신 릴리스 정보를 빠르게 확인하세요."
                            })}
                        </Description>
                    </FlexCard>

                </div>
            </section>

            <section className={clsx('row nav-tiles', styles.justifycardcontent)}>

                <Heading as="h2" className={styles.textcenter} >
                    <Link to="reference" className={styles.link} id="reference-link">
                    {translate({
                        id: "index.pages.section.reference",
                        message: "참조"
                    })}
                    </Link>
                </Heading>
                
                <div className={styles.flexContainer}>

                    <FlexCard icons="API" type="document" url="openapi-spec" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.reference.openApi",
                                message: "Open API"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.reference.openApi.desc",
                                message: "Open API를 통해 모니터링 데이터를 추출할 수 있습니다."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Proxy" type="document" url="software-proxy" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.reference.proxy",
                                message: "소프트웨어 프록시"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.reference.proxy.desc",
                                message: "외부망 접근을 차단하고 단일 채널로 와탭에 데이터를 전송할 수 있습니다."
                            })}
                        </Description>
                    </FlexCard>

                    {/* <FlexCard icons="Docs" type="document" url="welcome-to-whatapdocs" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.reference.docs",
                                message: "기술 문서 안내"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.reference.docs.desc",
                                message: "WhaTap Docs 페이지 활용법을 안내합니다."
                            })}
                        </Description>
                    </FlexCard> */}

                    <FlexCard icons="Book" type="document" url="license/licenses" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.reference.license",
                                message: "라이선스"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.reference.license.desc",
                                message: "오픈 소스 라이선스와 사용하는 라이브러리를 안내합니다."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="FAQ" type="document" url="faq" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.reference.faq",
                                message: "FAQ"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.reference.faq.desc",
                                message: "자주 묻는 질문을 확인하고 문제를 해결하세요."
                            })}
                        </Description>
                    </FlexCard>

                </div>
            </section>

            <section className={clsx('row nav-tiles', styles.justifycardcontent)}>

                <Heading as="h2" className={styles.textcenter}>
                    {translate({
                        id: "index.pages.section.learn",
                        message: "학습하기"
                    })}
                </Heading>

                <div className={styles.flexContainer}>
                    <FlexCard icons="Bookexpand" type="document" url="learning-guides" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.learn.learning",
                                message: "학습하기"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.learn.learning.desc",
                                message: "빠른 이해와 효율적인 이용을 위해 학습 자료를 제공합니다."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="MXQL" type="document" url="mxql/mxql-overview" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.learn.mxql",
                                message: "MXQL"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.learn.mxql.desc",
                                message: "MXQL은 메트릭스를 유연한게 조회하기 위한 쿼리 언어입니다."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Metrics" type="document" url="metrics/common-metrics-intro" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.learn.metrics",
                                message: "메트릭스"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.learn.metrics.desc",
                                message: "메트릭스는 모니터링 대상으로부터 수집한 데이터입니다."
                            })}
                        </Description>
                    </FlexCard>

                    <FlexCard icons="Book" type="document" url="glossary" >
                        <Heading as="h5">
                            {translate({
                                id: "index.pages.section.learn.glossary",
                                message: "용어 사전"
                            })}
                        </Heading>
                        <Description>
                            {translate({
                                id: "index.pages.section.learn.glossary.desc",
                                message: "모니터링 서비스를 더욱 편리하게 이용할 수 있도록 용어 사전을 제공합니다."
                            })}
                        </Description>
                    </FlexCard>

                </div>
            </section>
        </article>

        </Layout>
    );
}