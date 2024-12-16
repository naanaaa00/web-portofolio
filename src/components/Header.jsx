import { motion } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

import profilePicture from '../assets/pic-profile.jpg'

function Header() {
  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/naanaaa00" },
    { Icon: FaWhatsapp, href: "https://wa.me/6285755351793" },
    { Icon: FaInstagram, href: "https://instagram.com/naanaaa.ee" }
  ];

  return (
    <header className="header bg-gradient-to-br  to-[#e6e4d0] min-h-screen flex items-center justify-center  text-center">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <motion.img 
              src={profilePicture} 
              alt="Waridatul Jannah" 
              className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#d3966e] shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>

          {/* Text and Social Icons */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left space-y-6"
          >
            <div>
              <h1 className="text-[#222831] text-5xl md:text-6xl uppercase mb-2 font-extrabold tracking-tight">
                Waridatul 
                <br />
                Jannah
              </h1>
              <p className="text-[#5c6068] text-xl md:text-2xl font-light tracking-wide">
                Web Developer
              </p>
            </div>

            {/* Social Media Icons */}
            <motion.div 
              className="flex justify-center md:justify-start gap-6 pt-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.3,
                    staggerChildren: 0.2
                  }
                }
              }}
            >
              {socialLinks.map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-1 border-[#d3966e] shadow-xl w-16 h-16 flex items-center justify-center transition-all duration-300 hover:bg-[#7C9D96] hover:shadow-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.5 }
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-6 h-6 " />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;