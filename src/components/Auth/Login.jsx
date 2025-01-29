import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AuthLayout from '../../layouts/AuthLayout';
import Input from '../UI/Input';
import Button from '../UI/Button';
import { EnvelopeIcon, LockClosedIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Handle login logic here
      console.log('Form submitted:', { ...formData, rememberMe });
      // Navigate to dashboard after successful login
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ submit: 'Failed to login. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout 
      title="Sign in to your account" 
      subtitle="Welcome back! Please enter your details."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence mode="wait">
          {errors.submit && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-3 rounded-lg bg-red-50 text-red-600 text-sm flex items-center"
            >
              <ExclamationCircleIcon className="w-5 h-5 mr-2" />
              {errors.submit}
            </motion.div>
          )}
        </AnimatePresence>

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
        </div>

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
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:text-primary-500">
            Forgot password?
          </Link>
        </div>

        <div className="space-y-4 pt-4">
          <Button 
            type="submit" 
            fullWidth 
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </div>
            ) : (
              'Sign in'
            )}
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
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
              disabled={isLoading}
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
              disabled={isLoading}
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.68 1.68 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span className="text-sm font-semibold leading-6">LinkedIn</span>
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Dont have an account?{' '}
          <Link 
            to="/register" 
            className="text-blue-600 hover:text-blue-900 hover:underline"
          >
            Sign up for free
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;