import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTE from "@/constants/routes";

const Home = async () => {
  return (
    <>
      <h1 className="h1-bold">Welcome to DevFlow</h1>
      <form
        className="mt-30 px-25 py-5"
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTE.SIGN_IN });
        }}
      >
        <Button type="submit">Log Out</Button>
      </form>
    </>
  );
};

export default Home;
