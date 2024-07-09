import type { AppProps } from 'next/app';
import { ChallengesProvider } from '@/contexts/ChallengerContext';

import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      );
    </ChallengesProvider>
  );
}
