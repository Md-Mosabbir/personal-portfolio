import { Github, Linkedin, MessageCircle, Facebook } from 'lucide-react';

const SocialSidebar = () => {
  const socials = [
    { icon: Github, href: 'https://github.com/mosabbirkhan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/mosabbirkhan', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
    { icon: Facebook, href: 'https://facebook.com/mosabbirkhan', label: 'Facebook' },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6">
      <div className="w-px h-20 bg-gray-300 mx-auto" />
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-black transition-colors hover:scale-110 transform duration-200"
          aria-label={social.label}
        >
          <social.icon size={20} />
        </a>
      ))}
      <div className="w-px h-20 bg-gray-300 mx-auto" />
    </div>
  );
};

export default SocialSidebar;
