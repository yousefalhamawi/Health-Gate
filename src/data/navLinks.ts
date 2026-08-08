export interface NavLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '/products', isRoute: true },
  { label: 'Brands', href: '#brands' },
  { label: 'Contact Us', href: '#contact' },
];

export const socialLinks = {
  linkedin: 'https://linkedin.com',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  twitter: 'https://x.com',
};
