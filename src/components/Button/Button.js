import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({ children }) => {
  return <button className={clsx(styles.button)}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
