import { useStoreActions } from "easy-peasy";
import { ExperienceType } from "../_types";
import FormGroup from "./FormGroup";
import { StateType } from "../_lib/store";
import { useTranslations } from "next-intl";

export default function ExperienceItem({
  type,
  data,
}: {
  type: "work" | "education";
  data: ExperienceType;
}) {
  const t = useTranslations('BUILDER');
  const { deleteExperience } = useStoreActions<StateType>(
    (actions) => actions.curriculum
  );
  const { updateExperience } = useStoreActions<StateType>(
    (actions) => actions.curriculum
  );

  const title =
    type === "education" ? "educationExperience" : "workExperience";

  const handleUpdateExperience = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof ExperienceType
  ) => {
    let { value } = event.target;
    updateExperience({
      type,
      value,
      key,
      id: data.id,
    });
  };

  const handleDeleteExperience = () => {
    deleteExperience({
      id: data.id,
      type,
    });
  };

  return (
    <FormGroup title={data.institution || title}>
      <input
        required
        onChange={(e) => handleUpdateExperience(e, "institution")}
        value={data.institution}
        type="text"
        placeholder={t("companyName")}
        className="input input-bordered w-full"
      />
      <input
        required
        onChange={(e) => handleUpdateExperience(e, "degree")}
        value={data.degree}
        type="text"
        placeholder={t("jobTitle")}
        className="input input-bordered w-full"
      />
      <textarea
        onChange={(e) => handleUpdateExperience(e, "notes")}
        value={data.notes}
        placeholder={t("experience")}
        className="textarea textarea-bordered h-24 text-base"
      ></textarea>
      <div className="grid grid-cols-2 gap-2">
        <input
          onChange={(e) => handleUpdateExperience(e, "from")}
          type="month"
          placeholder="From"
          className="input input-bordered w-full"
          required
          defaultValue={data.from}
        />
        <input
          onChange={(e) => handleUpdateExperience(e, "to")}
          type="month"
          placeholder="To"
          className="input input-bordered w-full"
          required
          defaultValue={data.to}
        />
      </div>
      {data.id !== 0 && (
        <button
          onClick={handleDeleteExperience}
          type="button"
          className="btn btn-error"
        >
          {t("delete")}
        </button>
      )}
    </FormGroup>
  );
}
