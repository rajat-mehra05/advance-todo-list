import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const Links = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const linksObj = [
    {
      id: 1,
      name: "GitHub",
      link: "https://github.com/rajat-mehra05/advance-todo-list",
    },
    { id: 2, name: "Portfolio", link: "https://rajatmehra.vercel.app/" },
  ];

  return (
    <div>
      <ul className="list-none flex gap-4">
        {linksObj.map((navLink) => (
          <li key={navLink.id}>
            <a
              onMouseEnter={() => setHoveredIndex(navLink.id)}
              onMouseLeave={() => setHoveredIndex(null)}
              href={navLink.link}
              target="_blank"
              className="relative rounded-xl px-6 py-2 text-sm text-green-700 transition-all delay-150 hover:text-green-900"
              rel="noreferrer"
            >
              <AnimatePresence>
                {hoveredIndex === navLink.id && (
                  <motion.span
                    layoutId="hoverBackground"
                    className="absolute inset-0 rounded-lg bg-pink-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10 font-semibold text-xl">
                {navLink.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
