var Promise = require('promise');

function rowsToJson(data) {
  const defaultCol = 1;
  const rd = {}; // resultData
  if (!data || data.length < 1) return undefined;

  const header = data[0];
  if (header[0] && header[0].toUpperCase() != 'ID') return undefined;

  const colCount = header.length;

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    for (let j = 1; j < colCount; j++) {
      if (['ID', 'en', 'ko', 'ja', 'zh', 'service_id'].includes(data[0][j])) {
        const headerName = header[j].trim();
        const value = row[j];
        if (!rd[headerName]) rd[headerName] = {};
        if (!value || value.length < 1) {
          rd[headerName][row[0]] = row[defaultCol];
        } else {
          rd[headerName][row[0]] = value;
        }
      }
    }
  }
  return rd;
}

function colsToJsonReport(data){
  const defaultCol = 1;
  const rd = {}; // resultData
  console.log('2222', data.length);
  if (!data || data.length < 1) return undefined;
  const header = data[0];
  console.log(header[0]);
  if (header[0] != 'key') return undefined;
  const colCount = header.length;
  
  for (let i=1;i<data.length;i++) {
    const row = data[i];
    const headerName = row[0].trim();
    if (!rd[headerName]) rd[headerName] = {};
    for (let j=1;j<colCount;j++) {
      if (['key', 'en', 'ko', 'ja'].includes(data[0][j])) {
        let lang = data[0][j];
        const value = row[j];
        if (!value || value.length < 1) {
          rd[headerName][row[j]] = row[defaultCol];
        } else {
          rd[headerName][lang] = value.replace(/\u2028/gm, '');
        }
      }
    }
  }

  rd['A111_AppWeeklyOkindAvgRespTime'] = {
    "ko": "주간 애플리케이션 종류별 평균응답시간 보고서",
    "en": "Application Kinds Weekly Avg Resp Time Statistics Report",
    "ja": "Application Kinds Weekly Avg Resp Time Statistics Report"
  }
  return rd;
}

