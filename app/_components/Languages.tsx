import { useStoreActions, useStoreState } from "easy-peasy";
import { CurriculumType, LanguageType } from "../_types";
import FormGroup from "./FormGroup";
import { StateType } from "../_lib/store";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Languages() {
  const t = useTranslations('BUILDER');
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");

  const { curriculum }: { curriculum: CurriculumType } = useStoreState<StateType>(
    (state) => state.curriculum
  );
  const { addLanguage, deleteLanguage } = useStoreActions<StateType>(
    (actions) => actions.curriculum
  );

  const handleAddLanguage = () => {
    if(!level || !language) return;
    addLanguage({language, level});
    setLanguage("");
    setLevel("");
  }

  const handleDeleteLanguage = (language: LanguageType) => {
    deleteLanguage({...language});
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddLanguage();
    }
  }

  return (
    <FormGroup title={"languages"}>
        <div className="flex gap-2">
        <input
            onChange={(e) => setLanguage(e.target.value)}
            name="language"
            type="text"
            placeholder={t('language')}
            className="w-2/5 input input-bordered"
            value={language}
            onKeyDown={handleKeyDown}
          />
          <input
            onChange={(e) => setLevel(e.target.value)}
            name="level"
            type="text"
            className="w-2/5 input input-bordered"
            placeholder={t('level')}
            value={level}
            onKeyDown={handleKeyDown}
          />
          <div onClick={handleAddLanguage} className="w-1/5 btn btn-neutral btn-outline">{t('add')}</div>
        </div>
        <div className="flex flex-wrap gap-1">
          {curriculum.languages.map((language, index) => (
            <div
              key={index}
              className="btn btn-active btn-sm"
              onClick={() => handleDeleteLanguage(language)}
            >
              {language.language} | {language.level}
            </div>
          ))}
        </div>
    </FormGroup>
  );
}
