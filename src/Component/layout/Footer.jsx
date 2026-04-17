import logo from "../../assets/images/logo remove.png";
import { Link } from "react-router-dom";

import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaWhatsapp 
} from "react-icons/fa";

import { 
  HiOutlineMail, 
  HiOutlineLocationMarker 
} from "react-icons/hi";

import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-950 text-gray-300 pt-20 pb-10 font-manrope">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* ABOUT */}
          <div>
            <img
              src={logo}
              alt="Look Up Love NGO"
              className="h-14 mb-6"
            />

            <p className="text-gray-400 text-[15px] leading-relaxed">
              Look Up Love is dedicated to uplifting communities through
              compassion, outreach, education, and empowerment programs
              that create lasting impact and hope for vulnerable people.
            </p>
          </div>


          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h4>

            <ul className="space-y-4 text-[15px]">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Programs", "/programs"],
                ["Volunteer", "/volunteer"],
                ["Contact", "/contact"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link
                    to={link}
                    className="hover:text-white transition duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* PROGRAMS */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Our Programs
            </h4>

            <ul className="space-y-4 text-[15px]">
              {[
                "Community Outreach",
                "Education Support",
                "Women Empowerment",
                "Healthcare Assistance",
              ].map((program) => (
                <li
                  key={program}
                  className="hover:text-white transition duration-200"
                >
                  {program}
                </li>
              ))}
            </ul>
          </div>


          {/* SOCIAL + CONTACT */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Connect With Us
            </h4>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mb-8">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-800 hover:bg-neutral-700 p-3 rounded-full transition"
              >
                <FaWhatsapp />
              </a>

            </div>

            {/* CONTACT INFO */}
            <div className="space-y-4 text-[15px] text-gray-400 mb-8">

              <div className="flex items-start gap-3">
                <HiOutlineLocationMarker className="text-white text-lg mt-1"/>
                <p>
                  43 Sijuwola Street, Ago Palace Way, Okota, Lagos
                </p>
              </div>

              <div className="flex items-center gap-3">
                <HiOutlineMail className="text-white text-lg"/>
                <p>lookuplove@gmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-white text-lg"/>
                <p>+234 802 224 2916</p>
              </div>

            </div>

            {/* CTA */}
            <Link
              to="/donate"
              className="inline-block bg-[#6a1b1b] hover:bg-[#631919] text-white text-[15px] px-6 py-3 rounded-md transition"
            >
              Support Our Mission
            </Link>

          </div>
        </div>


        {/* BOTTOM */}
        <div className="border-t border-neutral-800 mt-16 pt-8 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Look Up Love NGO. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;