function colsToJson(data){
  const defaultCol = 1;
  const rd = {}; // resultData
  if (!data || data.length < 1) return undefined;
  const header = data[0];
  if (header[0] && header[0].toUpperCase() != 'ID') return undefined;

  const colCount = header.length;

  for (let i=1;i<data.length;i++) {
    const row = data[i];
    const headerName = row[0].trim();
    if (!rd[headerName]) rd[headerName] = {};
    for (let j=1;j<colCount;j++) {
      if (['id', 'en', 'ko', 'ja', 'zh', 'service_id'].includes(data[0][j])) {
        let lang = data[0][j];
        const value = row[j];
        if (!value || value.length < 1) {
          rd[headerName][row[j]] = row[defaultCol];
        } else {
          rd[headerName][lang] = value.replace(/\u2028/gm, '');
        }
      }
    }
  }
  rd['freetrial'] = {};
  rd['freetrial']['en'] = 'Get Started for free';
  rd['freetrial']['ja'] = '無料で試す';
  rd['freetrial']['ko'] = '무료로 시작하기';

  rd['ajaxAnalytics'] = {};
  rd['ajaxAnalytics']['en'] = 'AJAX Hitmap';
  rd['ajaxAnalytics']['ja'] = 'AJAX Hitmap';
  rd['ajaxAnalytics']['ko'] = 'AJAX 히트맵';

  rd['rumDashboard'] = {};
  rd['rumDashboard']['en'] = 'Browser Monitoring Dashboard';
  rd['rumDashboard']['ja'] = 'ブラウザ監視ダッシュボード';
  rd['rumDashboard']['ko'] = '브라우저 모니터링 대시보드';

  rd['reportStat'] = {
    "en": "Stat/Report",
    "ja": "統計/レポート",
    "ko": "통계/보고서"
  };

  rd["containerMap"] = {
    "en": "Container Map",
    "ja": "コンテナマップ",
    "ko": "컨테이너 맵"
  };

  rd["paymentHistory"] = {
    "en": "Billing History",
    "ja": "請求及び支払履歴",
    "ko": "청구 및 납부 내역"
  };

  rd["billingPreview"] = {
    "en": "Invoice Preview History",
    "ja": "請求書プレビュー",
    "ko": "청구서 미리보기"
  };

  rd["serverDetail"] = {
    "en": "Server Detail",
    "ja": "サーバー 詳細",
    "ko": "서버 상세"
  }

  rd["dbObjectInfo"] = {
    "en": "Top Object",
    "ja": "Topオブジェクト",
    "ko": "Top 오브젝트"
  }

  rd["clusterOverview"] = {
    "en": "Cluster Summary",
    "ja": "クラスターサマリー",
    "ko": "클러스터 요약"
  }

  rd["pendingPod"] = {
    "en": "Pending Pods",
    "ja": "Pending Pods",
    "ko": "Pending Pods"
  }

  rd["active_trx"] = {
    "en": "Active TX",
    "ja": "アクティブTX",
    "ko": "실행중 TX",
    "zh": "活动TX。",
    "service_id": "_00297"
  }

  rd["logTail"] = {
    "en": "Live Tail",
    "ja": "ログTail",
    "ko": "라이브 테일"
  }

  rd["podList"] = {
    "en": "Pod List",
    "ja": "Podリスト",
    "ko": "Pod 목록"
  }

  rd["containerizedAppList"] = {
    "en": "Application List",
    "ja": "アプリケーションリスト",
    "ko": "애플리케이션 목록"
  }

  rd["containerImages"] = {
    "en": "Container Images",
    "ja": "コンテナイメージ",
    "ko": "컨테이너 이미지"
  }

  rd["correlatedProjectManagement"] = {
    "en": "Correlated Project Management",
    "ja": "相関プロジェクト管理",
    "ko": "연계 프로젝트 관리"
  }

  rd["AA001"] = {
    "en": "Active Transaction Speed Chart",
    "ja": "アクティブTXスピードチャート",
    "ko": "액티브 트랜잭션 스피드"
  }

  rd["AA002"] = {
    "en": "Active Transaction",
    "ja": "アクティブTX",
    "ko": "액티브 트랜잭션"
  }

  rd["AA003"] = {
    "en": "Application summary",
    "ja": "アプリケーション要約",
    "ko": "애플리케이션 요약"
  }

  rd["AA004"] = {
    "en": "Active status",
    "ja": "アクティブ状態",
    "ko": "액티브 스테이터스"
  }

  rd["AA005"] = {
    "en": "Hitmap",
    "ja": "ヒットマップ",
    "ko": "히트맵"
  }

  rd["AA010"] = {
    "en": "Heap Memory",
    "ja": "ヒープメモリ",
    "ko": "힙 메모리"
  }

  rd["AA016"] = {
    "en": "Active Transaction Equalizer",
    "ja": "アクティブTXイコライザー",
    "ko": "액티브 트랜잭션 이퀄라이저"
  }

  rd["AA017"] = {
    "en": "Process Memory",
    "ja": "プロセスメモリ",
    "ko": "프로세스 메모리"
  }

  rd["AA018"] = {
    "en": "Agent Active Transaction",
    "ja": "エージェントアクティブTX",
    "ko": "에이전트 액티브 트랜잭션"
  }

  rd["AA021"] = {
    "en": "Today's Transaction (m)",
    "ja": "本日TX (m)",
    "ko": "금일 트랜잭션 (m)"
  }

  rd["AA022"] = {
    "en": "Active Transaction",
    "ja": "エージェントアクティブTX",
    "ko": "액티브 트랜잭션"
  }

  rd["yaxis"] = {
    "en": "Y Auto",
    "ja": "Y軸自動",
    "ko": "Y축 자동"
  }

  rd["rumPageLoadHitmap"] = {
    "en": "Page Load Hitmap",
    "ja": "Page Load Hitmap",
    "ko": "페이지 로드 히트맵"
  }

  rd["agentInstall"] = {
    "en": "Agent Installation",
    "ja": "エージェントインストール",
    "ko": "에이전트 설치"
  }

  rd["kubeEventList"] = {
    "en": "Kubernetes Event",
    "ja": "クーバーネティスイベント",
    "ko": "쿠버네티스 이벤트"
  }

  rd["agentsConfiguration"] = {
    "en": "Instance Performance Management",
    "ja": "インスタンス性能管理",
    "ko": "인스턴스 성능 관리"
  }

  rd["whatapEventList"] = {
    "en": "WhaTap Event",
    "ja": "WhaTapイベント",
    "ko": "WhaTap 이벤트"
  }

  rd["objectManifest"] = {
    "en": "Object Manifest Information",
    "ja": "Object Manifest情報",
    "ko": "오브젝트 매니페스트"
  }

  rd["ssoIntegrations"] = {
    "en": "SSO Integrations",
    "ja": "SSO連動",
    "ko": "SSO 연동"
  }

  rd["integratedTopology"] = {
    "en": "Integrated APP. Topology",
    "ja": "統合APPトポロジー",
    "ko": "통합 APP.그룹 토폴로지"
  }

  rd["logExplorer"] = {
    "en": "Log Trend",
    "ja": "ログトレンド",
    "ko": "로그 트렌드"
  }

  rd["masterMetaTopology"] = {
    "en": "Object Manifest Topology",
    "ja": "Object Manifestトポロジー",
    "ko": "오브젝트 토폴로지"
  }

  rd["landingSignup"] = {
    "en": "Sign up",
    "ja": "サインアップ",
    "ko": "계정 생성"
  }

  rd["kubernetesAgentList"] = {
    "en": "Kubernetes Agent List",
    "ja": "Kubernetesエージェントリスト",
    "ko": "쿠버네티스 에이전트 목록"
  }

  rd["kubeApiserverDashboard"] = {
    "en": "kube-apiserver Dashboard",
    "ja": "kube-apiserver ダッシュボード",
    "ko": "kube-apiserver 대시보드"
  }

  rd["eventNoti"] = {
    "en": "Notifications",
    "ja": "通知設定",
    "ko": "이벤트 수신 설정"
  }

  rd["projectSubscription"] = {
    "en": "Project Subscription Status",
    "ja": "プロジェクト課金状況",
    "ko": "프로젝트 유료 전환"
  }

  rd["integratedFlexboard"] = {
    "en": "Integrated Flex Board",
    "ja": "統合Flexボード",
    "ko": "통합 Flex 보드"
  }

  rd["workload"] = {
    "en": "Workload",
    "ja": "ワークロード",
    "ko": "워크로드"
  }

  rd["kubeAppHitmap"] = {
    "en": "Application Hitmap",
    "ja": "アプリケーションヒットマップ",
    "ko": "애플리케이션 히트맵"
  }

  rd["oomContainer"] = {
    "en": "Out Of Memory Killed Container",
    "ja": "OOM Killedコンテナ",
    "ko": "Out Of Memory Killed 컨테이너"
  }

  rd["kubeAppStack"] = {
    "en": "Application Stack",
    "ja": "アプリケーションスタック",
    "ko": "애플리케이션 스택"
  }

  rd["containerizedAppList"] = {
    "en": "Container Application List",
    "ja": "コンテナアプリケーションリスト",
    "ko": "컨테이너 애플리케이션 목록"
  }

  rd["perfTrend"] = {
    "en": "Performance Trend",
    "ja": "性能推移",
    "ko": "성능 추이"
  }

  rd["podInitPerf"] = {
    "en": "Pod Startup Analysis",
    "ja": "Pod起動分析",
    "ko": "Pod 시작 분석"
  }
  
  rd["appDashboard"] = {
    "en": "Application Dashboard",
    "ja": "アプリケーション",
    "ko": "애플리케이션 대시보드"
  }

  rd["server_installAgent_add_whatapRepo"] = {
    "en": "Add the WhaTap Repository",
    "ja": "WhaTapリポジトリの追加",
    "ko": "와탭 리포지토리 추가"
  }

  rd["server_installAgent_installPackages"] = {
    "en": "Install the WhaTap Server Monitor Package",
    "ja": "サーバーモニタリングパッケージのインストール",
    "ko": "와탭 서버 모니터링 패키지 설치"
  }

  rd["server_installAgent_startMonitoring"] = {
    "en": "Run the Configure Script and Start the Server Monitor Daemon.",
    "ja": "設定スクリプトを実行しサーバーモニターデモンを開始してください。",
    "ko": "서버 모니터링 시작하기"
  }

  rd["server_installAgent_aix_runSetup"] = {
    "en": "Run the setup file",
    "ja": "インストールファイルの実行",
    "ko": "설치 파일 실행"
  }

  rd["server_installAgent_win_download"] = {
    "en": "Download the WhaTap Installer for Windows",
    "ja": "インストールファイルのダウンロード'",
    "ko": "설치 파일 다운로드"
  }

  rd["server_installAgent_win_runSetup"] = {
    "en": "Run the WhaTap Installer",
    "ja": "インストールファイルの実行",
    "ko": "설치 파일 실행"
  }

  rd["side_integratedMetricsBoard"] = {
    "en": "Integrated Metrics Dashboard",
    "ja": "統合メトリックスダッシューボード",
    "ko": "통합 메트릭스 보드"
  }

  rd["side_integratedDashboard"] = {
    "en": "Integrated Dashboard",
    "ja": "統合ダッシューボード",
    "ko": "통합 대시보드"
  }

  rd["dbx_agent_setting"] = {
    "en": "DBX Agent Setting",
    "ja": "DBXエージェントの設定",
    "ko": "DBX 에이전트 설정",
  }

  rd["side_kubeEventList"] = {
    "en": "Kubernetes Event",
    "ja": "Kubernetesイベント",
    "ko": "쿠버네티스 이벤트"
  }

  rd["daily_app_stat"].en = "Daily APP. Status";
  rd["daily_app_stat"].ja = "日別APP現況"

  rd["multi_server_transaction_trace"].en = "Multiple Transaction Trace";

  rd["tx_search"].en = "Transaction Search"
  
  rd["tag_count"].ja = "メトリックス照会";
  rd["tag_count"].en = "Metrics Search";

  rd["tag_count_chart"].ja = "メトリックスチャート";
  rd["tag_count_chart"].en = "Metrics Chart";

  rd["tag_count_anomaly_detection"].ja = "メトリックス異常検出";
  rd["tag_count_anomaly_detection"].en = "Metrics Anomaly Detection";

  rd["Container"].ja = "コンテナー";
  rd["metrics"].ja = "メトリックス";

  return rd;
}

