import Articles from '@/components/Articles'
import { getAllArticles } from '@/lib/article'
import Link from 'next/link'
import React from 'react'

const page = async() => {
    let articles=((await getAllArticles()).slice(0,4))
    console.log(articles)
  return (
    <div>
      {
        articles.map((article,index)=>(
          <Articles key={index} article={article}></Articles>
        ))
      }
    </div>
  )
}

export default page