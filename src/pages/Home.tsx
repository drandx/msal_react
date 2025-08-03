import { useIsAuthenticated } from '@azure/msal-react';
import React from 'react';
import { Link } from 'react-router-dom';
import SignInButton from '../components/SignInButton';
import SignOutButton from '../components/SignOutButton';

const Home: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div className="home-page">
      <header className="header">
        <h1>MSAL React App</h1>
        <nav>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="nav-link">Profile</Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </nav>
      </header>
      
      <main className="main-content">
        <h2>Welcome to the MSAL React App</h2>
        {isAuthenticated ? (
          <div>
            <p>You are successfully signed in!</p>
            <p>
              <Link to="/profile" className="profile-link">
                View your profile
              </Link>
            </p>
          </div>
        ) : (
          <div>
            <p>Please sign in to access your profile and other features.</p>
            <SignInButton />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
