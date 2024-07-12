import { useContext } from 'react';
import styles from '../styles/components/CompletedChallenge.module.css';
import { ChallengesContext } from '@/contexts/ChallengerContext';

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallenges}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}
