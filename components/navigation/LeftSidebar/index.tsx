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

const LeftSidebar = async () => {
  const isLogIN = (await auth()) || false;
  return (
    <section className="custom-scrollbar background-light900_dark200 sticky top-0 left-0 hidden h-screen flex-col justify-between p-6 pt-36 sm:flex sm:w-fit lg:w-[266px]">
      <div className="flex flex-col gap-2">
        <NavLinks />
      </div>
      {isLogIN ? (
        <form
          className="flex min-h-[41px] w-full items-center justify-start gap-2.5 rounded-lg p-4 shadow-none"
          action={async () => {
            "use server";
            await signOut({ redirectTo: ROUTES.SIGN_IN });
          }}
        >
          <div className="p-[5.3px]">
            <Image
              src="/icons/Logout.svg"
              alt="Logout Icon"
              width={20}
              height={20}
              className="invert-colors object-contain"
            />
          </div>

          <Button
            type="submit"
            className="background-light900_dark200 text-dark200_light800 hover:bg-light800_dark300 hidden p-0 lg:block"
          >
            <span className="base-semibold">Log Out</span>
          </Button>
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
