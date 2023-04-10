import styles from './TextInput.module.scss';
import PropTypes from 'prop-types';

const TextInput = ({ value, onChange, placeholder }) => {
  return <input className={styles.input} value={value} onChange={onChange} placeholder={placeholder} type="text" />;
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default TextInput;
