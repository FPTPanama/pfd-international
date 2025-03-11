
import '../styles/home.scss';
import '../styles/global.scss';
import '../styles/main-layout.scss';
import '../styles/header.scss';
import '../styles/footer.scss';
import Footer from '@/components/footer/Footer';
import Header from '@/components/Header/Header';


export const metadata = {
  title: "PFD International",
  description: "Global trade & logistics solutions / We specialize in faciliting seamless global trade by providing comprehensive logistics and supply chain solutions.",
  openGraph: {
    title: 'PFD International Global Trade & Logistics Solutions',
    description: "We supply a great variety of finished and semi-finished products. Steel products, ferrous scrap, raw material, refined metals, concentrates and ores and related by-products",
    url: 'https://pfd-international.com',
    siteName: 'www.pfd-international.com',
    keywords: ['ferrous', 'steel', 'iron','caustic soda', 'global trade solutions'],
    images: [
      {
        url: 'https://pfd-international.com/img/pfd_metaimage.webp', // Aquí deberías poner la URL de tu imagen
        width: 1200,
        height: 630,
        alt: 'HRK Global Trade'
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={'main-layout'}>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