function jsonToKeyValue(json) {
  var str = '';
  for (var k in json) {
    var v = json[k];
    str += k + '=' + json[k] + '\n';
  }
  return str;
}

function keyValueToJson(contents) {
  if (!contents || contents.constructor != String) return;

  var lines = contents.split('\n');
  var rd = {};
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();

    if ((line[0] && line[0] == '#') || line.indexOf('=') < 1) continue;

    var kv = line.split('=');
    rd[kv[0].trim()] = kv[1].trim();
  }
  return rd;
}

function jsonToArray(json) {
  var arr = [];
  var localeKeys = ['ID'];
  var defaultLocale = json['en'];
  var values = [];

  var IDS = {};

  for (var k in json) {
    localeKeys.push(k);
    values.push(json[k]);
  }

  arr.push(localeKeys);

  for (var key = 1; key < localeKeys.length; key++) {
    var localeData = json[localeKeys[key]];
    for (var k in localeData) {
      IDS[k] = true;
    }
  }

  for (var id in IDS) {
    var ar = [id];
    for (var i = 1; i < localeKeys.length; i++) {
      var localeKey = localeKeys[i];
      var v = json[localeKey][id];
      if (!v) {
        ar.push(defaultLocale[id]);
      } else {
        ar.push(v);
      }
    }
    arr.push(ar);
  }
  return arr;
}

module.exports = {
  keyValueToJson: keyValueToJson,
  jsonToKeyValue: jsonToKeyValue,
  rowsToJson: rowsToJson,
  colsToJson: colsToJson,
  colsToJsonReport: colsToJsonReport,
  jsonToArray: jsonToArray,
};