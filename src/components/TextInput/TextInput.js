import styles from './TextInput.module.scss';

const TextInput = ({ value, onChange, placeholder }) => {
  return <input className={styles.input} value={value} onChange={onChange} placeholder={placeholder} type="text" />;
};

export default TextInput;
