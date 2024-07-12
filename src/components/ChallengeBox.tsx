import { useContext } from 'react';
import styles from '../styles/components/ChallegeBox.module.css';
import { ChallengesContext } from '@/contexts/ChallengerContext';
import { CountdownContext } from '@/contexts/CountdownContext';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completedChallenge } =
    useContext(ChallengesContext);
  const { resetCountddown } = useContext(CountdownContext);

  function handleChallengeSucceded() {
    completedChallenge();
    resetCountddown();
  }

  function handleChanllengeFailed() {
    resetChallenge();
    resetCountddown();
  }

  return (
    <div className={styles.challengeContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}</header>
          <main>
            <strong> Desafio de {activeChallenge.type}</strong>
            <img src={`icons/${activeChallenge.type}.svg`} alt='' />
            <strong>{activeChallenge.title}</strong>
            <p>{activeChallenge.description}</p>

            <footer>
              <button
                type='button'
                className={styles.challengeFailedButton}
                onClick={handleChanllengeFailed}
              >
                Falhei
              </button>
              <button
                type='button'
                className={styles.challengeSucceededButton}
                onClick={handleChallengeSucceded}
              >
                Completei
              </button>
            </footer>
          </main>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p>
            <img src='icons/level-up.svg' alt='leveup icon' />
            Suba de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
