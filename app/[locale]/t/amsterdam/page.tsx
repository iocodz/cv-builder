"use client";

import { CurriculumType } from "@/app/_types";
import { StateType } from "@/app/_lib/store";
import { useStoreState } from "easy-peasy";
import { dateMMMYYY } from "@/app/_helpers/dateFormat";
import { useTranslations } from "next-intl";

export default function AmsterdamTemplate() { 
  const t = useTranslations('BUILDER');
  const { curriculum } : { curriculum: CurriculumType } = useStoreState<StateType>((state) => state.curriculum);

  return (
    <div className="rounded-sm p-10 w-[900px] min-h-[1000px] bg-white">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">{curriculum.name}</h1>
        <img className="w-[100px] rounded-full" src={curriculum.image} alt="profile" />
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
      {curriculum.work.length > 0 && <h2 className="text-gray-500 mt-12 text-lg font-bold">{t("workExperience")}</h2>}
      {curriculum.work.map(w => <div key={w.id} className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">{w.institution}</h3>
        <p className="mt-1 text-lg text-gray-500 leading-tight">{w.degree} | {dateMMMYYY(w.from)} - {dateMMMYYY(w.to)}</p>
        <p className="mt-1 text-lg text-gray-600 leading-tight whitespace-pre-line">{w.notes}</p>
      </div>
      )}
      {curriculum.education.length > 0 && <h2 className="text-gray-500 mt-12 text-lg font-bold">{t("education")}</h2>}
      {curriculum.education.map(w => <div key={w.id} className="mt-4">
        <h3 className="text-xl font-semibold text-gray-700">{w.institution}</h3>
        <p className="mt-1 text-lg text-gray-500 leading-tight">{w.degree} | {dateMMMYYY(w.from)} - {dateMMMYYY(w.to)}</p>
        <p className="mt-1 text-lg text-gray-600 leading-tight whitespace-pre-line">{w.notes}</p>
      </div>
      )}
      {curriculum.skills.length > 0 && <h2 className="text-gray-500 mt-12 text-lg font-bold">{t("skills")}</h2>}
      <div  className="mt-4 flex flex-wrap gap-2">
      {curriculum.skills.map(w =>
        <span key={w} className="text-gray-900 bg-gray-200 px-2 py-1 rounded">{w}</span>
      )}
      </div>
      {curriculum.languages.length > 0 && <h2 className="text-gray-500 mt-12 text-lg font-bold">{t("languages")}</h2>}
      <div  className="mt-1 flex flex-col">
      {curriculum.languages.map(language =>
        <span key={language.language} className="text-gray-600">{language.language} - {language.level}</span>
      )}
      </div>
    </div>
  );
}
