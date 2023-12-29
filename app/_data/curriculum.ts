import { CurriculumType, ExperienceType } from "../_types";

export const experienceEmptyData: ExperienceType = {
    id: 0,
    degree: "",
    institution: "",
    notes: "",
    from: "2012-09",
    to: "2012-09",
  };

export const curriculumEmptyData: CurriculumType = {
  name: "",
  image: "",
  title: "",
  about: "",
  email: "",
  phone: "",
  website: "",
  country: "",
  education: [
    experienceEmptyData
  ],
  work: [
    experienceEmptyData
  ],
  skills: [],
  languages: [],
};

export const curriculumFakeData: CurriculumType = {
  name: "John Doe",
  image: "",
  title: "Full Stack Developer",
  about:
    "Enthusiastic and experienced Full Stack Developer with a passion for building scalable web applications and engaging user experiences. Skilled in modern web technologies and frameworks.",
  email: "john.doe@example.com",
  phone: "+1234567890",
  website: "https://johndoe.dev",
  country: "USA",
  education: [
    {
      id: 0,
      degree: "B.Sc. in Computer Science",
      institution: "University of Technology",
      notes:
        "Graduated with honors, focus on web development and data structures.",
      from: "2012-09",
      to: "2016-05",
    },
  ],
  work: [
    {
      id: 0,
      degree: "Senior Web Developer",
      institution: "Tech Solutions Inc.",
      notes:
        "Led a team of developers in creating web applications for clients. Focused on creating efficient and user-friendly interfaces.",
      from: "2012-09",
      to: "2012-09",
    },
  ],
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "MongoDB",
    "SQL",
    "Git",
  ],
  languages: [],
};
