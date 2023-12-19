"use client";

import { CurriculumType } from "@/app/_types";
import { StateType } from "@/app/lib/store";
import { months } from "@/config";
import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";

export default function DefaultTemplate() { 
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
  }, [window]);

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
      <div className="rounded-sm py-10 px-10 w-[900px] min-h-[1000px] bg-white">
        <header>
          <div className="flex justify-between items-center">
            <div className="w-2/6">
              <img src={curriculum.image} className="aspect-square object-cover rounded-full h-52 w-52" alt="profile image"/>
            </div>
            <div className="flex flex-col justify-end items-end w-4/6">
              <h1 className="text-4xl font-extrabold text-end">{curriculum.name}</h1>
              <p className="text-xl mt-5">{curriculum.title}</p>
            </div>
          </div>
        </header>
        <div className="flex gap-x-10 mt-10">
          <div className="w-2/6">
            <strong className="text-xl font-medium">Contact Details</strong>
            <ul className="mt-2 mb-10">
              <li className=" mt-1">
                <strong className="mr-1">Website </strong>
                <a href={curriculum.website} className="block">
                  {curriculum.website}
                </a>
              </li>
              <li className=" mt-1">
                <strong className="mr-1">Phone </strong>
                <a href={"tel:" + curriculum.phone} className="block">
                  {curriculum.phone}
                </a>
              </li>
              <li className=" mt-1">
                <strong className="mr-1">E-mail </strong>
                <a href={"mailto:" + curriculum.email} className="block">
                  {curriculum.email}
                </a>
              </li>
              <li className=" mt-1">
                <strong className="mr-1">Location</strong>
                <span className="block">{curriculum.country}</span>
              </li>
            </ul>
            <strong className="text-xl font-medium">Skills</strong>
            <p className="mt-2 flex gap-1 flex-wrap">
              {curriculum.skills.map(skill => <span key={skill} className="bg-gray-600 text-white px-2 py-1 text-xs rounded">
                {skill}
              </span>)}
            </p>
          </div>
          <div className="w-4/6">
            <section>
              <h2 className="text-2xl pb-1 border-b font-semibold">About</h2>
              <p className="mt-4 text-lg">
                {curriculum.about}
              </p>
            </section>
            <section>
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                Work Experiences
              </h2>
              <ul className="mt-2">
                {curriculum.work.map((experience, i) => <li key={i} className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">{experience.institution}</strong>{months[new Date(experience.from).getUTCMonth()]} {new Date(experience.from).getFullYear()} - {months[new Date(experience.to).getUTCMonth()]} {new Date(experience.to).getFullYear()}
                  </p>
                  <p className="flex justify-between text-lg mb-2">
                    {experience.degree}
                  </p>
                  <p className="text-start text-base">
                    {experience.notes}
                  </p>
                </li>)}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                Education
              </h2>
              <ul className="mt-2">
              {curriculum.education.map((experience, i) => <li key={i} className="pt-2">
                  <p className="flex justify-between text-sm mb-0">
                  <strong className="text-base">{experience.institution}</strong>{months[new Date(experience.from).getUTCMonth()]} {new Date(experience.from).getFullYear()} - {months[new Date(experience.to).getUTCMonth()]} {new Date(experience.to).getFullYear()}
                  </p>
                  <p className="flex justify-between text-lg mb-2">
                    {experience.degree}
                  </p>
                  <p className="text-justify text-base">
                    {experience.notes}
                  </p>
                </li>)}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
