"use client";

import { CurriculumType } from "@/app/_types";
import { StateType } from "@/app/_lib/store";
import { useStoreState } from "easy-peasy";
import { dateMMMYYY } from "@/app/_helpers/dateFormat";

export default function ExampleTemplate() { 
  const { curriculum } : { curriculum: CurriculumType } = useStoreState<StateType>((state) => state.curriculum);
  
  return (
    <div>
      <div>
        <h1>{curriculum.name}</h1>
        <img width={50} src={curriculum.image} alt="profile" />
      </div>
      <h2 >{curriculum.title}</h2>
      <div>
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
      <p>{curriculum.about}</p>
      <h2>WORK EXPERIENCE</h2>
      {curriculum.work.map(w => <div key={w.id} className="mt-4">
        <h3>{w.institution}</h3>
        <p>{w.degree} | {dateMMMYYY(w.from)} - {dateMMMYYY(w.to)}</p>
        <p>{w.notes}</p>
      </div>
      )}
      <h2>EDUCATION</h2>
      {curriculum.education.map(w => <div key={w.id} className="mt-4">
        <h3>{w.institution}</h3>
        <p>{w.degree} | {dateMMMYYY(w.from)} - {dateMMMYYY(w.to)}</p>
        <p>{w.notes}</p>
      </div>
      )}
      <h2>SKILLS</h2>
      <div>
      {curriculum.skills.map(w =>
        <span key={w}>{w}</span>
      )}
      </div>
    </div>
  );
}
