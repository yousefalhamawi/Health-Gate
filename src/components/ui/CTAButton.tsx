import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'white';
  showArrow?: boolean;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  label,
  href,
  onClick,
  variant = 'primary',
  showArrow = true,
  className = '',
}) => {
  const variantClass =
    variant === 'outline' ? 'btn-outline' : variant === 'white' ? 'btn-white' : 'btn-primary';

  const content = (
    <>
      {label}
      {showArrow && <ArrowRight size={18} />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${variantClass} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${variantClass} ${className}`}>
      {content}
    </button>
  );
};

export default CTAButton;
