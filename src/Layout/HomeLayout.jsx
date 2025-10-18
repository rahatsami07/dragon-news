import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeatestNews from "../components/LatestNews";
import NavBar from "../components/NavBar";
import LeftAside from "../components/Asides/LeftAside";
import RightAside from "../components/Asides/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LeatestNews></LeatestNews>
        </section>
        <section className="w-11/12 mx-auto">
          <NavBar></NavBar>
        </section>
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 my-5 gap-5">
        <aside className="col-span-3 sticky top-1 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-1 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
