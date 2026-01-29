# Next.js Learning — Day 1 🚀  
### Setup + App Router + Routing + Layout + Navbar (Beginner Friendly)

This repository contains my **Day 1 learning** of **Next.js (App Router)** where I learned how routing works automatically, how `layout.js` wraps pages, and how to create multi-page navigation using `next/link`.

---

## 🧠 Why Next.js? (React vs Next.js)
React is a UI library, but for a complete real-world application we usually need:

- routing
- SEO
- performance optimizations
- deployment-friendly setup
- sometimes backend APIs

### ✅ React
- Only focuses on UI
- Routing requires extra library (`react-router-dom`)
- Mostly Client Side Rendering (CSR) → SEO not great for content-heavy websites

### ✅ Next.js
Next.js is a **framework built on top of React** that provides:

- File/Folder based routing (no extra router)
- Server Side Rendering (SSR)
- Static Site Generation (SSG)
- API Routes (backend inside Next.js)
- Faster page loading and prefetching
- Very easy deployment (Vercel)

---

## ✅ Day 1 Goals
By the end of Day 1, I learned:

- How to create a Next.js project
- Understanding Next.js folder structure (App Router)
- Creating pages using `page.js`
- Automatic routing system (folder-based routing)
- Creating a reusable `Navbar`
- Using `layout.js` for common UI layout
- Navigation using `<Link />`
- How routing works internally in Next.js

---

## 📌 What is Next.js?
**Next.js** is a **React Framework** that adds extra superpowers to React:

- ✅ Built-in routing
- ✅ SEO friendly (SSR/SSG support)
- ✅ Fullstack capability (API Routes)
- ✅ Faster performance & optimized builds
- ✅ Better developer experience with structured file system

---

## 🧩 What is App Router?
Next.js 13+ introduced a modern routing system called **App Router**.

📌 App Router means:
- Routing is controlled by the `app/` folder
- Each route is represented using a folder
- `page.js` is the route entry file
- `layout.js` is shared UI wrapper
- supports modern features like Server Components

---

## ⚙️ Step 1: Create Next.js Project
Run the following command:

```bash
npx create-next-app@latest nextjs-day1
