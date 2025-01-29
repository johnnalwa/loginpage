import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* Left side - Decorative */}
      <div className="lg:w-1/2 lg:fixed lg:inset-y-0 lg:left-0">
        <div className="h-full relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 animate-gradient">
          {/* Animated background patterns */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-radial from-white/20 to-transparent"></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-400/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-full flex items-center justify-center p-8"
          >
            <div className="max-w-md text-white text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
              </motion.div>
              
              <h1 className="text-5xl font-bold mb-6 text-white">
                Welcome Back!
              </h1>
              <p className="text-xl mb-12 text-white/90">
                Your gateway to seamless connectivity
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-white">Secure Authentication</h3>
                      <p className="text-sm text-white/80">Advanced encryption & protection</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-white">Lightning Fast</h3>
                      <p className="text-sm text-white/80">Optimized for performance</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Right side - Form */}
      <div className="flex-1 lg:ml-[50%]">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen flex flex-col justify-center px-8 py-16 md:px-16"
        >
          <div className="max-w-md w-full mx-auto">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
              {subtitle && (
                <p className="text-gray-600">{subtitle}</p>
              )}
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {children}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

export default AuthLayout;