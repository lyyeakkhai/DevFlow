import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import NavLinks from "../navbar/NavLinks";
import { signOut } from "@/auth";
import ROUTE from "@/constants/routes";

const LeftSidebar = async () => {
  const isLogIN = await auth() || false;
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border border-2 sticky top-0 left-0 hidden h-screen flex-col justify-between p-6 pt-36 sm:flex sm:w-fit lg:w-[266px]">
      <div className="flex flex-col gap-2">
        <NavLinks />
      </div>
      {isLogIN ? (
        <form
          className="flex gap-2.5 items-center justify-start min-h-[41px] w-full rounded-lg shadow-none ml-3"
          action={async () => {
            "use server";
            await signOut({ redirectTo: ROUTES.SIGN_IN });
          }}
        >
          <Image 
          src="/icons/Logout.svg"
          alt="Logout Icon"
          width={20}
          height={20}
          className="invert-colors object-contain"
          />
          <Button type="submit" className="background-light900_dark200 p-0 text-dark200_light800 h2-semibold hover:bg-light800_dark300">Log Out</Button>
        </form>
      ) : (
        <div className="flex flex-col gap-3">
          <Link href={ROUTES.SIGN_IN}>
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="/icons/Avatar.svg"
                alt="Avatar"
                width={20}
                height={20}
                className="hidden sm:block lg:hidden"
              />
              <span className="primary-text-gradient hidden lg:block">Log In</span>
            </Button>
          </Link>
          <Link href={ROUTES.SIGN_UP}>
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
              <Image
                src="/icons/sign-up.svg"
                alt="Avatar"
                width={20}
                height={20}
                className="hidden sm:block lg:hidden"
              />
              <span className="hidden lg:block">Sign Up</span>
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default LeftSidebar;
