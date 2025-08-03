import { useMsal } from '@azure/msal-react';
import React from 'react';

const SignOutButton: React.FC = () => {
  const { instance } = useMsal();

  const handleLogout = (logoutType: string) => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/"
      });
    } else if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/"
      });
    }
  };

  return (
    <div>
      <button onClick={() => handleLogout("popup")} className="btn-danger">
        Sign out using Popup
      </button>
      <button onClick={() => handleLogout("redirect")} className="btn-outline">
        Sign out using Redirect
      </button>
    </div>
  );
};

export default SignOutButton;
