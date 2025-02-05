import SearchBar from '../Sidebar/SearchBar';
import FilterSection from '../Sidebar/FilterSection';
import ActiveApplications from '../Sidebar/ActiveApplications';
import MessageThread from './MessageThread';
import ChatInput from './ChatInput';
import ApplicationStatus from './ApplicationStatus';
import Inbox from './Inbox';

const ChatLayout = () => {
  return (
    <div className="w-full h-screen flex">
      {/* Main Navigation Sidebar */}
      <nav className="hs-sidebar bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y w-80 flex-shrink-0 dark:bg-gray-800 dark:border-gray-700">
        <SearchBar />
        <Inbox />
        <FilterSection />
        <ActiveApplications />
      </nav>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-lg font-semibold">TechCorp Inc.</h1>
              <p className="text-sm text-gray-500">Software Engineering Internship - Summer 2025</p>
            </div>
          </div>
        </div>
        <ApplicationStatus />
        <MessageThread />
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatLayout;