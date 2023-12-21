import { useStoreActions, useStoreState } from "easy-peasy";
import { CurriculumType } from "../_types";
import FormGroup from "./FormGroup";
import { StateType } from "../_lib/store";

export default function Skills() {
  const curriculum: CurriculumType = useStoreState<StateType>(
    (state) => state.curriculum
  );
  const addSkill = useStoreActions<StateType>(
    (actions) => actions.addSkill
  );
  const deleteSkill = useStoreActions<StateType>(
    (actions) => actions.deleteSkill
  );

  const handleAddSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill(target.value);
      target.value = "";
    }
  }

  const handleDeleteSkill = (skill: string) => {
    deleteSkill(skill);
  }

  return (
    <FormGroup title={"Skills"}>
        <div className="grid grid-cols-1 gap-2">
          <input
            name="skill"
            onKeyDown={handleAddSkill}
            type="text"
            placeholder="Add skill"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex flex-wrap gap-1">
          {curriculum.skills.map((skill, index) => (
            <div
              onClick={() => handleDeleteSkill(skill)}
              key={index}
              className="btn btn-active btn-sm"
            >
              {skill}
            </div>
          ))}
        </div>
    </FormGroup>
  );
}
