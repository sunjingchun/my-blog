import React from 'react'
import matter from 'gray-matter'
import { Link } from 'react-router-dom'

// 读取所有 Markdown 源文档（as: 'raw' 让我们拿到字符串），eager 让它在构建时一次性加载
const modules = import.meta.glob('../posts/*.md', { as: 'raw', eager: true })

// 解析 frontmatter，生成 posts 数组
const posts = Object.entries(modules)
  .map(([path, raw]) => {
    const { data, content } = matter(raw)
    const slug = path.split('/').pop().replace(/\.md$/, '')
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      tags: data.tags ?? [],
      excerpt: data.excerpt ?? content.trim().slice(0, 120) + '…',
    }
  })
  // 按日期倒序
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export default function Blog() {
  return (
    <section>
      <h2>全部文章</h2>
      <div className="grid">
        {posts.map(p => (
          <article key={p.slug} className="card">
            <h3 className="card-title">
              <Link to={`/post/${p.slug}`}>{p.title}</Link>
            </h3>
            <p className="muted">
              {p.date} {p.tags.length ? ' · ' + p.tags.join(' / ') : ''}
            </p>
            <p>{p.excerpt}</p>
            <Link className="btn" to={`/post/${p.slug}`}>阅读全文</Link>
          </article>
        ))}
      </div>
    </section>
  )
}