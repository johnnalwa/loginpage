import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ children, type = "button", onClick, fullWidth = false, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700',
    outline: 'border-2 border-primary-600 text-primary-700 hover:bg-primary-50',
    ghost: 'text-primary-600 hover:bg-primary-50'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${fullWidth ? 'w-full' : ''}
        ${variants[variant]}
        font-semibold py-3 px-6 rounded-xl
        transform transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-primary-500/50
        disabled:opacity-50 disabled:cursor-not-allowed
        shadow-sm hover:shadow-md
      `}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'outline', 'ghost'])
};

Button.defaultProps = {
  type: "button",
  fullWidth: false,
  variant: 'primary'
};

export default Button;