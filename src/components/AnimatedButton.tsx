import { Button } from './ui/button';
import { animateButton } from '@/hooks/useScrollAnimation';
import { ComponentProps } from 'react';

interface AnimatedButtonProps extends ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export const AnimatedButton = ({ children, onClick, ...props }: AnimatedButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    animateButton(e.currentTarget);
    onClick?.(e);
  };

  return (
    <Button 
      onClick={handleClick}
      className="transition-all duration-300"
      {...props}
    >
      {children}
    </Button>
  );
};
