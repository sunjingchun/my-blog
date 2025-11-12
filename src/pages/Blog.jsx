import React from 'react'
import { Link } from 'react-router-dom'
import fm from 'front-matter'

// 预加载所有文章（eager 便于列表）
const modules = import.meta.glob('../posts/*.md', { as: 'raw', eager: true })

const posts = Object.entries(modules).map(([path, raw]) => {
  const { attributes, body } = fm(raw)
  const slug = path.split('/').pop().replace(/\.md$/, '')
  return {
    slug,
    title: attributes?.title ?? slug,
    date: attributes?.date ?? '',
    tags: attributes?.tags ?? [],
    excerpt: (body || '').slice(0, 140) + '…'
  }
}).sort((a, b) => new Date(b.date) - new Date(a.date))

export default function Blog() {
  return (
    <section>
      <h2>全部文章</h2>
      <div className="grid">
        {posts.map(p => (
          <Link key={p.slug} to={`/post/${p.slug}`} className="card">
            <h3>{p.title}</h3>
            <p className="muted">{p.date}</p>
            <p>{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}