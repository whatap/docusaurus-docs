import React, { useEffect, useState, useRef } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import { translate } from "@docusaurus/Translate";
import styles from './styles.module.css';

// 보이지 않는 문자 제거 함수
const cleanString = (str) => {
  return str.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
};

const ImportJson = ({ filePath, product, type, sort, category, platform }) => {
  const [filteredLists, setFilteredLists] = useState([]);
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);
  const observerRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = filePath;

        // type 필터를 배열로 변환
        const types = type ? type.split(',').map(t => t.trim()) : null;

        // product와 type을 기반으로 데이터 필터링
        const filtered = data.reduce((acc, item) => {
          const filteredLists = item.Lists.filter(list => {
            const cleanedProduct = cleanString(list.product);
            const cleanedType = cleanString(list.type);

            const isProductMatch = product ? cleanedProduct === product : true;
            const isTypeMatch = types ? types.includes(cleanedType) : true;

            return isProductMatch && isTypeMatch;
          });

          if (filteredLists.length > 0) {
            acc.push({
              ...item,
              Lists: filteredLists,
            });
          }
          return acc;
        }, []);

        setFilteredLists(filtered);
      } catch (error) {
        console.error('Error fetching the JSON data', error);
      }
    };

    if (loaded) {
      fetchData();
    } else {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLoaded(true);
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
        }
      );
      if (containerRef.current) {
        observer.observe(containerRef.current);
      }
      observerRef.current = observer;

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, [filePath, product, type, sort, category, platform, loaded]);

  if (error) {
    return <p>{error}</p>;
  }

  let sortedData = filteredLists;
  const linkIcon = useBaseUrl('/img/ic-link.svg');

  if (sort === 'date' && loaded) {
    sortedData = filteredLists.reduce((acc, note) => {
      const dateKey = new Date(note.date).toISOString().split('T')[0]; // 날짜를 YYYY-MM-DD 형식으로 변환
      if (!acc[dateKey]) {
        acc[dateKey] = [];
      }
      note.Lists.forEach(list => {
        acc[dateKey].push({ ...list, date: note.date, url: note.url, ver: note.ver });
      });
      return acc;
    }, {});

    sortedData = Object.keys(sortedData)
      .sort((a, b) => new Date(b) - new Date(a)) // 날짜를 내림차순으로 정렬
      .map(dateKey => ({
        date: dateKey,
        products: sortedData[dateKey].reduce((acc, list) => {
          const cleanedProduct = cleanString(list.product);
          if (!acc[cleanedProduct]) {
            acc[cleanedProduct] = [];
          }
          acc[cleanedProduct].push(list);
          return acc;
        }, {}),
      }));
  }

  return (
    <div className={styles.release_items} ref={containerRef}>
      {filteredLists.length === 0 ? (
        <p>
          {
            translate({
              id: "custom.importJson.waitingMessage",
              message: "데이터를 불러오고 있습니다. 잠시만 기다려 주세요.",
              description: "Loading data. Please wait a moment.",
            })
          }
        </p>
      ) : (
        sort === 'date' && loaded ? (
          sortedData.map(dateGroup => (
            <div key={dateGroup.date} className={styles.releasegroup}>
              {Object.keys(dateGroup.products).map(productKey => (
                <div key={productKey} className={styles.productrelease}>
                  <div className={styles.subgroup}>
                    <p className={styles.date}>{dateGroup.date}</p>
                    {category !== 'agent' ? (<p className={styles.product}>{productKey}</p>) : null}
                    {dateGroup.products[productKey].map((list, index, array) => (
                      <div key={`${list.ver}-${index}`} className={styles.rlist}>
                        <div>
                          {(index === 0 || list.ver !== array[index - 1].ver) && (
                            <a href={category === 'agent' ? `${list.url}` : `${list.url}#${list.hash}`} className={styles.goto}>
                              {list.ver}
                              <img src={linkIcon} width="18px" height="18px" className={clsx(styles.icoLink, 'ico-link')} />
                            </a>
                          )}
                        </div>
                        {
                          ((platform === 'db' && list.category) || list.category) ? (
                            <div className={styles.platform}>
                              {(index === 0 || list.category !== array[index - 1].category) && (
                                `▸ ${list.category}`
                              )}
                            </div>
                          ) : null
                        }
                        <div className={styles.releaselist} dangerouslySetInnerHTML={{ __html: list.desc }} />
                        {list.details && (
                          <div className={styles.details} dangerouslySetInnerHTML={{ __html: list.details }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))
        ) : (
          loaded && filteredLists.map(note => (
            <div key={note.ver}>
              <h2>{note.ver}</h2>
              <div>{note.date}</div>
              <ul>
                {note.Lists.map((list, index) => (
                  <li key={`${list.ver}-${index}`}>
                    <div className={styles.releaselist} dangerouslySetInnerHTML={{ __html: list.desc }} />
                    {list.details && (
                      <div dangerouslySetInnerHTML={{ __html: list.details }} />
                    )}
                    <code className='changelog-service'><a href={`${note.url}#${list.hash}`}>{list.product} | {list.ver}</a></code>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default ImportJson;