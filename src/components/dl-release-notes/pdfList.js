const svList = [
    {
        "name": 'Service-2.10.x',
        "date": '2024-11-22',
        "url": 'https://github.com/whatap/whatap-docs/releases/download/v2.11.0/service-2.10.x.pdf',
        "docs": '/release-notes/service/service-2_10_x'
    },
    {
        "name": 'Service-2.9.x',
        "date": '2024-10-29',
        "url": 'https://content.whatap.io/24/10/31/011431service-29x.pdf',
        "docs": '/release-notes/service/service-2_9_x'
    },
    {
        "name": 'Service-2.8.x',
        "date": '2024-09-12',
        "url": 'https://content.whatap.io/24/09/30/002206service-28x.pdf',
        "docs": '/release-notes/service/service-2_8_x'
    },
    {
        "name": 'Service-2.7.x',
        "date": '2024-08-12',
        "url": 'https://content.whatap.io/24/09/02/052626service-27x.pdf',
        "docs": '/release-notes/service/service-2_7_x'
    },
    {
        "name": 'Service-2.6.x',
        "date": '2024-06-28',
        "url": 'https://content.whatap.io/24/08/01/053544service-26x.pdf',
        "docs": '/release-notes/service/service-2_6_x'
    },
    {
        "name": 'Service-2.5.x',
        "date": '2024-06-25',
        "url": 'https://content.whatap.io/24/07/01/011308service-25x.pdf',
        "docs": '/release-notes/service/service-2_5_x'
    },
    {
        "name": 'Service-2.4.x',
        "date": '2024-05-08',
        "url": 'https://content.whatap.io/24/06/03/054323service-24x.pdf',
        "docs": '/release-notes/service/service-2_4_x'
    },
    {
        "name": 'Service-2.3.x',
        "date": '2024-04-23',
        "url": 'https://content.whatap.io/24/05/03/040111service-23x.pdf',
        "docs": '/release-notes/service/service-2_3_x'
    },
    {
        "name": 'Service-2.2.x',
        "date": '2024-03-22',
        "url": 'https://content.whatap.io/24/04/02/011012service-22x.pdf',
        "docs": '/release-notes/service/service-2_2_x'
    },
    {
        "name": 'Service-2.1.x',
        "date": '2024-02-26',
        "url": 'https://content.whatap.io/24/03/05/003514service-21x.pdf',
        "docs": '/release-notes/service/service-2_1_x'
    },
    {
        "name": 'Service-2.0.x',
        "date": '2024-01-19',
        "url": 'https://content.whatap.io/24/02/01/065728service-20x.pdf',
        "docs": '/release-notes/service/service-2_0_x'
    },
    {
        "name": 'Service-1.114.x',
        "date": '2023-12-21',
        "url": 'https://content.whatap.io/24/02/01/065728service-1114x.pdf',
        "docs": '/release-notes/service/service-1_114_x'
    },
    {
        "name": 'Service-1.112.x',
        "date": '2023-11-17',
        "url": 'https://content.whatap.io/24/02/01/065728service-1112x.pdf',
        "docs": '/release-notes/service/service-1_112_x'
    },
    {
        "name": 'Service-1.110.x',
        "date": '2023-10-25',
        "url": 'https://content.whatap.io/24/02/01/065728service-1100x.pdf',
        "docs": '/release-notes/service/service-1_110_x'
    },
    {
        "name": 'Service-1.108.x',
        "date": '2023-09-21',
        "url": 'https://content.whatap.io/24/02/01/065728service-1108x.pdf',
        "docs": '/release-notes/service/service-1_108_x'
    },
    {
        "name": 'Service-1.106.x',
        "date": '2023-07-26',
        "url": 'https://content.whatap.io/24/02/01/065728service-1106x.pdf',
        "docs": '/release-notes/service/service-1_106_x'
    },
    {
        "name": 'Service-1.104.x',
        "date": '2023-06-28',
        "url": 'https://content.whatap.io/24/02/01/065728service-1104x.pdf',
        "docs": '/release-notes/service/service-1_104_x'
    },
    {
        "name": 'Service-1.102.x',
        "date": '2023-05-24',
        "url": 'https://content.whatap.io/24/02/01/065728service-1102x.pdf',
        "docs": '/release-notes/service/service-1_102_x'
    },
    {
        "name": 'Service-1.100.x',
        "date": '2023-04-26',
        "url": 'https://content.whatap.io/24/02/01/065728service-1100x.pdf',
        "docs": '/release-notes/service/service-1_100_x'
    },
    {
        "name": 'Service-1.98.x',
        "date": '2023-03-29',
        "url": 'https://content.whatap.io/24/02/01/065728service-198x.pdf',
        "docs": '/release-notes/service/service-1_98_x'
    },
    {
        "name": 'Service-1.96.0',
        "date": '2023-02-22',
        "url": 'https://content.whatap.io/24/02/01/065727service-1960.pdf',
        "docs": '/release-notes/service/service-1_96_0'
    },
    {
        "name": 'Service-1.94.0',
        "date": '2023-01-11',
        "url": 'https://content.whatap.io/24/02/01/065727service-1940.pdf',
        "docs": '/release-notes/service/service-1_94_0'
    },
    {
        "name": 'Service-1.92.0',
        "date": '2022-11-24',
        "url": 'https://content.whatap.io/24/02/01/065727service-1920.pdf',
        "docs": '/release-notes/service/service-1_92_0'
    },
    {
        "name": 'Service-1.90.0',
        "date": '2022-10-18',
        "url": 'https://content.whatap.io/24/02/01/065727service-1900.pdf',
        "docs": '/release-notes/service/service-1_90_0'
    },
    {
        "name": 'Service-1.88.0',
        "date": '2022-09-28',
        "url": 'https://content.whatap.io/24/02/01/065727service-1880.pdf',
        "docs": '/release-notes/service/service-1_88_0'
    },
    {
        "name": 'Service-1.86.0',
        "date": '2022-09-14',
        "url": 'https://content.whatap.io/24/02/01/065727service-1860.pdf',
        "docs": '/release-notes/service/service-1_86_0'
    },
    {
        "name": 'Service-1.84.0',
        "date": '2022-08-24',
        "url": 'https://content.whatap.io/24/02/01/065727service-1840.pdf',
        "docs": '/release-notes/service/service-1_84_0'
    },
    {
        "name": 'Service-1.82.0',
        "date": '2022-07-27',
        "url": 'https://content.whatap.io/24/02/01/065727service-1820.pdf',
        "docs": '/release-notes/service/service-1_82_0'
    },
    {
        "name": 'Service-1.80.0',
        "date": '2022-07-13',
        "url": 'https://content.whatap.io/24/02/01/065727service-1800.pdf',
        "docs": '/release-notes/service/service-1_80_0'
    },
    {
        "name": 'Service-1.78.0',
        "date": '2022-06-22',
        "url": 'https://content.whatap.io/24/02/01/065727service-1780.pdf',
        "docs": '/release-notes/service/service-1_78_0'
    },
    {
        "name": 'Service-1.76.0',
        "date": '2022-06-08',
        "url": 'https://content.whatap.io/24/02/01/065727service-1760.pdf',
        "docs": '/release-notes/service/service-1_76_0'
    },
    {
        "name": 'Service-1.74.0',
        "date": '2022-05-25',
        "url": 'https://content.whatap.io/24/02/01/065727service-1740.pdf',
        "docs": '/release-notes/service/service-1_74_0'
    },
    {
        "name": 'Service-1.72.0',
        "date": '2022-05-11',
        "url": 'https://content.whatap.io/24/02/01/065727service-1720.pdf',
        "docs": '/release-notes/service/service-1_72_0'
    },
    {
        "name": 'Service-1.70.0',
        "date": '2022-04-20',
        "url": 'https://content.whatap.io/24/02/01/065726service-1700.pdf',
        "docs": '/release-notes/service/service-1_70_0'
    },
    {
        "name": 'Service-1.68.0',
        "date": '2022-04-06',
        "url": 'https://content.whatap.io/24/02/01/065726service-1680.pdf',
        "docs": '/release-notes/service/service-1_68_0'
    },
    {
        "name": 'Service-1.66.0',
        "date": '2022-03-23',
        "url": 'https://content.whatap.io/24/02/01/065726service-1660.pdf',
        "docs": '/release-notes/service/service-1_66_0'
    },
    {
        "name": 'Service-1.64.0',
        "date": '2022-03-09',
        "url": 'https://content.whatap.io/24/02/01/065726service-1640.pdf',
        "docs": '/release-notes/service/service-1_64_0'
    },
    {
        "name": 'Service-1.62.0',
        "date": '2022-02-20',
        "url": 'https://content.whatap.io/24/02/01/065726service-1620.pdf',
        "docs": '/release-notes/service/service-1_62_0'
    },
    {
        "name": 'Service-1.60.0',
        "date": '2022-02-09',
        "url": 'https://content.whatap.io/24/02/01/065726service-1600.pdf',
        "docs": '/release-notes/service/service-1_60_0'
    },
    {
        "name": 'Service-1.58.0',
        "date": '2022-01-19',
        "url": 'https://content.whatap.io/24/02/01/065726service-1580.pdf',
        "docs": '/release-notes/service/service-1_58_0'
    },
    {
        "name": 'Service-1.56.0',
        "date": '2022-01-05',
        "url": 'https://content.whatap.io/24/02/01/065726service-1560.pdf',
        "docs": '/release-notes/service/service-1_56_0'
    },
    {
        "name": 'Service-1.54.0',
        "date": '2021-12-28',
        "url": 'https://content.whatap.io/24/02/01/065726service-1540.pdf',
        "docs": '/release-notes/service/service-1_54_0'
    },
    // 추가적인 PDF 파일들을 원하는 만큼 목록에 추가할 수 있습니다.
];

