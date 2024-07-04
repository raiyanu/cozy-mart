import { motion } from 'framer-motion';
import styles from './PopUp.module.css';
const PopUp = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={styles.popup}
    >
      <div className={styles.popup_content}>
        <button onClick={onClose}>Close</button>
        <h2>Login</h2>
      </div>
    </motion.div>
  );
};

export default PopUp;
