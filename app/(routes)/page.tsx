"use client";

import { useRouter } from "next/navigation";
import TemplateList from "../_components/TemplateList";
import GeneralInformation from "../_components/GeneralInformation";
import ExperienceList from "../_components/ExperienceList";
import Skills from "../_components/Skills";
import { TemplateType } from "../_types";
import { StateType } from "../_lib/store";
import { useStoreState } from "easy-peasy";
import Languages from "../_components/Languages";

const CVForm = () => {
  const router = useRouter();
  const template: TemplateType = useStoreState<StateType>(
    (state) => state.template
  );
  return (
    <div className="min-h-screen  max-w-xl mx-auto p-4">
      <form
        className="grid grid-cols-1 gap-2"
        onSubmit={(e: any) => {
          e.preventDefault();
          router.push(template.slug);
          // window.open("/" + template.slug + "?curriculum=" + JSON.stringify(curriculum), '__blank');
        }}
      >
        <h1 className="text-2xl font-bold">Create your CV</h1>

        <GeneralInformation />
        <ExperienceList />
        <Skills />
        <Languages />
        <TemplateList />

        <button type="submit" className="btn btn-square btn-warning w-full">
          Create
        </button>
      </form>
    </div>
  );
};

export default CVForm;
