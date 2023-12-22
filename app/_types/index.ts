export interface ExperienceType {  
  id: number;
  institution: string;
  degree: string;
  notes: string;
  from: string;
  to: string;
}

export interface LanguageType {
  language: string;
  level: string;
}

export interface CurriculumType {
  name: string;
  image: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  website: string;
  country: string;
  education: ExperienceType[];
  work: ExperienceType[];
  skills: string[];
  languages: LanguageType[];
}

export interface TemplateType {
  name: string;
  slug: string;
  picture: string;
}

export interface AddExperienceType {
  type: "work" | "education";
}

export interface UpdateExperienceType {
  type: "work" | "education";
  value: string | Date;
  key: keyof ExperienceType;
  id: number;
}

export interface DeleteExperienceType {
  type: "work" | "education";
  id: number;
}