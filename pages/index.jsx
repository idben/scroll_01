import Head from "next/head";
import styles from "@/styles/Home.module.sass";
import { useEffect, useRef, useState } from "react";

const areas = [
  { className: 'area1', image: 'https://picsum.photos/1200/1200/?1', title: '頁面1', blockText: '1' },
  { className: 'area2', image: 'https://picsum.photos/1200/1200/?2', title: '頁面2', blockText: '2' },
  { className: 'area3', image: 'https://picsum.photos/1200/1200/?3', title: '頁面3', blockText: '3' },
  { className: 'area4', image: 'https://picsum.photos/1200/1200/?4', title: '頁面4', blockText: '4' },
  { className: 'area5', image: 'https://picsum.photos/1200/1200/?5', title: '頁面5', blockText: '5' },
  { className: 'area6', image: 'https://picsum.photos/1200/1200/?6', title: '頁面6', blockText: '6' }
];

export default function Home() {
  const [activeArea, setActiveArea] = useState(null);
  const scrollTimeoutRef = useRef(null);

  const getArea = () => {
    let currentArea = null;
    const areas = document.querySelectorAll(`.${styles.area}`);
    areas.forEach((area, index) => {
      const rect = area.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        currentArea = index + 1;
      }
    });
    console.log(currentArea);
    return currentArea;
  };

  useEffect(() => {
    // 因為整頁的捲動事件要註冊在 document 或 window 中
    // 而現在 react 的節點中沒有 document 或 window
    // 因此在頁面載入完時用 useEffect 在 window 註冊
    const handleScroll = () => {
      clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        const area = getArea();
        if (area) {
          setActiveArea(area);
        }
      }, 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // 離開時移除
    };
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {areas.map((area, index) => (
          <div
            key={index}
            className={`${styles.area} ${styles[area.className]} ${activeArea === index + 1 ? styles.active : ''}`}
            data-image={area.image}
            data-title={area.title}
          >
            <div className={styles.photo} style={{ backgroundImage: `url(${area.image})` }}></div>
            <div className={styles.block}>
              <div className={styles.text}>{area.title}</div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}