const javaList = [
    {
        "name": 'Java-agent-v2.2.41',
        "date": '2024-11-08',
        "url": 'https://github.com/whatap/whatap-docs/releases/download/v2.11.0/java-agent-v2.2.41.pdf',
        "docs": '/release-notes/java/java-2_2_41',
    },
    {
        "name": 'Java-agent-v2.2.40',
        "date": '2024-11-06',
        "url": 'https://github.com/whatap/whatap-docs/releases/download/v2.11.0/java-agent-v2.2.40.pdf',
        "docs": '/release-notes/java/java-2_2_40',
    },
    {
        "name": 'Java-agent-v2.2.39',
        "date": '2024-09-30',
        "url": 'https://content.whatap.io/24/10/31/011431java-agent-v2239.pdf',
        "docs": '/release-notes/java/java-2_2_39',
    },
    {
        "name": 'Java-agent-v2.2.38',
        "date": '2024-08-14',
        "url": 'https://content.whatap.io/24/09/02/052625java-agent-v2238.pdf',
        "docs": '/release-notes/java/java-2_2_38',
    },
    {
        "name": 'Java-agent-v2.2.37',
        "date": '2024-07-31',
        "url": 'https://content.whatap.io/24/08/01/053543java-agent-v2237.pdf',
        "docs": '/release-notes/java/java-2_2_37',
    },
    {
        "name": 'Java-agent-v2.2.36',
        "date": '2024-07-18',
        "url": 'https://content.whatap.io/24/08/01/053543java-agent-v2236.pdf',
        "docs": '/release-notes/java/java-2_2_36',
    },
    {
        "name": 'Java-agent-v2.2.35',
        "date": '2024-06-20',
        "url": 'https://content.whatap.io/24/07/01/011308java-agent-v2235.pdf',
        "docs": '/release-notes/java/java-2_2_35',
    },
    {
        "name": 'Java-agent-v2.2.34',
        "date": '2024-06-14',
        "url": 'https://content.whatap.io/24/07/01/011308java-agent-v2234.pdf',
        "docs": '/release-notes/java/java-2_2_34',
    },
    {
        "name": 'Java-agent-v2.2.33',
        "date": '2024-05-28',
        "url": 'https://content.whatap.io/24/06/03/054322java-agent-v2233.pdf',
        "docs": '/release-notes/java/java-2_2_33',
    },
    {
        "name": 'Java-agent-v2.2.32',
        "date": '2024-04-16',
        "url": 'https://content.whatap.io/24/05/03/040316java-agent-v2232.pdf',
        "docs": '/release-notes/java/java-2_2_32',
    },
    {
        "name": 'Java-agent-v2.2.31',
        "date": '2024-04-03',
        "url": 'https://content.whatap.io/24/05/03/040110java-agent-v2231.pdf',
        "docs": '/release-notes/java/java-2_2_31',
    },
    {
        "name": 'Java-agent-v2.2.30',
        "date": '2024-03-21',
        "url": 'https://content.whatap.io/24/04/02/011011java-agent-v2230.pdf',
        "docs": '/release-notes/java/java-2_2_30',
    },
    {
        "name": 'Java-agent-v2.2.29',
        "date": '2024-03-15',
        "url": 'https://content.whatap.io/24/04/02/011011java-agent-v2229.pdf',
        "docs": '/release-notes/java/java-2_2_29',
    },
    {
        "name": 'Java-agent-v2.2.28',
        "date": '2024-02-27',
        "url": 'https://content.whatap.io/24/03/05/003739java-agent-v2228.pdf',
        "docs": '/release-notes/java/java-2_2_28',
    },
    {
        "name": 'Java-agent-v2.2.27',
        "date": '2024-02-06',
        "url": 'https://content.whatap.io/24/03/05/003739java-agent-v2227.pdf',
        "docs": '/release-notes/java/java-2_2_27',
    },
    {
        "name": 'Java-agent-v2.2.26',
        "date": '2024-01-11',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2226.pdf',
        "docs": '/release-notes/java/java-2_2_26',
    },
    {
        "name": 'Java-agent-v2.2.25',
        "date": '2023-12-20',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2225.pdf',
        "docs": '/release-notes/java/java-2_2_25',
    },
    {
        "name": 'Java-agent-v2.2.24',
        "date": '2023-11-30',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2224.pdf',
        "docs": '/release-notes/java/java-2_2_24',
    },
    {
        "name": 'Java-agent-v2.2.23',
        "date": '2023-11-22',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2223.pdf',
        "docs": '/release-notes/java/java-2_2_23',
    },
    {
        "name": 'Java-agent-v2.2.22',
        "date": '2023-11-16',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2222.pdf',
        "docs": '/release-notes/java/java-2_2_22',
    },
    {
        "name": 'Java-agent-v2.2.21',
        "date": '2023-11-02',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2221.pdf',
        "docs": '/release-notes/java/java-2_2_21',
    },
    {
        "name": 'Java-agent-v2.2.20',
        "date": '2023-10-19',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2220.pdf',
        "docs": '/release-notes/java/java-2_2_20',
    },
    {
        "name": 'Java-agent-v2.2.19',
        "date": '2023-10-10',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2219.pdf',
        "docs": '/release-notes/java/java-2_2_19',
    },
    {
        "name": 'Java-agent-v2.2.18',
        "date": '2023-09-26',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2218.pdf',
        "docs": '/release-notes/java/java-2_2_18',
    },
    {
        "name": 'Java-agent-v2.2.17',
        "date": '2023-09-18',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2217.pdf',
        "docs": '/release-notes/java/java-2_2_17',
    },
    {
        "name": 'Java-agent-v2.2.16',
        "date": '2023-09-08',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2216.pdf',
        "docs": '/release-notes/java/java-2_2_16',
    },
    {
        "name": 'Java-agent-v2.2.15',
        "date": '2023-08-31',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2215.pdf',
        "docs": '/release-notes/java/java-2_2_15',
    },
    {
        "name": 'Java-agent-v2.2.14',
        "date": '2023-08-17',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2214.pdf',
        "docs": '/release-notes/java/java-2_2_14',
    },
    {
        "name": 'Java-agent-v2.2.13',
        "date": '2023-08-08',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2213.pdf',
        "docs": '/release-notes/java/java-2_2_13',
    },
    {
        "name": 'Java-agent-v2.2.12',
        "date": '2023-07-21',
        "url": 'https://content.whatap.io/24/02/01/065717java-agent-v2212.pdf',
        "docs": '/release-notes/java/java-2_2_12',
    },
    {
        "name": 'Java-agent-v2.2.11',
        "date": '2023-07-10',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v2211.pdf',
        "docs": '/release-notes/java/java-2_2_11',
    },
    {
        "name": 'Java-agent-v2.2.10',
        "date": '2023-06-29',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v2210.pdf',
        "docs": '/release-notes/java/java-2_2_10',
    },
    {
        "name": 'Java-agent-v2.2.09',
        "date": '2023-06-16',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v229.pdf',
        "docs": '/release-notes/java/java-2_2_9',
    },
    {
        "name": 'Java-agent-v2.2.08',
        "date": '2023-06-09',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v228.pdf',
        "docs": '/release-notes/java/java-2_2_8',
    },
    {
        "name": 'Java-agent-v2.2.07',
        "date": '2023-06-05',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v227.pdf',
        "docs": '/release-notes/java/java-2_2_7',
    },
    {
        "name": 'Java-agent-v2.2.06',
        "date": '2023-06-01',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v226.pdf',
        "docs": '/release-notes/java/java-2_2_6',
    },
    {
        "name": 'Java-agent-v2.2.05',
        "date": '2023-05-30',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v225.pdf',
        "docs": '/release-notes/java/java-2_2_5',
    },
    {
        "name": 'Java-agent-v2.2.04',
        "date": '2023-05-25',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v224.pdf',
        "docs": '/release-notes/java/java-2_2_4',
    },
    {
        "name": 'Java-agent-v2.2.03',
        "date": '2023-02-14',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v223.pdf',
        "docs": '/release-notes/java/java-2_2_3',
    },
    {
        "name": 'Java-agent-v2.2.02',
        "date": '2022-12-21',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v222.pdf',
        "docs": '/release-notes/java/java-2_2_2',
    },
    {
        "name": 'Java-agent-v2.2.0',
        "date": '2022-11-01',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v220.pdf',
        "docs": '/release-notes/java/java-2_2_0',
    },
    {
        "name": 'Java-agent-v2.1.3',
        "date": '2022-09-01',
        "url": 'https://content.whatap.io/24/02/01/065716java-agent-v213.pdf',
        "docs": '/release-notes/java/java-2_1_3',
    },
    {
        "name": 'Java-agent-v2.1.2',
        "date": '2022-08-01',
        "url": 'https://content.whatap.io/24/02/01/065715java-agent-v212.pdf',
        "docs": '/release-notes/java/java-2_1_2',
    },
    {
        "name": 'Java-agent-v2.1.1',
        "date": '2022-07-12',
        "url": 'https://content.whatap.io/24/02/01/065715java-agent-v211.pdf',
        "docs": '/release-notes/java/java-2_1_1',
    },
    {
        "name": 'Java-agent-v2.1.0',
        "date": '2022-12-15',
        "url": 'https://content.whatap.io/24/02/01/065715java-agent-v210.pdf',
        "docs": '/release-notes/java/java-2_1_0',
    },
];

const javaBatchList = [
    {
        "name": "java-batch-agent-v2.2.25",
        "date": "2024-08-20",
        "url": "https://content.whatap.io/24/09/02/052626java-batch-agent-v2225.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_25",
    },
    {
        "name": "java-batch-agent-v2.2.24",
        "date": "2024-02-27",
        "url": "https://content.whatap.io/24/03/05/003514java-batch-agent-v2224.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_24",
    },
    {
        "name": "java-batch-agent-v2.2.23",
        "date": "2024-02-06",
        "url": "https://content.whatap.io/24/03/05/003514java-batch-agent-v2223.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_23",
    },
    {
        "name": "java-batch-agent-v2.2.22",
        "date": "2023-12-20",
        "url": "https://content.whatap.io/24/02/01/065717java-batch-agent-v2222.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_22",
    },
    {
        "name": "java-batch-agent-v2.2.21",
        "date": "2023-11-23",
        "url": "https://content.whatap.io/24/02/01/065717java-batch-agent-v2221.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_21",
    },
    {
        "name": "java-batch-agent-v2.2.20",
        "date": "2023-10-19",
        "url": "https://content.whatap.io/24/02/01/065717java-batch-agent-v2220.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_20",
    },
    {
        "name": "java-batch-agent-v2.2.19",
        "date": "2023-10-10",
        "url": "https://content.whatap.io/24/02/01/065717java-batch-agent-v2219.pdf",
        "docs": "/release-notes/java-batch/java-batch-2_2_19",
    }
]

const phpList = [
    {
        "name": 'php-agent-v2.8.2',
        "date": '2024-09-11',
        "url": 'https://content.whatap.io/24/09/30/002205php-agent-v282.pdf',
        "docs": '/release-notes/php/php-2_8_2',
    },
    {
        "name": 'php-agent-v2.8.1',
        "date": '2024-07-24',
        "url": 'https://content.whatap.io/24/08/01/053544php-agent-v281.pdf',
        "docs": '/release-notes/php/php-2_8_1',
    },
    {
        "name": 'php-agent-v2.8.0',
        "date": '2024-06-19',
        "url": 'https://content.whatap.io/24/07/01/011308php-agent-v280.pdf',
        "docs": '/release-notes/php/php-2_8_0',
    },
    {
        "name": 'php-agent-v2.7.2',
        "date": '2024-03-06',
        "url": 'https://content.whatap.io/24/04/02/012058php-agent-v272.pdf',
        "docs": '/release-notes/php/php-2_7_2',
    },
    {
        "name": 'php-agent-v2.7.1',
        "date": '2024-01-24',
        "url": 'https://content.whatap.io/24/02/01/065722php-agent-v271.pdf',
        "docs": '/release-notes/php/php-2_7_1',
    },
    {
        "name": 'php-agent-v2.7.0',
        "date": '2024-01-10',
        "url": 'https://content.whatap.io/24/02/01/065722php-agent-v270.pdf',
        "docs": '/release-notes/php/php-2_7_0',
    },
    {
        "name": 'php-agent-v2.6.3',
        "date": '2023-11-22',
        "url": 'https://content.whatap.io/24/02/01/065722php-agent-v263.pdf',
        "docs": '/release-notes/php/php-2_6_3',
    },
    {
        "name": 'php-agent-v2.6.2',
        "date": '2023-09-13',
        "url": 'https://content.whatap.io/24/02/01/065722php-agent-v262.pdf',
        "docs": '/release-notes/php/php-2_6_2',
    },
    {
        "name": 'php-agent-v2.6.1',
        "date": '2023-02-15',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v261.pdf',
        "docs": '/release-notes/php/php-2_6_1',
    },
    {
        "name": 'php-agent-v2.6.0',
        "date": '2023-01-04',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v260.pdf',
        "docs": '/release-notes/php/php-2_6_0',
    },
    {
        "name": 'php-agent-v2.5.4',
        "date": '2022-11-16',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v254.pdf',
        "docs": '/release-notes/php/php-2_5_4',
    },
    {
        "name": 'php-agent-v2.5.3',
        "date": '2022-08-31',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v253.pdf',
        "docs": '/release-notes/php/php-2_5_3',
    },
    {
        "name": 'php-agent-v2.5.2',
        "date": '2022-07-06',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v252.pdf',
        "docs": '/release-notes/php/php-2_5_2',
    },
    {
        "name": 'php-agent-v2.5.1',
        "date": '2022-05-18',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v251.pdf',
        "docs": '/release-notes/php/php-2_5_1',
    },
    {
        "name": 'php-agent-v2.5.0',
        "date": '2022-05-18',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v250.pdf',
        "docs": '/release-notes/php/php-2_5_0',
    },
    {
        "name": 'php-agent-v2.4.1',
        "date": '2022-02-16',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v241.pdf',
        "docs": '/release-notes/php/php-2_4_1',
    },
    {
        "name": 'php-agent-v2.4.0',
        "date": '2021-12-16',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v240.pdf',
        "docs": '/release-notes/php/php-2_4_0',
    },
    {
        "name": 'php-agent-v2.3.3',
        "date": '2021-11-10',
        "url": 'https://content.whatap.io/24/02/01/065721php-agent-v233.pdf',
        "docs": '/release-notes/php/php-2_3_3',
    },
]

