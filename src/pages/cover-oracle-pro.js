import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Head from '@docusaurus/Head';

export default function Cover() {
  const bgPath = useBaseUrl('/img/cover-background.png');
  const cover = useBaseUrl('/oracle-pro/monitoring-intro');
  return (
    <Layout>
    <Head>
    <meta name="robots" content="noindex, nofollow"/>
    </Head>
    <div className='cover-page'>
      <div
        className={styles.cover}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '770px',
          width: '524px',
          fontSize: '20px',
          // border: '1px solid #000',
        }}>
        <h1>
          Oracle Pro Monitoring
        </h1>
        <p className={styles.date}>
            release date. 2024.11.04
        </p>
        <img className={styles.background} src={bgPath} />
      </div>
      <a class="pagination-nav__link pagination-nav__link--next" href={cover}><div class="pagination-nav__sublabel">다음</div></a>
      <div class="page-break"></div>
    </div>
    </Layout>
  );
}