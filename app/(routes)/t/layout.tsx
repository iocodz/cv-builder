"use client"

import { CurriculumType } from "@/app/_types";
import { StateType } from "@/app/_lib/store";
import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const [processing, setProcessing] = useState(true);
    const curriculum: CurriculumType = useStoreState<StateType>((state) => state.curriculum);
  
    useEffect(() => {
      const handler = () => {
        setProcessing(false);
      };
      if (document.readyState === "complete") {
        handler();
      } else if (typeof window !== "undefined") {
        window.addEventListener("load", handler);
        return () => document.removeEventListener("load", handler);
      }
    }, []);
  
    const printDocument = () => {
      if (typeof window !== "undefined") window.print();
    };
  
    return (
      <div className="text-gray-800 dark:text-gray-800 relative w-full min-h-screen overflow-x-hidden flex justify-center content-center bg-gray-100">
        <div
          id="download"
          className="p-8 absolute min-h-screen w-full top-0 left-0 bg-base-100 flex flex-col gap-4 items-center justify-center"
        >
          {processing ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <>
              <h1 className="text-center dark:text-gray-100 text-4xl font-semibold">
                {curriculum.name}, your resume is ready!!
              </h1>
              <button
                onClick={printDocument}
                className="font-bold w-full sm:w-auto btn btn-square btn-warning px-4"
              >
                Download PDF
              </button>
            </>
          )}
        </div>
        {children}
      </div>
    );
}