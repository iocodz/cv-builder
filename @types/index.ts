export interface Experience {  
  id: number;
  institution: string;
  degree: string;
  notes: string;
  from: Date;
  to: Date;
}

export interface Person {
  name: string;
  image: string;
  title: string;
  about: string;
  email: string;
  phone: string;
  website: string;
  country: string;
  education: Experience[];
  work: Experience[];
}
