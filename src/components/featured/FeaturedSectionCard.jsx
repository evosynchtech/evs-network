import React from "react";
import Button from "../buttons/Button";
import { FaArrowRight } from "react-icons/fa";

function FeaturedSectionCard({ ImgUrl, title, content }) {
  return (
    <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div class="rounded-lg h-64 overflow-hidden">
        <img
          alt="content"
          class="object-cover object-center h-full w-full"
          src={ImgUrl}
        />
      </div>
      <h2 class="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>
      <p class="text-base leading-relaxed mt-2">{content}</p>
      <Button title={"Read More"} icon={<FaArrowRight />} />
    </div>
  );
}

export default FeaturedSectionCard;