const nodejsList = [
    {
        "name": 'Node.js-agent-v0.5.4',
        "date": '2024-11-13',
        "url": 'https://github.com/whatap/whatap-docs/releases/download/v2.11.0/nodejs-agent-v0.5.4.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_5_4',
    },
    {
        "name": 'Node.js-agent-v0.5.2',
        "date": '2024-10-17',
        "url": 'https://content.whatap.io/24/10/31/011431nodejs-agent-v052.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_5_2',
    },
    {
        "name": 'Node.js-agent-v0.5.1',
        "date": '2024-08-28',
        "url": 'https://content.whatap.io/24/09/02/052626nodejs-agent-v051.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_5_1',
    },
    {
        "name": 'Node.js-agent-v0.5.0',
        "date": '2024-08-12',
        "url": 'https://content.whatap.io/24/09/02/052626nodejs-agent-v050.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_5_0',
    },
    {
        "name": 'Node.js-agent-v0.4.98',
        "date": '2024-07-09',
        "url": 'https://content.whatap.io/24/08/01/053544nodejs-agent-v0498.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_98',
    },
    {
        "name": 'Node.js-agent-v0.4.97',
        "date": '2024-06-03',
        "url": 'https://content.whatap.io/24/06/03/054323nodejs-agent-v0497.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_97',
    },
    {
        "name": 'Node.js-agent-v0.4.96',
        "date": '2024-05-30',
        "url": 'https://content.whatap.io/24/06/03/054323nodejs-agent-v0496.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_96',
    },
    {
        "name": 'Node.js-agent-v0.4.95',
        "date": '2024-04-29',
        "url": 'https://content.whatap.io/24/05/03/040111nodejs-agent-v0495.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_95',
    },
    {
        "name": 'Node.js-agent-v0.4.94',
        "date": '2024-03-07',
        "url": 'https://content.whatap.io/24/04/02/011011nodejs-agent-v0494.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_94',
    },
    {
        "name": 'Node.js-agent-v0.4.90',
        "date": '2024-02-05',
        "url": 'https://content.whatap.io/24/03/05/003514nodejs-agent-v0490.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_90',
    },
    {
        "name": 'Node.js-agent-v0.4.89',
        "date": '2024-01-22',
        "url": 'https://content.whatap.io/24/02/01/065721nodejs-agent-v0489.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_89',
    },
    {
        "name": 'Node.js-agent-v0.4.88',
        "date": '2024-01-11',
        "url": 'https://content.whatap.io/24/02/01/065721nodejs-agent-v0488.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_88',
    },
    {
        "name": 'Node.js-agent-v0.4.86',
        "date": '2024-01-04',
        "url": 'https://content.whatap.io/24/02/01/065720nodejs-agent-v0486.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_86',
    },
    {
        "name": 'Node.js-agent-v0.4.83',
        "date": '2023-12-11',
        "url": 'https://content.whatap.io/24/02/01/065720nodejs-agent-v0483.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_83',
    },
    {
        "name": 'Node.js-agent-v0.4.81',
        "date": '2023-11-08',
        "url": 'https://content.whatap.io/24/02/01/065720nodejs-agent-v0481.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_81',
    },
    {
        "name": 'Node.js-agent-v0.4.80',
        "date": '2023-10-31',
        "url": 'https://content.whatap.io/24/02/01/065720nodejs-agent-v0480.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_80',
    },
    {
        "name": 'Node.js-agent-v0.4.77',
        "date": '2023-06-23',
        "url": 'https://content.whatap.io/24/02/01/065720nodejs-agent-v0477.pdf',
        "docs": '/release-notes/nodejs/nodejs-0_4_77',
    }
]

const pyList = [
    {
        "name": 'Python-agent-v1.7.2',
        "date": '2024-11-12',
        "url": 'https://github.com/whatap/whatap-docs/releases/download/v2.11.0/python-agent-v1.7.2.pdf',
        "docs": '/release-notes/python/python-1_7_2',
    },
    {
        "name": 'Python-agent-v1.7.1',
        "date": '2024-10-10',
        "url": 'https://content.whatap.io/24/10/31/011431python-agent-v171.pdf',
        "docs": '/release-notes/python/python-1_7_1',
    },
    {
        "name": 'Python-agent-v1.7.0',
        "date": '2024-09-24',
        "url": 'https://content.whatap.io/24/09/30/002205python-agent-v170.pdf',
        "docs": '/release-notes/python/python-1_7_0',
    },
    {
        "name": 'Python-agent-v1.6.10',
        "date": '2024-09-05',
        "url": 'https://content.whatap.io/24/09/30/002205python-agent-v1610.pdf',
        "docs": '/release-notes/python/python-1_6_10',
    },
    {
        "name": 'Python-agent-v1.6.9',
        "date": '2024-09-03',
        "url": 'https://content.whatap.io/24/09/30/002205python-agent-v169.pdf',
        "docs": '/release-notes/python/python-1_6_9',
    },
    {
        "name": 'Python-agent-v1.6.8',
        "date": '2024-08-27',
        "url": 'https://content.whatap.io/24/09/02/052626python-agent-v168.pdf',
        "docs": '/release-notes/python/python-1_6_8',
    },
    {
        "name": 'Python-agent-v1.6.7',
        "date": '2024-08-21',
        "url": 'https://content.whatap.io/24/09/02/052626python-agent-v167.pdf',
        "docs": '/release-notes/python/python-1_6_7',
    },
    {
        "name": 'Python-agent-v1.6.6',
        "date": '2024-06-07',
        "url": 'https://content.whatap.io/24/07/01/011308python-agent-v166.pdf',
        "docs": '/release-notes/python/python-1_6_6',
    },
    {
        "name": 'Python-agent-v1.6.5',
        "date": '2024-05-31',
        "url": 'https://content.whatap.io/24/07/01/011308python-agent-v165.pdf',
        "docs": '/release-notes/python/python-1_6_5',
    },
    {
        "name": 'Python-agent-v1.6.4',
        "date": '2024-05-14',
        "url": 'https://content.whatap.io/24/06/03/054323python-agent-v164.pdf',
        "docs": '/release-notes/python/python-1_6_4',
    },
    {
        "name": 'Python-agent-v1.6.3',
        "date": '2024-04-17',
        "url": 'https://content.whatap.io/24/06/03/054323python-agent-v163.pdf',
        "docs": '/release-notes/python/python-1_6_3',
    },
    {
        "name": 'Python-agent-v1.6.2',
        "date": '2024-03-29',
        "url": 'https://content.whatap.io/24/04/02/011012python-agent-v162.pdf',
        "docs": '/release-notes/python/python-1_6_2',
    },
    {
        "name": 'Python-agent-v1.6.1',
        "date": '2024-03-20',
        "url": 'https://content.whatap.io/24/04/02/011012python-agent-v161.pdf',
        "docs": '/release-notes/python/python-1_6_1',
    },
    {
        "name": 'Python-agent-v1.6.0',
        "date": '2024-03-13',
        "url": 'https://content.whatap.io/24/04/02/011012python-agent-v160.pdf',
        "docs": '/release-notes/python/python-1_6_0',
    },
    {
        "name": 'Python-agent-v1.5.9',
        "date": '2024-03-11',
        "url": 'https://content.whatap.io/24/04/02/011012python-agent-v159.pdf',
        "docs": '/release-notes/python/python-1_5_9',
    },
    {
        "name": 'Python-agent-v1.5.8',
        "date": '2024-02-18',
        "url": 'https://content.whatap.io/24/03/05/003514python-agent-v158.pdf',
        "docs": '/release-notes/python/python-1_5_8',
    },
    {
        "name": 'Python-agent-v1.5.7',
        "date": '2024-02-06',
        "url": 'https://content.whatap.io/24/03/05/003514python-agent-v157.pdf',
        "docs": '/release-notes/python/python-1_5_7',
    },
    {
        "name": 'Python-agent-v1.5.6',
        "date": '2024-02-02',
        "url": 'https://content.whatap.io/24/03/05/003514python-agent-v156.pdf',
        "docs": '/release-notes/python/python-1_5_6',
    },
    {
        "name": 'Python-agent-v1.5.5',
        "date": '2024-02-01',
        "url": 'https://content.whatap.io/24/03/05/003514python-agent-v155.pdf',
        "docs": '/release-notes/python/python-1_5_5',
    },
    {
        "name": 'Python-agent-v1.5.4',
        "date": '2024-01-09',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v154.pdf',
        "docs": '/release-notes/python/python-1_5_4',
    },
    {
        "name": 'Python-agent-v1.5.3',
        "date": '2024-01-05',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v153.pdf',
        "docs": '/release-notes/python/python-1_5_3',
    },
    {
        "name": 'Python-agent-v1.5.2',
        "date": '2024-01-03',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v152.pdf',
        "docs": '/release-notes/python/python-1_5_2',
    },
    {
        "name": 'Python-agent-v1.5.0',
        "date": '2023-12-29',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v150.pdf',
        "docs": '/release-notes/python/python-1_5_0',
    },
    {
        "name": 'Python-agent-v1.4.9',
        "date": '2023-12-28',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v149.pdf',
        "docs": '/release-notes/python/python-1_4_9',
    },
    {
        "name": 'Python-agent-v1.4.8',
        "date": '2023-10-25',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v148.pdf',
        "docs": '/release-notes/python/python-1_4_8',
    },
    {
        "name": 'Python-agent-v1.4.6',
        "date": '2023-10-12',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v146.pdf',
        "docs": '/release-notes/python/python-1_4_6',
    },
    {
        "name": 'Python-agent-v1.4.4',
        "date": '2023-08-17',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v144.pdf',
        "docs": '/release-notes/python/python-1_4_4',
    },
    {
        "name": 'Python-agent-v1.4.3',
        "date": '2023-08-02',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v143.pdf',
        "docs": '/release-notes/python/python-1_4_3',
    },
    {
        "name": 'Python-agent-v1.4.2',
        "date": '2023-07-12',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v142.pdf',
        "docs": '/release-notes/python/python-1_4_2',
    },
    {
        "name": 'Python-agent-v1.4.1',
        "date": '2023-07-10',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v141.pdf',
        "docs": '/release-notes/python/python-1_4_1',
    },
    {
        "name": 'Python-agent-v1.4.0',
        "date": '2023-07-04',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v140.pdf',
        "docs": '/release-notes/python/python-1_4_0',
    },
    {
        "name": 'Python-agent-v1.3.9',
        "date": '2023-06-28',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v139.pdf',
        "docs": '/release-notes/python/python-1_3_9',
    },
    {
        "name": 'Python-agent-v1.3.6',
        "date": '2023-05-18',
        "url": 'https://content.whatap.io/24/02/01/065723python-agent-v136.pdf',
        "docs": '/release-notes/python/python-1_3_6',
    },
    {
        "name": 'Python-agent-v1.3.4',
        "date": '2023-04-26',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v134.pdf',
        "docs": '/release-notes/python/python-1_3_4',
    },
    {
        "name": 'Python-agent-v1.3.3',
        "date": '2023-04-10',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v133.pdf',
        "docs": '/release-notes/python/python-1_3_4',
    },
    {
        "name": 'Python-agent-v1.3.2',
        "date": '2023-03-29',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v132.pdf',
        "docs": '/release-notes/python/python-1_3_2',
    },
    {
        "name": 'Python-agent-v1.3.1',
        "date": '2023-03-15',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v131.pdf',
        "docs": '/release-notes/python/python-1_3_1',
    },
    {
        "name": 'Python-agent-v1.3.0',
        "date": '2023-01-19',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v130.pdf',
        "docs": '/release-notes/python/python-1_3_0',
    },
    {
        "name": 'Python-agent-v1.2.4',
        "date": '2022-09-26',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v124.pdf',
        "docs": '/release-notes/python/python-1_2_4',
    },
    {
        "name": 'Python-agent-v1.2.1',
        "date": '2022-07-18',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v121.pdf',
        "docs": '/release-notes/python/python-1_2_1',
    },
    {
        "name": 'Python-agent-v1.2.0',
        "date": '2022-02-07',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v120.pdf',
        "docs": '/release-notes/python/python-1_2_0',
    },
    {
        "name": 'Python-agent-v1.1.6',
        "date": '2022-01-25',
        "url": 'https://content.whatap.io/24/02/01/065722python-agent-v116.pdf',
        "docs": '/release-notes/python/python-1_1_6',
    },
];

