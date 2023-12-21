import { useStoreActions } from "easy-peasy";
import { ExperienceType } from "../_types";
import FormGroup from "./FormGroup";
import { StateType } from "../_lib/store";

export default function ExperienceItem({
  type,
  data,
}: {
  type: "work" | "education";
  data: ExperienceType;
}) {
  const deleteExperience = useStoreActions<StateType>(
    (actions) => actions.deleteExperience
  );
  const updateExperience = useStoreActions<StateType>(
    (actions) => actions.updateExperience
  );

  const title =
    type === "education" ? "Education Experience" : "Work Experience";

  const handleUpdateExperience = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof ExperienceType,
  ) => {
    let { value } = event.target;
    updateExperience({
        type,
        value, 
        key, 
        id: data.id
    })
  };

  const handleDeleteExperience = () => {
    deleteExperience({
      id: data.id,
      type
    })
  };

  return (
    <FormGroup title={data.institution || title}>
      <input
        required
        onChange={(e) => handleUpdateExperience(e, "institution")}
        value={data.institution}
        type="text"
        placeholder="Company name"
        className="input input-bordered w-full"
      />
      <input
        required
        onChange={(e) => handleUpdateExperience(e, "degree")}
        value={data.degree}
        type="text"
        placeholder="Job title"
        className="input input-bordered w-full"
      />
      <textarea
        onChange={(e) => handleUpdateExperience(e, "notes")}
        value={data.notes}
        placeholder="Experience"
        className="textarea textarea-bordered h-24 text-base"
      ></textarea>
      <div className="grid grid-cols-2 gap-2">
        <input
          onChange={(e) => handleUpdateExperience(e, "from")}
          type="month"
          placeholder="From"
          className="input input-bordered w-full"
          required
        />
        <input
          onChange={(e) => handleUpdateExperience(e, "to")}
          type="month"
          placeholder="To"
          className="input input-bordered w-full"
          required
        />
      </div>
      {data.id !== 0 && (
        <button
          onClick={handleDeleteExperience}
          type="button"
          className="btn btn-error"
        >
          Delete
        </button>
      )}
    </FormGroup>
  );
}
