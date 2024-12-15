import { STATS } from "@/constants";
interface StatProps {
  title: string;
  number: string;
  className?: string;
}

const StatItem = ({ title, number, className }: StatProps) => {
  return (
    <div className={`flexCenter flex-col text-white ${className ?? ""}`}>
      <h1 className="bold-52">{number}</h1>
      <h5 className="bold-20">{title}</h5>
    </div>
  );
};

const Impact = () => {
  return (
    <section className="padding-container bg-blue-50 rounded-lg py-12 lg:py-16 flexCenter flex-col">
      <div className="max-container w-full flexCenter flex-col grid-cols-3 gap-12 lg:grid lg:gap-2">
        {STATS.map((stat, index) => (
          <StatItem key={index} title={stat.title} number={stat.number} className={`hide !delay-${index * 100}`} />
        ))}
      </div>
    </section>
  );
};

export default Impact;
