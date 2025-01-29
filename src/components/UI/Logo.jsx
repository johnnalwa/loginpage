/* eslint-disable react/prop-types */

const Logo = ({ className = "" }) => {
  return (
    <img 
      src="/assets/logo.png" 
      alt="Logo" 
      className={`${className} object-contain opacity-75`}
    />
  );
};

export default Logo;
