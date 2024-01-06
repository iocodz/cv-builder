import { useStoreActions, useStoreState } from "easy-peasy";
import { StateType } from "../_lib/store";
import ExperienceItem from "./ExperienceItem";
import { CurriculumType } from "../_types";
import { useTranslations } from "next-intl";

export default function ExperienceList() {
  const t = useTranslations('BUILDER');
  const { curriculum } : { curriculum: CurriculumType } = useStoreState<StateType>(
    (state) => state.curriculum
  );
  const { addExperience } = useStoreActions<StateType>(
    (actions) => actions.curriculum
  );

  return (
    <>
      {curriculum.work.map((w, index) => (
        <ExperienceItem type="work" key={index} data={w} />
      ))}
      <button type="button" onClick={() => addExperience({ type: 'work'})} className="btn btn-outline btn-neutral"> {t("add")} </button>
      {curriculum.education.map((w, index) => (
        <ExperienceItem type="education" key={index} data={w} />
      ))}
      <button type="button" onClick={() => addExperience({ type: 'education'})} className="btn btn-outline btn-neutral"> {t("add")} </button>
    </>
  );
}
