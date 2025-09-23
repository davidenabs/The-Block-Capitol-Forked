import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white py-10 px-6 md:px-16">
      {/* Logo and Subscription */}
      <div className="flex flex-col md:flex-row item-center justify-between border-b border-gray-700 pb-4">
        <motion.img
          src="./footer-logo.png"
          alt="Block Capitol Logo"
          className="w-24"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <div className="mt-4 flex flex-col md:flex-row md:space-x-2">
          <div className="mb-2 md:mb-0">
            <label className="flex gap-2 items-center self-stretch px-4 py-3 my-auto leading-snug border-b bg-slate-100 border-neutral-300 min-h-12 min-w-60 text-zinc-500 w-full md:w-[285px]">
              <Mail className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
              <input
                type="email"
                placeholder="Enter email address"
                // value={value}
                // onChange={(e) => onChange(e.target.value)}
                className="bg-transparent outline-none w-full self-stretch my-auto"
                aria-label="Email address"
              />
            </label>
          </div>
          <button className="bg-secondary px-4 py-2 hover:bg-red-700 flex justify-center items-center self-stretch my-auto font-medium tracking-wide leading-none text-white whitespace-nowrap min-h-12 w-full">
            Subscribe
          </button>
        </div>
      </div>
      <div className="w-full flex flex-ol md:lex-row itemscenter md:items-end justify-between">
        {/* Quick Links */}
        <div className="mt-8 textcenter md:tex-left">
          <h3 className="text-lg font-semibold">Quick Links:</h3>
          <ul className="mt-2 space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">
              Terms of Service
            </li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-end">
          <div className="mt-8 mt- font-bold text-lg flex  flex-col items-end">
            The BlockCapitol
          </div>
          <div className=" flex flex-col items-end md:items-end mt-auto">
            <h3 className="text-lg font-semibold">Join Us</h3>
            <div className="flex space-x-4 mt-2">
              <Link to={"https://www.youtube.com/@TheBlockCapitol"} target="_blank"><FaYoutube
                className="text-gray-400 hover:text-white cursor-pointer"
                size={20}
              /></Link>
              {/* <FaFacebookF
                className="text-gray-400 hover:text-white cursor-pointer"
                size={20}
              /> */}
              <Link to={"https://x.com/theblockcapitol"} target="_blank"><FaTwitter
                className="text-gray-400 hover:text-white cursor-pointer"
                size={20}
              /></Link>
              {/* <FaInstagram
                className="text-gray-400 hover:text-white cursor-pointer"
                size={20}
              /> */}
              <Link to={"https://www.linkedin.com/company/theblockcapitol"} target="_blank"> <FaLinkedinIn
                className="text-gray-400 hover:text-white cursor-pointer"
                size={20}
              /></Link>
              <Link to={"https://t.me/theblockcapitol"} target="_blank">
                <FaTelegram
                  className="text-gray-400 hover:text-white cursor-pointer"
                  size={20}
                /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        The BlockCapitol © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
