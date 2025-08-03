# MSAL React App with Azure Entra Authentication

This is a React TypeScript application that demonstrates authentication with Azure Entra (formerly Azure AD) using the Microsoft Authentication Library (MSAL) and React Router.

## Features

- 🔐 Azure Entra authentication using MSAL
- 🚀 React with TypeScript
- 🛣️ React Router for navigation
- 📱 Responsive design
- 🔄 Sign in/Sign out functionality with popup and redirect flows
- 👤 User profile display with Microsoft Graph integration

## Prerequisites

Before running this application, you need to:

1. **Azure App Registration**: Create an app registration in Azure Portal
2. **Node.js**: Install Node.js (version 14 or higher)
3. **npm or yarn**: Package manager

## Azure App Registration Setup

1. Go to [Azure Portal](https://portal.azure.com)
2. Navigate to **Azure Active Directory** > **App registrations**
3. Click **New registration**
4. Fill in the details:
   - **Name**: Your app name (e.g., "MSAL React App")
   - **Supported account types**: Choose based on your needs
   - **Redirect URI**: 
     - Platform: Single-page application (SPA)
     - URI: `http://localhost:3000`
5. Click **Register**
6. Note down the **Application (client) ID** and **Directory (tenant) ID**

### API Permissions
1. Go to **API permissions**
2. Add **Microsoft Graph** > **Delegated permissions**
3. Add `User.Read` permission
4. Click **Grant admin consent** (if you have admin privileges)

## Configuration

1. Open `src/authConfig.ts`
2. Replace the following values:
   ```typescript
   const msalConfig: Configuration = {
     auth: {
       clientId: "YOUR_CLIENT_ID", // Replace with your Azure App Registration Client ID
       authority: "https://login.microsoftonline.com/YOUR_TENANT_ID", // Replace with your tenant ID
       redirectUri: "http://localhost:3000",
     },
     // ... rest of the configuration
   };
   ```

## Installation and Running

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── SignInButton.tsx      # Sign in component with popup/redirect options
│   ├── SignOutButton.tsx     # Sign out component
│   └── ProfileContent.tsx    # User profile display component
├── pages/
│   ├── Home.tsx              # Home page component
│   └── Profile.tsx           # Profile page component
├── authConfig.ts             # MSAL configuration
├── App.tsx                   # Main app component with routing
├── App.css                   # Styling
└── index.tsx                 # Application entry point
```

## Key Components

### Authentication Flow
- **Sign In**: Users can sign in using popup or redirect flow
- **Sign Out**: Users can sign out using popup or redirect flow
- **Protected Routes**: Profile page requires authentication
- **Token Management**: MSAL handles token acquisition and renewal automatically

### Components Description

1. **App.tsx**: Main component that wraps the app with MsalProvider and sets up routing
2. **Home.tsx**: Landing page with conditional rendering based on authentication status
3. **Profile.tsx**: Protected page showing user profile information
4. **SignInButton.tsx**: Handles user sign-in with multiple flow options
5. **SignOutButton.tsx**: Handles user sign-out
6. **ProfileContent.tsx**: Displays user information from Microsoft Graph

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (one-way operation)

## Authentication Flows

The app supports both authentication flows:
- **Popup Flow**: Opens a popup window for authentication
- **Redirect Flow**: Redirects the entire page for authentication

## Microsoft Graph Integration

The app demonstrates how to:
- Acquire access tokens for Microsoft Graph
- Make authenticated requests to Graph API
- Display user profile information

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure your redirect URI is correctly configured in Azure
2. **Token Acquisition Errors**: Check your app registration permissions
3. **Build Errors**: Ensure all dependencies are installed with `npm install`

### Development Tips

- Use popup flow for development to avoid losing application state
- Check browser developer tools for detailed error messages
- Verify your Azure app registration configuration

## Security Considerations

- Never commit your actual Client ID and Tenant ID to version control
- Use environment variables for sensitive configuration in production
- Implement proper error handling for authentication failures
- Consider implementing token refresh strategies for long-running sessions

## Learn More

- [MSAL React Documentation](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react)
- [Microsoft Graph Documentation](https://docs.microsoft.com/en-us/graph/)
- [Azure AD App Registration Guide](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app)
