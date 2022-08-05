import * as React from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-slate-50 flex items-center justify-center p-5 w-full">
        <div className="flex items-center justify-between mx-auto my-0 w-2/3 max-w-full">
          <a href="#" className="no-underline">
            <div className="flex items-center no-underline font-bold font-mono">
              <div className="text-2xl">DemoText</div>
            </div>
          </a>
          <div className="flex flex-row items-center">
            <div className="mr-4 border-r-2 border-red-300">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
