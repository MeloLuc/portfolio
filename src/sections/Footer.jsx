import { assetPath } from '../utils/assetPath.js';

const socialLinks = [
  {
    name: 'github',
    href: 'https://github.com/MeloLuc',
    icon: assetPath('assets/github.svg'),
  },
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/lucas-de-melo-monteiro-peixoto-34b78926b',
    icon: assetPath('assets/linkedin.svg'),
  },
  {
    name: 'leetcode',
    href: 'https://leetcode.com/u/melol/',
    icon: assetPath('assets/leetcode.svg'),
  },
  {
    name: 'instagram',
    href: 'https://www.instagram.com/melo.l/',
    icon: assetPath('assets/instagram.svg'),
  },
];

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        {socialLinks.map((link) =>
          link.href ? (
            <a key={link.name} href={link.href} target="_blank" rel="noreferrer" className="social-icon">
              <img src={link.icon} alt={link.name} className="w-1/2 h-1/2" />
            </a>
          ) : (
            <div key={link.name} className="social-icon">
              <img src={link.icon} alt={link.name} className="w-1/2 h-1/2" />
            </div>
          ),
        )}
      </div>

      <p className="text-white-500">&copy; 2026 Lucas Melo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
