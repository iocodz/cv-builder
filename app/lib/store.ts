"use client"

import { Action, action, createStore } from "easy-peasy";
import { CurriculumType } from "@/app/_types";
import { curriculumFakeData } from "../_data/curriculum";

export interface StateType {
  curriculum: CurriculumType;
  setCurriculum: Action<StateType, CurriculumType>;
}

export const store = createStore<StateType>({
  curriculum: curriculumFakeData,
  setCurriculum: action((state, payload: CurriculumType) => {
    state.curriculum = payload;
  }),
});
