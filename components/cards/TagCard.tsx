"use client";

import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import ROUTES from "@/constants/routes";
import { cn, getDeviconClassName } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@mdxeditor/editor";

interface TagsProps {
  _id: string;
  name: string;
  question?: number;
  showCount?: boolean;
  compact?: boolean;
  remove?: boolean;
  isButton?: boolean;
  handleRemove?: () => void;
}

const TagsCard = ({ _id, name, question, showCount, compact, remove, isButton, handleRemove }: TagsProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const content = (
    <>
      <Badge className="subtle-medium background-light800_dark300 text-dark500_light400 flex gap-2 rounded-md border-none px-4 py-2.5 uppercase">
        <div className="flex-center space-x-2">
          <i className={getDeviconClassName(name)}></i>
          <span className="text-sm">{name}</span>
        </div>
        {remove && (
          <Image
            src="/icons/close.svg"
            alt="Remove tag"
            width={16}
            height={16}
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </Badge>

      {showCount && <span className="body-medium text-dark500_light700">{question}</span>}
    </>
  );

  if (compact) {
    return isButton ? (
      <button onClick={handleClick}>{content}</button>
    ) : (
      <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
        {content}
      </Link>
    );
  }
};

export default TagsCard;
