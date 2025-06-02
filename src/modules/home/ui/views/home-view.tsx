"use client"


import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


export default function HomeView() {
  const { data: session } = authClient.useSession()
  const router = useRouter()
  if(!session){
    return (
      <p>Loading</p>
    )
  }
  return (
      <div>
        <h1>hello {session?.user.name}</h1>
        <Button onClick={() => authClient.signOut({
            fetchOptions:{
                onSuccess:() => {
                    router.push("/sign-in")
                }
            }
        })}>
          Sign Out
        </Button>
      </div>
  );
}
