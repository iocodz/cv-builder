"use client";

import { CurriculumType, ExperienceType, TemplateType } from "@/app/_types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import { StateType } from "../lib/store";

const templates: TemplateType[] = [
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

  const curriculum: CurriculumType = useStoreState<StateType>((state) => state.curriculum);
  const setCurriculum = useStoreActions<StateType>((actions) => actions.setCurriculum);

  const [template, setTemplate] = useState<TemplateType>(templates[0]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof CurriculumType
  ) => {
    const { value } = event.target;
    setCurriculum({
      ...curriculum,
      [key]: value,
    });
  };

  const handleChangeWork = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof ExperienceType,
    index: number
  ) => {
    const { value } = event.target;
    setCurriculum({
      ...curriculum,
      work: curriculum.work.map((item, idx) =>
        idx === index ? { ...item, [key]: value } : item
      ),
    });
  };

  const handleChangeEducation = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof ExperienceType,
    index: number
  ) => {
    const { value } = event.target;
    setCurriculum({
      ...curriculum,
      education: curriculum.education.map((item, idx) =>
        idx === index ? { ...item, [key]: value } : item
      ),
    });
  };

  const addEducation = () => {
    setCurriculum({
      ...curriculum,
      education: [
        ...curriculum.education,
        {
          id: curriculum.education.length,
          institution: "",
          degree: "",
          notes: "",
          from: new Date(),
          to: new Date(),
        },
      ],
    });
  };

  const addWork = () => {
    setCurriculum({
      ...curriculum,
      work: [
        ...curriculum.work,
        {
          id: curriculum.work.length,
          institution: "",
          degree: "",
          notes: "",
          from: new Date(),
          to: new Date(),
        },
      ],
    });
  };

  const handleDeleteWork = (index: number) => {
    setCurriculum({
      ...curriculum,
      work: curriculum.work.filter((item) => item.id !== index),
    });
  };

  const handleDeleteEducation = (index: number) => {
    setCurriculum({
      ...curriculum,
      education: curriculum.education.filter((item) => item.id !== index),
    });
  };

  return (
    <div className="min-h-screen  max-w-xl mx-auto p-4">
      <form
        className="grid grid-cols-1 gap-2"
        onSubmit={(e: any) => {
          e.preventDefault();
          router.push("/" + template.slug);
          // window.open("/" + template.slug + "?curriculum=" + JSON.stringify(curriculum), '__blank');
        }}
      >
        <h1 className="text-2xl font-bold">Create your CV</h1>

        <input
          required
          onChange={(e) => handleChange(e, "name")}
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          defaultValue={curriculum.name}
        />
        <input
          required
          onChange={(e) => handleChange(e, "image")}
          type="text"
          placeholder="Avatar URL"
          className="input input-bordered w-full"
          defaultValue={curriculum.image}
        />
        <input
          required
          onChange={(e) => handleChange(e, "title")}
          type="text"
          placeholder="Professional title"
          className="input input-bordered w-full"
          defaultValue={curriculum.title}
        />
        <input
          required
          onChange={(e) => handleChange(e, "country")}
          type="text"
          placeholder="Location"
          className="input input-bordered w-full"
          defaultValue={curriculum.country}
        />
        <input
          required
          onChange={(e) => handleChange(e, "email")}
          defaultValue={curriculum.email}
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
        />
        <input
          required
          onChange={(e) => handleChange(e, "phone")}
          defaultValue={curriculum.phone}
          type="tel"
          placeholder="Phone"
          className="input input-bordered w-full"
        />
        <input
          required
          onChange={(e) => handleChange(e, "website")}
          defaultValue={curriculum.website}
          type="text"
          placeholder="Website"
          className="input input-bordered w-full"
        />
        <textarea
          onChange={(e) => handleChange(e, "about")}
          defaultValue={curriculum.about}
          placeholder="About"
          className="textarea textarea-bordered h-24 text-base"
        ></textarea>

        <div className="divider" />

        <h2 className="text-xl font-semibold">Work Experience</h2>
        {curriculum.work.map((workItem, index) => (
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
                  new Date(curriculum.work[index].from).getFullYear() +
                  "-" +
                  (new Date(curriculum.work[index].from).getUTCMonth() + 1)
                }
                onChange={(e) => handleChangeWork(e, "from", index)}
                type="month"
                placeholder="From"
                className="input input-bordered w-full"
              />
              <input
                defaultValue={
                  new Date(curriculum.work[index].to).getFullYear() +
                  "-" +
                  (new Date(curriculum.work[index].to).getUTCMonth() + 1)
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
        {curriculum.education.map((eduItem, index) => (
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
                  new Date(curriculum.education[index].from).getFullYear() +
                  "-" +
                  (new Date(curriculum.education[index].from).getUTCMonth() + 1)
                }
                onChange={(e) => handleChangeEducation(e, "from", index)}
                type="month"
                placeholder="From"
                className="input input-bordered w-full"
              />
              <input
                defaultValue={
                  new Date(curriculum.education[index].to).getFullYear() +
                  "-" +
                  (new Date(curriculum.education[index].to).getUTCMonth() + 1)
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
                setCurriculum({
                  ...curriculum,
                  skills: [...curriculum.skills, target.value],
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
          {curriculum.skills.map((skill, index) => (
            <div
              onClick={() => {
                setCurriculum({
                  ...curriculum,
                  skills: [
                    ...curriculum.skills.filter(
                      (skillName: string) => skillName !== skill
                    ),
                  ],
                });
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
