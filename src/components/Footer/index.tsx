import darkLogo from "../../assets/images/logo-dark.svg";
import { Facebook, Instagram, Twitter } from "../Socials";

export default function Footer() {
   return (
      <footer>
         <div className="container">
            <img src={darkLogo} alt="dark workit logo" />
            <div className="socials">
               <Facebook />
               <Twitter />
               <Instagram />
            </div>
         </div>
      </footer>
   );
}
