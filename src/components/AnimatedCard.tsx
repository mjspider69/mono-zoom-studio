import { Card } from './ui/card';
import { animateCard, animateCardOut } from '@/hooks/useScrollAnimation';
import { ComponentProps } from 'react';

interface AnimatedCardProps extends ComponentProps<typeof Card> {
  children: React.ReactNode;
}

export const AnimatedCard = ({ children, ...props }: AnimatedCardProps) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    animateCard(e.currentTarget);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    animateCardOut(e.currentTarget);
  };

  return (
    <Card 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="transition-all duration-300"
      {...props}
    >
      {children}
    </Card>
  );
};
