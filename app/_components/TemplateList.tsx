import FormGroup from "./FormGroup";
import { templates } from "../_data/template";
import { TemplateType } from "../_types";
import { useStoreActions, useStoreState } from "easy-peasy";
import { StateType } from "../_lib/store";

export default function TemplateList() {
  const template: TemplateType = useStoreState<StateType>(
    (state) => state.template
  );
  const setTemplate = useStoreActions<StateType>(
    (actions) => actions.setTemplate
  );
  return (
    <FormGroup title="Template">
      <div className="grid grid-cols-2 gap-2">
        {templates.map((t, index: number) => (
          <div
            className="cursor-pointer"
            key={t.slug}
            onClick={() => {
              setTemplate({ ...templates[index] });
            }}
          >
            <img
              className={
                (t.slug === template.slug ? "border-4 border-info " : "") +
                "object-cover w-full aspect-square object-top rounded"
              }
              src={t.picture}
              alt={t.name}
            />
            <p className="mt-2 mb-2">{t.name}</p>
          </div>
        ))}
      </div>
    </FormGroup>
  );
}
