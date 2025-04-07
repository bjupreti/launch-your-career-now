
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  isPrimary?: boolean;
}

const FeatureCard = ({ icon, title, description, price, isPrimary = false }: FeatureCardProps) => {
  return (
    <Card className={`h-full transition-all hover:shadow-lg ${isPrimary ? 'border-brand-teal border-2' : ''}`}>
      <CardHeader>
        <div className="mb-4 w-12 h-12 rounded-full bg-brand-blue-dark/10 flex items-center justify-center text-brand-blue-dark">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-gray-500 mt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-semibold text-lg">
          {price}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
