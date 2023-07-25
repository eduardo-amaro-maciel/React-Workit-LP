export default function Grid() {
   return (
      <section className="grid">
         <div className="container">
            <GridCard
               number={1}
               heading="Actionable insights"
               content="Optimize your products, improve customer satisfaction and stay ahead of the competition with our product data analytics."
            />
            <GridCard
               number={2}
               heading="Data-driven decisions"
               content="Make data-driven decisions with our product data analytics. Our AI-generated reports help you unlock insights hidden in your product data."
            />
            <GridCard
               number={3}
               heading="Always affordable"
               content="Always affordable pricing that scales with your business. Get top-quality product data analytics services without hidden costs or unexpected fees."
            />
         </div>
      </section>
   );
}

type GridCardProps = {
   number: number;
   heading: string;
   content: string;
};

function GridCard({ number, heading, content }: GridCardProps) {
   return (
      <div className="card">
         <span>
            <p>{number}</p>
         </span>
         <div className="text">
            <h2>{heading}</h2>
            <p>{content}</p>
         </div>
      </div>
   );
}
