export interface ExperienceType {  
  id: number;
  institution: string;
  degree: string;
  notes: string;
  from: Date;
  to: Date;
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
}

export interface TemplateType {
  name: string;
  slug: string;
  picture: string;
}
