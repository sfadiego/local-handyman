import { Footer } from './footer';
import { Header } from './header';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PageWrapper;
