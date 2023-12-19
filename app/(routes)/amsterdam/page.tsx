"use client";

import { CurriculumType } from "@/app/_types";
import { StateType } from "@/app/lib/store";
import { months } from "@/config";
import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";

export default function AmsterdamTemplate() { 
  const [processing, setProcessing] = useState(true);
  const curriculum: CurriculumType = useStoreState<StateType>((state) => state.curriculum);

  useEffect(() => {
    const handler = () => {
      setProcessing(false);
    };
    if (document.readyState === "complete") {
      handler();
    } else {
      window.addEventListener('load', handler);
      return () => document.removeEventListener('load', handler);
    }
  }, []);

  const printDocument = () => {
    window.print()
  }

  return (
    <div className="text-gray-800 dark:text-gray-800 relative w-full min-h-screen overflow-x-hidden flex justify-center content-center bg-gray-100">
      <div id="download" className="p-8 absolute min-h-screen w-full top-0 left-0 bg-base-100 flex flex-col gap-4 items-center justify-center">
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
      <div className="rounded-sm p-10 w-[900px] min-h-[1000px] bg-white">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">{curriculum.name}</h1>
          <img className="w-[100px] rounded-full" src={curriculum.image} />
        </div>
        <h2 className="mb-4 text-xl font-semibold text-gray-700">{curriculum.title}</h2>
        <div className="flex flex-wrap gap-2 text-lg text-gray-500">
          <span>
            {curriculum.country} 
          </span>
          |
          <a href={"mailto:" + curriculum.email}>
            {curriculum.email} 
          </a>
          |
          <a href={"tel:" + curriculum.phone}>
            {curriculum.phone} 
          </a>
          |
          <a href={curriculum.website}>
            {curriculum.website} 
          </a>
        </div>
        <p className="mt-4 text-lg text-gray-500 leading-tight whitespace-pre-line">{curriculum.about}</p>
        <h2 className="text-gray-500 mt-12 text-lg font-bold">WORK EXPERIENCE</h2>
        {curriculum.work.map(w => <div key={w.id} className="mt-4">
          <h3 className="text-xl font-semibold text-gray-700">{w.institution}</h3>
          <p className="mt-1 text-lg text-gray-500 leading-tight">{w.degree} | {months[new Date(w.from).getUTCMonth()]} {new Date(w.from).getFullYear()} - {months[new Date(w.to).getUTCMonth()]} {new Date(w.to).getFullYear()}</p>
          <p className="mt-1 text-lg text-gray-600 leading-tight whitespace-pre-line">{w.notes}</p>
        </div>
        )}
        <h2 className="text-gray-500 mt-12 text-lg font-bold">EDUCATION</h2>
        {curriculum.education.map(w => <div key={w.id} className="mt-4">
          <h3 className="text-xl font-semibold text-gray-700">{w.institution}</h3>
          <p className="mt-1 text-lg text-gray-500 leading-tight">{w.degree} | {months[new Date(w.from).getUTCMonth()]} {new Date(w.from).getFullYear()} - {months[new Date(w.to).getUTCMonth()]} {new Date(w.to).getFullYear()}</p>
          <p className="mt-1 text-lg text-gray-600 leading-tight whitespace-pre-line">{w.notes}</p>
        </div>
        )}
        <h2 className="text-gray-500 mt-12 text-lg font-bold">SKILLS</h2>
        <div  className="mt-4 flex flex-wrap gap-2">
        {curriculum.skills.map(w =>
          <span key={w} className="text-gray-900 bg-gray-200 px-2 py-1 rounded">{w}</span>
        )}
        </div>
      </div>
    </div>
  );
}
