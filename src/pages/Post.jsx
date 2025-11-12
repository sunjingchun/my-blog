// src/pages/Post.jsx
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

// 按需加载每一篇文章（非 eager，体积更小）
const modules = import.meta.glob('../posts/*.md', { as: 'raw' })

export default function Post() {
  const { slug } = useParams()
  const [data, setData] = useState({ title: '', date: '', tags: [], content: '' })
  const mdPath = `../posts/${slug}.md`

  useEffect(() => {
    if (!modules[mdPath]) return
    modules[mdPath]().then(raw => {
      const { data: fm, content } = matter(raw)
      setData({
        title: fm?.title ?? slug,
        date: fm?.date ?? '',
        tags: fm?.tags ?? [],
        content
      })
    })
  }, [slug])

  if (!modules[mdPath]) {
    return (
      <section>
        <h2>未找到该文章</h2>
        <Link className="btn" to="/blog">返回列表</Link>
      </section>
    )
  }

  return (
    <article className="post">
      <h1>{data.title}</h1>
      <p className="muted">
        {data.date} {data.tags.length ? ' · ' + data.tags.join(' / ') : ''}
      </p>
      <div className="post-content">
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </div>
      <Link className="btn" to="/blog">← 返回文章列表</Link>
    </article>
  )
}