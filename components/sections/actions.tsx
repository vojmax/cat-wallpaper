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
    <section className="z-10 w-full h-44">
      <div className="flex h-full justify-center gap-4 sm:gap-10 lg:gap-20  items-center transition-all">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={reload}
                className="font-bold bg-black/50 text-xl text-white border-2 p-6 lg:p-8"
                variant={"outline"}
                size={"lg"}
                name="Update"
                id="update"
                title="Load new image"
              >
                <UpdateIcon className="w-8 h-8 lg:w-10 lg:h-10" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Load new image</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="font-bold bg-black/50 text-xl text-white border-2  p-6 lg:py-8 lg:px-16"
                variant={"outline"}
                size={"lg"}
                id="download"
                name="Download"
                title="Download image"
                onClick={() => {
                  downloadWallpaper(image.urls.raw, image.slug);
                }}
              >
                <DownloadIcon className="w-8 h-8 lg:w-10 lg:h-10" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download image</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className="font-bold bg-black/50 text-xl text-white border-2 p-6 lg:p-8"
                variant={"outline"}
                size={"lg"}
                id="fullscreen"
                name="fullscreen"
                onClick={toggleFullscreen}
                title="Toggle fullscreen"
              >
                {fullscreen ? (
                  <EnterFullScreenIcon className="w-8 h-8 md:w-10 md:h-10" />
                ) : (
                  <ExitFullScreenIcon className="w-8 h-8 md:w-10 md:h-10" />
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
