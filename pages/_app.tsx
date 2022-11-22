import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
const smileySans = localFont({ src: '../public/SmileySans-Oblique.ttf.woff2' });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={smileySans.className}>
      <Component {...pageProps} />
    </main>
  );
}
