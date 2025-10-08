"use client";
import React from "react";
import { FC, useState } from "react";

import type { AccordionProps } from "@/types/accordion";

const Accordion: FC<AccordionProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 bg-gray-200 rounded-lg mt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between w-full"
      >
        <span className="font-medium text-gray-800">{item.question}</span>
        {isOpen ? <span>-</span> : <span>+</span>}
      </button>
       <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{item.answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
