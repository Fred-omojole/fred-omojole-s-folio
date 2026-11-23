import { dayshoots } from "@/data/dayshoots";
import DayshootCard from "./DayshootCard";

const Dayshoots = () => {
  return (
    <section id="dayshoots" className="pt-4 sm:pt-6">
      <div className="mx-auto w-[94vw]">
        <div className="flex flex-row gap-2 items-center justify-center uppercase text-foreground mb-6">
          <div>dayshoots</div>
          <hr className="border-[#bbc3b9] flex-1" />
          <div>Documenting the phase</div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {dayshoots.map((shoot) => (
            <DayshootCard key={shoot.part} {...shoot} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dayshoots;
