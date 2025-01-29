import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { EnvelopeIcon, LockClosedIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    userType: 'candidate' // Default to candidate
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.passwordCheck) {
      newErrors.passwordCheck = 'Please confirm your password';
    } else if (formData.password !== formData.passwordCheck) {
      newErrors.passwordCheck = 'Passwords do not match';
    }
    if (!formData.userType) {
      newErrors.userType = 'Please select a user type';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleUserTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      userType: type,
    }));
    if (errors.userType) {
      setErrors((prev) => ({
        ...prev,
        userType: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Add your registration logic here
      console.log('Registration data:', formData);
      // Navigate to login page after successful registration
      navigate('/');
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Add your credentials"
    >
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm">
        {/* User Type Selection */}
        <div className="flex gap-4 justify-center mb-6">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="userType"
              value="candidate"
              checked={formData.userType === 'candidate'}
              onChange={() => handleUserTypeChange('candidate')}
              className="form-radio text-purple-600 focus:ring-purple-500"
            />
            <span className="ml-2">Candidate</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="userType"
              value="faculty"
              checked={formData.userType === 'faculty'}
              onChange={() => handleUserTypeChange('faculty')}
              className="form-radio text-purple-600 focus:ring-purple-500"
            />
            <span className="ml-2">Faculty</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="userType"
              value="employer"
              checked={formData.userType === 'employer'}
              onChange={() => handleUserTypeChange('employer')}
              className="form-radio text-purple-600 focus:ring-purple-500"
            />
            <span className="ml-2">Employer</span>
          </label>
        </div>

        {/* Email Input */}
        <div className="space-y-1">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            icon={<EnvelopeIcon />}
            error={errors.email}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center text-red-500 text-sm"
              >
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.email}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Password Input */}
        <div className="space-y-1">
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            icon={<LockClosedIcon />}
            error={errors.password}
          />
          <AnimatePresence>
            {errors.password && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center text-red-500 text-sm"
              >
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.password}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Password Check Input */}
        <div className="space-y-1">
          <Input
            type="password"
            name="passwordCheck"
            value={formData.passwordCheck}
            onChange={handleInputChange}
            placeholder="Password check"
            icon={<LockClosedIcon />}
            error={errors.passwordCheck}
          />
          <AnimatePresence>
            {errors.passwordCheck && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center text-red-500 text-sm"
              >
                <ExclamationCircleIcon className="w-4 h-4 mr-1" />
                {errors.passwordCheck}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sign Up Button */}
        <Button
          type="submit"
          className="w-full"
          loading={isLoading}
        >
          Sign up
        </Button>

        {/* Already have an account */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link 
            to="/" 
            className="text-purple-600 hover:text-purple-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
