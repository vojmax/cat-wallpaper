"use client";

import {
  DownloadIcon,
  EnterFullScreenIcon,
  ExitFullScreenIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { downloadWallpaper } from "@/lib/unsplash";
import { ImageType } from "@/lib/types";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

// Actions is a component that contains two buttons, one for updating the wallpaper and the other for downloading it.
// Buttons only have icons and are wrapped in a tooltip component that shows a description when hovered.

export default function Actions({ image }: { image: ImageType }) {
  const [fullscreen, setFullscreen] = useState(false);

  const reload = () => {
    window.location.reload();
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setFullscreen(true);
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  };

  return (
    <section className="z-10 w-full h-64">
      <div className="flex h-full justify-center gap-20 items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={reload}
                className="font-bold bg-black/50 text-xl text-white border-2 p-8"
                variant={"outline"}
                size={"lg"}
                name="Update"
              >
                <UpdateIcon className="w-8 h-8" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Load new image</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="font-bold bg-black/50 text-xl text-white border-2 py-8 px-16"
                variant={"outline"}
                size={"lg"}
                name="Download"
                onClick={() => {
                  downloadWallpaper(image.urls.raw);
                }}
              >
                <DownloadIcon className="w-8 h-8" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download image</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="font-bold bg-black/50 text-xl text-white border-2 p-8"
                variant={"outline"}
                size={"lg"}
                name="fullscreen"
                onClick={toggleFullscreen}
              >
                {fullscreen ? (
                  <EnterFullScreenIcon className="w-8 h-8" />
                ) : (
                  <ExitFullScreenIcon className="w-8 h-8" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {fullscreen ? <p>Exit fullscreen</p> : <p>Enter fullscreen</p>}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </section>
  );
}
