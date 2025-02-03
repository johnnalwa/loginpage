/* eslint-disable react/prop-types */

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <img 
        src="/assets/logo.png" 
        alt="Logo" 
        className="h-8 w-8 object-contain dark:opacity-75"
      />
      <span className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
        ConnectyFI
      </span>
    </div>
  );
};

export default Logo;
