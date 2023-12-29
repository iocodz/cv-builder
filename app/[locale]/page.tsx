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
import LanguageSelector from "../_components/LanguageSelector";
import { useTranslations } from "next-intl";

const CVForm = () => {
  const t = useTranslations('BUILDER');

  const router = useRouter();
  const { template } : { template: TemplateType } = useStoreState<StateType>(
    (state) => state.curriculum
  );
  return (
    <div className="min-h-screen max-w-xl mx-auto p-4">
      <form
        className="relative grid grid-cols-1 gap-2"
        onSubmit={(e: any) => {
          e.preventDefault();
          router.push(template.slug);
        }}
      >
        <h1 className="text-2xl font-bold">{t('createYourCv')}</h1>
        <LanguageSelector />
        <GeneralInformation />
        <ExperienceList />
        <Skills />
        <Languages />
        <TemplateList />
        <button type="submit" className="btn btn-square btn-warning w-full">
          {t('download')}
        </button>
      </form>
    </div>
  );
};

export default CVForm;
