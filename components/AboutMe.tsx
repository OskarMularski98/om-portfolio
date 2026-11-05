import BaseButton from "./BaseButton";
import BaseCard from "./BaseCard";
import BaseSection from "./BaseSection";
import Image from "next/image";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400"],
});

const AboutMe = () => {
  return (
    <BaseSection>
      <div className="grid grid-cols-2 gap-24 relative">
        <div className="flex flex-col gap-8">
          <p className="text-secondary">Frontend developer · Gdańsk</p>
          <h1 className="text-9xl font-bold">
            I build fast, accessible interfaces people enjoy using.
          </h1>
          <p className="text-muted-text">[placeholder]</p>
          <div className="flex gap-4">
            <BaseButton>View my work</BaseButton>
            <BaseButton variant="secondary">Download CV</BaseButton>
          </div>
        </div>
        <div>
          <BaseCard
            variant="primary"
            className="group relative h-full w-full overflow-hidden"
          >
            <Image
              src={"/about-me.png"}
              objectFit="contain"
              layout="fill"
              alt="[placeholder]"
              className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="inset-0 motion-safe:animate-reveal absolute">
              <Image
                src={"/about-me.png"}
                objectFit="contain"
                layout="fill"
                alt="[placeholder]"
                className="rounded-2xl inset-0  grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute  inset-0   group-open:opacity-0"></div>
            </div>
            <div className="absolute rounded-3xl inset-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
            <div className="absolute inset-0 z-10 motion-safe:animate-brackets">
              <span className="absolute left-8 top-8 size-11.5 rounded-tl-2xl border-l-4 border-t-4 border-secondary transition-transform duration-400 motion-safe:group-hover:translate-x-4 motion-safe:group-hover:translate-y-4"></span>
              <span className="absolute right-8 top-8 size-11.5 rounded-tr-2xl border-r-4 border-t-4 border-secondary transition-transform duration-400 motion-safe:group-hover:-translate-x-4 motion-safe:group-hover:translate-y-4"></span>
              <span className="absolute bottom-8 left-8 size-11.5 rounded-bl-2xl border-b-4 border-l-4 border-secondary transition-transform duration-400 motion-safe:group-hover:translate-x-4 motion-safe:group-hover:-translate-y-4"></span>
              <span className="absolute bottom-8 right-8 size-11.5 rounded-br-2xl border-b-4 border-r-4 border-secondary transition-transform duration-400 motion-safe:group-hover:-translate-x-4 motion-safe:group-hover:-translate-y-4"></span>
            </div>
            <span className="absolute inset-x-0 z-10 h-0.5 bg-secondary animate-scan"></span>
          </BaseCard>
        </div>
        <BaseCard
          variant="muted"
          className={`z-50 p-8 absolute left-[50%] top-[50%] ${ibmPlexMono.className}`}
        >
          <div className=" text-muted-text">
            <p className=" whitespace-break-spaces">
              <span className=" text-secondary">const</span>
              {` focus = [\n`}
              {`  'accessibility',\n`}
              {`  'performance'\n`}
              {`];`}
            </p>
          </div>
        </BaseCard>
      </div>
    </BaseSection>
  );
};

export default AboutMe;
