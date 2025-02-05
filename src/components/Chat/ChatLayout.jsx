import SearchBar from '../Sidebar/SearchBar';
import FilterSection from '../Sidebar/FilterSection';
import ActiveApplications from '../Sidebar/ActiveApplications';
import MessageThread from './MessageThread';
import ChatInput from './ChatInput';
import ApplicationStatus from './ApplicationStatus';
import Inbox from './Inbox';
import Logo from '../../assets/logo.png';

const ChatLayout = () => {
 return (
   <div className="w-full h-screen flex">
     <nav className="hs-sidebar bg-white border-r pt-7 pb-10 overflow-y-auto w-80 flex-shrink-0 dark:bg-gray-800">
       <div className="px-6 pb-6 border-b border-gray-200 dark:border-gray-700">
         <div className="flex items-center">
           <img src={Logo} alt="ConnectyFI" className="w-8 h-8" />
           <h1 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">ConnectyFI</h1>
         </div>
         <p className="mt-2 text-sm text-gray-500">Connecting Students to Opportunities</p>
       </div>
       
       <SearchBar />
       <Inbox />
       <FilterSection />
       <ActiveApplications />
     </nav>

     <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
       <div className="p-4 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
         <div className="flex justify-between items-center">
           <div>
             <h1 className="text-lg font-semibold text-gray-900 dark:text-white">TechCorp Inc.</h1>
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