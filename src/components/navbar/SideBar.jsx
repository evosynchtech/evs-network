import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import NavButton from "../buttons/NavButton";

function SideBar({ isMounted, unMount }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const scroll = () => {
    const element = document.getElementById("footer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
      document.body.classList.add("scroll-lock");
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        document.body.classList.remove("scroll-lock");
      }, 300);
    }
    return () => {
      if (document.body.classList.contains("scroll-lock") && isTransitioning) {
        document.body.classList.remove("scroll-lock");
      }
    };
  }, [isMounted, isTransitioning]);

  if (!isMounted && !isTransitioning) return null;

  return createPortal(
    <>
      <div
        onClick={unMount}
        className="z-[90] w-full h-full fixed top-0 left-0 bg-[#0000006a]"
      ></div>
      <div
        className={`sidebar-container z-[100] top-0 left-0 fixed ${
          isTransitioning && isMounted ? "translate-x-0" : "-translate-x-full"
        } w-[60%] h-full gradient-bg-gray-black duration-300`}
      >
        <div className="sidebar-navbar w-full flex flex-row justify-center border-b border-b-slate-300">
          <div className="px-4 w-[90%] flex justify-end">
            <div
              onClick={unMount}
              className="close-logo text-white text-2xl p-3 sm:text-3xl border-none cursor-pointer duration-150"
            >
              <i class="bi bi-x-lg duration-300 focus:outline-none active:bg-slate-800 rounded-full"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start font-medium gap-y-4 p-4 text-base sm:text-lg">
          <NavButton
            onClick={unMount}
            isActive={isActive("/")}
            title={"Home"}
            to={"/"}
          />
          <NavButton
            onClick={unMount}
            isActive={isActive("/about")}
            title={"About"}
            to={"/about"}
          />
          <NavButton
            onClick={unMount}
            isActive={isActive("/services")}
            title={"Services"}
            to={"/services"}
          />
          <NavButton
            onClick={unMount}
            isActive={isActive("/pricing")}
            title={"Pricing"}
            to={"/pricing"}
          />
          <NavButton
            onClick={unMount}
            isActive={isActive("/contact")}
            title={"Contact"}
            to={"/contact"}
          />
        </div>
      </div>
    </>,
    document.getElementById("overlay")
  );
}

export default SideBar;
