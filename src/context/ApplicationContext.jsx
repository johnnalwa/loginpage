/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [filters, setFilters] = useState({
    type: null,
    location: null,
    sector: null
  });
  // Add inbox messages state
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'TechCorp Inc.',
      senderInitials: 'TC',
      message: 'Interview invitation for Software Engineering Internship',
      timestamp: '2m ago',
      unread: true
    },
    {
      id: 2,
      sender: 'University of Innovation',
      senderInitials: 'UI',
      message: 'Thank you for your application to the Research Assistant position',
      timestamp: '1d ago',
      unread: false
    }
  ]);

  const value = {
    applications,
    setApplications,
    activeChat,
    setActiveChat,
    filters,
    setFilters,
    messages,
    setMessages
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = () => {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }
  return context;
};