// pages/_app.js
import React, { useEffect, useState } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import Layout from '@components/layout';
import '../globals.css'; 

export default function MyApp({ Component, pageProps }) {
  const [redirectUri, setRedirectUri] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setRedirectUri(window.location.origin);
    }
  }, []);

  if (!redirectUri) {
    // Optionally, you could return a loading spinner or something until the redirectUri is set
    return <div>Loading...</div>;
  }

  return (
    <Auth0Provider
      domain="jennyguenglish.us.auth0.com"
      clientId="KIhCuyvSKYodEek93AzgruW0yw1L4tIy"
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>
  );
}
