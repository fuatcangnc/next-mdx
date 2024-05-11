import React from 'react'
import Resume from './Resume'

const ResumeItem = () => {
    let resume=[
        {
            company:'Emotional Brands',
            title:'UI Designer & Developer',
            start:"2023",
            end:"2024"
        },
        {
            company:'Emotional Brands',
            title:'UI Designer & Developer',
            start:"2023",
            end:"2024"
        }
    ]
    console.log(resume)
  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
    <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <span className="ml-3">Work</span>
    </h2>
    <ol className="mt-6 space-y-4">
      {resume.map((res, index) => (
        <Resume res={res} key={index}></Resume>
        
      ))}
    </ol>
  </div>
  )
}

export default ResumeItem