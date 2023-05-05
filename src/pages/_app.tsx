import 'styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app'
import Script from "next/script";
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  const GA_MEASUREMENT_ID='G-J4EFBSZ2D4'
  const pageview = (url: string): void => {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={'https://www.googletagmanager.com/gtag/js?id='+GA_MEASUREMENT_ID}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${GA_MEASUREMENT_ID}');
           `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