const dotnetList = [
    {
        "name": '.NET-agent-v2.3.5',
        "date": '2024-11-04',
        "url": 'https://github.com/whatap/whatap-docs/releases/download/v2.11.0/dotnet-agent-v2.3.5.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_3_5',
    },
    {
        "name": '.NET-agent-v2.3.4',
        "date": '2024-10-02',
        "url": 'https://content.whatap.io/24/10/31/011431dotnet-agent-v234.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_3_4',
    },
    {
        "name": '.NET-agent-v2.3.3',
        "date": '2024-09-25',
        "url": 'https://content.whatap.io/24/09/30/002205dotnet-agent-v233.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_3_3',
    },
    {
        "name": '.NET-agent-v2.3.2',
        "date": '2024-09-05',
        "url": 'https://content.whatap.io/24/09/30/002205dotnet-agent-v232.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_3_2',
    },
    {
        "name": '.NET-agent-v2.3.1',
        "date": '2024-08-26',
        "url": 'https://content.whatap.io/24/09/02/052625dotnet-agent-v231.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_3_1',
    },
    {
        "name": '.NET-agent-v2.3.0',
        "date": '2024-07-31',
        "url": 'https://content.whatap.io/24/08/01/053543dotnet-agent-v230.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_3_0',
    },
    {
        "name": '.NET-agent-v2.2.9',
        "date": '2024-07-05',
        "url": 'https://content.whatap.io/24/08/01/053543dotnet-agent-v229.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_9',
    },
    {
        "name": '.NET-agent-v2.2.8',
        "date": '2024-06-19',
        "url": 'https://content.whatap.io/24/07/01/011308dotnet-agent-v228.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_8',
    },
    {
        "name": '.NET-agent-v2.2.7',
        "date": '2024-06-10',
        "url": 'https://content.whatap.io/24/07/01/011308dotnet-agent-v227.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_7',
    },
    {
        "name": '.NET-agent-v2.2.6',
        "date": '2024-05-24',
        "url": 'https://content.whatap.io/24/06/03/054322dotnet-agent-v226.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_6',
    },
    {
        "name": '.NET-agent-v2.2.5',
        "date": '2024-05-08',
        "url": 'https://content.whatap.io/24/06/03/054322dotnet-agent-v225.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_5',
    },
    {
        "name": '.NET-agent-v2.2.4',
        "date": '2024-04-30',
        "url": 'https://content.whatap.io/24/05/03/040110dotnet-agent-v224.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_4',
    },
    {
        "name": '.NET-agent-v2.2.3',
        "date": '2024-04-24',
        "url": 'https://content.whatap.io/24/05/03/040110dotnet-agent-v223.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_3',
    },
    {
        "name": '.NET-agent-v2.2.2',
        "date": '2024-04-18',
        "url": 'https://content.whatap.io/24/05/03/040110dotnet-agent-v222.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_2',
    },
    {
        "name": '.NET-agent-v2.2.1',
        "date": '2024-04-09',
        "url": 'https://content.whatap.io/24/05/03/040110dotnet-agent-v221.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_1',
    },
    {
        "name": '.NET-agent-v2.2.0',
        "date": '2023-11-10',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v220.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_2_0',
    },
    {
        "name": '.NET-agent-v2.1.9',
        "date": '2023-11-03',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v219.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_9',
    },
    {
        "name": '.NET-agent-v2.1.8',
        "date": '2023-10-24',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v218.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_8',
    },
    {
        "name": '.NET-agent-v2.1.7',
        "date": '2023-10-16',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v217.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_7',
    },
    {
        "name": '.NET-agent-v2.1.6',
        "date": '2023-10-05',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v216.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_6',
    },
    {
        "name": '.NET-agent-v2.1.5',
        "date": '2023-09-13',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v215.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_5',
    },
    {
        "name": '.NET-agent-v2.1.4',
        "date": '2023-08-29',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v214.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_4',
    },
    {
        "name": '.NET-agent-v2.1.3',
        "date": '2023-08-16',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v213.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_3',
    },
    {
        "name": '.NET-agent-v2.1.2',
        "date": '2023-07-20',
        "url": 'https://content.whatap.io/24/02/01/065714dotnet-agent-v212.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_2',
    },
    {
        "name": '.NET-agent-v2.1.1',
        "date": '2023-07-17',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v211.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_1',
    },
    {
        "name": '.NET-agent-v2.1.0',
        "date": '2023-07-06',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v210.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_1_0',
    },
    {
        "name": '.NET-agent-v2.0.9',
        "date": '2023-06-09',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v209.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_9',
    },
    {
        "name": '.NET-agent-v2.0.8',
        "date": '2023-05-31',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v208.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_8',
    },
    {
        "name": '.NET-agent-v2.0.7',
        "date": '2023-05-30',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v207.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_7',
    },
    {
        "name": '.NET-agent-v2.0.6',
        "date": '2023-05-02',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v206.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_6',
    },
    {
        "name": '.NET-agent-v2.0.5',
        "date": '2022-01-10',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v205.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_5',
    },
    {
        "name": '.NET-agent-v2.0.4',
        "date": '2021-05-10',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v204.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_4',
    },
    {
        "name": '.NET-agent-v2.0.3',
        "date": '2021-04-23',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v203.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_3',
    },
    {
        "name": '.NET-agent-v2.0.2',
        "date": '2021-04-02',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v202.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_2',
    },
    {
        "name": '.NET-agent-v2.0.1',
        "date": '2021-02-09',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v201.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_1',
    },
    {
        "name": '.NET-agent-v2.0.0',
        "date": '2020-12-16',
        "url": 'https://content.whatap.io/24/02/01/065713dotnet-agent-v200.pdf',
        "docs": '/release-notes/dotnet/dotnet-2_0_0',
    },
];

const goList = [
    {
        "name": 'Go-agent-v0.4.3',
        "date": '2024-10-16',
        "url": 'https://content.whatap.io/24/10/31/011431go-agent-v043.pdf',
        "docs": '/release-notes/golang/golang-0_4_3',
    },
    {
        "name": 'Go-agent-v0.4.2',
        "date": '2024-09-06',
        "url": 'https://content.whatap.io/24/09/30/002205go-agent-v042.pdf',
        "docs": '/release-notes/golang/golang-0_4_2',
    },
    {
        "name": 'Go-agent-v0.4.1',
        "date": '2024-08-28',
        "url": 'https://content.whatap.io/24/09/02/052625go-agent-v041.pdf',
        "docs": '/release-notes/golang/golang-0_4_1',
    },
    {
        "name": 'Go-agent-v0.4.0',
        "date": '2024-06-19',
        "url": 'https://content.whatap.io/24/07/01/011308go-agent-v040.pdf',
        "docs": '/release-notes/golang/golang-0_4_0',
    },
    {
        "name": 'Go-agent-v0.3.3',
        "date": '2024-03-14',
        "url": 'https://content.whatap.io/24/04/02/011011Go-agent-v033.pdf',
        "docs": '/release-notes/golang/golang-0_3_3',
    },
    {
        "name": 'Go-agent-v0.3.2',
        "date": '2024-03-06',
        "url": 'https://content.whatap.io/24/04/02/011011Go-agent-v032.pdf',
        "docs": '/release-notes/golang/golang-0_3_2',
    },
    {
        "name": 'Go-agent-v0.3.1',
        "date": '2024-01-24',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v031.pdf',
        "docs": '/release-notes/golang/golang-0_3_1',
    },
    {
        "name": 'Go-agent-v0.3.0',
        "date": '2024-01-10',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v030.pdf',
        "docs": '/release-notes/golang/golang-0_3_0',
    },
    {
        "name": 'Go-agent-v0.2.4',
        "date": '2023-11-22',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v024.pdf',
        "docs": '/release-notes/golang/golang-0_2_4',
    },
    {
        "name": 'Go-agent-v0.2.3',
        "date": '2023-09-13',
        "url": 'https://content.whatap.io/24/02/01/065715go-agent-v023.pdf',
        "docs": '/release-notes/golang/golang-0_2_3',
    },
    {
        "name": 'Go-agent-v0.2.2',
        "date": '2023-06-21',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v022.pdf',
        "docs": '/release-notes/golang/golang-0_2_2',
    },
    {
        "name": 'Go-agent-v0.1.14',
        "date": '2022-12-14',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v0114.pdf',
        "docs": '/release-notes/golang/golang-0_1_14',
    },
    {
        "name": 'Go-agent-v0.1.13',
        "date": '2022-08-31',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v0113.pdf',
        "docs": '/release-notes/golang/golang-0_1_13',
    },
    {
        "name": 'Go-agent-v0.1.12',
        "date": '2022-08-02',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v0112.pdf',
        "docs": '/release-notes/golang/golang-0_1_12',
    },
    {
        "name": 'Go-agent-v0.1.11',
        "date": '2022-05-26',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v0111.pdf',
        "docs": '/release-notes/golang/golang-0_1_11',
    },
    {
        "name": 'Go-agent-v0.1.10',
        "date": '2022-05-12',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v0110.pdf',
        "docs": '/release-notes/golang/golang-0_1_10',
    },
    {
        "name": 'Go-agent-v0.1.09',
        "date": '2022-04-27',
        "url": 'https://content.whatap.io/24/02/01/065715Go-agent-v019.pdf',
        "docs": '/release-notes/golang/golang-0_1_9',
    },
    {
        "name": 'Go-agent-v0.1.08',
        "date": '2022-01-19',
        "url": 'https://content.whatap.io/24/02/01/065714Go-agent-v018.pdf',
        "docs": '/release-notes/golang/golang-0_1_8',
    },
    {
        "name": 'Go-agent-v0.1.07',
        "date": '2022-01-04',
        "url": 'https://content.whatap.io/24/02/01/065714Go-agent-v017.pdf',
        "docs": '/release-notes/golang/golang-0_1_7',
    },
    {
        "name": 'Go-agent-v0.1.06',
        "date": '2021-11-23',
        "url": 'https://content.whatap.io/24/02/01/065714Go-agent-v016.pdf',
        "docs": '/release-notes/golang/golang-0_1_6',
    },
    {
        "name": 'Go-agent-v0.1.05',
        "date": '2021-09-01',
        "url": 'https://content.whatap.io/24/02/01/065714Go-agent-v015.pdf',
        "docs": '/release-notes/golang/golang-0_1_5',
    },
];

