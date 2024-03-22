import { UpdateIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export default function Actions() {
  return (
    <section className="z-10 h-36">
      <div className="flex justify-center gap-5 align-middle">
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
