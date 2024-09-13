"use client";
import "../styles.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    animate(
      ".menu-container",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      ".row1",
      isOpen
        ? {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transform: "translateY(0)",
          }
        : {
            opacity: 0,
            scale: 0.3,
            filter: "blur(20px)",
            transform: "translateY(40px)",
          },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
    animate(
      ".row2",
      isOpen
        ? {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transform: "translateY(0)",
          }
        : {
            opacity: 0,
            scale: 0.3,
            filter: "blur(20px)",
            transform: "translateY(40px)",
          },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
    animate(
      ".row3",
      isOpen
        ? {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transform: "translateY(0)",
          }
        : {
            opacity: 0,
            scale: 0.3,
            filter: "blur(20px)",
            transform: "translateY(40px)",
          },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen]);

  return scope;
}

export default function DropdownAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div className="flex justify-center content-center flex-wrap min-h-[700px]">
      <div className="menu" ref={scope}>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
          <div className="arrow" style={{ transformOrigin: "50% 55%" }}>
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </div>
        </motion.button>
        <div
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
          className="flex bg-white rounded-sm menu-container"
        >
          <ul>
            <li className="row1">Item 1 </li>
            <li className="row1">Item 2 </li>
            <li className="row1">Item 3 </li>
            <li className="row1">Item 4 </li>
            <li className="row1">Item 5 </li>
          </ul>{" "}
          <ul>
            <li className="row2">Item 1 </li>
            <li className="row2">Item 2 </li>
            <li className="row2">Item 3 </li>
            <li className="row2">Item 4 </li>
            <li className="row2">Item 5 </li>
          </ul>{" "}
          <ul>
            <li className="row3">Item 1 </li>
            <li className="row3">Item 2 </li>
            <li className="row3">Item 3 </li>
            <li className="row3">Item 4 </li>
            <li className="row3">Item 5 </li>
          </ul>{" "}
        </div>
      </div>
    </div>
  );
}
