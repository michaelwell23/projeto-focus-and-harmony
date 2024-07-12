import cx from 'classnames';

import { useContext, useEffect, useState } from 'react';
import styles from '../styles/components/Countdown.module.css';

import { CountdownContext } from '@/contexts/CountdownContext';

export function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    resetCountddown,
    isActive,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <div>
      <div className={styles.countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          type='button'
          className={styles.startCycleButton}
          onClick={resetCountddown}
        >
          Ciclo encerrado
          <img src='icons/check_circle.svg' alt='' />
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type='button'
              className={cx(
                styles.startCycleButton,
                styles.startCycleButtonActive
              )}
              onClick={resetCountddown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type='button'
              className={styles.startCycleButton}
              onClick={startCountdown}
            >
              Iniciar ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
