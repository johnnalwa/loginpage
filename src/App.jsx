import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ChatLayout from './components/Chat/ChatLayout';
import PrelineScript from './components/UI/PrelineScript';
import { ApplicationProvider } from './context/ApplicationContext';

function App() {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <ApplicationProvider>
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <PrelineScript />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/chat" element={<ChatLayout />} />
        </Routes>
      </div>
    </ApplicationProvider>
  );
}

export default App;