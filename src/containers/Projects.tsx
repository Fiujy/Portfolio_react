import Card from "@/components/Card";
import { useState } from "react";

export default function Projects() {

  return (
    <>
      <div className="flex flex-col min-h-full bg-white py-5">
        <div className="grid grid-cols-3 gap-10 px-10">
          <Card title="Project 1" className=""/>
          <Card title="Project 2" className=""/>
          <Card title="Project 3" className=""/>
          <Card title="Project 4" className=""/>
          <Card title="Project 5" className=""/>
        </div>
      </div>
    </>
  );
}
