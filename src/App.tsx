import { useState } from 'react';
import LoginPage from './components/LoginPage';
import AppLayout from './components/AppLayout';
import Dashboard from './components/Dashboard';
import MentionsPage from './components/MentionsPage';
import SentimentPage from './components/SentimentPage';
import CompetitorsPage from './components/CompetitorsPage';
import AlertsPage from './components/AlertsPage';
import ReportsPage from './components/ReportsPage';
import IntegrationsPage from './components/IntegrationsPage';
import SettingsPage from './components/SettingsPage';
import OnboardingWizard from './components/OnboardingWizard';
import { Toaster } from './components/ui/sonner';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    setShowOnboarding(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
    setUserEmail('');
  };

  const getUserName = () => {
    if (!userEmail) return 'User';
    const namePart = userEmail.split('@')[0];
    return namePart
      .split(/[._-]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'mentions':
        return <MentionsPage />;
      case 'sentiment':
        return <SentimentPage />;
      case 'competitors':
        return <CompetitorsPage />;
      case 'alerts':
        return <AlertsPage />;
      case 'reports':
        return <ReportsPage />;
      case 'integrations':
        return <IntegrationsPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <>
      <AppLayout 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onLogout={handleLogout}
        userName={getUserName()}
      >
        {renderPage()}
      </AppLayout>
      <OnboardingWizard 
        open={showOnboarding}
        onClose={() => setShowOnboarding(false)}
        userName={getUserName()}
      />
      <Toaster />
    </>
  );
}
