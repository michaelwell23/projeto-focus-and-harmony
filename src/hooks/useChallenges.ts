import { useContext } from 'react';
import { ChallengesContext } from '@/contexts/ChallengerContext';

export function useChallenges() {
  const context = useContext(ChallengesContext);

  return context;
}
