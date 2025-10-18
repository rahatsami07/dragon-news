import React, { Suspense } from "react";
// import CategoryNews from "../../Pages/CategoryNews";
import Categories from "../categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <Categories></Categories>
      </Suspense>
    </div>
  );
};

export default LeftAside;
