import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ children, type = "button", onClick, fullWidth = false, variant = 'primary' }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 shadow-lg',
    outline: 'border-2 border-purple-600 text-purple-700 hover:bg-purple-50 shadow-md',
    ghost: 'text-purple-700 hover:bg-purple-50'
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
        focus:outline-none focus:ring-2 focus:ring-purple-500/50
        disabled:opacity-50 disabled:cursor-not-allowed
        disabled:hover:scale-100
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