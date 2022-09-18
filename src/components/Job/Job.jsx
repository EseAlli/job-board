import React from "react";
import Image from "next/image";
import {
  BriefcaseOutline,
  LocationOutline,
  StatsChartOutline,
} from "react-ionicons";

const Job = ({
  title,
  location,
  level,
  type,
  url,
  image,
  company,
  experience,
}) => {
  return (
    <div className="flex rounded-lg bg-white justify-between items-center shadow-md p-3 py-4">
      <div className="flex gap-5">
        <div className="flex items-center rounded-full justify-center">
          <Image src={image.url} width={60} height={60} />
        </div>
        <div className="flex flex-col gap-0 items-start">
          <p className="text-base">{company}</p>
          <p className="font-bold text-lg">{title}</p>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-3">
              <BriefcaseOutline color={"#00000"} height="14px" width="14px" />
              <p className="text-sm">{type}</p>
            </div>
            <div className="flex items-baseline gap-3">
              <LocationOutline color={"#00000"} height="14px" width="14px" />
              <p className="text-sm">Remote</p>
            </div>
            <div className="flex items-baseline gap-3">
              <StatsChartOutline color={"#00000"} height="14px" width="16px" />
              <p className="text-sm">{experience} years</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex self-end">
        <a
          className="shadom-sm border border-[#2C80FF] rounded-full py-1 px-4 uppercase text-sm text-[#2C80FF] hover:cursor-pointer hover:bg-[#2C80FF] hover:text-white ease-in duration-300 tracking-tight font-semibold"
          href={url}
        >
          Apply
        </a>
      </div>
    </div>
  );
};

export default Job;
