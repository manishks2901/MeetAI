"use client"
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
      <div>
        <Button onClick={() => {
          alert("I am clicked")
        }}>
          Click Me
        </Button>
      </div>
  );
}
