"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MdCancel } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Buttonexp = () => {
  return (
    <div className="w-full my-10 rounded-2xl border border-black/10 bg-white p-10 shadow-sm">
      <div className="min-h-[220px] gap-6 flex items-center justify-center">
        <div className="flex flex-col gap-2 ">
          <Button
            asChild
            className="bg-gray-950 text-white/55 border font-medium text-md cursor-pointer rounded-full px-4 py-4 "
          >
            <motion.button
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.35, ease: "easeIn" }}
            >
              Hover
            </motion.button>
          </Button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeIn" }}
            className="flex items-center justify-center"
          >
            <MdCancel size={24} />
          </motion.div>
        </div>

        <div className="flex flex-col gap-2">
          <Button
            asChild
            className="bg-gray-950 text-white/55 border font-medium text-md cursor-pointer rounded-full px-4 py-4 "
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.18, ease: "easeInOut" }}
            >
              Hover
            </motion.button>
          </Button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeIn" }}
            className="flex items-center justify-center"
          >
            <IoMdCheckmarkCircle className="text-blue-600" size={24} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Buttonexp;