const serverList = [
    {
        "name": "Server-agent-v2.7.2",
        "date": "2024-11-27",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/server-agent-v2.7.2.pdf",
        "docs": "/release-notes/server/server-2_7_2"
    },
    {
        "name": "Server-agent-v2.7.1",
        "date": "2024-11-13",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/server-agent-v2.7.1.pdf",
        "docs": "/release-notes/server/server-2_7_1"
    },
    {
        "name": "Server-agent-v2.7.0",
        "date": "2024-10-22",
        "url": "https://content.whatap.io/24/10/31/011431server-agent-v270.pdf",
        "docs": "/release-notes/server/server-2_7_0"
    },
    {
        "name": "Server-agent-v2.6.9",
        "date": "2024-10-04",
        "url": "https://content.whatap.io/24/10/31/011431server-agent-v269.pdf",
        "docs": "/release-notes/server/server-2_6_9"
    },
    {
        "name": "Server-agent-v2.6.8",
        "date": "2024-09-20",
        "url": "https://content.whatap.io/24/09/30/002205server-agent-v268.pdf",
        "docs": "/release-notes/server/server-2_6_8"
    },
    {
        "name": "Server-agent-v2.6.7",
        "date": "2024-09-03",
        "url": "https://content.whatap.io/24/09/30/002205server-agent-v267.pdf",
        "docs": "/release-notes/server/server-2_6_7"
    },
    {
        "name": "Server-agent-v2.6.6",
        "date": "2024-08-19",
        "url": "https://content.whatap.io/24/09/02/052626server-agent-v266.pdf",
        "docs": "/release-notes/server/server-2_6_6"
    },
    {
        "name": "Server-agent-v2.6.5",
        "date": "2024-08-09",
        "url": "https://content.whatap.io/24/09/02/052626server-agent-v265.pdf",
        "docs": "/release-notes/server/server-2_6_5"
    },
    {
        "name": "Server-agent-v2.6.4",
        "date": "2024-07-29",
        "url": "https://content.whatap.io/24/08/01/053544server-agent-v264.pdf",
        "docs": "/release-notes/server/server-2_6_4"
    },
    {
        "name": "Server-agent-v2.6.3",
        "date": "2024-07-24",
        "url": "https://content.whatap.io/24/08/01/053544server-agent-v263.pdf",
        "docs": "/release-notes/server/server-2_6_3"
    },
    {
        "name": "Server-agent-v2.6.2",
        "date": "2024-07-16",
        "url": "https://content.whatap.io/24/08/01/053544server-agent-v262.pdf",
        "docs": "/release-notes/server/server-2_6_2"
    },
    {
        "name": "Server-agent-v2.6.1",
        "date": "2024-06-26",
        "url": "https://content.whatap.io/24/07/01/011308server-agent-v261.pdf",
        "docs": "/release-notes/server/server-2_6_1"
    },
    {
        "name": "Server-agent-v2.6.0",
        "date": "2024-06-18",
        "url": "https://content.whatap.io/24/07/01/011308server-agent-v260.pdf",
        "docs": "/release-notes/server/server-2_6_0"
    },
    {
        "name": "Server-agent-v2.5.9",
        "date": "2024-05-24",
        "url": "https://content.whatap.io/24/06/03/054323server-agent-v259.pdf",
        "docs": "/release-notes/server/server-2_5_9"
    },
    {
        "name": "Server-agent-v2.5.8",
        "date": "2024-05-21",
        "url": "https://content.whatap.io/24/06/03/054323server-agent-v258.pdf",
        "docs": "/release-notes/server/server-2_5_8"
    },
    {
        "name": "Server-agent-v2.5.7",
        "date": "2024-05-14",
        "url": "https://content.whatap.io/24/06/03/054323server-agent-v257.pdf",
        "docs": "/release-notes/server/server-2_5_7"
    },
    {
        "name": "Server-agent-v2.5.5",
        "date": "2024-03-13",
        "url": "https://content.whatap.io/24/04/02/011012server-agent-v255.pdf",
        "docs": "/release-notes/server/server-2_5_5"
    },
    {
        "name": "Server-agent-v2.5.4",
        "date": "2024-03-11",
        "url": "https://content.whatap.io/24/04/02/011012server-agent-v254.pdf",
        "docs": "/release-notes/server/server-2_5_4"
    },
    {
        "name": "Server-agent-v2.5.3",
        "date": "2024-03-07",
        "url": "https://content.whatap.io/24/04/02/011012server-agent-v253.pdf",
        "docs": "/release-notes/server/server-2_5_3"
    },
    {
        "name": "Server-agent-v2.5.2",
        "date": "2024-02-13",
        "url": "https://content.whatap.io/24/03/05/003514server-agent-v252.pdf",
        "docs": "/release-notes/server/server-2_5_2"
    },
    {
        "name": "Server-agent-v2.5.1",
        "date": "2024-01-26",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v251.pdf",
        "docs": "/release-notes/server/server-2_5_1"
    },
    {
        "name": "Server-agent-v2.5.0",
        "date": "2024-01-24",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v250.pdf",
        "docs": "/release-notes/server/server-2_5_0"
    },
    {
        "name": "Server-agent-v2.4.9",
        "date": "2023-12-29",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v249.pdf",
        "docs": "/release-notes/server/server-2_4_9"
    },
    {
        "name": "Server-agent-v2.4.8",
        "date": "2023-12-21",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v248.pdf",
        "docs": "/release-notes/server/server-2_4_8"
    },
    {
        "name": "Server-agent-v2.4.7",
        "date": "2023-12-19",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v247.pdf",
        "docs": "/release-notes/server/server-2_4_7"
    },
    {
        "name": "Server-agent-v2.4.6",
        "date": "2023-12-14",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v246.pdf",
        "docs": "/release-notes/server/server-2_4_6"
    },
    {
        "name": "Server-agent-v2.4.5",
        "date": "2023-11-29",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v245.pdf",
        "docs": "/release-notes/server/server-2_4_5"
    },
    {
        "name": "Server-agent-v2.4.4",
        "date": "2023-11-08",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v244.pdf",
        "docs": "/release-notes/server/server-2_4_4"
    },
    {
        "name": "Server-agent-v2.4.3",
        "date": "2023-10-31",
        "url": "https://content.whatap.io/24/02/01/065726server-agent-v243.pdf",
        "docs": "/release-notes/server/server-2_4_3"
    },
    {
        "name": "Server-agent-v2.4.2",
        "date": "2023-10-06",
        "url": "https://content.whatap.io/24/02/01/065725server-agent-v242.pdf",
        "docs": "/release-notes/server/server-2_4_2"
    },
    {
        "name": "Server-agent-v2.4.1",
        "date": "2023-10-04",
        "url": "https://content.whatap.io/24/02/01/065725server-agent-v241.pdf",
        "docs": "/release-notes/server/server-2_4_1"
    },
    {
        "name": "Server-agent-v2.4.0",
        "date": "2023-07-24",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v240.pdf",
        "docs": "/release-notes/server/server-2_4_0"
    },
    {
        "name": "Server-agent-v2.3.9",
        "date": "2023-07-06",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v239.pdf",
        "docs": "/release-notes/server/server-2_3_9"
    },
    {
        "name": "Server-agent-v2.3.8",
        "date": "2023-06-19",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v238.pdf",
        "docs": "/release-notes/server/server-2_3_8"
    },
    {
        "name": "Server-agent-v2.3.7",
        "date": "2023-06-08",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v237.pdf",
        "docs": "/release-notes/server/server-2_3_7"
    },
    {
        "name": "Server-agent-v2.3.6",
        "date": "2023-05-30",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v236.pdf",
        "docs": "/release-notes/server/server-2_3_6"
    },
    {
        "name": "Server-agent-v2.3.4",
        "date": "2023-04-18",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v234.pdf",
        "docs": "/release-notes/server/server-2_3_4"
    },
    {
        "name": "Server-agent-v2.3.3",
        "date": "2023-02-28",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v233.pdf",
        "docs": "/release-notes/server/server-2_3_3"
    },
    {
        "name": "Server-agent-v2.3.2",
        "date": "2023-02-21",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v232.pdf",
        "docs": "/release-notes/server/server-2_3_2"
    },
    {
        "name": "Server-agent-v2.3.1",
        "date": "2023-01-25",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v231.pdf",
        "docs": "/release-notes/server/server-2_3_1"
    },
    {
        "name": "Server-agent-v2.3.0",
        "date": "2023-01-11",
        "url": "https://content.whatap.io/24/02/01/065725Server-agent-v230.pdf",
        "docs": "/release-notes/server/server-2_3_0"
    },
    {
        "name": "Server-agent-v2.2.9",
        "date": "2022-12-14",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v229.pdf",
        "docs": "/release-notes/server/server-2_2_9"
    },
    {
        "name": "Server-agent-v2.2.8",
        "date": "2022-11-29",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v228.pdf",
        "docs": "/release-notes/server/server-2_2_8"
    },
    {
        "name": "Server-agent-v2.2.7",
        "date": "2022-10-04",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v227.pdf",
        "docs": "/release-notes/server/server-2_2_7"
    },
    {
        "name": "Server-agent-v2.2.6",
        "date": "2022-08-24",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v226.pdf",
        "docs": "/release-notes/server/server-2_2_6"
    },
    {
        "name": "Server-agent-v2.2.5",
        "date": "2022-08-16",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v225.pdf",
        "docs": "/release-notes/server/server-2_2_5"
    },
    {
        "name": "Server-agent-v2.2.4",
        "date": "2022-07-29",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v224.pdf",
        "docs": "/release-notes/server/server-2_2_4"
    },
    {
        "name": "Server-agent-v2.2.3",
        "date": "2022-06-16",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v223.pdf",
        "docs": "/release-notes/server/server-2_2_3"
    },
    {
        "name": "Server-agent-v2.2.2",
        "date": "2022-06-08",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v222.pdf",
        "docs": "/release-notes/server/server-2_2_2"
    },
    {
        "name": "Server-agent-v2.2.1",
        "date": "2022-05-29",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v221.pdf",
        "docs": "/release-notes/server/server-2_2_1"
    },
    {
        "name": "Server-agent-v2.2.0",
        "date": "2022-05-24",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v220.pdf",
        "docs": "/release-notes/server/server-2_2_0"
    },
    {
        "name": "Server-agent-v2.1.9",
        "date": "2022-05-14",
        "url": "https://content.whatap.io/24/02/01/065724Server-agent-v219.pdf",
        "docs": "/release-notes/server/server-2_1_9"
    },
    {
        "name": "Server-agent-v2.1.8",
        "date": "2022-04-22",
        "url": "https://content.whatap.io/24/02/01/065723Server-agent-v218.pdf",
        "docs": "/release-notes/server/server-2_1_8"
    },
    {
        "name": "Server-agent-v2.1.7",
        "date": "2023-03-17",
        "url": "https://content.whatap.io/24/02/01/065723Server-agent-v217.pdf",
        "docs": "/release-notes/server/server-2_1_7"
    }
];

