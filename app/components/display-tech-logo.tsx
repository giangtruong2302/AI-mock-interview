import { cn, getTechLogos } from "@/lib/utils";
import Image from "next/image";
import React from "react";
type Props = {
  techstack: string[];
};
const DisplayTechLogo = async ({ techstack }: Props) => {
  const techIcons = await getTechLogos(techstack);
  return (
    <div className="flex flex-row">
      {techIcons.map((tech, index) => {
        return (
          <div
            key={tech.tech + index}
            className={cn(
              "relative group bg-dark-300 rounded-full p-2 flex-center",
              index >= 1 && "-ml-3"
            )}
          >
            <span className="tech-tooltip">{tech.tech}</span>
            <Image
              src={tech.url}
              alt={tech.tech}
              width={20}
              height={20}
              key={tech.tech}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTechLogo;
