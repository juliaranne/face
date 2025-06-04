import styles from "../styles/eye.module.css";

const Eye = ({ name, looking, updateMood }) => {
  const handleChange = (event) => {
    updateMood(name, event.target.checked);
  };

  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        type="checkbox"
        name={name}
        checked={looking}
        onChange={handleChange}
      />
      <div className={styles.slider}></div>
    </label>
  );
};

export default Eye;
