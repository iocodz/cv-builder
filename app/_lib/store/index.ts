import { createStore, persist } from "easy-peasy";
import CurriculumModel, { CurriculumModelType } from "./models/CurriculumModel";
import LanguageModel, { LanguageModelType } from "./models/LanguageModel";

export interface StateType {
  curriculum: CurriculumModelType;
  language: LanguageModelType;
}

const model: StateType = {
  curriculum: CurriculumModel,
  language: LanguageModel,
};

export const store = createStore(persist(model, { storage: "sessionStorage" }));
