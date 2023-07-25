import founder from "../../assets/images/image-founder.webp";
import pattern3 from "../../assets/images/bg-pattern-3.svg";

export default function Access() {
   return (
      <section id="access">
         <div className="container">
            <img src={founder} alt="founder Portrait" className="founder" />
            <div className="access-box">
               <h2>Be the first to test</h2>
               <p>
                  Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to
                  become a beta tester for our app and kickstart your company. Apply for access
                  below and I’ll be in touch to schedule a call.
               </p>
               <button>Apply for access</button>
               <img src={pattern3} alt="background pattern" className="patter3" />
            </div>
         </div>
      </section>
   );
}
