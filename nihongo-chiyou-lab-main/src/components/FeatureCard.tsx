import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, buttonText, href, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-primary/20 hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
        <Icon className="h-7 w-7 text-primary" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <Button variant="card" size="sm" className="group/btn" asChild>
        <Link to={href}>
          {buttonText}
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
};

export default FeatureCard;
