"use client";

import { ReactNode } from "react";
import { StoreProvider, useStoreRehydrated } from "easy-peasy";
import { store } from "../_lib/store";

function WaitForStateRehydration({ children }: { children: any }) {
  const isRehydrated = useStoreRehydrated();
  return isRehydrated ? children : null;
}

export default function EasyPeasyProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StoreProvider store={store}>
      <WaitForStateRehydration>{children}</WaitForStateRehydration>
    </StoreProvider>
  );
}
