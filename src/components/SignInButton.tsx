import { useMsal } from '@azure/msal-react';
import React from 'react';
import { loginRequest } from '../authConfig';

const SignInButton: React.FC = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType: string) => {
    if (loginType === "popup") {
      instance.loginPopup(loginRequest).catch(e => {
        console.log(e);
      });
    } else if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch(e => {
        console.log(e);
      });
    }
  };

  return (
    <div>
      <button onClick={() => handleLogin("popup")} className="btn-primary">
        Sign in using Popup
      </button>
      <button onClick={() => handleLogin("redirect")} className="btn-secondary">
        Sign in using Redirect
      </button>
    </div>
  );
};

export default SignInButton;
