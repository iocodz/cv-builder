"use client";

import { CurriculumType } from "@/app/_types";
import { StateType } from "@/app/_lib/store";
import { useStoreState } from "easy-peasy";
import { useEffect, useState } from "react";
import "../globals.css";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("BUILDER");
  const router = useRouter();
  const [processing, setProcessing] = useState(true);
  const { curriculum }: { curriculum: CurriculumType } =
    useStoreState<StateType>((state) => state.curriculum);

  useEffect(() => {
    const handler = () => {
      setProcessing(false);
    };
    if (document.readyState === "complete") {
      handler();
    } else if (typeof window !== "undefined") {
      window.addEventListener("load", handler);
      return () => document.removeEventListener("load", handler);
    }
  }, []);

  const printDocument = () => {
    if (typeof window !== "undefined") window.print();
  };

  const continueEditing = () => {
    router.push("/");
  };

  return (
    <div className="relative text-gray-800 dark:text-gray-800 w-full min-h-screen overflow-x-hidden flex justify-center content-center bg-gray-100">
      <div
        id="download"
        className="fixed p-8 min-h-screen w-full top-0 left-0 bg-base-100 flex flex-col gap-4 items-center justify-center"
      >
        {processing ? (
          <span className="loading loading-spinner loading-lg"></span>
        ) : (
          <>
            <h1 className="text-center dark:text-gray-100 text-4xl font-semibold">
              {curriculum.name}, {t("yourCvIsReady")}
            </h1>
            <button
              onClick={printDocument}
              className="font-bold w-full sm:w-[200px] btn btn-square btn-warning px-4 mt-2"
            >
              {t("download")}
            </button>
            <button
              onClick={continueEditing}
              className="font-bold w-full sm:w-[200px] btn btn-square btn-outline btn-warning px-4"
            >
              {t("continueEditing")}
            </button>
          </>
        )}
      </div>
      {children}
    </div>
  );
}
