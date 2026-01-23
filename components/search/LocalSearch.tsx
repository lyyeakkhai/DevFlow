"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Input } from "@/components/ui/input";

interface LocalSearchProps {
  route: string;
  iconPosition?: "left" | "right";
  imgSrc?: string;
  placeholder?: string;
  otherClasses?: string;
}

const LocalSearch = ({
  route,
  iconPosition = "left",
  imgSrc = "/icons/search.svg",
  placeholder = "Search questions...",
  otherClasses = "",
}: LocalSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div
      className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="Search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearch;