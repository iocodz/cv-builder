"use client";

import { Action, action, createStore, persist } from "easy-peasy";
import {
  AddExperienceType,
  CurriculumType,
  DeleteExperienceType,
  LanguageType,
  TemplateType,
  UpdateExperienceType,
} from "@/app/_types";
import { curriculumEmptyData, experienceEmptyData } from "../_data/curriculum";
import { templates } from "../_data/template";

export interface StateType {
  template: TemplateType;
  curriculum: CurriculumType;
  setCurriculum: Action<StateType, CurriculumType>;
  setTemplate: Action<StateType, TemplateType>;
  addExperience: Action<StateType, AddExperienceType>;
  updateExperience: Action<StateType, UpdateExperienceType>;
  deleteExperience: Action<StateType, DeleteExperienceType>;
  addSkill: Action<StateType, string>;
  deleteSkill: Action<StateType, string>;
  addLanguage: Action<StateType, LanguageType>;
  deleteLanguage: Action<StateType, LanguageType>;
}

export const store = createStore<StateType>(
  persist(
    {
      curriculum: curriculumEmptyData,
      template: templates[0],
      setCurriculum: action((state, payload) => {
        state.curriculum = payload;
      }),
      setTemplate: action((state, payload) => {
        state.template = payload;
      }),
      addExperience: action((state, payload) => {
        const { type } = payload;

        state.curriculum = {
          ...state.curriculum,
          [type]: [
            ...state.curriculum[type],
            {
              ...experienceEmptyData,
              id: Math.floor(new Date().valueOf() * Math.random()),
            },
          ],
        };
      }),
      updateExperience: action((state, payload) => {
        const { value, key, id, type } = payload;
        state.curriculum = {
          ...state.curriculum,
          [type]: state.curriculum[type].map((item) =>
            id === item.id
              ? {
                  ...item,
                  [key]: value,
                }
              : item
          ),
        };
      }),
      deleteExperience: action((state, payload) => {
        const { id, type } = payload;

        state.curriculum = {
          ...state.curriculum,
          [type]: state.curriculum[type].filter((item) => item.id !== id),
        };
      }),
      addSkill: action((state, payload) => {
        state.curriculum = {
          ...state.curriculum,
          skills: [...state.curriculum.skills, payload],
        };
      }),
      deleteSkill: action((state, payload) => {
        state.curriculum = {
          ...state.curriculum,
          skills: state.curriculum.skills.filter((s) => s !== payload),
        };
      }),
      addLanguage: action((state, payload) => {
        state.curriculum = {
          ...state.curriculum,
          languages: [...state.curriculum.languages, payload],
        };
      }),
      deleteLanguage: action((state, payload) => {
        state.curriculum = {
          ...state.curriculum,
          languages: state.curriculum.languages.filter(
            (s) => s.language != payload.language
          ),
        };
      }),
    },
    {
      storage: "sessionStorage",
    }
  )
);
