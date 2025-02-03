import { useEffect } from 'react';

const PrelineScript = () => {
  useEffect(() => {
    // Initialize Preline
    const initPreline = async () => {
      const { HSStaticMethods } = await import('preline/preline');
      HSStaticMethods.autoInit();
    };

    // Call the init function
    initPreline();

    // Re-initialize Preline on route change
    const observer = new MutationObserver(() => {
      initPreline();
    });

    observer.observe(document.querySelector('#root'), {
      childList: true,
      subtree: true,
    });

    return () => {
      // Clean up the observer when component unmounts
      observer.disconnect();
    };
  }, []);

  return null;
};

export default PrelineScript;
