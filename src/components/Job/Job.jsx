import React from "react";
import Image from "next/image";

const Job = () => {
  return (
    <div>
      <div>
        <div>
          <Image src="https://joeschmoe.io/api/v1/joe" width={30} height={50} />
        </div>
        <div>
          <p>Spotify</p>
          <p>Junior Frontend Developer</p>
          <div>
            <div>
              <p>Part-Time</p>
            </div>
            <div>
              <p>Remote</p>
            </div>
            <div>
              <p>MidLevel</p>
            </div>
          </div>
        </div>
      </div>
      <a>Apply</a>
    </div>
  );
};

export default Job;
