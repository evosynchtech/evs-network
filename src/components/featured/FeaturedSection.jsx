import React from "react";
import Title from "../title/Title";
import FeaturedSectionCard from "./FeaturedSectionCard";

function FeaturedSection() {
  return (
    <div className="w-full">
      <Title align={"center"} content={"Featured"} />
      <div className="w-full">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <FeaturedSectionCard
                ImgUrl="https://dummyimage.com/1201x501"
                title={"Shooting Stars"}
                content={
                  "Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual."
                }
              />
              <FeaturedSectionCard
                ImgUrl="https://dummyimage.com/1202x502"
                title={"The Catalyzer"}
                content={
                  "Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual."
                }
              />
              <FeaturedSectionCard
                ImgUrl="https://dummyimage.com/1203x503"
                title={"Neptune"}
                content={
                  "Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual."
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default FeaturedSection;
