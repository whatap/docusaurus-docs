# Introduction

WhaTap Docs 문서 관리 플랫폼 Docusaurus 입니다.

## 빌드 방법 및 PDF 제작 방법

<https://github.com/whatap/whatap-docs/wiki>

```
export NODE_OPTIONS="--max-old-space-size=24576" && USE_SIMPLE_CSS_MINIFIER=true yarn build --no-minify
```

## 다국어 작업

### Crowdin CLI 설치

클라우딘 CLI 다운로드: `brew install crowdin`

참조: <https://crowdin.github.io/crowdin-cli/>

### 번역을 위한 클라우딘 업로드

참조. 번역 업로드 전 다음의 파일에 주석 삭제할 것

* about-apm-heap-memory.mdx
* kubernetes/dashboard.mdx
* kubernetes/set-agent.mdx
* kubernetes/pod-init-perform-v2.mdx
* kubernetes/container-map-event.mdx
* kubernetes/container-map-detail-mode.mdx
* kubernetes/container-map-trace.mdx
* kubernetes/resource-node-list.mdx
* kubernetes/container-map-log.mdx
* kubernetes/container-map-target-info.mdx
* kubernetes/node-map.mdx
* kubernetes/node-details.mdx
* features/vcenter-introduction.mdx
* \_log-exp.mdx

```
crowdin upload -b main
# or
npm run crowdin upload
```

### 번역 다운로드

```
crowdin download -b main -l en-US
```

언어별 다운로드 `crowdin download -l en-US -b main`

### 다국어 문서 수정 사항

* 번역 중 수동으로 수정한 사항이 있을 수 있습니다. 해당 건이 취소되지 않도록 이전 파일과 비교해 검토하세요.
* 일부는 이전 파일과 비교해 적용되지 말아야할 부분도 있을 수 있습니다. 예, Order list 번호, 인덴트 간격이 수정된 파일, 코드 블락에 적용된 수동 번역
* 향후 MDX 3 지원을 위해 외부 링크를 이전 파일 기준으로 적용해야 하는 부분도 있습니다. 예, <https://www.whatap.io> -> (x) <<https://wwww.whatap.io\\\\>>

정규표현식 찾아 바꾸기

* /\\_([a-z]) -> /_$1
* ^\{/_ -> {/*
* \{/_ -> {/*
* ^\{\/\\\* -> {/*
* _\/\}$ -> */}
* _\}$ -> */}
* \\\*\/\} -> */}
* \{(duration: .+)\} -> \{$1\}
* <!---->\n\n -> (빈값으로 변경)
* i18n/en/docusaurus-plugin-content-docs/current/server/set-event-format.mdx
  * (\$)\{([^>]+?)\} -> $1\{$2\}

일반 찾아바꾸기

- {/\* -> {/*
- : \_ -> : _
- \[ -> [
- \: -> :
- _/} -> */}
- &amp;gt; -> &gt;
- ~!@#$%^&\*()\_+=-\[]\` -> ~!@#$%^&*()_+=-[]`
- <https://lite.ip2location.com> -> [https://lite.ip2location.com](https://lite.ip2location.com)
- ${Tag} -> &#36;&#123;Tag&#125;
- ${Field} -> &#36;&#123;Field&#125;
- {user_id} -> \{user_id\} (install-agent-quick-setup.mdx 파일에서도 확인해볼것)
- {D76F1D76-A9E0-4C87-874F-C0AD93D4229B} -> \{D76F1D76-A9E0-4C87-874F-C0AD93D4229B\}
- e.g. _kubernetes_container_images\_{pcode}\_{timestamp}.csv_ -> e.g. _kubernetes_container_images\_\{pcode\}\_\{timestamp\}.csv_
- CSV file name, _kubernetes_node_list\_{pcode}\_{timestamp}.csv_ -> CSV file name, _kubernetes_node_list\_\{pcode\}\_\{timestamp\}.csv_

< > -> 부호 앞에 &lt;, &gt; 적용할 것

- \<whatap-monitoring\> ->> &lt;whatap-monitoring&gt;
- \<section> ->> &lt;section&gt;

문장 끝 / 으로 끝나는 부분 확인해볼 것

영문, 일본어에서 index(홈화면), reference 페이지의 pdf 다운로드 관련 내용 삭제할 것

일본어 괄호 부분 수정

[次の文書]\(..// account/account-manage) 관련 부분 수정

[次の文書]（trs-view#詳細-分析）

[次の記事] \(openapi-call-apm-stat-data)

）로 끝나는 부분 확인 => 정규식 \]\(([^>]+)）

\(<https://pypi.org/project/whatap-python/> #files)

code(```) sql title='에이전트별 액티브TX 건수, <구간별> 건수, 최근 15초'
=> 한글로 들어간 부분 수정 필요

[次の文書](..／billing) -> 슬래시 수정할 것

라이선스 페이지 국문과 맞출 것

일본어 찾아 바꾸기

_yaml_ -> *yaml*
_helm_ -> *helm*
_values.yaml_ -> *values.yaml*
_whatap.conf_ -> *whatap.conf*
_security.conf_ -> *security.conf*
_paramkey.txt_ -> *paramkey.txt*
_/whatap/logs_ -> */whatap/logs*
_logs/whatap-`{boot、またはinstall}`-yyyymmdd.log_ -> *logs/whatap-`{boot、またはinstall}`-yyyymmdd.log*
