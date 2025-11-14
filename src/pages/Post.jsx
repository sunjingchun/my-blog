import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import fm from 'front-matter'

// 按需加载每一篇文章（非 eager，体积更小）
const modules = import.meta.glob('../posts/*.md', { as: 'raw' })

export default function Post() {
  const { slug } = useParams()
  const [data, setData] = useState({
    title: '',
    date: '',
    tags: [],
    content: ''
  })

  const mdPath = `../posts/${slug}.md`

  useEffect(() => {
    if (!modules[mdPath]) return

    modules[mdPath]().then(raw => {
      const parsed = fm(raw)  // ✅ front-matter 解析
      const fmData = parsed.attributes || {}  // ✅ 提取头部属性
      const content = parsed.body || ''       // ✅ 提取正文

      setData({
        title: fmData.title ?? slug,
        date: fmData.date ?? '',
        tags: fmData.tags ?? [],
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