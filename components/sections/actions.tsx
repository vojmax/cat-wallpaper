import { UpdateIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export default function Actions() {
  return (
    <section className="z-10 w-full h-64 bg-gradient-to-b from-indigo-950/0 to-indigo-950/60">
      <div className="flex h-full justify-center gap-20 items-center">
        <Button
          className="font-bold text-xl p-8"
          variant={"secondary"}
          size={"lg"}
        >
          <UpdateIcon className="w-8 h-8" />
        </Button>
        <Button
          className="font-bold text-xl p-8"
          variant={"secondary"}
          size={"lg"}
        >
          Download
        </Button>
      </div>
    </section>
  );
}
