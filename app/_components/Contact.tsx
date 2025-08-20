import React from "react";

const Contact = () => {
  return (
    <section className="h-[90vh] ] mb-[30px]">
      <h1 className=" flex items-center justify-center w-auto text-[150px] font-extrabold  text-foreground uppercase tracking-tighter leading-snug">
        let&apos;s connect
      </h1>
      <div className="flex flex-col mx-auto items-center justify-center max-w-[1180px] flex-wrap leading-snug tracking-tighter">
        <p className="text-[75px] text-center">
          Got a question, proposal, project, or want to work together on
          something?
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send me an email"
          href="mailto:omoyeleomojole2004@gmail.com?subject=Call%20about%20idea&body=Hi%20Fred%2C%0D%0Ai%20am%20%5Bname%5D.%20we%20should%20have%20a%20call%20on%20this%20idea. "
          className="text-[37.5px] mt-[10px] underline hover:no-underline underline-offset-2 uppercase "
        >
          {" "}
          send me an email
        </a>{" "}
        <br />
        <p className=" text-[18.75px] text-center uppercase">
          Partnership increases to growth!
        </p>
      </div>
    </section>
  );
};

export default Contact;
