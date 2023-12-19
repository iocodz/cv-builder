"use client";

import { Experience, Person, Template } from "@/@types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const templates: Template[] = [
  {
    name: "default-template",
    slug: "default-template",
    picture: "/templates/default-template.png",
  },
  {
    name: "toreylittlefield",
    slug: "toreylittlefield",
    picture: "/templates/toreylittlefield.png",
  },
];

const CVForm = () => {
  const router = useRouter();

  const [template, setTemplate] = useState<Template>(templates[0]);

  const [person, setPerson] = useState<Person>({
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
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof Person
  ) => {
    const { value } = event.target;
    setPerson((prev) => ({
      ...prev,
      [key]: key === "image" ? encodeURIComponent(value) : value,
    }));
  };

  const handleChangeWork = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof Experience,
    index: number
  ) => {
    const { value } = event.target;
    setPerson((prev) => ({
      ...prev,
      work: prev.work.map((item, idx) =>
        idx === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  const handleChangeEducation = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof Experience,
    index: number
  ) => {
    const { value } = event.target;
    setPerson((prev) => ({
      ...prev,
      education: prev.education.map((item, idx) =>
        idx === index ? { ...item, [key]: value } : item
      ),
    }));
  };

  const addEducation = () => {
    setPerson((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: prev.education.length,
          institution: "",
          degree: "",
          notes: "",
          from: new Date(),
          to: new Date(),
        },
      ],
    }));
  };

  const addWork = () => {
    setPerson((prev) => ({
      ...prev,
      work: [
        ...prev.work,
        {
          id: prev.work.length,
          institution: "",
          degree: "",
          notes: "",
          from: new Date(),
          to: new Date(),
        },
      ],
    }));
  };

  const handleDeleteWork = (index: number) => {
    setPerson((prev) => ({
      ...prev,
      work: prev.work.filter((item: Experience) => item.id !== index),
    }));
  };

  const handleDeleteEducation = (index: number) => {
    setPerson((prev) => ({
      ...prev,
      education: prev.education.filter((item: Experience) => item.id !== index),
    }));
  };

  return (
    <div className="min-h-screen  max-w-xl mx-auto p-4">
      <form
        className="grid grid-cols-1 gap-2"
        onSubmit={(e: any) => {
          e.preventDefault();
          window.open("/" + template.slug + "?person=" + JSON.stringify(person), '__blank');
        }}
      >
        <h1 className="text-2xl font-bold">Create your CV</h1>

        <input
          required
          onChange={(e) => handleChange(e, "name")}
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          defaultValue={person.name}
        />
        <input
          required
          onChange={(e) => handleChange(e, "image")}
          type="text"
          placeholder="Avatar URL"
          className="input input-bordered w-full"
          defaultValue={person.image}
        />
        <input
          required
          onChange={(e) => handleChange(e, "title")}
          type="text"
          placeholder="Professional title"
          className="input input-bordered w-full"
          defaultValue={person.title}
        />
        <input
          required
          onChange={(e) => handleChange(e, "country")}
          type="text"
          placeholder="Location"
          className="input input-bordered w-full"
          defaultValue={person.country}
        />
        <input
          required
          onChange={(e) => handleChange(e, "email")}
          defaultValue={person.email}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          required
          onChange={(e) => handleChange(e, "phone")}
          defaultValue={person.phone}
          type="tel"
          placeholder="Phone"
          className="input input-bordered w-full"
        />
        <input
          required
          onChange={(e) => handleChange(e, "website")}
          defaultValue={person.website}
          type="text"
          placeholder="Website"
          className="input input-bordered w-full"
        />
        <textarea
          onChange={(e) => handleChange(e, "about")}
          defaultValue={person.about}
          placeholder="About"
          className="textarea textarea-bordered h-24 text-base"
        ></textarea>

        <div className="divider" />

        <h2 className="text-xl font-semibold">Work Experience</h2>
        {person.work.map((workItem, index) => (
          <div key={index} className="grid grid-cols-1 gap-2">
            {index > 0 && <div className="divider" />}
            <input
              required
              onChange={(e) => handleChangeWork(e, "institution", index)}
              value={workItem.institution}
              type="text"
              placeholder="Company name"
              className="input input-bordered w-full"
            />
            <input
              required
              onChange={(e) => handleChangeWork(e, "degree", index)}
              value={workItem.degree}
              type="text"
              placeholder="Job title"
              className="input input-bordered w-full"
            />
            <textarea
              onChange={(e) => handleChangeWork(e, "notes", index)}
              value={workItem.notes}
              placeholder="Experience"
              className="textarea textarea-bordered h-24 text-base"
            ></textarea>
            <div className="grid grid-cols-2 gap-2">
              <input
                defaultValue={
                  new Date(person.work[index].from).getFullYear() +
                  "-" +
                  (new Date(person.work[index].from).getUTCMonth() + 1)
                }
                onChange={(e) => handleChangeWork(e, "from", index)}
                type="month"
                placeholder="From"
                className="input input-bordered w-full"
              />
              <input
                defaultValue={
                  new Date(person.work[index].to).getFullYear() +
                  "-" +
                  (new Date(person.work[index].to).getUTCMonth() + 1)
                }
                onChange={(e) => handleChangeWork(e, "to", index)}
                type="month"
                placeholder="To"
                className="input input-bordered w-full"
              />
            </div>
            {index > 0 && (
              <button
                onClick={() => handleDeleteWork(index)}
                className="btn btn-error"
              >
                Delete
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addWork}
          className="btn btn-outline btn-neutral"
        >
          Add
        </button>

        <div className="divider" />

        <h2 className="text-xl font-semibold">Education</h2>
        {person.education.map((eduItem, index) => (
          <div key={index} className="grid grid-cols-1 gap-2">
            {index > 0 && <div className="divider" />}
            <input
              required
              onChange={(e) => handleChangeEducation(e, "institution", index)}
              value={eduItem.institution}
              type="text"
              placeholder="School/University"
              className="input input-bordered w-full"
            />
            <input
              required
              onChange={(e) => handleChangeEducation(e, "degree", index)}
              value={eduItem.degree}
              type="text"
              placeholder="Degree"
              className="input input-bordered w-full"
            />
            <textarea
              onChange={(e) => handleChangeEducation(e, "notes", index)}
              value={eduItem.notes}
              placeholder="Experience"
              className="textarea textarea-bordered h-24 text-base"
            ></textarea>
            <div className="grid grid-cols-2 gap-2">
              <input
                defaultValue={
                  new Date(person.education[index].from).getFullYear() +
                  "-" +
                  (new Date(person.education[index].from).getUTCMonth() + 1)
                }
                onChange={(e) => handleChangeEducation(e, "from", index)}
                type="month"
                placeholder="From"
                className="input input-bordered w-full"
              />
              <input
                defaultValue={
                  new Date(person.education[index].to).getFullYear() +
                  "-" +
                  (new Date(person.education[index].to).getUTCMonth() + 1)
                }
                onChange={(e) => handleChangeEducation(e, "to", index)}
                type="month"
                placeholder="To"
                className="input input-bordered w-full"
              />
            </div>
            {index > 0 && (
              <button
                onClick={() => handleDeleteEducation(index)}
                className="btn btn-error"
              >
                Delete
              </button>
            )}
          </div>
        ))}
        <button
          onClick={addEducation}
          type="button"
          className="btn btn-outline btn-neutral"
        >
          Add
        </button>

        <div className="divider" />

        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="grid grid-cols-1 gap-2">
          <input
            name="skill"
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              const target = e.target as HTMLInputElement;
              if (e.key === "Enter") {
                e.preventDefault();
                setPerson({
                  ...person,
                  skills: [...person.skills, target.value],
                });
                target.value = "";
              }
            }}
            type="text"
            placeholder="Add skill"
            className="input input-bordered w-full"
          />
        </div>
        <div className="flex gap-1">
          {person.skills.map((skill, index) => (
            <div
              onClick={() => {
                setPerson((prev) => ({
                  ...prev,
                  skills: [
                    ...prev.skills.filter(
                      (skillName: string) => skillName !== skill
                    ),
                  ],
                }));
              }}
              key={index}
              className="btn btn-active btn-sm"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="divider" />

        <h2 className="text-xl font-semibold">Template</h2>
        <div className="grid grid-cols-2 gap-2">
          {templates.map((t, index: number) => (
            <div className="cursor-pointer" key={t.slug} onClick={() => {
              setTemplate({...templates[index]})
            }}>
              <img className={(t.slug === template.slug ? "border-4 border-info " : "") + "object-cover w-full aspect-square object-top rounded"} src={t.picture} alt={t.name} />
              <p className="mt-2 mb-0">{t.name}</p>
            </div>
          ))}
        </div>

        <div className="divider" />

        <button type="submit" className="btn btn-square btn-warning w-full">
          Create
        </button>
      </form>
    </div>
  );
};

export default CVForm;
