import { useIsAuthenticated } from '@azure/msal-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ProfileContent from '../components/ProfileContent';
import SignOutButton from '../components/SignOutButton';

const Profile: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return (
      <div className="profile-page">
        <header className="header">
          <h1>Profile Page</h1>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
          </nav>
        </header>
        <main className="main-content">
          <h2>Access Denied</h2>
          <p>You must be signed in to view this page.</p>
          <Link to="/" className="home-link">Go to Home</Link>
        </main>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <header className="header">
        <h1>Profile Page</h1>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <SignOutButton />
        </nav>
      </header>
      
      <main className="main-content">
        <ProfileContent />
      </main>
    </div>
  );
};

export default Profile;
