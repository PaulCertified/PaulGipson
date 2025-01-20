import React from 'react';
    import { footerConfig } from './config';
    // import { SocialLinks } from './components'; // Commented out

    const Footer = () => {
      return (
        <footer className="py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              Copyright ©{new Date().getFullYear()} {footerConfig.name}
            </p>
            
            {/* SocialLinks links={footerConfig.socialLinks} /> */} {/* Commented out */}
          </div>
        </footer>
      );
    };
    
    export default Footer;
