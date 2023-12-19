"use client"

import { Action, action, createStore } from "easy-peasy";
import { CurriculumType } from "@/app/_types";
import { curriculumEmptyData } from "../_data/curriculum";

export interface StateType {
  curriculum: CurriculumType;
  setCurriculum: Action<StateType, CurriculumType>;
}

export const store = createStore<StateType>({
  curriculum: curriculumEmptyData,
  setCurriculum: action((state, payload: CurriculumType) => {
    state.curriculum = payload;
  }),
});
