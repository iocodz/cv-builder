import { CurriculumType } from "../_types";

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
    {
      id: 0,
      degree: "",
      institution: "",
      notes: "",
      from: new Date(),
      to: new Date(),
    },
  ],
  work: [
    {
      id: 0,
      degree: "",
      institution: "",
      notes: "",
      from: new Date(),
      to: new Date(),
    },
  ],
  skills: [],
};

export const curriculumFakeData: CurriculumType = {
  name: "John Doe",
  image: "https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg",
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
      from: new Date("2012-09-01"),
      to: new Date("2016-05-30"),
    },
  ],
  work: [
    {
      id: 0,
      degree: "Senior Web Developer",
      institution: "Tech Solutions Inc.",
      notes:
        "Led a team of developers in creating web applications for clients. Focused on creating efficient and user-friendly interfaces.",
      from: new Date("2016-06-01"),
      to: new Date("2020-08-31"),
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
};
