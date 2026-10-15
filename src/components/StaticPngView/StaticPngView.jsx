import { useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import { Timer } from '../Timer/Timer';
import * as styles from './StaticPngView.module.css';

export const StaticPngView = ({ targetDateTime }) => {
  const captureRef = useRef(null);
  const [pngUrl, setPngUrl] = useState('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isCurrent = true;

    toPng(captureRef.current, { pixelRatio: 2, skipFonts: true })
      .then((dataUrl) => {
        if (isCurrent) setPngUrl(dataUrl);
      })
      .catch(() => {
        if (isCurrent) setHasError(true);
      });

    return () => {
      isCurrent = false;
    };
  }, [targetDateTime]);

  return (
    <main className={styles.pngPage}>
      {pngUrl ? (
        <img className={styles.pngImage} src={pngUrl} alt="Static countdown PNG" />
      ) : (
        <>
          {!hasError && <p className={styles.status}>Generating PNG...</p>}
          <div className={styles.capture} ref={captureRef}>
            <h1 className={styles.title}>Countdown Timer</h1>
            <Timer targetDateTime={targetDateTime} isStatic />
          </div>
        </>
      )}
      {hasError && <p className={styles.status}>Unable to generate PNG.</p>}
    </main>
  );
};