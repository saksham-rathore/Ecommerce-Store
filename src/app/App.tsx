"use client";

import { SessionProvider } from "next-auth/react";

interface AppProps {
  children: React.ReactNode;
}

const App = ({ children }: AppProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default App;