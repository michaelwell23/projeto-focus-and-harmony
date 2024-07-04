import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/michaelwell23.png' alt='Photo Profile' />
      <div>
        <strong>Michael Wellington Lopes</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level 2
        </p>
      </div>
    </div>
  );
}
