import React from "react";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import { motion } from "framer-motion";
import Image from "next/image";
const About = () => {
  const technologies = [
    ["React", "Next js", "JavaScript", "Typescript", "Node Js", "Express Js"],
    ["React Native", "Redux", "Tailwind CSS", "MUI", "MySQL", "Emotion"],
  ];
  return (
    <div
      id="aboutSection"
      className="snap-start flex flex-col  items-center py-20 bg-AAprimary"
    >
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px]
        md:w-[700px] lg:w-[1024px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon
              className={
                "flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"
              }
            />

            <span className="flex-none text-AAsecondary opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <motion.h4
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                opacity: {
                  delay: 0.4,
                  duration: 0.2,
                },
                y: {
                  delay: 0.4,
                  duration: 0.2,
                },
              }}
              className="text-AAsecondary font-mono"
            >
              Hey there!
            </motion.h4>
            <div className="font-Header tracking-wide ">
              <span className="text-gray-400 ">
                I&apos;m Shubham Kumar, the creative force behind the scenes,
                bringing ideas and concepts to life. I&apos;m a problem-solving
                enthusiast with a passion for crafting extraordinary digital
                experiences.
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-400 ">
                My expertise centers around the Javascript, Typescript,
                React.js, Node.js, Express, MySQL, MongoDB, React Native,
                Node.js, Swift, where I&apos;m actively engaged in the art of
                developing and designing immersive applications. But that&apos;s
                just the tip of the iceberg. I also dive deep into the exciting
                world of Augmented Reality (AR) and Mobile App development,
                where I contribute to the creation of captivating and innovative
                user experiences. For me, technology isn&apos;t just lines of
                code; it&apos;s a canvas on which I paint solutions and
                possibilities. I&apos;m on a mission to make the digital realm a
                more vibrant and user-friendly place.
              </span>
            </div>
            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                So, if you&apos;re looking for someone who can turn your ideas
                into reality, you&apos;ve come to the right place. Let&apos;s
                connect and bring your vision to life. Head over to the contact
                section below and shoot me a message. I&apos;m eager to hear
                from you!
              </span>
            </div>

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently
                :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* //  Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:-translate-x-5 group-hover:-translate-y-5
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-AAsecondary opacity-10 duration-300 rounded overflow-hidden"></div>
              <Image
                fill
                src={"/assets/shubham.jpeg"}
                className={"object-fill w-full h-full rounded"}
                alt="My Image Not Found"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" group relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Image
                fill
                src={"/assets/shubham.jpeg"}
                className={"object-fill w-full h-full rounded-lg"}
                alt="My Image Not Found"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="absolute w-48 h-full  bg-AAsecondary opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
