import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Logo from '../components/UI/Logo';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left side - Decorative */}
      <div className="lg:w-1/2 lg:fixed lg:inset-y-0 lg:left-0">
        <div className="h-full relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500">
          {/* Animated background patterns */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent"></div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full mix-blend-overlay filter blur-xl animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-white/20 rounded-full mix-blend-overlay filter blur-xl animate-float" style={{ animationDelay: '-2s' }}></div>
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-full flex items-center justify-center p-8"
          >
            <div className="max-w-md text-center">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Logo className="h-12 w-auto mx-auto mb-8 contrast-75 brightness-90" />
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </motion.div>
              
              <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-md">
                Connect with Global Opportunities
              </h1>
              <p className="text-xl mb-12 text-white/90 drop-shadow">
                Your gateway to internships, co-ops, and research positions worldwide
              </p>
              
              <div className="space-y-6">
                <motion.div 
                  className="p-4 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-white drop-shadow">Academic Excellence</h3>
                      <p className="text-sm text-white drop-shadow">Connect with leading universities worldwide</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-4 rounded-xl bg-white/20 backdrop-blur-sm shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-white drop-shadow">Industry Connections</h3>
                      <p className="text-sm text-white drop-shadow">Access top companies and research labs</p>
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
              <Logo className="w-32 h-8 mb-6" />
              <h2 className="text-3xl font-bold text-purple-900 mb-2">{title}</h2>
              {subtitle && (
                <p className="text-purple-600">{subtitle}</p>
              )}
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
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