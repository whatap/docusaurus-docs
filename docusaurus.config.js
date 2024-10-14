// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;
const {rehypeExtendedTable} = require("rehype-extended-table");
const { remarkCodeHike, recmaCodeHike } = require("codehike/mdx");
// const rehypeSectionHeadings = require("rehype-section-headings");

const chConfig = {
  components: { code: "MyCode" },
  syntaxHighlighting: {
    theme: "github-dark",
  },
}

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'WhaTap Docs',
  tagline: '와탭 기술 문서 :: WhaTap, 와탭 기술 문서 페이지에 오신 것을 진심으로 환영합니다.',
  url: 'https://docs.whatap.io',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenAnchors: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  favicon: '/img/whatap-favicon.ico',
  i18n: {
    defaultLocale: 'ko',
    locales: [ 'ko', 'en', 'ja' ],
    localeConfigs: {
      ko: {
        label: 'KOR',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
      en: {
        label: 'ENG',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ja: {
        label: 'JPN',
        direction: 'ltr',
        htmlLang: 'ja-JP',
        path: 'ja',
      },
    }
  },
  // trailingSlash: false,
  clientModules: [
    require.resolve("./src/modules/amplitude.js")
  ],
  plugins: [
    [ './src/whatap-plugin-facebook', {}],
    [ './src/whatap-plugin-browser', {}],
    [ 'docusaurus-plugin-sass', {} ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        // fromExtensions: ['html', 'htm'],
        redirects: [],
      }
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-E46TQ5VSCT',
        anonymizeIP: true,
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-WJSZDJR',
      },
    ],
    [
      'docusaurus-plugin-image-zoom', {}
    ],
  ],
  markdown: {
    mermaid: true,
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
    parseFrontMatter: async (params) => {
      // Reuse the default parser
      const result = await params.defaultParseFrontMatter(params);
      const isPartial = params.filePath.includes("/_") || params.filePath.includes("\\_");
      if (isPartial) {
        return result;
      }
      // TODO fix weird undefined case!
      const isDefaultLocale =
        process.env.DOCUSAURUS_CURRENT_LOCALE === "undefined" ||
        typeof process.env.DOCUSAURUS_CURRENT_LOCALE === "undefined" ||
        process.env.DOCUSAURUS_CURRENT_LOCALE === "ko";
      const isI18n = params.filePath.includes("/i18n/");
      if (isDefaultLocale) {
        result.frontMatter.isTranslationMissing = false;
      } else {
        result.frontMatter.isTranslationMissing = !isI18n;
      }
      return result;
    }
  },
  themes: [
    '@docusaurus/theme-mermaid',
    '@saucelabs/theme-github-codeblock'
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          beforeDefaultRemarkPlugins: [[remarkCodeHike, chConfig]],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          rehypePlugins: [ rehypeExtendedTable ],
          remarkPlugins: [ require("@whatap-docs/remark-sectionize") ],
          recmaPlugins: [[recmaCodeHike, chConfig]],
          editUrl: 'undefined', // 'https://gitlab.whatap.io/whatap-inc/docs/-/blob/main/',
          include: [ '**/*.mdx' ],
          exclude: [ 'weaving/*.mdx', 'weaving/**/*.mdx', 'wip/*.mdx', 'common-items/*.mdx', '**/_*.mdx', 'release-notes/otel/*.mdx' ],
        },
        // blog: false,
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          blogSidebarTitle: '새로운 기능',
          blogSidebarCount: 'ALL',
          include: [ '**/*.mdx' ],
          rehypePlugins: [ rehypeExtendedTable ],
          // groupByYear: true, (canary 버전 옵션)
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'always',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        }
      },
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            id: 'openapi-spec',
            spec: 'docs/apidoc/openapi.yaml',
            // route: '/openapi-spec',
          },
          {
            id: 'openapi-spec-en',
            spec: 'i18n/en/docusaurus-plugin-content-docs/current/apidoc/openapi.yaml',
            // route: '/openapi-spec-en',
          },
          {
            id: 'openapi-spec-ja',
            spec: 'i18n/ja/docusaurus-plugin-content-docs/current/apidoc/openapi.yaml',
            // route: '/openapi-spec-ja',
          }
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ]
  ],
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve("swc-loader"),
      options: {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
          target: "es2017",
        },
        module: {
          type: isServer ? "commonjs" : "es6",
        },
      },
    }),
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://www.whatap.io/img/og/whatap.png',
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
      // announcementBar: {
      //   id: 'moniday-banner',
      //   content: '<div id="moniday-banner">🎙️ 10월 19일, IT 현대화에 적합한 모니터링 플랫폼이 궁금하다면? <span id="bar"></span> <a class="btn-white-file" href="https://www.whatap.io/ko/moniDay" target="_blank">WhaTap Moni Day 신청하기</a></div>',
      //   backgroundColor: 'none',
      //   textColor: '#ffffff',
      //   isCloseable: true,
      // },
      metadata: [
        {
          name: 'keywords',
          content: 'WhaTap, 와탭, 매뉴얼, 사용법, WhaTap 사용법, WhaTap 매뉴얼, 기술 문서, APM, 애플리케이션 모니터링, 로그 모니터링, 쿠버네티스 모니터링, 서버 모니터링, 데이터베이스 모니터링, URL 모니터링, 클라우드 모니터링, 브라우저 모니터링, Browser monitoring, Application Monitoring, Log Monitoring, Kubernetes Monitoring, Server Monitoring, Database Monitoring, URL Monitoring, Cloud Monitoring, Manual, User Guide, Docs, WhaTap Manual, WhaTap Docs, WhaTap Documents, 트랜잭션, Transaction, 트레이싱, Tracing, 마스터, Master, 노드, Node, 데드락, Deadlock, 락 트리, Lock tree, 멀티 트랜잭션, Multi Trancsaction, 메트릭스, Metrics, 소프트웨어 프록시, Software proxy, 스택, Stack, 슬로우 쿼리, Slow query, 액티브 트랜잭션, Active transaction, 컨테이너, Container, 히트맵, Hitmap, Garbage Collection, GC, MXQL, Method 추적, Trace method, OOM Killed 컨테이너, OOM Killed Container, Oracle, Tibero, PostgreSQL, MySQL, MongoDB, SQL Server, CUBRID, Altibase, Redis, WebLogic, WebSphere',
        },
        {
          name: 'naver-site-verification',
          content: '0c21fc5664a467108fb762ade47a3f81ee9b88ed',
        },
        {
          name: 'google-site-verification',
          content: 'rIlfJkbbogFOIDc3DgJZmOGbUMJWytyvZSKEgV7EMsE',
        }
      ],
      blog: {
        sidebar: {
          groupByYear: true
        }
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
          hideable: false,
        }
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'WhaTap Docs',
          src: 'img/whatap-docs-logo.svg',
          width: "154px",
          height: "43px",
        },
        items: [
          {
            type: 'doc',
            docId: 'whatap-overview',
            label: '시작하기',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'learning-guides',
            label: '학습하기',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: '상품별 문서 바로가기',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'java/introduction',
                label: 'Java',
              },
              {
                type: 'doc',
                docId: 'php/introduction',
                label: 'PHP',
              },
              {
                type: 'doc',
                docId: 'nodejs/introduction',
                label: 'Node.js',
              },
              {
                type: 'doc',
                docId: 'python/introduction',
                label: 'Python',
              },
              {
                type: 'doc',
                docId: 'dotnet/introduction',
                label: '.NET',
              },
              {
                type: 'doc',
                docId: 'golang/introduction',
                label: 'Go',
              },
              {
                type: 'doc',
                docId: 'server/introduction',
                label: 'Server',
              },
              {
                type: 'doc',
                docId: 'kubernetes/introduction',
                label: 'Kubernetes',
              },
              {
                type: 'doc',
                docId: 'postgresql/monitoring-intro',
                label: 'PostgreSQL',
              },
              {
                type: 'doc',
                docId: 'oracle/monitoring-intro',
                label: 'Oracle',
              },
              {
                type: 'doc',
                docId: 'oracle-pro/monitoring-intro',
                label: 'Oracle Pro',
              },
              {
                type: 'doc',
                docId: 'mysql/monitoring-intro',
                label: 'MySQL',
              },
              {
                type: 'doc',
                docId: 'mssql/monitoring-intro',
                label: 'SQL Server',
              },
              {
                type: 'doc',
                docId: 'tibero/monitoring-intro',
                label: 'Tibero',
              },
              {
                type: 'doc',
                docId: 'cubrid/monitoring-intro',
                label: 'CUBRID',
              },
              {
                type: 'doc',
                docId: 'altibase/monitoring-intro',
                label: 'Altibase',
              },
              {
                type: 'doc',
                docId: 'redis/monitoring-intro',
                label: 'Redis',
              },
              {
                type: 'doc',
                docId: 'mongodb/monitoring-intro',
                label: 'MongoDB',
              },
              {
                type: 'doc',
                docId: 'url/url-intro',
                label: 'URL',
              },
              {
                type: 'doc',
                docId: 'browser',
                label: 'Browser',
              },
              {
                type: 'doc',
                docId: 'amazon-cloudwatch/install-agent',
                label: 'Amazon CloudWatch',
                className: 'narrow',
              },
              {
                type: 'doc',
                docId: 'amazon-ecs/introduction',
                label: 'Amazon ECS',
              },
              {
                type: 'doc',
                docId: 'aws-log/introduction',
                label: 'AWS Log',
              },
              {
                type: 'doc',
                docId: 'azure/install-agent',
                label: 'Azure Monitor',
              },
              {
                type: 'doc',
                docId: 'ncloud/install-agent',
                label: 'Naver Cloud Monitoring',
                className: 'narrow',
              },
              {
                type: 'doc',
                docId: 'oracle-cloud/install-agent',
                label: 'Oracle Cloud Monitor',
                className: 'narrow',
              },
              {
                type: 'doc',
                docId: 'npm/introduction',
                label: 'Network Performance Monitoring',
                className: 'narrow',
              },
              {
                type: 'doc',
                docId: 'features/introduction',
                label: 'Feature Project', 
                className: 'narrow',
              },
              {
                type: 'doc',
                docId: 'log/introduction',
                label: 'Log',
              },
              {
                type: 'doc',
                docId: 'extensions',
                label: 'Extensions'
              },
            ]
          },
          // 여기부터 검색 시 문서 경로 표현을 위한 보이지 않는 메뉴
          {
            type: 'doc',
            docId: 'java/introduction',
            position: "left",
            label: 'Java 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'php/introduction',
            position: "left",
            label: 'PHP 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'nodejs/introduction',
            position: "left",
            label: 'Node.js 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'python/introduction',
            position: "left",
            label: 'Python 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'dotnet/introduction',
            position: "left",
            label: '.NET 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'golang/introduction',
            position: "left",
            label: 'Go 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'server/introduction',
            position: "left",
            label: 'Server 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'kubernetes/introduction',
            position: "left",
            label: 'Kubernetes 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'postgresql/monitoring-intro',
            position: "left",
            label: 'PostgreSQL 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'oracle-v1/monitoring-intro',
            position: "left",
            label: 'Oracle V1 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'oracle/monitoring-intro',
            position: "left",
            label: 'Oracle V2 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'oracle-pro/monitoring-intro',
            position: "left",
            label: 'Oracle Pro 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'mysql/monitoring-intro',
            position: "left",
            label: 'MySQL 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'mssql/monitoring-intro',
            position: "left",
            label: 'SQL Server 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'tibero/monitoring-intro',
            position: "left",
            label: 'Tibero 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'cubrid/monitoring-intro',
            position: "left",
            label: 'CUBRID 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'altibase/monitoring-intro',
            position: "left",
            label: 'Altibase 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'redis/monitoring-intro',
            position: "left",
            label: 'Redis 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'mongodb/monitoring-intro',
            position: "left",
            label: 'MongoDB 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'url/url-intro',
            position: "left",
            label: 'URL 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'amazon-cloudwatch/install-agent',
            position: "left",
            label: 'Amazon CloudWatch',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'amazon-ecs/introduction',
            position: "left",
            label: 'Amazon ECS',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'aws-log/introduction',
            position: "left",
            label: 'AWS Log',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'azure/install-agent',
            position: "left",
            label: 'Azure Monitor',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'ncloud/install-agent',
            position: "left",
            label: 'Naver Cloud Monitoring',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'oracle-cloud/install-agent',
            position: "left",
            label: 'Oracle Cloud Monitor',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'log/introduction',
            position: "left",
            label: 'Log 모니터링',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'browser',
            position: "left",
            label: 'Browser',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'npm/introduction',
            position: "left",
            label: 'NPM',
            className: 'hidden',
          },
          {
            type: 'doc',
            docId: 'extensions',
            position: 'left',
            label: '확장 도구',
            className: 'hidden'
          },
          {
            type: 'doc',
            docId: 'opentelemetry/introduction',
            position: 'left',
            label: 'OpenTelemetry',
            className: 'hidden'
          },
          // 여기까지 검색 시 문서 경로 표현을 위한 보이지 않는 메뉴 
          {
            type: 'doc',
            docId: 'manage',
            position: 'left',
            label: '관리 기능',
          },
          {
            to: 'openapi-spec',
            position: 'left',
            label: 'Open API',
          },
          {
            type: 'doc',
            docId: 'license/licenses',
            position: 'left',
            label: '라이선스',
          },
          // {
          //   type: 'doc',
          //   docId: 'reference',
          //   position: 'left',
          //   label: '참조 문서',
          // },
          {
            type: 'doc',
            docId: 'release-notes',
            position: 'left',
            label: '릴리스 노트',
          },
          {
            type: 'doc',
            docId: 'faq/index',
            position: 'left',
            label: 'FAQ',
          },
          // {
          //   to: 'blog', 
          //   label: '새로운 기능', 
          //   position: 'left', 
          //   className: 'iflang-link',
          // },
          // 다국어 조건 블로그
          {
            to: (function () {
              const locale = process.env.DOCUSAURUS_CURRENT_LOCALE; // 현재 로케일
              return locale === 'en' || locale === 'ja' ? 'blog/overview' : 'blog';
            })(),
            label: '새로운 기능',
            position: 'left',
            className: 'iflang-link',
          },
          {
            type: 'localeDropdown',
            className: 'oneColumn localeDropdown',
            position: 'right',
          },
          {
            type: 'search',
            position: 'right',
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [

        ],
        copyright: `Copyright © ${new Date().getFullYear()} WhaTap Labs Inc. All right reserved. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: [ 'java', 'scala', 'bash', 'powershell', 'batch', 'apacheconf', 'docker', 'properties', 'ini', 'sql', 'go', 'python', 'json', 'yaml', 'log', 'csharp', 'typescript', 'javascript' ],
      },
      zoom: {
        selector: '.markdown :not(em, div) > img:not(.ico-link)',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
      },
    }),
}

export default config;
