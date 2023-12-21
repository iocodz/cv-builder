import { useStoreActions, useStoreState } from "easy-peasy";
import { CurriculumType } from "../_types";
import { StateType } from "../_lib/store";
import ExperienceItem from "./ExperienceItem";

export default function ExperienceList() {
  const curriculum: CurriculumType = useStoreState<StateType>(
    (state) => state.curriculum
  );
  const addExperience = useStoreActions<StateType>(
    (actions) => actions.addExperience
  );

  return (
    <>
      {curriculum.work.map((w, index) => (
        <ExperienceItem type="work" key={index} data={w} />
      ))}
      <button type="button" onClick={() => addExperience({ type: 'work'})} className="btn btn-outline btn-neutral"> Add </button>
      {curriculum.education.map((w, index) => (
        <ExperienceItem type="education" key={index} data={w} />
      ))}
      <button type="button" onClick={() => addExperience({ type: 'education'})} className="btn btn-outline btn-neutral"> Add </button>
    </>
  );
}
