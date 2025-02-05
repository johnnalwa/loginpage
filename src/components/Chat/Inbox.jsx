// src/components/Chat/Inbox.jsx
const Inbox = () => {
    return (
      <div className="px-6 mt-4 border-b border-gray-200 dark:border-gray-700 pb-4">
        <h3 className="text-xs font-semibold text-gray-800 uppercase dark:text-gray-200 mb-3">
          Inbox
          <span className="ml-2 px-2 py-1 text-xs rounded-full bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300">
            3 New
          </span>
        </h3>
        
        <div className="space-y-2">
          {/* Unread Message */}
          <div className="flex flex-col bg-blue-50 border shadow-sm rounded-xl dark:bg-slate-800 dark:border-gray-700 cursor-pointer hover:bg-blue-100 dark:hover:bg-slate-700">
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-2 h-2 bg-blue-500 rounded-full absolute -right-1 -top-1"></div>
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-semibold">
                      TC
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white">TechCorp Inc.</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">Interview invitation for Software Engineering Internship</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">2m ago</span>
              </div>
            </div>
          </div>
  
          {/* Read Message */}
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-800">
            <div className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-semibold">
                    UI
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-white">University of Innovation</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">Thank you for your application to the Research Assistant position</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">1d ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Inbox;