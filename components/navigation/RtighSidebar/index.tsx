import React from "react";
import Link from "next/link";
import Image from "next/image";
import ROUTE from "@/constants/routes";
import TagsCard from "@/components/tags";

const toQuestions = [
    { _id: "1", title: "How to implement authentication in Next.js?"},
    { _id: "2", title: "Best practices for state management in React?"},
    { _id: "3", title: "How to optimize performance in a Next.js app?"},
    { _id: "4", title: "What is the difference between SSR and SSG?"},
    { _id: "5", title: "How to deploy a Next.js application?"},
]

const popularTags = [
    {_id: "1", title: "JavaScript", question: 120},
    {_id: "2", title: "React", question: 98},
    {_id: "3", title: "Next.js", question: 85},
    {_id: "4", title: "TypeScript", question: 75},
    {_id: "5", title: "CSS", question: 60},
]

const RightSidebar = () => {

    


  return(
  <section className="pt-custom-scrollbar background-light900_dark200 light-border sticky top-0 left-0 hidden h-screen flex-col p-6 pt-36 sm:flex sm:w-fit lg:w-[330px] ">
    <div className="flex flex-col">
        <h3 className="h3-bold text-dark100_light900">
            Hot Network
        </h3>
        <div  className="mt-6 w-full flex flex-col gap-[30px]">
            {toQuestions.map(({ _id, title }) => (
                <div key={_id}>
                    <Link href={ROUTE.PROFILE(_id)} className="flex items-start justify-between gap-4 bg-transparent rounded-lg">
                        <p className="body-medium text-dark500_light700">
                            {title}
                        </p>
                        <Image src="./icons/chevron-right.svg" alt="chevron-right" width={20} height={20} />
                    </Link>
                </div>
            ))}
        </div>
    </div>
    <div className="mt-8">
        <h3 className="h3-bold text-dark100_light900 mt-10">
            Popular Tags
        </h3>
        <div  className="mt-6 w-full flex flex-col gap-3">
            {popularTags.map(({ _id, title, question }) => (
                <TagsCard key={_id} id={_id} name={title} question={question} showCount compact />
            ))}
        </div>
    </div>
    
  </section>
  )
}

export default RightSidebar;