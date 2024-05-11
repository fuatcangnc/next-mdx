"use client"
import { ArticleWithSlug } from '@/lib/article'
import React from 'react'

const ArticleLayout = ({article,children}:{article:ArticleWithSlug,children:React.ReactNode}) => {
  return (
    <div>      {article?.title}
    </div>
  )
}

export default ArticleLayout