import React from "react";
import Image from "next/image";

function Fred() {
  return (
    <div className="flex flex-row gap-1.5 items-center justify-center ">
      <div className="w-[75px] h-[75px] overflow-hidden rounded-full">
        <Image
          src="/fred.JPG"
          alt="Profile picture"
          width={75}
          height={75}
          className="object-cover object-top"
        />
      </div>

      <div className="text-foreground mt-[20px]">
        <p>
          Frontend Engineer
          <br /> Formerly @ oneKard.
        </p>
      </div>
    </div>
  );
}

export default Fred;