const serveraixList = [
    {
        "name": "Server-AIX-agent-v1.3.6",
        "date": "2024-11-11",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/server-aix-agent-v1.3.6.pdf",
        "docs": "/release-notes/server-aix/server-aix-1_3_6"
    },
    {
        "name": "Server-AIX-agent-v1.3.5",
        "date": "2024-10-17",
        "url": "https://content.whatap.io/24/10/31/011431server-aix-agent-v135.pdf",
        "docs": "/release-notes/server-aix/server-aix-1_3_5"
    },
    {
        "name": "Server-AIX-agent-v1.3.4",
        "date": "2024-09-19",
        "url": "https://content.whatap.io/24/09/30/002205server-aix-agent-v134.pdf",
        "docs": "/release-notes/server-aix/server-aix-1_3_4"
    },
    {
        "name": "Server-AIX-agent-v1.2.7",
        "date": "2024-04-09",
        "url": "https://content.whatap.io/24/07/01/011308server-aix-agent-v127.pdf",
        "docs": "/release-notes/server-aix/server-aix-1_2_7"
    },
]

const serversolarisList = [
    {
        "name": "Server-Solaris-agent-v1.3.6",
        "date": "2024-10-11",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/server-solaris-agent-v1.3.6.pdf",
        "docs": "/release-notes/server-solaris/server-solaris-1_3_6"
    },
    {
        "name": "Server-Solaris-agent-v1.3.5",
        "date": "2024-10-17",
        "url": "https://content.whatap.io/24/10/31/011431server-solaris-agent-v135.pdf",
        "docs": "/release-notes/server-solaris/server-solaris-1_3_5"
    },
    {
        "name": "Server-Solaris-agent-v1.3.4",
        "date": "2024-09-19",
        "url": "https://content.whatap.io/24/09/30/002205server-solaris-agent-v134.pdf",
        "docs": "/release-notes/server-solaris/server-solaris-1_3_4"
    }
]

const serverhpuxList = [
    {
        "name": "Server-HP-UX-agent-v1.3.4",
        "date": "2024-09-19",
        "url": "https://content.whatap.io/24/09/30/002205server-hpux-agent-v134.pdf",
        "docs": "/release-notes/server-hpux/server-hpux-1_3_4"
    }
]

const k8sList = [
    {
        "name": "Kubernetes-agent-v1.7.16",
        "date": "2024-11-22",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/k8s-agent-v1.7.16.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_16"
    },
    {
        "name": "Kubernetes-agent-v1.7.15",
        "date": "2024-10-30",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/k8s-agent-v1.7.15.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_15"
    },
    {
        "name": "Kubernetes-agent-v1.7.14",
        "date": "2024-10-29",
        "url": "https://content.whatap.io/24/10/31/011431k8s-agent-v1714.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_14"
    },
    {
        "name": "Kubernetes-agent-v1.7.13",
        "date": "2024-10-21",
        "url": "https://content.whatap.io/24/10/31/011431k8s-agent-v1713.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_13"
    },
    {
        "name": "Kubernetes-agent-v1.7.12",
        "date": "2024-09-30",
        "url": "https://content.whatap.io/24/10/31/011431k8s-agent-v1712.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_12"
    },
    {
        "name": "Kubernetes-agent-v1.7.11",
        "date": "2024-09-11",
        "url": "https://content.whatap.io/24/09/30/002205k8s-agent-v1711.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_11"
    },
    {
        "name": "Kubernetes-agent-v1.7.10",
        "date": "2024-08-29",
        "url": "https://content.whatap.io/24/09/30/002205k8s-agent-v1710.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_10"
    },
    {
        "name": "Kubernetes-agent-v1.7.9",
        "date": "2024-08-19",
        "url": "https://content.whatap.io/24/09/02/052626k8s-agent-v179.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_9"
    },
    {
        "name": "Kubernetes-agent-v1.7.8",
        "date": "2024-07-24",
        "url": "https://content.whatap.io/24/08/01/053544k8s-agent-v178.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_8"
    },
    {
        "name": "Kubernetes-agent-v1.7.7",
        "date": "2024-07-11",
        "url": "https://content.whatap.io/24/08/01/053544k8s-agent-v177.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_7"
    },
    {
        "name": "Kubernetes-agent-v1.7.6",
        "date": "2024-07-01",
        "url": "https://content.whatap.io/24/08/01/053543k8s-agent-v176.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_6"
    },
    {
        "name": "Kubernetes-agent-v1.7.5",
        "date": "2024-06-18",
        "url": "https://content.whatap.io/24/07/01/011308k8s-agent-v175.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_5"
    },
    {
        "name": "Kubernetes-agent-v1.7.4",
        "date": "2024-06-07",
        "url": "https://content.whatap.io/24/07/01/011308k8s-agent-v174.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_4"
    },
    {
        "name": "Kubernetes-agent-v1.7.3",
        "date": "2024-06-04",
        "url": "https://content.whatap.io/24/07/01/011308k8s-agent-v173.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_3"
    },
    {
        "name": "Kubernetes-agent-v1.7.2",
        "date": "2024-06-02",
        "url": "https://content.whatap.io/24/07/01/011308k8s-agent-v172.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_2"
    },
    {
        "name": "Kubernetes-agent-v1.7.1",
        "date": "2024-05-17",
        "url": "https://content.whatap.io/24/06/03/054323k8s-agent-v171.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_1"
    },
    {
        "name": "Kubernetes-agent-v1.7.0",
        "date": "2024-05-13",
        "url": "https://content.whatap.io/24/06/03/054323k8s-agent-v170.pdf",
        "docs": "/release-notes/k8s/k8s-1_7_0"
    },
    {
        "name": "Kubernetes-agent-v1.6.1",
        "date": "2024-04-17",
        "url": "https://content.whatap.io/24/05/03/040111k8s-agent-v161.pdf",
        "docs": "/release-notes/k8s/k8s-1_6_1"
    },
    {
        "name": "Kubernetes-agent-v1.6.0",
        "date": "2024-04-05",
        "url": "https://content.whatap.io/24/05/03/040111k8s-agent-v160.pdf",
        "docs": "/release-notes/k8s/k8s-1_6_0"
    },
    {
        "name": "Kubernetes-agent-v1.5.9",
        "date": "2024-04-04",
        "url": "https://content.whatap.io/24/05/03/040110k8s-agent-v159.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_9"
    },
    {
        "name": "Kubernetes-agent-v1.5.8",
        "date": "2024-03-26",
        "url": "https://content.whatap.io/24/04/02/011011k8s-agent-v158.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_8"
    },
    {
        "name": "Kubernetes-agent-v1.5.7",
        "date": "2024-03-07",
        "url": "https://content.whatap.io/24/04/02/011011k8s-agent-v157.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_7"
    },
    {
        "name": "Kubernetes-agent-v1.5.6",
        "date": "2024-02-23",
        "url": "https://content.whatap.io/24/03/05/003514k8s-agent-v156.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_6"
    },
    {
        "name": "Kubernetes-agent-v1.5.5",
        "date": "2024-02-14",
        "url": "https://content.whatap.io/24/03/05/003514k8s-agent-v155.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_5"
    },
    {
        "name": "Kubernetes-agent-v1.5.4",
        "date": "2024-02-06",
        "url": "https://content.whatap.io/24/03/05/003514k8s-agent-v154.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_4"
    },
    {
        "name": "Kubernetes-agent-v1.5.3",
        "date": "2024-01-30",
        "url": "https://content.whatap.io/24/03/05/003514k8s-agent-v153.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_3"
    },
    {
        "name": "Kubernetes-agent-v1.5.2",
        "date": "2024-01-26",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v152.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_2"
    },
    {
        "name": "Kubernetes-agent-v1.5.1",
        "date": "2024-01-25",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v151.pdf",
        "docs": "/release-notes/k8s/k8s-1_5_1"
    },
    {
        "name": "Kubernetes-agent-v1.4.9",
        "date": "2024-01-08",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v149.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_9"
    },
    {
        "name": "Kubernetes-agent-v1.4.8",
        "date": "2023-12-14",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v148.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_8"
    },
    {
        "name": "Kubernetes-agent-v1.4.4",
        "date": "2023-11-22",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v144.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_4"
    },
    {
        "name": "Kubernetes-agent-v1.4.3",
        "date": "2023-11-21",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v143.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_3"
    },
    {
        "name": "Kubernetes-agent-v1.4.2",
        "date": "2023-11-15",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v142.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_2"
    },
    {
        "name": "Kubernetes-agent-v1.4.1",
        "date": "2023-11-08",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v141.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_1"
    },
    {
        "name": "Kubernetes-agent-v1.4.0",
        "date": "2023-10-31",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v140.pdf",
        "docs": "/release-notes/k8s/k8s-1_4_0"
    },
    {
        "name": "Kubernetes-agent-v1.3.9",
        "date": "2023-10-25",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v139.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_9"
    },
    {
        "name": "Kubernetes-agent-v1.3.8",
        "date": "2023-10-04",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v138.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_8"
    },
    {
        "name": "Kubernetes-agent-v1.3.7",
        "date": "2023-09-27",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v137.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_7"
    },
    {
        "name": "Kubernetes-agent-v1.3.6",
        "date": "2023-09-25",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v136.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_6"
    },
    {
        "name": "Kubernetes-agent-v1.3.5",
        "date": "2023-09-12",
        "url": "https://content.whatap.io/24/02/01/065720k8s-agent-v135.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_5"
    },
    {
        "name": "Kubernetes-agent-v1.3.4",
        "date": "2023-08-11",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v134.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_4"
    },
    {
        "name": "Kubernetes-agent-v1.3.3",
        "date": "2023-08-04",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v133.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_3"
    },
    {
        "name": "Kubernetes-agent-v1.3.2",
        "date": "2023-07-28",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v132.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_2"
    },
    {
        "name": "Kubernetes-agent-v1.3.1",
        "date": "2023-06-28",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v131.pdf",
        "docs": "/release-notes/k8s/k8s-1_3_1"
    },
    {
        "name": "Kubernetes-agent-v1.2.9",
        "date": "2023-06-07",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v129.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_9"
    },
    {
        "name": "Kubernetes-agent-v1.2.8",
        "date": "2023-06-01",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v128.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_8"
    },
    {
        "name": "Kubernetes-agent-v1.2.7",
        "date": "2023-05-11",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v127.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_7"
    },
    {
        "name": "Kubernetes-agent-v1.2.6",
        "date": "2023-05-02",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v126.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_6"
    },
    {
        "name": "Kubernetes-agent-v1.2.5",
        "date": "2023-04-03",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v125.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_5"
    },
    {
        "name": "Kubernetes-agent-v1.2.2",
        "date": "2023-01-26",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v122.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_2"
    },
    {
        "name": "Kubernetes-agent-v1.2.1",
        "date": "2023-01-11",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v121.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_1"
    },
    {
        "name": "Kubernetes-agent-v1.2.0",
        "date": "2022-11-21",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v120.pdf",
        "docs": "/release-notes/k8s/k8s-1_2_0"
    },
    {
        "name": "Kubernetes-agent-v1.1.55",
        "date": "2022-10-28",
        "url": "https://content.whatap.io/24/02/01/065719k8s-agent-v1155.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_55"
    },
    {
        "name": "Kubernetes-agent-v1.1.54",
        "date": "2022-09-01",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1154.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_54"
    },
    {
        "name": "Kubernetes-agent-v1.1.52",
        "date": "2022-08-03",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1152.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_52"
    },
    {
        "name": "Kubernetes-agent-v1.1.51",
        "date": "2022-08-02",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1151.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_51"
    },
    {
        "name": "Kubernetes-agent-v1.1.50",
        "date": "2022-07-20",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1150.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_50"
    },
    {
        "name": "Kubernetes-agent-v1.1.49",
        "date": "2022-07-14",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1149.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_49"
    },
    {
        "name": "Kubernetes-agent-v1.1.48",
        "date": "2022-06-09",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1148.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_48"
    },
    {
        "name": "Kubernetes-agent-v1.1.46",
        "date": "2022-05-31",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1146.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_46"
    },
    {
        "name": "Kubernetes-agent-v1.1.45",
        "date": "2022-05-19",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1145.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_45"
    },
    {
        "name": "Kubernetes-agent-v1.1.44",
        "date": "2022-05-17",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1144.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_44"
    },
    {
        "name": "Kubernetes-agent-v1.1.43",
        "date": "2022-05-11",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1143.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_43"
    },
    {
        "name": "Kubernetes-agent-v1.1.42",
        "date": "2022-02-07",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1142.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_42"
    },
    {
        "name": "Kubernetes-agent-v1.1.41",
        "date": "2022-01-28",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1141.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_41"
    },
    {
        "name": "Kubernetes-agent-v1.1.40",
        "date": "2022-01-25",
        "url": "https://content.whatap.io/24/02/01/065718k8s-agent-v1140.pdf",
        "docs": "/release-notes/k8s/k8s-1_1_40"
    }
];

