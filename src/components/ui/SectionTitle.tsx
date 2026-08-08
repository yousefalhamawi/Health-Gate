import React from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) => {
  const textAlign = align === 'center' ? 'text-center' : 'text-left';
  const titleColor = light ? 'text-white' : 'text-slate-900';
  const subtitleColor = light ? 'text-blue-200/70' : 'text-slate-500';
  const eyebrowColor = light ? 'text-[#00D5FF]' : 'text-[#0A5C8A]';
  const dividerMargin = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`${textAlign} mb-16 relative`}>
      {eyebrow && (
        <span
          className={`inline-block text-xs font-black uppercase tracking-widest ${eyebrowColor} mb-3.5`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4.5xl font-black ${titleColor} leading-[1.2] tracking-tight mb-4`}>
        {title}
      </h2>
      <div
        className={`w-16 h-1.5 rounded-full bg-gradient-to-r from-[#0A5C8A] via-[#0A84FF] to-[#00D5FF] ${dividerMargin} mb-5`}
      />
      {subtitle && (
        <p className={`text-sm md:text-[15px] font-semibold ${subtitleColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
