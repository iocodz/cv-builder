"use client";

import { Experience, Person } from "@/@types";
import { months } from "@/config";
import { useSearchParams } from "next/navigation";

export default function DefaultTemplate() { 
  const searchParams = useSearchParams()
  const person : Person = JSON.parse(searchParams.get('person') ?? "{}")

  const printDocument = () => {
    window.print()
  }

  return (
    <div className="text-gray-800 dark:text-gray-800 relative w-full min-h-screen overflow-x-hidden flex justify-center content-center bg-gray-100">
      <button id="download" onClick={printDocument} className="btn btn-square btn-warning w-auto px-4 absolute bottom-4 right-4">Download PDF</button>
      <div className="rounded-sm py-10 px-10 w-[900px] min-h-[1000px] bg-white">
        <header>
          <div className="flex justify-between items-center">
            <div className="w-2/6">
              <div className="bg-cover bg-no-repeat rounded-full h-52 w-52" style={{
                backgroundImage: `url(${person.image})`
              }}></div>
            </div>
            <div className="flex flex-col justify-end items-end w-4/6">
              <h1 className="text-4xl font-extrabold text-end">{person.name}</h1>
              <p className="text-xl mt-5">{person.title}</p>
            </div>
          </div>
        </header>
        <div className="flex gap-x-10 mt-10">
          <div className="w-2/6">
            <strong className="text-xl font-medium">Contact Details</strong>
            <ul className="mt-2 mb-10">
              <li className=" mt-1">
                <strong className="mr-1">Website </strong>
                <a href={person.website} className="block">
                  {person.website}
                </a>
              </li>
              <li className=" mt-1">
                <strong className="mr-1">Phone </strong>
                <a href={"tel:" + person.phone} className="block">
                  {person.phone}
                </a>
              </li>
              <li className=" mt-1">
                <strong className="mr-1">E-mail </strong>
                <a href={"mailto:" + person.email} className="block">
                  {person.email}
                </a>
              </li>
              <li className=" mt-1">
                <strong className="mr-1">Location</strong>
                <span className="block">{person.country}</span>
              </li>
            </ul>
          </div>
          <div className="w-4/6">
            <section>
              <h2 className="text-2xl pb-1 border-b font-semibold">About</h2>
              <p className="mt-4 text-lg">
                {person.about}
              </p>
            </section>
            {/* <section>
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                Projects
              </h2>
              <ul className="mt-1">
                <li className="py-2">
                  <div className="flex justify-between my-1">
                    <strong>Rules of 10000 hours</strong>
                    <p className="flex">
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        HTML
                      </span>
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        CSS
                      </span>
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        JS
                      </span>
                    </p>
                  </div>
                  <ul className="flex mb-2">
                    <li>
                      <a
                        href="#"
                        className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                      >
                        Live
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita delectus labore enim in minus quod vero dignissimos
                    et, ratione obcaecati quis maiores? Voluptatem, natus
                    cupiditate perferendis omnis ex hic incidunt! Earum dolore
                    cupiditate sed et maxime distinctio iure fugiat aspernatur
                    at veniam laudantium eveniet corporis dicta reiciendis quod
                    consequatur, labore perferendis dolorum velit quibusdam
                    minus iste dolorem! Officiis, obcaecati maxime
                  </p>
                </li>
                <li className="py-2">
                  <div className="flex justify-between my-1">
                    <strong>Vending Machine</strong>
                    <p className="flex">
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        HTML
                      </span>
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        CSS
                      </span>
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        JS
                      </span>
                    </p>
                  </div>
                  <ul className="flex mb-2">
                    <li>
                      <a
                        href="#"
                        className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                      >
                        Live
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Saepe expedita illum optio porro suscipit rerum labore
                    veritatis autem eum totam veniam repudiandae repellendus
                    perspiciatis eligendi sequi maiores, cum ipsa ut! Dolorum
                    aliquid quaerat, dolore nemo, vero alias non porro quam
                    totam impedit repellat voluptas, nobis harum quae dolorem
                    accusantium consequatur. Recusandae cupiditate possimus
                    natus consequuntur aliquid, molestias provident saepe nobis.
                  </p>
                </li>
                <li className="py-2">
                  <div className="flex justify-between my-1">
                    <strong>Landing Page</strong>
                    <p className="flex">
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        HTML
                      </span>
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        CSS
                      </span>
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        React
                      </span>
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        Node.js
                      </span>
                    </p>
                  </div>
                  <ul className="flex mb-2">
                    <li>
                      <a
                        href="#"
                        className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                      >
                        Live
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus, odio autem non possimus adipisci, sed sequi culpa
                    ipsa necessitatibus repellat rerum. Obcaecati nobis modi
                    voluptate nam minus praesentium soluta voluptatibus! Minima
                    temporibus deserunt laborum, expedita ad molestiae
                    perferendis? Ipsa aut, necessitatibus expedita rem iure
                    minus sit voluptates magni, sequi eum architecto excepturi
                    tempora dolorum soluta quam odit amet nobis incidunt.
                  </p>
                </li>
                <li className="py-2">
                  <div className="flex justify-between my-1">
                    <strong>Gamgyul Market</strong>
                    <p className="flex">
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        HTML
                      </span>
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        CSS
                      </span>
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        React
                      </span>
                      <span className="bg-gray-600 text-white px-2 py-1 ml-1 text-xs rounded">
                        Node.js
                      </span>
                    </p>
                  </div>
                  <ul className="flex mb-2">
                    <li>
                      <a
                        href="#"
                        className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                      >
                        Live
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-blue-600 text-white px-2 py-1 mr-1 text-sm rounded"
                      >
                        Code
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ducimus suscipit soluta at doloremque ipsa unde, doloribus
                    beatae delectus odio dolorum consequatur libero esse ratione
                    nostrum nihil quaerat alias cupiditate assumenda? Nesciunt
                    unde aliquid quam quisquam excepturi deserunt ipsa
                    doloremque culpa itaque. Esse consectetur odit est
                    laboriosam facilis! Accusamus inventore vel magni sed
                    aliquid! Aspernatur dolores, nam id fugit ad aliquam.
                  </p>
                </li>
              </ul>
            </section> */}
            <section>
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                Work Experiences
              </h2>
              <ul className="mt-2">
                {person.work.map((experience: Experience, i: number) => <li key={i} className="pt-2">
                  <p className="flex justify-between text-sm">
                    <strong className="text-base">{experience.institution}</strong>{months[new Date(experience.from).getUTCMonth()]} {new Date(experience.from).getFullYear()} - {months[new Date(experience.to).getUTCMonth()]} {new Date(experience.to).getFullYear()}
                  </p>
                  <p className="flex justify-between text-lg mb-2">
                    {experience.degree}
                  </p>
                  <p className="text-start text-base">
                    {experience.notes}
                  </p>
                </li>)}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl mt-6 pb-1 border-b font-semibold">
                Education
              </h2>
              <ul className="mt-2">
              {person.education.map((experience: Experience, i: number) => <li key={i} className="pt-2">
                  <p className="flex justify-between text-sm mb-0">
                  <strong className="text-base">{experience.institution}</strong>{months[new Date(experience.from).getUTCMonth()]} {new Date(experience.from).getFullYear()} - {months[new Date(experience.to).getUTCMonth()]} {new Date(experience.to).getFullYear()}
                  </p>
                  <p className="flex justify-between text-lg mb-2">
                    {experience.degree}
                  </p>
                  <p className="text-justify text-base">
                    {experience.notes}
                  </p>
                </li>)}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