const dbxList = [
    {
        "name": "DBX-agent-v2.2.2",
        "date": "2024-11-21",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/dbx-agent-v2.2.2.pdf",
        "docs": "release-notes/db/dbx-2_2_2"
    },
    {
        "name": "DBX-agent-v2.2.1",
        "date": "2024-11-20",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/dbx-agent-v2.2.1.pdf",
        "docs": "release-notes/db/dbx-2_2_1"
    },
    {
        "name": "DBX-agent-v2.2.0",
        "date": "2024-11-19",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/dbx-agent-v2.2.0.pdf",
        "docs": "release-notes/db/dbx-2_2_0"
    },
    {
        "name": "DBX-agent-v2.1.7",
        "date": "2024-11-14",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/dbx-agent-v2.1.7.pdf",
        "docs": "release-notes/db/dbx-2_1_7"
    },
    {
        "name": "DBX-agent-v2.1.6",
        "date": "2024-11-11",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/dbx-agent-v2.1.6.pdf",
        "docs": "release-notes/db/dbx-2_1_6"
    },
    {
        "name": "DBX-agent-v2.1.5",
        "date": "2024-11-07",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/dbx-agent-v2.1.5.pdf",
        "docs": "release-notes/db/dbx-2_1_5"
    },
    {
        "name": "DBX-agent-v2.1.4",
        "date": "2024-11-01",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/dbx-agent-v2.1.4.pdf",
        "docs": "release-notes/db/dbx-2_1_4"
    },
    {
        "name": "DBX-agent-v2.1.3",
        "date": "2024-10-23",
        "url": "https://github.com/whatap/whatap-docs/releases/download/v2.11.0/dbx-agent-v2.1.3.pdf",
        "docs": "release-notes/db/dbx-2_1_3"
    },
    {
        "name": "DBX-agent-v2.1.2",
        "date": "2024-10-08",
        "url": "https://content.whatap.io/24/10/31/011431dbx-agent-v212.pdf",
        "docs": "release-notes/db/dbx-2_1_2"
    },
    {
        "name": "DBX-agent-v2.1.1",
        "date": "2024-09-30",
        "url": "https://content.whatap.io/24/10/31/011431dbx-agent-v211.pdf",
        "docs": "release-notes/db/dbx-2_1_1"
    },
    {
        "name": "DBX-agent-v2.1.0",
        "date": "2024-09-30",
        "url": "https://content.whatap.io/24/10/31/011430dbx-agent-v210.pdf",
        "docs": "release-notes/db/dbx-2_1_0"
    },
    {
        "name": "DBX-agent-v2.0.2",
        "date": "2024-08-30",
        "url": "https://content.whatap.io/24/10/31/011430dbx-agent-v202.pdf",
        "docs": "release-notes/db/dbx-2_0_2"
    },
    {
        "name": "DBX-agent-v2.0.1",
        "date": "2024-08-23",
        "url": "https://content.whatap.io/24/10/31/011430dbx-agent-v201.pdf",
        "docs": "release-notes/db/dbx-2_0_1"
    },
    {
        "name": "DBX-agent-v2.0.0",
        "date": "2024-08-14",
        "url": "https://content.whatap.io/24/09/02/052625dbx-agent-v200.pdf",
        "docs": "release-notes/db/dbx-2_0_0"
    },
    {
        "name": "DBX-agent-v1.9.5",
        "date": "2024-08-13",
        "url": "https://content.whatap.io/24/09/02/052625dbx-agent-v195.pdf",
        "docs": "release-notes/db/dbx-1_9_5"
    },
    {
        "name": "DBX-agent-v1.9.4",
        "date": "2024-08-08",
        "url": "https://content.whatap.io/24/09/02/052625dbx-agent-v194.pdf",
        "docs": "release-notes/db/dbx-1_9_4"
    },
    {
        "name": "DBX-agent-v1.9.3",
        "date": "2024-08-08",
        "url": "https://content.whatap.io/24/09/02/052625dbx-agent-v193.pdf",
        "docs": "release-notes/db/dbx-1_9_3"
    },
    {
        "name": "DBX-agent-v1.9.2",
        "date": "2024-07-30",
        "url": "https://content.whatap.io/24/09/02/052625dbx-agent-v192.pdf",
        "docs": "release-notes/db/dbx-1_9_2"
    },
    {
        "name": "DBX-agent-v1.9.1",
        "date": "2024-07-19",
        "url": "https://content.whatap.io/24/09/02/052625dbx-agent-v191.pdf",
        "docs": "release-notes/db/dbx-1_9_1"
    },
    {
        "name": "DBX-agent-v1.9.0",
        "date": "2024-07-04",
        "url": "https://content.whatap.io/24/08/01/053543dbx-agent-v190.pdf",
        "docs": "release-notes/db/dbx-1_9_0"
    },
    {
        "name": "DBX-agent-v1.8.2",
        "date": "2024-06-28",
        "url": "https://content.whatap.io/24/08/01/053543dbx-agent-v182.pdf",
        "docs": "release-notes/db/dbx-1_8_2"
    },
    {
        "name": "DBX-agent-v1.8.1",
        "date": "2024-06-27",
        "url": "https://content.whatap.io/24/08/01/053543dbx-agent-v181.pdf",
        "docs": "release-notes/db/dbx-1_8_1"
    },
    {
        "name": "DBX-agent-v1.8.0",
        "date": "2024-06-26",
        "url": "https://content.whatap.io/24/08/01/053543dbx-agent-v180.pdf",
        "docs": "release-notes/db/dbx-1_8_0"
    },
    {
        "name": "DBX-agent-v1.7.8",
        "date": "2024-06-21",
        "url": "https://content.whatap.io/24/08/01/053543dbx-agent-v178.pdf",
        "docs": "release-notes/db/dbx-1_7_8"
    },
    {
        "name": "DBX-agent-v1.7.7",
        "date": "2024-06-18",
        "url": "https://content.whatap.io/24/08/01/053543dbx-agent-v177.pdf",
        "docs": "release-notes/db/dbx-1_7_7"
    },
    {
        "name": "DBX-agent-v1.7.6",
        "date": "2024-05-20",
        "url": "https://content.whatap.io/24/06/03/054322dbx-agent-v176.pdf",
        "docs": "release-notes/db/dbx-1_7_6"
    },
    {
        "name": "DBX-agent-v1.7.5",
        "date": "2024-05-17",
        "url": "https://content.whatap.io/24/06/03/054322dbx-agent-v175.pdf",
        "docs": "release-notes/db/dbx-1_7_5"
    },
    {
        "name": "DBX-agent-v1.7.4",
        "date": "2024-05-16",
        "url": "https://content.whatap.io/24/06/03/054322dbx-agent-v174.pdf",
        "docs": "release-notes/db/dbx-1_7_4"
    },
    {
        "name": "DBX-agent-v1.7.3",
        "date": "2024-04-23",
        "url": "https://content.whatap.io/24/06/03/054322dbx-agent-v173.pdf",
        "docs": "release-notes/db/dbx-1_7_3"
    },
    {
        "name": "DBX-agent-v1.7.2",
        "date": "2024-03-29",
        "url": "https://content.whatap.io/24/06/03/054322dbx-agent-v172.pdf",
        "docs": "release-notes/db/dbx-1_7_2"
    },
    {
        "name": "DBX-agent-v1.7.1",
        "date": "2024-03-28",
        "url": "https://content.whatap.io/24/06/03/054322dbx-agent-v171.pdf",
        "docs": "release-notes/db/dbx-1_7_1"
    },
    {
        "name": "DBX-agent-v1.7.0",
        "date": "2024-03-25",
        "url": "https://content.whatap.io/24/04/02/011011dbx-agent-v170.pdf",
        "docs": "release-notes/db/dbx-1_7_0"
    },
    {
        "name": "DBX-agent-v1.6.35",
        "date": "2024-03-15",
        "url": "https://content.whatap.io/24/04/02/011011dbx-agent-v1635.pdf",
        "docs": "release-notes/db/dbx-1_6_35"
    },
    {
        "name": "DBX-agent-v1.6.33",
        "date": "2024-03-13",
        "url": "https://content.whatap.io/24/04/02/011011dbx-agent-v1633.pdf",
        "docs": "release-notes/db/dbx-1_6_33"
    },
    {
        "name": "DBX-agent-v1.6.32",
        "date": "2024-03-11",
        "url": "https://content.whatap.io/24/04/02/011011dbx-agent-v1632.pdf",
        "docs": "release-notes/db/dbx-1_6_32"
    },
    {
        "name": "DBX-agent-v1.6.31",
        "date": "2024-03-04",
        "url": "https://content.whatap.io/24/04/02/011011dbx-agent-v1631.pdf",
        "docs": "release-notes/db/dbx-1_6_31"
    },
    {
        "name": "DBX-agent-v1.6.30",
        "date": "2024-02-29",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1630.pdf",
        "docs": "release-notes/db/dbx-1_6_30"
    },
    {
        "name": "DBX-agent-v1.6.26",
        "date": "2024-02-28",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1626.pdf",
        "docs": "release-notes/db/dbx-1_6_26"
    },
    {
        "name": "DBX-agent-v1.6.25",
        "date": "2024-02-26",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1625.pdf",
        "docs": "release-notes/db/dbx-1_6_25"
    },
    {
        "name": "DBX-agent-v1.6.24",
        "date": "2024-02-21",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1624.pdf",
        "docs": "release-notes/db/dbx-1_6_24"
    },
    {
        "name": "DBX-agent-v1.6.23",
        "date": "2024-02-20",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1623.pdf",
        "docs": "release-notes/db/dbx-1_6_23"
    },
    {
        "name": "DBX-agent-v1.6.22",
        "date": "2024-02-15",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1622.pdf",
        "docs": "release-notes/db/dbx-1_6_22"
    },
    {
        "name": "DBX-agent-v1.6.21",
        "date": "2024-02-07",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1621.pdf",
        "docs": "release-notes/db/dbx-1_6_21"
    },
    {
        "name": "DBX-agent-v1.6.20",
        "date": "2024-02-02",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1620.pdf",
        "docs": "release-notes/db/dbx-1_6_20"
    },
    {
        "name": "DBX-agent-v1.6.19",
        "date": "2024-02-01",
        "url": "https://content.whatap.io/24/03/05/003513dbx-agent-v1619.pdf",
        "docs": "release-notes/db/dbx-1_6_19"
    },
    {
        "name": "DBX-agent-v1.6.18",
        "date": "2024-01-25",
        "url": "https://content.whatap.io/24/02/01/065713dbx-agent-v1618.pdf",
        "docs": "release-notes/db/dbx-1_6_18"
    },
    {
        "name": "DBX-agent-v1.6.17",
        "date": "2024-01-16",
        "url": "https://content.whatap.io/24/02/01/065713dbx-agent-v1617.pdf",
        "docs": "release-notes/db/dbx-1_6_17"
    },
    {
        "name": "DBX-agent-v1.6.16",
        "date": "2024-01-03",
        "url": "https://content.whatap.io/24/02/01/065713dbx-agent-v1616.pdf",
        "docs": "release-notes/db/dbx-1_6_16"
    },
    {
        "name": "DBX-agent-v1.6.15",
        "date": "2023-12-09",
        "url": "https://content.whatap.io/24/02/01/065713dbx-agent-v1615.pdf",
        "docs": "release-notes/db/dbx-1_6_15"
    },
    {
        "name": "DBX-agent-v1.6.14",
        "date": "2023-11-24",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v1614.pdf",
        "docs": "release-notes/db/dbx-1_6_14"
    },
    {
        "name": "DBX-agent-v1.6.13",
        "date": "2023-11-03",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v1613.pdf",
        "docs": "release-notes/db/dbx-1_6_13"
    },
    {
        "name": "DBX-agent-v1.6.12",
        "date": "2023-10-13",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v1612.pdf",
        "docs": "release-notes/db/dbx-1_6_12"
    },
    {
        "name": "DBX-agent-v1.6.11",
        "date": "2023-10-04",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v1611.pdf",
        "docs": "release-notes/db/dbx-1_6_11"
    },
    {
        "name": "DBX-agent-v1.6.10",
        "date": "2023-09-15",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v1610.pdf",
        "docs": "release-notes/db/dbx-1_6_10"
    },
    {
        "name": "DBX-agent-v1.6.9",
        "date": "2023-08-25",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v169.pdf",
        "docs": "release-notes/db/dbx-1_6_9"
    },
    {
        "name": "DBX-agent-v1.6.8",
        "date": "2023-08-18",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v168.pdf",
        "docs": "release-notes/db/dbx-1_6_8"
    },
    {
        "name": "DBX-agent-v1.6.7",
        "date": "2023-06-23",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v167.pdf",
        "docs": "release-notes/db/dbx-1_6_7"
    },
    {
        "name": "DBX-agent-v1.6.6",
        "date": "",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v166.pdf",
        "docs": "release-notes/db/dbx-1_6_6"
    },
    {
        "name": "DBX-agent-v1.6.5",
        "date": "",
        "url": "https://content.whatap.io/24/02/01/065712dbx-agent-v165.pdf",
        "docs": "release-notes/db/dbx-1_6_5"
    }
];

