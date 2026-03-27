import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/data/work";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
const Work = () => {
  return (
    <section id="works" className=" md:pt-[125px] pt-[50px]">
      <div className="mx-auto w-[94vw]">
        <div className=" flex flex-row gap-2 items-center justify-center uppercase text-foreground mb-10">
          <div className="">featured work</div>
          <hr className="border-[#bbc3b9] flex-1" />
          <div>Curated work</div>
          <div className="flex flex-col gap-10 "></div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projects.map(
            (
              { name, excerpt, image, buttonLink, tech, slug, walkthrough },
              id,
            ) => (
              <Card
                key={id}
                className="rounded-[1.5rem], p-2 bg-gradient-to-b from-[#4f564d] to-[#000b00] text-[#d5d6d0]"
              >
                <CardContent
                  className={`flex flex-col lg:flex-row gap-[0.5rem] min-h-[50vw] items-center justify-center ${
                    id % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  <div className=" flex flex-col lg:gap-[4rem] gap-[2.5rem] px-[2.5rem] py-[1rem] justify-between lg:w-[33.33%] lg:max-w-[30.5rem] lg:p-[4vw] max-w-none">
                    <h2 className="lg:text-5xl md:text-[2.75rem] text-[2.25rem] mb-0 ">
                      {name}
                    </h2>
                    <div className="space-y-3 ">
                      <p className="w-full max-w-full sm:text-base text-sm lg:text-lg md:text-[1.125rem] leading-[1.6em] tracking-[0em] font-light">
                        {excerpt}
                      </p>

                      <p className="text-md">
                        <span className="font-bold">Technologies:</span>{" "}
                        {tech?.join(", ")}.
                      </p>
                    </div>

                    {walkthrough ? (
                      <Link
                        className="group z-0 relative cursor-pointer flex pt-[0.25rem] pb-[0.25rem] pr-[0.25em] pl-[1.5rem] flex-row gap-[0.75rem] border border-[#e8e8e3] rounded-4xl text-[#4f564d] text-[0.7rem] leading-[1.4em] items-center uppercase font-bold justify-center tracking-[0.6em] overflow-hidden"
                        href={`/work/${slug}`}
                      >
                        <div className="-z-1 bg-[#e8e8e3] inset-0 absolute rounded-[2.5rem] transition-all duration-300 ease-in-out group-hover:bg-[#dcdcd7]"></div>

                        <div className="z-1 relative">View Project</div>

                        <div className="z-1 relative transition-transform duration-300 ease-in-out group-hover:translate-x-1.5">
                          <ArrowRight />
                        </div>
                      </Link>
                    ) : buttonLink ? (
                      <a
                        className="group z-0 relative cursor-pointer flex pt-[0.25rem] pb-[0.25rem] pr-[0.25em] pl-[1.5rem] flex-row gap-[0.75rem] border border-[#e8e8e3] rounded-4xl text-[#4f564d] text-[0.7rem] leading-[1.4em] items-center uppercase font-bold justify-center tracking-[0.6em] overflow-hidden"
                        href={buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="-z-1 bg-[#e8e8e3] inset-0 absolute rounded-[2.5rem] transition-all duration-300 ease-in-out group-hover:bg-[#dcdcd7]"></div>

                        <div className="z-1 relative">View Project</div>

                        <div className="z-1 relative transition-transform duration-300 ease-in-out group-hover:translate-x-1.5">
                          <ArrowRight />
                        </div>
                      </a>
                    ) : (
                      <span
                        className="cursor-not-allowed text-[#b9bab6]"
                        aria-disabled="true"
                      >
                        Currently Unavailable
                      </span>
                    )}
                  </div>
                  {/* <div className="hidden lg:block rounded-2xl flex-1 relative overflow-hidden">
                    <div className="aspect-[8/6] relative w-full ">
                      <Image
                        src={image}
                        alt={`name ${image}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div> */}
                  <div className="hidden lg:flex  flex-1 overflow-hidden items-center justify-center bg-[#1a1f1a]">
                    <Image
                      src={image}
                      alt="Project screenshot"
                      width={1081}
                      height={1081}
                      className="object-contain w-full h-auto max-h-[50vw]"
                      priority
                    />
                  </div>{" "}
                </CardContent>
                <div className=" overflow-hidden mx-auto block lg:hidden w-full bg-[#1a1f1a]">
                  <Image
                    src={image}
                    alt="Project screenshot"
                    width={1081}
                    height={1081}
                    className="object-contain w-full h-auto"
                    priority
                  />
                </div>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
