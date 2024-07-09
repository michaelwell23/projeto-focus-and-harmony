import styles from '../styles/components/ChallegeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400xp</header>
          <main>
            <img src='icons/body.svg' alt='' />
            <strong>Novo Desafio</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit at,
              voluptatum?
            </p>

            <footer>
              <button type='button' className={styles.challengeFailedButton}>
                Falhei
              </button>
              <button type='button' className={styles.challengeSucceededButton}>
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
