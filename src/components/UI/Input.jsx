import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

const Input = ({ 
  label, 
  type = "text", 
  name, 
  placeholder, 
  value, 
  onChange, 
  required = false, 
  error,
  icon
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium mb-2 dark:text-white">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <div className={`h-4 w-4 ${error ? 'text-red-400' : 'text-gray-400'}`}>
              {icon}
            </div>
          </div>
        )}
        <motion.input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`
            py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500
            disabled:opacity-50 disabled:pointer-events-none
            dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600
            ${icon ? 'pl-11' : ''}
            ${error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:focus:border-red-400 dark:focus:ring-red-400' 
              : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            }
          `}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
            <ExclamationCircleIcon className="h-4 w-4 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.string,
  icon: PropTypes.node
};

export default Input;