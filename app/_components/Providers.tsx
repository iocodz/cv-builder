import { ReactNode } from "react";
import { NextIntlClientProvider, useMessages } from "next-intl";
import EasyPeasyProvider from "./EasyPeasyProvider";

export default function Providers({ children }: { children: ReactNode }) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <EasyPeasyProvider>{children}</EasyPeasyProvider>
    </NextIntlClientProvider>
  );
}
