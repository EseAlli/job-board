import React from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex sm:flex-wrap lg:flex-nowrap w-full">
        <div className={styles.image_wrapper}>
          <Image
            src="https://joeschmoe.io/api/v1/jess"
            width={300}
            height={350}
          />
          <Image
            src="https://joeschmoe.io/api/v1/joe"
            width={300}
            height={350}
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center mx-auto">
          <h2 className="text-7xl font-black uppercase my-2">
            Find Your Dream Job
          </h2>
          <p className="text-xl font-semibold">
            Make the best move and find your next job
          </p>
          {/* <p className="text-xl font-medium">1500 Jobs Available</p> */}
        </div>
        <div className={styles.image_wrapper2}>
          <Image
            src="https://joeschmoe.io/api/v1/jon"
            width={300}
            height={350}
          />
          <Image
            src="https://joeschmoe.io/api/v1/jeane"
            width={300}
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
