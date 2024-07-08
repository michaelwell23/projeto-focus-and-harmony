import styles from '../styles/components/ChallegeBox.module.css';

export function ChallengeBox() {
  return (
    <div className={styles.challengeContainer}>
      <div className={styles.challengeNotActive}>
        <strong>Finalize um ciclo para receber um desafio.</strong>
        <p>
          <img src='icons/level-up.svg' alt='leveup icon' />
          Suba de level completando desafios.
        </p>
      </div>
    </div>
  );
}
