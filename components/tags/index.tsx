'use client';

import Link from 'next/link';
import React from 'react'
import {Badge} from '../ui/badge';
import ROUTES from '@/constants/routes';
import { cn, getDeviconClassNames } from '@/lib/utils';


interface TagsProps {
  id: string;
  name: string;
  question: number;
  showCount?: boolean;
  compact?: boolean;
}


const TagsCard = ({ id, name, question, showCount, compact}: TagsProps) => {


    
    return (
        <Link href={ROUTES.TAGS(id)} className="flex justify-between gap-2">
            <Badge className="subtle-medium background-light800_dark300 text-dark500_light400 rounded-md border-none px-4 py-2.5">
                <div className='space-x-2 flex-center'>
                    <i className={getDeviconClassNames(name)}></i>
                    <span className='text-sm'>{name}</span>
                </div>
            </Badge>

            {showCount && (
                <span className='body-medium text-dark500_light700'>
                    {question}
                </span>
            )}
        </Link>
    )
}

export default TagsCard;