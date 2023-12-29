import { Action, action } from "easy-peasy";

export interface LanguageModelType {
  uiLanguage: string;
  curriculumLanguage: string;
  setUILanguage: Action<LanguageModelType, string>;
  setCurriculumLanguage: Action<LanguageModelType, string>;
}

const LanguageModel: LanguageModelType = {
  uiLanguage: "",
  curriculumLanguage: "",
  setUILanguage: action((state, payload) => {
    state.uiLanguage = payload;
  }),
  setCurriculumLanguage: action((state, payload) => {
    state.curriculumLanguage = payload;
  }),
};

export default LanguageModel;
