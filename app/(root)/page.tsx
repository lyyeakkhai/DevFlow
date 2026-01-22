import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTE from "@/constants/routes";

const Home = async () => {
  const user = await auth();
  console.log("Current User:", user);

  return (
    <>
      <h1 className="h1-bold">Welcome to DevFlow</h1>
    </>
  );
};

export default Home;
