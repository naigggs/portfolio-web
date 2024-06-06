import React from 'react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="flex flex-col h-full w-full align-middle mx-[83px]">
      <div className="flex flex-col text-[220px] leading-none my-[60px]">
        <Link href={"/contact"}>
          <h1>CONTACT</h1>
        </Link>
      </div>
      <div className="absolute top-[780px]">
        <h1 className="text-[22px] leading-none mb-2">
          {" "}
          21 | Engineering Student | Self-Learned Full-Stack Developer{" "}
        </h1>
        <hr className=" border-black border-medium w-[755px]" />
        <h1 className="text-[98px] leading-none">Gian Cabigting</h1>
      </div>
    </div>
  )
}
