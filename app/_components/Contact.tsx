import React from "react";

const Contact = () => {
  return (
    <section className="min-h-[70vh] mb-[30px] py-20 sm:py-12 lg:py-20">
      <h1 className="flex items-center text-center justify-center w-auto lg:text-[120px] text-[40px]  md:text-[80px] font-extrabold text-foreground uppercase tracking-tighter leading-snug">
        let&apos;s connect
      </h1>
      <div className="flex flex-col mx-auto items-center justify-center max-w-[1180px] flex-wrap leading-snug tracking-tighter px-4 gap-10 md:gap-0">
        <p className="text-[20px] sm:text-[40px] md:text-[60px] text-center max-w-[1000px]">
          Got a question, proposal, project, or want to work together on
          something?
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send me an email"
          href="mailto:omoyeleomojole2004@gmail.com?subject=Call%20about%20idea&body=Hi%20Fred%2C%0D%0A%0D%0Ai%20am%20%5Bname%5D.%20we%20should%20have%20a%20call%20on%20this%20idea.%0D%0A"
          className="text-[18px] sm:text-[28px] md:text-[37.5px] mt-4 sm:mt-6 underline hover:no-underline underline-offset-2 uppercase"
        >
          send me an email
        </a>
        <p className="text-[14px] sm:text-[16px] md:text-[18.75px] text-center uppercase mt-6">
          Partnership increases to growth!
        </p>
      </div>
    </section>
  );
};

export default Contact;
