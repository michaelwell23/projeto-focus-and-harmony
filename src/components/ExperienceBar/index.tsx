import React from 'react';

import './styles.css';

export default function ExperienceBar() {
  return (
    <header className='experienceBar'>
      <span>0 xp</span>
      <div>
        <div style={{ width: `60%` }} />
      </div>
      <span>600 xp</span>
    </header>
  );
}
