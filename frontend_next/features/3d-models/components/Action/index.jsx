import styles from './style.module.scss';

function Action() {
  return (
    <div>
      <div className={'tw-flex tw-w-1/5 tw-justify-between'}>
        <div className={styles.action}>Add To</div>
        <div className={styles.action}>Embed</div>
        <div className={styles.action}>Shared</div>
      </div>
    </div>
  );
}

export default Action;