const xosList = [
    {
        "name": "XOS-agent-v1.1.8f",
        "date": "2024-06-27",
        "url": "https://content.whatap.io/24/08/01/053544xos-agent-v118f.pdf",
        "docs": "release-notes/db/xos-1_1_8f"
    },
    {
        "name": "XOS-agent-v1.1.8b",
        "date": "2024-03-15",
        "url": "https://content.whatap.io/24/04/02/011012xos-agent-v118b.pdf",
        "docs": "release-notes/db/xos-1_1_8b"
    },
    {
        "name": "XOS-agent-v1.1.8a",
        "date": "2024-01-25",
        "url": "https://content.whatap.io/24/03/05/003514xos-agent-v118a.pdf",
        "docs": "release-notes/db/xos-1_1_8a"
    },
    {
        "name": "XOS-agent-v1.1.6j",
        "date": "2023-10-13",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v116j.pdf",
        "docs": "release-notes/db/xos-1_1_6j"
    },
    {
        "name": "XOS-agent-v1.1.6g",
        "date": "2023-07-11",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v116g.pdf",
        "docs": "release-notes/db/xos-1_1_6g"
    },
    {
        "name": "XOS-agent-v1.1.4",
        "date": "2022-07-13",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v114.pdf",
        "docs": "release-notes/db/xos-1_1_4"
    },
    {
        "name": "XOS-agent-v1.1.3b",
        "date": "2022-06-07",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v113b.pdf",
        "docs": "release-notes/db/xos-1_1_3b"
    },
    {
        "name": "XOS-agent-v1.1.3",
        "date": "2022-01-10",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v113.pdf",
        "docs": "release-notes/db/xos-1_1_3"
    },
    {
        "name": "XOS-agent-v1.1.2",
        "date": "2021-12-23",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v112.pdf",
        "docs": "release-notes/db/xos-1_1_2"
    },
    {
        "name": "XOS-agent-v1.1.1b",
        "date": "2021-12-22",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v111b.pdf",
        "docs": "release-notes/db/xos-1_1_1b"
    },
    {
        "name": "XOS-agent-v1.1.1a",
        "date": "2021-12-20",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v111a.pdf",
        "docs": "release-notes/db/xos-1_1_1a"
    },
    {
        "name": "XOS-agent-v1.1.1",
        "date": "2021-11-10",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v111.pdf",
        "docs": "release-notes/db/xos-1_1_1"
    },
    {
        "name": "XOS-agent-v1.1.0b",
        "date": "2021-09-13",
        "url": "https://content.whatap.io/24/02/01/065729xos-agent-v110b.pdf",
        "docs": "release-notes/db/xos-1_1_0b"
    },
    {
        "name": "XOS-agent-v1.1.0a",
        "date": "2021-09-10",
        "url": "https://content.whatap.io/24/02/01/065728xos-agent-v110a.pdf",
        "docs": "release-notes/db/xos-1_1_0a"
    },
    {
        "name": "XOS-agent-v1.1.0",
        "date": "2021-09-01",
        "url": "https://content.whatap.io/24/02/01/065728xos-agent-v110.pdf",
        "docs": "release-notes/db/xos-1_1_0"
    },
    {
        "name": "XOS-agent-old-version",
        "date": "~2021-07-23",
        "url": "https://content.whatap.io/24/02/01/065728xos-agent-old-version.pdf",
        "docs": "release-notes/db/xos-previous"
    },
];

const npmList = [
    {
        "name": "NPM-agent-v0.4.5",
        "date": "2024-04-15",
        "url": "https://content.whatap.io/24/05/03/040111npm-agent-v045.pdf",
        "docs": "release-notes/npm/npm-v0_4_5"
    },
]
const browserList = [
    {
        "name": "Browser-agent-v1.3.6",
        "date": "2024-05-30",
        "url": "https://content.whatap.io/24/06/03/054322browser-agent-v136.pdf",
        "docs": "release-notes/browser/browser-v1_3_6"
    },
    {
        "name": "Browser-agent-v1.3.5",
        "date": "2024-03-21",
        "url": "https://content.whatap.io/24/04/02/011011browser-agent-v135.pdf",
        "docs": "release-notes/browser/browser-v1_3_5"
    },
    {
        "name": "Browser-agent-v1.3.4",
        "date": "2024-02-19",
        "url": "https://content.whatap.io/24/04/02/011011browser-agent-v134.pdf",
        "docs": "release-notes/browser/browser-v1_3_4"
    },
    {
        "name": "Browser-agent-v1.3.3",
        "date": "2023-12-27",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v133.pdf",
        "docs": "release-notes/browser/browser-v1_3_3"
    },
    {
        "name": "Browser-agent-v1.3.2",
        "date": "2023-10-24",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v132.pdf",
        "docs": "release-notes/browser/browser-v1_3_2"
    },
    {
        "name": "Browser-agent-v1.3.1",
        "date": "2023-09-25",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v131.pdf",
        "docs": "release-notes/browser/browser-v1_3_1"
    },
    {
        "name": "Browser-agent-v1.3.0",
        "date": "2023-09-06",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v130.pdf",
        "docs": "release-notes/browser/browser-v1_3_0"
    },
    {
        "name": "Browser-agent-v1.2.2",
        "date": "2023-08-08",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v122.pdf",
        "docs": "release-notes/browser/browser-v1_2_2"
    },
    {
        "name": "Browser-agent-v1.2.1",
        "date": "2023-07-06",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v121.pdf",
        "docs": "release-notes/browser/browser-v1_2_1"
    },
    {
        "name": "Browser-agent-v1.2.0",
        "date": "2023-06-21",
        "url": "https://content.whatap.io/24/02/01/065712browser-agent-v120.pdf",
        "docs": "release-notes/browser/browser-v1_2_0"
    },
    {
        "name": "Browser-agent-v1.1.4",
        "date": "2023-05-30",
        "url": "https://content.whatap.io/24/02/01/065711browser-agent-v114.pdf",
        "docs": "release-notes/browser/browser-v1_1_4"
    },
    {
        "name": "Browser-agent-v1.1.3",
        "date": "2023-05-23",
        "url": "https://content.whatap.io/24/02/01/065711browser-agent-v113.pdf",
        "docs": "release-notes/browser/browser-v1_1_3"
    },
    {
        "name": "Browser-agent-v1.1.2",
        "date": "2023-05-15",
        "url": "https://content.whatap.io/24/02/01/065711browser-agent-v112.pdf",
        "docs": "release-notes/browser/browser-v1_1_2"
    },
    {
        "name": "Browser-agent-v1.1.1",
        "date": "2023-04-28",
        "url": "https://content.whatap.io/24/02/01/065711browser-agent-v111.pdf",
        "docs": "release-notes/browser/browser-v1_1_1"
    },
    {
        "name": "Browser-agent-v1.1.0",
        "date": "2023-04-28",
        "url": "https://content.whatap.io/24/02/01/065711browser-agent-v110.pdf",
        "docs": "release-notes/browser/browser-v1_1_0"
    },
];

const etcList = [
    {
        "name": "URL-Release-Notes",
        "date": "2022-01-05",
        "url": "https://content.whatap.io/24/02/01/065728url-release-notes.pdf",
        "docs": "release-notes/url/url-release-notes"
    },
    {
        "name": "Amazon-ECS-Release-Notes",
        "date": "2024-10-10",
        "url": "https://content.whatap.io/24/10/31/011430amazon-ecs-release-notes.pdf",
        "docs": "release-notes/amazon-ecs/amazon-ecs-release-notes"
    },
    {
        "name": "Telegraf-Release-Notes",
        "date": "2020-08-28",
        "url": "https://content.whatap.io/24/02/01/065728telegraf-release-notes.pdf",
        "docs": "release-notes/telegraf/telegraf-release-notes"
    },
    {
        "name": "Focus-Release-Notes",
        "date": "2023-03-22",
        "url": "https://content.whatap.io/24/02/01/065714focus-release-notes.pdf",
        "docs": "release-notes/focus/focus-release-notes"
    },
];

export {svList, javaList, javaBatchList, phpList, nodejsList, pyList, dotnetList, goList, serverList, k8sList, dbxList, xosList, browserList, npmList, etcList, serveraixList, serversolarisList, serverhpuxList}