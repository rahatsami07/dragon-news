import React, { use } from "react";
import { NavLink } from "react-router-dom";
const categoryPromise = fetch("../../public/categories.json").then((res) =>
  res.json()
);
const Categories = () => {
  console.log(categoryPromise);
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="font-bold text-xl">All Categories {categories.length}</h2>
      <div className="grid grid-cols-1 gap-2 mt-3">
        {categories.map((category) => (
          <NavLink
            className={
              "btn bg-base-100 font-semibold text-xl text-accent border-0 hover:bg-base-200"
            }
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
