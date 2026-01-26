"use client";
import { useRef } from "react";
import { Path, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AskQuestionSchema } from "@/lib/validation";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { MDXEditorMethods } from "@mdxeditor/editor";
import dynamic from "next/dynamic";
import TagsCard from "../cards/TagCard";
import { z } from "zod";

const Editor = dynamic(() => import("@/components/editor"), {
  // Make sure we turn SSR off
  ssr: false,
});

const QuestionForm = () => {
  const editorRef = useRef<MDXEditorMethods>(null);

  const form = useForm<z.infer<typeof AskQuestionSchema>>({
    resolver: zodResolver(AskQuestionSchema),
    defaultValues: {
      title: "",
      content: "",
      tags: [] as string[],
    },
  });

  const handleRemoveTag = (tag: string, field: { value: string[] }) => {
    // this will filter out the tag to be removed from the current list of tags
    const updatedTags = field.value.filter((t) => t !== tag);
    form.setValue("tags", updatedTags);

    // this make sure that if there is no tag left, we show an error message
    if (updatedTags.length === 0) {
      form.setError("tags", {
        type: "manual",
        message: "Please add at least one tag.",
      });
    }
  };

  const handleInputKey = ({
    e,
    field,
  }: {
    e: React.KeyboardEvent<HTMLInputElement>;
    field: { value: string[]; onChange: (...event: any[]) => void };
  }) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent form submission from reload the page
      const tagInput = e.currentTarget.value.trim();

      // then we can check if the tag is not empty and not already in the list
      if (tagInput && tagInput.length < 15 && !field.value.includes(tagInput)) {
        form.setValue("tags", [...field.value, tagInput]);
        e.currentTarget.value = ""; // clear the input field
        form.clearErrors("tags");
      } else if (tagInput.length >= 15) {
        form.setError("tags", { type: "manual", message: "Tag must be less than 15 characters." });
      } else if (field.value.includes(tagInput)) {
        form.setError("tags", { type: "manual", message: "Tag is already added." });
      } else {
        form.setError("tags", { type: "manual", message: "Tag is not found." });
      }
    }
  };
  const handleSubmitForm = (data: z.infer<typeof AskQuestionSchema>) => {
    if (editorRef.current) {
      editorRef.current.setMarkdown(""); // clears editor content
    }
    form.reset();
    console.log("Form submitted:", data);
  };

  return (
    <Form {...form}>
      {/* Form fields will go here */}
      <form action="" onSubmit={form.handleSubmit(handleSubmitForm)} className="flex flex-col gap-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2.5">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                Question Title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-light-500 body-regular mt-5.2">
                Be specific and imagine youU+2019re asking a question to another person.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2.5">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                Detail explanation of your problem <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <Editor value={field.value} editorRef={editorRef} fieldChange={field.onChange} />
              </FormControl>
              <FormDescription className="text-light-500 body-regular mt-5.2">
                Introduce the problem and expand on what you put in the title.Minimum 20 characters.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col gap-2.5">
              <FormLabel className="paragraph-semibold text-dark400_light700">
                Tags<span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl>
                <div>
                  <Input
                    className="paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-[56px] border"
                    onKeyDown={(e) => handleInputKey({ e, field })}
                    placeholder="Add tags..."
                  />
                  <div className="mt-2 flex flex-wrap gap-2">
                    {field.value.length > 0 &&
                      field.value.map((tag, index) => (
                        <TagsCard
                          key={index}
                          _id={String(index)}
                          name={tag}
                          compact
                          remove
                          isButton
                          handleRemove={() => {
                            handleRemoveTag(tag, field);
                          }}
                        />
                      ))}
                  </div>
                </div>
              </FormControl>
              <FormDescription className="text-light-500 body-regular mt-5.2">
                Add up to 5 tags to describe what your question is about.Starting to see suggestions.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="mt-16 flex justify-end">
          <Button type="submit" className="primary-gradient text-dark400_light900 cursor-pointer px-4 py-3">
            {" "}
            Ask a Question
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuestionForm;
