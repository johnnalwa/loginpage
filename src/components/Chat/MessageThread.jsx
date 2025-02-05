const MessageThread = () => {
    return (
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-4">
          {/* Company Message */}
          <div className="max-w-3xl">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold mb-1">TechCorp Inc.</h3>
              <p>We have an exciting internship opportunity for software developers!</p>
              <div className="mt-3">
                <button className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  View Complete Job Details
                </button>
              </div>
            </div>
            <span className="text-sm text-gray-500 mt-1">10:30 AM</span>
          </div>
  
          {/* User Message */}
          <div className="max-w-3xl ml-auto">
            <div className="bg-blue-500 text-white rounded-lg p-4">
              <p>That sounds great! I'd love to apply for the internship.</p>
            </div>
            <span className="text-sm text-gray-500 mt-1 block text-right">10:35 AM</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default MessageThread;