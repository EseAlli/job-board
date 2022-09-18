import React from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className="container mx-auto my-12 md:my-4 overflow-hidden">
      <div className="flex flex-col md:flex-row sm:flex-wrap lg:flex-nowrap w-full">
        <div
          className={`${styles.image_wrapper} flex flex-wrap justify-center md:justify-between order-2 md:order-1 w-full lg:w-auto`}
        >
          <Image
            src="https://joeschmoe.io/api/v1/jess"
            width={200}
            height={250}
          />
          <Image
            src="https://joeschmoe.io/api/v1/joe"
            width={200}
            height={250}
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center mx-auto order-1 md:order-2">
          <h2 className="text-4xl p-4 md:p-1 lg:text-7xl font-black uppercase md:my-2">
            Find Your Dream Job
          </h2>
          <p className="text-lg md:text-xl font-semibold px-2 md:p-1">
            Make the best move and find your next job
          </p>
          {/* <p className="text-xl font-medium">1500 Jobs Available</p> */}
        </div>
        <div
          className={`${styles.image_wrapper2} hidden md:flex order-3 flex-wrap justify-between w-full lg:w-auto content-center items-center`}
        >
          <Image
            src="https://joeschmoe.io/api/v1/jon"
            width={200}
            height={250}
          />
          <Image
            src="https://joeschmoe.io/api/v1/jeane"
            width={200}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
