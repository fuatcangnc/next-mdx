import React from 'react'
interface ResProps {
    company: string;
    title: string;
    start: string 
    end: string
  }

const Resume = ({res}:{res:ResProps}) => {
    // console.log("dsa"+{res})
  return (
    <li className="flex gap-4">
    <div className="relative mt-1 flex w-10 h-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-red-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
      
    </div>
    <dl className="flex flex-auto flex-wrap gap-x-2">
      <dt className="sr-only">Company</dt>
      <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {res?.company}
      </dd>
      <dt className="sr-only">Role</dt>
      <dd className="text-xs text-zinc-500 dark:text-zinc-400">
        {res?.title}
      </dd>
      <dt className="sr-only">Date</dt>
      <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
        <p>{res?.start}</p>
        <span aria-hidden="true">-</span>

        <p>{res?.end}</p>
      </dd>
    </dl>
  </li>
  )
}

export default Resume