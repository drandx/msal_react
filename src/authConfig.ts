import { Configuration, PopupRequest } from "@azure/msal-browser";

// MSAL configuration
const msalConfig: Configuration = {
  auth: {
    clientId: process.env.REACT_APP_CLIENT_ID || "210431dd-b71d-4505-adec-d20fbf9e243e", // Replace with your Azure App Registration Client ID
    authority: process.env.REACT_APP_AUTHORITY || `https://login.microsoftonline.com/${process.env.REACT_APP_TENANT_ID || "2461f0ad-fc65-4bf9-af43-a268dedc0c5b"}`, // Replace with your tenant ID or use 'common'
    redirectUri: process.env.REACT_APP_REDIRECT_URI || "http://localhost:3000", // Must match the redirect URI configured in your app registration
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest: PopupRequest = {
  scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

export default msalConfig;
