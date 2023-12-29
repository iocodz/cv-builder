/* eslint-disable @next/next/no-img-element */
"use client";

import { CurriculumType } from "@/app/_types";
import { StateType } from "@/app/_lib/store";
import { useStoreState } from "easy-peasy";
import { dateMMMYYY } from "@/app/_helpers/dateFormat";

export default function EaseTemplate() {
  const { curriculum } : { curriculum: CurriculumType } = useStoreState<StateType>((state) => state.curriculum);

  return (
    <div className="rounded-sm py-10 px-10 w-[900px] min-h-[1000px] bg-white">
      <header>
        <div className="flex justify-between items-center">
          <div className="w-2/6">
            <img
              src={curriculum.image}
              className="aspect-square object-cover rounded-full h-52 w-52"
              alt="profile image"
            />
          </div>
          <div className="flex flex-col justify-end items-end w-4/6">
            <h1 className="text-4xl font-extrabold text-end">
              {curriculum.name}
            </h1>
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
          <p className="mt-2 flex gap-1 flex-wrap mb-10">
            {curriculum.skills.map((skill) => (
              <span
                key={skill}
                className="bg-gray-600 text-white px-2 py-1 text-xs rounded"
              >
                {skill}
              </span>
            ))}
          </p>
          <strong className="text-xl font-medium">Languages</strong>
          <p className="mt-2 flex flex-col gap-1 flex-wrap">
            {curriculum.languages.map((language) => (
              <span
                key={language.language}
              >
                {language.language} - {language.level}
              </span>
            ))}
          </p>
        </div>
        <div className="w-4/6">
          <section>
            <h2 className="text-2xl pb-1 border-b font-semibold">About</h2>
            <p className="mt-4 text-lg">{curriculum.about}</p>
          </section>
          <section>
            <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
              Work Experiences
            </h2>
            <ul className="mt-2">
              {curriculum.work.map((experience, i) => (
                <li key={i} className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">
                      {experience.institution}
                    </strong>
                    {dateMMMYYY(experience.from)} - {dateMMMYYY(experience.to)}
                  </p>
                  <p className="flex justify-between text-lg mb-2">
                    {experience.degree}
                  </p>
                  <p className="text-start text-base">{experience.notes}</p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
              Education
            </h2>
            <ul className="mt-2">
              {curriculum.education.map((experience, i) => (
                <li key={i} className="pt-2">
                  <p className="flex justify-between text-sm mb-0">
                    <strong className="text-base">
                      {experience.institution}
                    </strong>
                    {dateMMMYYY(experience.from)} - {dateMMMYYY(experience.to)}
                  </p>
                  <p className="flex justify-between text-lg mb-2">
                    {experience.degree}
                  </p>
                  <p className="text-justify text-base">{experience.notes}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
