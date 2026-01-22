import Navbar from "@/components/navigation/navbar";
import SidebarNavigation from "@/components/navigation/LeftSidebar";
import { ReactNode } from "react";
import RightSidebar from "@/components/navigation/RtighSidebar";

const Rootlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <SidebarNavigation /> 
          <section className="min-h-screen flex-1 flex px-6 pb-6 pt-36 flex-col max-md:pb-14 sm:px-14 overflow-y-auto">
            <div className="mx-auto w-full max-w-5xl">
              {children}
            </div>
          </section>
        <RightSidebar />
    </div>  
    </main>
  );
};

export default Rootlayout;
