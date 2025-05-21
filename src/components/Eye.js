import styles from "../styles/eye.module.css";

const Eye = ({ name }) => {
  return (
    <label className={styles.label}>
      <input lassName={styles.input} type="checkbox" name={name} />
      <div className={styles.slider}></div>
    </label>
  );
};

export default Eye;
