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
        <label htmlFor={name} className="block text-sm font-medium text-purple-900">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className={`h-5 w-5 ${error ? 'text-red-400' : 'text-purple-400'}`}>
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
            block w-full rounded-lg border
            ${error 
              ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-purple-500 focus:ring-purple-500'
            }
            ${icon ? 'pl-10' : 'pl-4'}
            pr-4 py-3 text-gray-900 placeholder-gray-500
            focus:outline-none focus:ring-1 sm:text-sm
          `}
          whileFocus={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
          </div>
        )}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600"
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