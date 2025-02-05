const ActiveApplications = () => {
    return (
      <div className="px-6 mt-4">
        <h3 className="text-xs font-semibold text-gray-800 uppercase dark:text-gray-200">
          Active Applications
        </h3>
        <div className="mt-2 space-y-2">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-800 dark:text-white">
                  TechCorp Inc.
                </h3>
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  In Progress
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Software Engineering Intern
              </p>
            </div>
          </div>
        </div>
        <div className="mt-2 space-y-2">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
            <div className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-bold text-gray-800 dark:text-white">
                  Google Inc.
                </h3>
                <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  In Progress
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                Senior Software Engineering 
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ActiveApplications;