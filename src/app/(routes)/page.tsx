"use client";
import { Fragment, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Footer from "@/components/Footer";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
