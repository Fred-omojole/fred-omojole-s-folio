import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/work";
import Image from "next/image";

import { ArrowRight } from "lucide-react";
const Work = () => {
  return (
    <section id="works" className=" pt-[125px]">
      <div className="mx-auto w-[94vw]">
        <div className=" flex flex-row gap-2 items-center justify-center uppercase text-foreground mb-10">
          <div className="">featured work</div>
          <hr className="border-[#bbc3b9] flex-1" />
          <div>Curated work</div>
          <div className="flex flex-col gap-10 "></div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projects.map(
            ({ name, excerpt, image, buttonText, buttonLink, tech }, id) => (
              <Card
                key={id}
                className="rounded-[1.5rem], p-2 bg-gradient-to-b from-[#4f564d] to-[#000b00] text-[#d5d6d0]"
              >
                <CardContent
                  className={`flex flex-row gap-[0.5rem] min-h-[50vw] items-center justify-center ${
                    id % 2 !== 0 ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div className="flex flex-col gap-[4rem] justify-between w-[33.33%] max-w-[30.5rem] p-[4vw]">
                    <h2 className="text-5xl mb-0 ">{name}</h2>
                    <div className="space-y-3">
                      <p className="text-lg">{excerpt}</p>

                      <p className="text-md">
                        <span className="font-bold">Technologies:</span>{" "}
                        {tech?.join(", ")}.
                      </p>
                    </div>

                    {buttonLink ? (
                      <a
                        className="group z-0 relative cursor-pointer flex pt-[0.25rem] pb-[0.25rem] pr-[0.25em] pl-[1.5rem] flex-row gap-[0.75rem] border border-[#e8e8e3] rounded-4xl text-[#4f564d] text-[0.7rem] leading-[1.4em] items-center uppercase font-bold justify-center tracking-[0.6em] overflow-hidden"
                        href={buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* background */}
                        <div className="-z-1 bg-[#e8e8e3] inset-0 absolute rounded-[2.5rem] transition-all duration-300 ease-in-out group-hover:bg-[#dcdcd7]"></div>

                        {/* text stays stable */}
                        <div className="z-1 relative">{buttonText}</div>

                        {/* arrow moves on hover */}
                        <div className="z-1 relative transition-transform duration-300 ease-in-out group-hover:translate-x-1.5">
                          <ArrowRight />
                        </div>
                      </a>
                    ) : (
                      <span
                        className="cursor-not-allowed text-[#b9bab6]"
                        aria-disabled="true"
                      >
                        {buttonText}
                      </span>
                    )}
                  </div>
                  {/* <div className="rounded-2xl flex-1 relative overflow-hidden">
                    <div className="aspect-[6/5] relative w-full ">
                      <Image
                        src={image}
                        alt={`name ${image}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div> */}
                  <div className="rounded-2xl flex-1 overflow-hidden relative mx-auto">
                    <div className="aspect-[8/6]  "></div>
                    <Image
                      src={image}
                      alt="Project screenshot"
                      width={1081} // natural size
                      height={1081} // natural size
                      className="object-cover  w-full h-full absolute inset-0 max-w-[100%]"
                      priority
                    />
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
