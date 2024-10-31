import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo and Description */}
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <h2 className="text-2xl font-bold">Majeka</h2>
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>

            {/* Social Media Links */}
            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <FaFacebook size={24} />
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <FaInstagram size={24} />
                  <span className="sr-only">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <FaTwitter size={24} />
                  <span className="sr-only">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <FaGithub size={24} />
                  <span className="sr-only">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-teal-700 transition hover:text-teal-700/75"
                >
                  <FaDribbble size={24} />
                  <span className="sr-only">Dribbble</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">About Us</p>
              <ul className="mt-8 space-y-4 text-sm text-gray-700">
                <li>
                  <a href="#" className="transition hover:text-gray-700/75">
                    Company History
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-700/75">
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-700/75">
                    Employee Handbook
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-700/75">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Our Services</p>
              <ul className="mt-8 space-y-4 text-sm text-gray-700">
                <li>
                  <a href="#" className="transition hover:text-gray-700/75">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-700/75">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-700/75">
                    Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-700/75">
                    Google Ads
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Helpful Links</p>
              <ul className="mt-8 space-y-4 text-sm text-gray-700">
                <li>
                  <a href="#" className="transition hover:text-gray-700/75">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-gray-700/75">
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 justify-center sm:justify-start"
                  >
                    Live Chat
                    <span className="relative flex w-2 h-2 bg-teal-500 rounded-full animate-ping opacity-75"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-900">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm text-gray-700">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <MdEmail className="text-gray-900" size={20} />
                    mohsin@carter.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 justify-center sm:justify-start"
                  >
                    <MdPhone className="text-gray-900" size={20} />
                    +92300120003
                  </a>
                </li>
                <li className="flex items-start gap-2 justify-center sm:justify-start">
                  <MdLocationOn className="text-gray-900" size={20} />
                  <address className="not-italic">G-12, Islamabad, PK</address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div class="mt-12 border-t border-gray-100 pt-6">
          <div class="text-center sm:flex sm:justify-between sm:text-left">
            <p class="text-sm text-gray-500">
              <span class="block sm:inline">All rights reserved.</span>

              <a
                class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                class="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="#"
              >
                Privacy Policy
              </a>
            </p>

            <p class="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2012 Majeka Point
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
