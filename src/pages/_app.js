// src/pages/_app.js
import Layout from '@components/layout';
import '../globals.css';  // Ensure this is correctly pointing to your global stylesheet

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
