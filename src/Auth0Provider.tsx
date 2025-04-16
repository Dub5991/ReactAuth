// Auth0Provider.tsx
import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
type Auth0ProviderWithNavigateProps = {
  children: any;
};

const Auth0ProviderWithNavigate: React.FC<Auth0ProviderWithNavigateProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const domain = "your_domain"; // replace with your Auth0 domain
  const clientId = "your_client_id"; // replace with your Auth0 client ID;
  const redirectUri = "http://localhost:5173/callback"; // make sure the port matches your server

  const onRedirectCallback = (appState: any) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  }; // this is the default behavior that Auth0Provider uses to redirect the user after login back to the app
  
  if (!(domain && clientId && redirectUri)) {
    return null;
  } //♥

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        scope: "openid profile email",
      }}
      onRedirectCallback={onRedirectCallback}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
// <Auth0Provider>: This component is the key provider that integrates Auth0 into the React application.
// domain: The Auth0 domain for the application.
// clientId: The client ID of the Auth0 application.
// authorizationParams: These parameters define what information is requested from Auth0 during the authentication process. The redirect_uri is the URL where users will be redirected after login.
// scope: Specifies which user data the app wants. In this case, it's requesting openid (basic authentication), profile (user profile), and email (email information).
// onRedirectCallback: The callback function triggered after a successful redirect (used for navigation after login).
// cacheLocation="localstorage": This setting tells Auth0 where to store the authentication tokens. localstorage ensures that tokens persist across page reloads.

// 7. Returning the Wrapped Components:

// {children}
// {children}: This renders the child components passed to Auth0ProviderWithNavigate. This allows you to wrap the entire app with the Auth0 context, providing authentication features to any component within the app.


// DOUBLE CHECK: Make sure to put in your information from the Auth0 website:

// domain - found under the settings tab in the Auto0 dashboard
// clientId - found under the settings tab in the Auto0 dashboard
// redirectUri - this will be: http://localhost:5173/callback - make sure the port and protocol match up with your server