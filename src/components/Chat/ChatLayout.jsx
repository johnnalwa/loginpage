// src/components/Chat/ChatLayout.jsx
import React from 'react';

const ChatLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Enhanced Sidebar */}
      <div className="w-80 border-r border-gray-200 dark:border-gray-700 flex flex-col">
        {/* Profile Summary */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              JS
            </div>
            <div>
              <h2 className="font-semibold">John Smith</h2>
              <p className="text-sm text-gray-500">Computer Science Student</p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
              placeholder="Search opportunities..."
            />
            <svg className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Enhanced Filters */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-semibold mb-3">Opportunity Types</h2>
          <div className="space-y-2">
            <button className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="flex items-center">
                <span className="mr-2">🎓</span> Internships
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                12 New
              </span>
            </button>
            <button className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="flex items-center">
                <span className="mr-2">👥</span> Co-op Programs
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                5 New
              </span>
            </button>
            <button className="flex items-center justify-between w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="flex items-center">
                <span className="mr-2">🔬</span> Research Jobs
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                8 New
              </span>
            </button>
          </div>

          {/* Additional Filters */}
          <div className="mt-4">
            <h2 className="text-sm font-semibold mb-3">Quick Filters</h2>
            <div className="flex flex-wrap gap-2">
              <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
                Remote
              </button>
              <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
                Summer 2025
              </button>
              <button className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
                Paid
              </button>
            </div>
          </div>
        </div>

        {/* Active Conversations */}
        <div className="flex-1 overflow-y-auto p-4">
          <h2 className="text-sm font-semibold mb-3">Active Applications</h2>
          <div className="space-y-2">
            <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg bg-blue-50 dark:bg-blue-900">
              <div className="flex-1">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-medium">TechCorp Inc.</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Software Engineering Intern</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">In Progress</span>
            </button>
            
            <button className="flex items-center w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="flex-1">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                  <span>University of Innovation</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Research Assistant - AI Lab</p>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Interview</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold">TechCorp Inc.</h1>
              <p className="text-sm text-gray-500">Software Engineering Internship - Summer 2025</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <span className="sr-only">View Details</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
              <button className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                <span className="sr-only">Application Status</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Application Timeline */}
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

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {/* Company Message */}
            <div className="max-w-3xl">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold mb-1">TechCorp Inc.</h3>
                <p>We have an exciting internship opportunity for software developers! The position offers:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-sm">
                  <li>Hands-on experience with our core products</li>
                  <li>Mentorship from senior engineers</li>
                  <li>Competitive compensation</li>
                  <li>Flexible remote work options</li>
                </ul>
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
                <p>That sounds great! I'd love to apply for the internship. I have experience with React and Node.js from my previous projects.</p>
              </div>
              <span className="text-sm text-gray-500 mt-1 block text-right">10:35 AM</span>
            </div>
          </div>
        </div>

        {/* Enhanced Message Input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>
            <input
              type="text"
              className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
              placeholder="Type a message..."
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center">
              <span>Send</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Application Details Sidebar */}
      <div className="w-64 border-l border-gray-200 dark:border-gray-700 p-4">
        <h2 className="font-semibold mb-4">Application Details</h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <p className="mt-1 text-sm">Interview Stage</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Applied On</h3>
            <p className="mt-1 text-sm">Jan 15, 2025</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Location</h3>
            <p className="mt-1 text-sm">Remote / San Francisco, CA</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Duration</h3>
            <p className="mt-1 text-sm">3 months (Summer 2025)</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Next Steps</h3>
            <p className="mt-1 text-sm text-blue-600">Technical Interview - Feb 10, 2025</p>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm rounded-lg">
            View All Documents
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatLayout;