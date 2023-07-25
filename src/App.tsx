import { GlobalStyle } from "./styles/GlobalStyle";
import Access from "./components/Access";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Header from "./components/Header";
import MobileHero from "./components/MobileHero";

export default function App() {
   return (
      <>
         <GlobalStyle />
         <MobileHero />
         <Header />
         <Grid />
         <Access />
         <Footer />
      </>
   );
}
