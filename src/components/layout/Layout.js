import Header from './Header';
import Head from 'next/head';
import Footer from '../../organisms/Footer';

const Layout = ({ children, title, description, ogImage, url }) => {
  // Default Open Graph image
  const ogImg = "/blog-demo-min.png";
  // Google site verification
  const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

  return (
    <>
      <Head>
        <title>{title ? title : "Blog"}</title>
        <meta
          name="description"
          key="description"
          content={
            description
              ? description
              : "This is a statically generated blog example using Next.js and Contentful. | Blog with React/Next.js and Contentful"
          }
        />
        <meta
          property="og:title"
          content={title ? title : "Blog"}
          key="og:title"
        />
        <meta
          property="og:url"
          content={url ? url : "https://shopperbird.vercel.app/"}
          key="og:url"
        />
        <meta
          property="og:image"
          content={ogImage ? ogImage : ogImg}
          key="og:image"
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "This is a statically generated blog example using Next.js and Contentful."
          }
          key="og:description"
        />
        {GOOGLE_SITE_VERIFICATION && (
          <meta
            name="google-site-verification"
            content={GOOGLE_SITE_VERIFICATION}
            key="google-site-verification"
          />
        )}
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <style jsx global>
        {`
          html,
          body {
            background: #fff;
            overflow-x: hidden;
            margin: 0; /* Adjusted from padding to margin for body */
            padding: 0;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
