import lightLogo from "../../assets/images/logo-light.svg";
import pattern1 from "../../assets/images/bg-pattern-1.svg";
import pattern2 from "../../assets/images/bg-pattern-2.svg";

export default function Header() {
   return (
      <header>
         <nav>
            <img src={lightLogo} alt="Workit logo" />
            <a href="#access">Apply for access</a>
         </nav>
         <h1>
            Data <span>tailored</span> to
            <br />
            your needs.
         </h1>
         <button>Learn more</button>
         <img src={pattern1} alt="background pattern 1" className="pattern1" />
         <img src={pattern2} alt="background pattern 2" className="pattern2" />
      </header>
   );
}
