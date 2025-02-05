const ApplicationStatus = () => {
    return (
      <div className="border-b border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <span className="w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full text-xs">✓</span>
            <div className="h-1 w-20 bg-green-500"></div>
            <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-xs">2</span>
            <div className="h-1 w-20 bg-gray-300 dark:bg-gray-600"></div>
            <span className="w-6 h-6 flex items-center justify-center bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full text-xs">3</span>
          </div>
          <div className="flex space-x-4">
            <span className="text-green-500">Application Submitted</span>
            <span className="text-blue-500">Interview Stage</span>
            <span className="text-gray-500">Final Decision</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ApplicationStatus;