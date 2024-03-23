"use client";

import { DownloadIcon, UpdateIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export default function Actions() {
  const reload = () => {
    window.location.reload();
  };

  return (
    <section className="z-10 w-full h-64 bg-gradient-to-b from-indigo-950/0 to-indigo-950/60">
      <div className="flex h-full justify-center gap-20 items-center">
        <Button
          onClick={reload}
          className="font-bold bg-black/30 text-xl text-white border-2 p-8"
          variant={"outline"}
          size={"lg"}
          name="Update"
        >
          <UpdateIcon className="w-8 h-8 " />
        </Button>
        <Button
          className="font-bold bg-black/30 text-xl text-white border-2 p-8"
          variant={"outline"}
          size={"lg"}
          name="Download"
        >
          <DownloadIcon className="w-8 h-8 font-bold " />
        </Button>
      </div>
    </section>
  );
}
