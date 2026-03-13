import { Github, Linkedin, MessageCircle, Facebook } from 'lucide-react';

const SocialSidebar = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/mosabbirkhan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mosabbirkhan', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
    { icon: Facebook, href: 'https://facebook.com/mosabbirkhan', label: 'Facebook' },
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
          <social.icon size={20} />
        </a>
      ))}
      <div className="w-px h-20 bg-brand/40 mx-auto" />
    </div>
  );
};

export default SocialSidebar;
