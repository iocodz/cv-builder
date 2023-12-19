"use client";
import { Experience, Person } from "@/@types";
import { months } from "@/config";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Toreylittlefield() {
  const searchParams = useSearchParams();
  const [processing, setProcessing] = useState(true);
  const person: Person = JSON.parse(searchParams.get("person") ?? "{}");

  useEffect(() => {
    const handler = () => {
      setProcessing(false);
    };
    if (document.readyState === "complete") {
      handler();
    } else {
      window.addEventListener("load", handler);
      return () => document.removeEventListener("load", handler);
    }
  }, [window]);

  const printDocument = () => {
    window.print();
  };

  return (
    <div className="text-gray-800 dark:text-gray-800 relative w-full min-h-screen overflow-x-hidden flex justify-center content-center bg-gray-100">
      <div
        id="download"
        className="p-8 absolute min-h-screen w-full top-0 left-0 bg-base-100 flex flex-col gap-4 items-center justify-center"
      >
        {processing ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <>
            <h1 className="text-center dark:text-gray-100 text-4xl font-semibold">
              {person.name}, your resume is ready!!
            </h1>
            <button
              onClick={printDocument}
              className="font-bold w-full sm:w-auto btn btn-square btn-warning px-4"
            >
              Download PDF
            </button>
          </>
        )}
      </div>
      <main>
        <div
          className="
          min-h-screen
          p-4
          mx-auto
          page
          w-full
          bg-white
        "
        >
          <header
            className="
            flex
            row-gap-5
            flex-row flex-wrap
            items-center
            justify-between
            mb-5
          "
          >
            <div>
              <h1 className="print:text-6xl lg:text-6xl md:text-5xl mr-auto text-3xl font-semibold text-gray-750 pb-px">
                {person.name}
              </h1>

              <h2
                id="industry-title"
                className="print:text-3xl text-purple-700 font-sans self-center md:text-3xl text-2xl font-hairline pb-px"
              >
                <code className="print:text-3xl text-purple-700 font-sans self-center md:text-3xl text-2xl font-hairline pb-px">
                  {person.title}
                </code>
              </h2>
            </div>
            <img
              src={person.image}
              className="aspect-square object-cover w-32 mb-1 rounded"
              alt="profile image"
            />
          </header>

          <div className="divider" />

          <div className="grid grid-cols-3 gap-10 mt-10">
            <section className="print:col-span-2 col-span-3 md:col-span-2 mt-8 first:mt-0">
              <section className="mt-8 first:mt-0" id="profile">
                <h2 className="mb-0 font-bold tracking-widest text-sm2 text-purple-700 ">
                  Profile
                </h2>

                <section className="mb-0 grid grid-cols-1 ">
                  <p className="mt-2 text-sm text-gray-700 leading-normal">
                    {person.about}
                  </p>
                </section>
              </section>

              <section className="col-span-3 mt-6 first:mt-0" id="experience">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-purple-700">
                  Experience
                </h2>

                {person.work.map((experience: Experience, index: number) => (
                  <section key={index} className="mb-4">
                    <header>
                      <h3
                        id="job-title"
                        className="text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        {experience.degree}
                        <span
                          id="company-name"
                          className="text-gray-550 font-semibold"
                        >
                          {" "}
                          | {experience.institution}
                        </span>
                      </h3>
                      <p
                        id="work-date-location"
                        className="leading-normal text-sm text-gray-700 mt-1"
                      >
                        {months[new Date(experience.from).getUTCMonth()]}{" "}
                        {new Date(experience.from).getFullYear()} -{" "}
                        {months[new Date(experience.to).getUTCMonth()]}{" "}
                        {new Date(experience.to).getFullYear()}
                      </p>
                    </header>
                    <ul id="work-description-bullets" className="">
                      <li className="mt-2 text-sm text-gray-700 leading-normal">
                        {experience.notes}
                      </li>
                    </ul>
                  </section>
                ))}
              </section>
            </section>

            <section className="print:col-span-1 col-span-3 md:col-span-1">
              <section className="col-span-1 mt-8 first:mt-0" id="contact">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-purple-700">
                  Contact
                </h2>
                <section className="mb-1.5" id="programming-languages">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish"></h3>
                  </header>
                  <div className="my-2.5 last:pb-1.5">
                    <ul className="flex flex-col flex-wrap text-md leading-relaxed gap-2">
                      <a
                        href={"mailto:" + person.email}
                        className="text-sm link text-gray-900 rounded"
                      >
                        {person.email}
                      </a>
                      <a
                        href={"tel:" + person.phone}
                        className="text-sm link text-gray-900 rounded"
                      >
                        {person.phone}
                      </a>
                      <a
                        href={person.website}
                        className="text-sm link text-gray-900 rounded"
                      >
                        {person.website}
                      </a>
                      <a
                        href={person.country}
                        className="text-sm text-gray-900 rounded"
                      >
                        {person.country}
                      </a>
                    </ul>
                  </div>
                </section>
              </section>

              <section className="col-span-1 mt-8 first:mt-0" id="skills">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-purple-700">
                  Skills
                </h2>
                <section className="mb-1.5" id="programming-languages">
                  <header>
                    <h3 className="text-lg font-semibold text-gray-700 leading-snugish"></h3>
                  </header>
                  <div className="my-2.5 last:pb-1.5">
                    <ul className="flex flex-wrap text-md leading-relaxed gap-2">
                      {person.skills.length > 0 &&
                        person.skills.map((skill: string) => (
                          <li
                            key={skill}
                            className="p-2 py-1 text-xs text-gray-750 print:border-inset bg-gray-200 rounded"
                          >
                            {skill}
                          </li>
                        ))}
                    </ul>
                  </div>
                </section>
              </section>

              <section className="col-span-3 mt-8 first:mt-0" id="education">
                <h2 className="mb-4 font-bold tracking-widest text-sm2 text-purple-700">
                  Education
                </h2>

                {person.education.map(
                  (experience: Experience, index: number) => (
                    <section key={index} className="mb-4.5">
                      <header>
                        <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
                          {experience.institution}
                        </h3>
                      </header>
                      <p className="mt-2.1 text-sm text-gray-800 leading-normal">
                        {experience.degree}
                      </p>
                      <p className="mt-0.5 text-xs text-gray-600 leading-normal">
                        {months[new Date(experience.from).getUTCMonth()]}{" "}
                        {new Date(experience.from).getFullYear()} -{" "}
                        {months[new Date(experience.to).getUTCMonth()]}{" "}
                        {new Date(experience.to).getFullYear()}.
                        <br />
                        {experience.notes}
                      </p>
                    </section>
                  )
                )}
              </section>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
