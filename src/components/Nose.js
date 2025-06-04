import styles from "../styles/nose.module.css";

const Nose = ({ name, updateMood }) => {
  const handleClick = (event) => {
    updateMood(name, event.target.checked);
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
    ></button>
  );
};

export default Nose;
