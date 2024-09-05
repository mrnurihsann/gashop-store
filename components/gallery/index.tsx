"use client";

import React from "react";
import { Image as ImageType } from "@/types";

import Image from "next/image";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import GalleryTab from "./gallery-tab";

interface GallerProps {
  Images: ImageType[];
}

const Gallery: React.FC<GallerProps> = ({ Images }) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {Images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className="aspect-square w-full">
        {Images.map((image) => (
          <TabPanel key={image.id}>
            <div className="aspect-square  relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                fill
                alt="Image"
                className="object-cover object-center"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
