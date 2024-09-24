import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer class="p-4 gradient-bg-gray-black sm:p-6">
      <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <Link to="/" class="flex items-center">
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                EVS Network
              </span>
            </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                Resources
              </h2>
              <ul class="text-white">
                <li class="mb-4 hover:text-[#AAFF00]">
                  <a href="#" class="">
                    Home
                  </a>
                </li>
                <li className="hover:text-[#AAFF00]">
                  <a href="#" class="">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                Follow us
              </h2>
              <ul class="text-white">
                <li class="mb-4 hover:text-[#AAFF00]">
                  <a href="#" class=" ">
                    Github
                  </a>
                </li>
                <li className="hover:text-[#AAFF00]">
                  <a href="#" class="">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul class="text-white">
                <li class="mb-4 hover:text-[#AAFF00]">
                  <a href="#" class="">
                    Privacy Policy
                  </a>
                </li>
                <li className="hover:text-[#AAFF00]">
                  <a href="#" class="">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" class="hover:underline">
              EVS Network
            </a>
            . All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" class="hover:text-[#AAFF00] text-white">
              <FaFacebook />
            </a>
            <a href="#" class="hover:text-[#AAFF00] text-white">
              <FaInstagram />
            </a>
            <a href="#" class="hover:text-[#AAFF00] text-white">
              <FaTwitter />
            </a>
            <a href="#" class="hover:text-[#AAFF00] text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
