import React from "react";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className="flex shadow-md py-4 px-8 h-15 sticky justify-start content-start">
      <h1 className={`${styles.name} text-xl font-semibold lowercase md:px-5`}>
        Jobpod
      </h1>
    </div>
  );
};

export default Navbar;
