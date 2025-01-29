/* eslint-disable react/prop-types */

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <img 
        src="/assets/logo.png" 
        alt="Logo" 
        className="h-8 w-8 object-contain opacity-75"
      />
      <span className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        ConnectyFI
      </span>
    </div>
  );
};

export default Logo;
