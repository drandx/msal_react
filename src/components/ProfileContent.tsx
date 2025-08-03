import { useMsal } from '@azure/msal-react';
import React, { useEffect, useState } from 'react';
import { graphConfig } from '../authConfig';

interface UserProfile {
  displayName?: string;
  mail?: string;
  userPrincipalName?: string;
  id?: string;
}

const ProfileContent: React.FC = () => {
  const { instance, accounts } = useMsal();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    if (accounts[0]) {
      fetchUserProfile();
    }
  }, [accounts]);

  const fetchUserProfile = async () => {
    const request = {
      scopes: ["User.Read"],
      account: accounts[0]
    };

    try {
      const response = await instance.acquireTokenSilent(request);
      const profileResponse = await fetch(graphConfig.graphMeEndpoint, {
        headers: {
          Authorization: `Bearer ${response.accessToken}`
        }
      });
      
      if (profileResponse.ok) {
        const profile = await profileResponse.json();
        setUserProfile(profile);
      }
    } catch (error) {
      console.log("Error fetching profile:", error);
    }
  };

  if (!accounts[0]) {
    return <div>No user signed in</div>;
  }

  return (
    <div className="profile-content">
      <h3>Welcome, {accounts[0].name || accounts[0].username}!</h3>
      
      {userProfile ? (
        <div className="profile-details">
          <h4>Profile Information:</h4>
          <p><strong>Display Name:</strong> {userProfile.displayName}</p>
          <p><strong>Email:</strong> {userProfile.mail || userProfile.userPrincipalName}</p>
          <p><strong>User ID:</strong> {userProfile.id}</p>
        </div>
      ) : (
        <p>Loading profile information...</p>
      )}
      
      <div className="account-details">
        <h4>Account Details:</h4>
        <p><strong>Username:</strong> {accounts[0].username}</p>
        <p><strong>Account ID:</strong> {accounts[0].localAccountId}</p>
        <p><strong>Environment:</strong> {accounts[0].environment}</p>
      </div>
    </div>
  );
};

export default ProfileContent;
