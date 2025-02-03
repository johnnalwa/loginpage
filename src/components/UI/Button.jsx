import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Button = ({ children, type = "button", onClick, fullWidth = false, variant = 'primary' }) => {
  const variants = {
    primary: 'py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
    outline: 'py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600',
    ghost: 'py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        transition-all duration-200
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