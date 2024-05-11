import Link from "next/link";
import React from "react";

const Articles = ({article}:any) => {
  return (
    <section className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-full relative gap-8">
      <p className="flex-grow-0 flex-shrink-0 font-medium text-left text-white">
        <span className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left text-white">
          💾{" "}
        </span>
        <span className="flex-grow-0 flex-shrink-0 text-2xl font-medium text-left text-white">
          Latest Posts
        </span>
      </p>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-4">
        <article className="flex justify-between items-center flex-grow-0 flex-shrink-0 w-full relative pb-4 border-t-0 border-r-0 border-b border-l-0 border-[#e8eef3]/10">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-left text-white">
            <Link href={`/articles/${article?.slug}`}>{article?.slug}</Link>
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left">
            March 2024
          </p>
        </article>
      </div>
    </section>
  );
};

export default Articles;
