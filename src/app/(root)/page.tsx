

import Hero from "@/components/home/Hero";
import { getLoggedInUser } from "@/lib/actions/user.actions";

export default async function Home() {

  const user = await getLoggedInUser();
  console.log(user)
  return (  
    <div className="bg-white">
      <Hero />
    </div>
  );
}
