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

        {/* Social Login Options */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
            onClick={() => {
              // Add Google sign-in logic here
              console.log('Google sign-in clicked');
            }}
          >
            <img className="h-5 w-5" src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" />
            <span className="text-sm font-semibold leading-6">Google</span>
          </button>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-md bg-[#0A66C2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#004182] focus:outline-offset-0"
            onClick={() => {
              // Add LinkedIn sign-in logic here
              console.log('LinkedIn sign-in clicked');
            }}
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.68 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
            <span className="text-sm font-semibold leading-6">LinkedIn</span>
          </button>
        </div>

        {/* Already have an account */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link 
            to="/" 
            className="text-blue-500 hover:text-blue-800 hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;
