import { Github, Linkedin, Facebook, Mail } from 'lucide-react';
import MagneticButton from './magnetic-button';

const SocialSidebar = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/Md-Mosabbir', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/mosabbir-khan-867b641a5', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@mosabbir.tech', label: 'Mail' },
    { icon: Facebook, href: 'https://www.facebook.com/mdmosabbir.khan.589', label: 'Facebook' },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="w-px h-20 bg-brand/40 mx-auto" />
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-brand transition-colors hover:scale-110 transform duration-200"
          aria-label={social.label}
        >
          <MagneticButton>
            <div className="text-white/60 hover:text-brand transition-colors hover:scale-110 transform duration-200">
              <social.icon size={20} />
            </div>
          </MagneticButton>
        </a>
      ))}
      <div className="w-px h-20 bg-brand/40 mx-auto" />
    </div>
  );
};

export default SocialSidebar;
