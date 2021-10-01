import BlockTitle from "./BlockTitle";
import { BiRightArrow } from "react-icons/bi";

export default function About() {
  const leftTechs = [
    "Angular",
    "Next Js",
    "Flutter",
    "WordPress",
  ];
  const rightTechs = [
    "Firebase",
    "Tailwind Css",
    "Sanity",
  ];
  return (
    <section id="about">
      <div className="p-5 flex-col space-y-4">
        <BlockTitle idx="01" title="About Me" />

        <p className="">
          Hi! My name is Emeric and I love building beautiful web and mobile applications. 
          In 2016, I build a learning management system and won a programming contest at the University. 
          That's where my interest in the web really started. 
        </p>
        <p className="">
          Afterwards, I've worked as a freelancer until I had the amazing opportunity of working at { " " }
          <a href="https://hitotec.com" alt="Hitotec"
            className="text-skin-primary transform hover:border-b-2 hover:border-skin-inverted hover:translate-y-10 transition duration-500 ease-in">
             Hitotec
          </a>
          {" and "}
          <a href="https://ibiitech.com" alt="Hitotec"
            className="text-skin-primary transform hover:border-b-2 hover:border-skin-inverted hover:translate-y-10 transition duration-500 ease-in">
             Ibiitech
          </a>
          .
        </p>
        <p>
          I'm currently working on a payment platforn at { " "}
          <a href="https://tapaar.com" alt="Hitotec"
            className="text-skin-primary transform hover:border-b-2 hover:border-skin-inverted hover:translate-y-10 transition duration-500 ease-in">
             Tapaar
          </a>
          {", "} which is a company I've stated with a friend.
        </p>
        <p>I'm more comfortable working with the following technologies:</p>
        <div className="grid grid-cols-2 gap-6">
          <div>
            {
              leftTechs.map((item, idx) => (
              <p key={idx} className="flex items-center">
                <BiRightArrow className="mr-4 text-skin-inverted" />
                { item }
              </p>))
            }
          </div>
          <div>
            {
              rightTechs.map((item, idx) => (
              <p key={idx} className="flex items-center">
                <BiRightArrow className="mr-4 text-skin-inverted" />
                { item }
              </p>))
            }
          </div>
        </div>
      </div>

      <div className="my-20"></div>

    </section>
  );
}
