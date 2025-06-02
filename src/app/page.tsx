"use client"


import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";


export default  function Home() {
  const { data: session } = authClient.useSession()
  
  return (
      <div>
        <h1>hello {session?.user.name}</h1>
        <Button onClick={() => authClient.signOut()}>
          Sign Out
        </Button>
      </div>
  );
}
