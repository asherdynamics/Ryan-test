import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="max-w-screen-xl mt-24 px-16 mx-auto">
      <div className="grid grid-flow-col grid-cols-2 gap-8 py-8 mt-16">
        <div className="flex w-full justify-end">
          <Image
            src="/assets/Illustration2.png"
            alt="VPN Illustrasi"
            height={414}
            width={508}
          />
        </div>
        <div className="flex flex-col items-end justify-center ml-auto w-9/12">
          <h3 className="text-4xl font-medium leading-relaxed text-black-600">
            We Provide Many Features You Can Use
          </h3>
          <p className="my-2 text-black-500">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </p>
          <ul className="text-black-500 self-start list-inside ml-8">
            <li className="relative circle-check custom-list">
              Powerfull online protection.
            </li>
            <li className="relative circle-check custom-list">
              Internet without borders.
            </li>
            <li className="relative circle-check custom-list">
              Supercharged VPN
            </li>
            <li className="relative circle-check custom-list">
              No specific time limits.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;