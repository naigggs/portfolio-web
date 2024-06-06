import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

export default function TBA() {
  return (
    <div className=" flex flex-col justify-center align-middle">
      <div className="mx-auto my-96">
        <div className=" text-9xl">Error 404</div>
        <div className="text-xl text-center">
          This page is still under development! Stay tuned!
        </div>

        <div className="mt-10 flex justify-center">
         
          <Button><Link href={'/'}>Go back to homepage!</Link></Button>
        </div>
      </div>
    </div>
  );
}
