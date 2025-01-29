import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Input = ({ label, type = "text", name, placeholder, value, onChange, required = false, icon: Icon }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
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
          whileFocus={{ scale: 1.01 }}
          className={`
            w-full px-4 py-3 rounded-xl
            ${Icon ? 'pl-10' : ''}
            border border-gray-300
            text-gray-900 placeholder-gray-400
            transition duration-200
            focus:border-primary-500 focus:ring-4 focus:ring-primary-500/20
            hover:border-gray-400
            bg-white
            shadow-sm
          `}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  icon: PropTypes.elementType
};

export default Input;