import { ReactNode } from "react";

import { Sidebar } from "./sidebar";
import { Topbar } from "./topbar";

interface Props {
  children: ReactNode;
}

export function DashboardLayout({
  children,
}: Props) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}