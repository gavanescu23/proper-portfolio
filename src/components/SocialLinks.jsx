import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import useWindowDimensions from "./getWindowDimensions";

const SocialLinks = () => {
  const { width } = useWindowDimensions();
  const links = [
    {
      id: 1,
      name: "LinkedIn",
      child: (
        <>
          {width < 768 ? "" : "LinkedIn"} <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/vlad-gavanescu-b72656130/",
      style: "rounded-tr-md   ",
      logo: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
    },
    {
      id: 2,
      name: "GitHub",
      child: (
        <>
          {width < 768 ? "" : "GitHub"} <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/gavanescu23",
      logo: (
        <>
          <FaGithub size={30} />
        </>
      ),
    },
    {
      id: 3,
      name: "email",
      child: (
        <>
          {width < 768 ? "" : "eMail"} <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:gavanescuvlad@yahoo.com",
      logo: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
    },
    {
      id: 4,
      name: "CV",
      child: (
        <>
          {width < 768 ? "" : "Resume"} <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Gavanescu-Vlad-CV.pdf",
      style: "rounded-br-md",
      download: true,
      logo: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
    },
  ];
  return (
    <>
      {width < 768 ? (
        <div className="bottom-0 fixed w-screen">
          <footer className=" bg-white dark:bg-gray-900 ">
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
              <div className="flex justify-around space-x-5 mb-1">
                {links.map(({ id, logo, href, download }) => (
                  <a
                    key={id}
                    download={download}
                    target="_blank"
                    rel="noreferrer"
                    href={href}
                    className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    {logo}
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      ) : (
        <div className="flex flex-col invisible md:visible top-[35%] left-0 fixed">
          <ul className="flex flex-col">
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={`flex justify-between items-center ml-[-75px] hover:ml-[-10px] rounded-md duration-300 mb-2 w-40 h-14 px-4 bg-white style`}
              >
                <a
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                  href={href}
                  className="flex justify-between items-center bg-white w-full "
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default SocialLinks;
