# Next.js Day 4 — Params + Search Params + Router Navigation (Detailed Notes)

This README contains complete Day 4 learning notes for **Next.js App Router**.

✅ Topics covered:
- `params` vs `useParams()`
- URL query params (Search Params)
- `searchParams` (Server Components)
- `useSearchParams()` (Client Components)
- `useRouter()` for navigation + query updates
- Building filters/sorting/search using query params
- Server + Client integration (very important)

---

## ✅ 1) What we built in Day 4?

We built a mini **Blog Explorer** app using query filters like real websites.

### Routes:
- `/` → Home
- `/blogs` → Blog Explorer page
- `/blogs/[id]` → Blog Details page

### Query based filters:
- `/blogs?category=tech`
- `/blogs?category=career`
- `/blogs?sort=asc`
- `/blogs?sort=desc`
- `/blogs?search=next`

You can combine them:
- `/blogs?category=tech&sort=desc&search=next`

---

## ✅ 2) Understanding Route Params vs Search Params

Next.js has two types of URL-based data:

---

### A) Route Params (Dynamic Route Segments)
These come from folders like:
- `/blogs/[id]`

Example URL:
- `/blogs/2`

Then the route param is:
- `id = "2"`

**Route params represent the path variable**.

---

### B) Search Params (Query Params)
These come from URL query part.

Example URL:
- `/blogs?category=tech&sort=desc`

Then search params are:
- `category = "tech"`
- `sort = "desc"`

**Search params represent filters/options in URL**.

---

## ✅ 3) Why query-based filtering is important?

Real-world apps use query params because:
- URL becomes shareable (copy paste)
- filters persist after refresh
- user can bookmark filtered results
- SEO becomes better

Example:
- “Tech blogs sorted desc” can be shared as a link.

---

## ✅ 4) Using `searchParams` in Server Components

In Next.js App Router:
- Pages (`page.js`) are **Server Components by default**

So the blogs listing page can receive:
- `searchParams`

This means the server can:
- read query parameters
- apply filtering
- send only final filtered result to user

### Example of what happens:
If user opens:
- `/blogs?category=tech&sort=desc`

Then:
- Next.js extracts query params
- server filters blog list before rendering HTML

This gives:
✅ better performance  
✅ SEO friendly filtering  
✅ server-side rendering

---

## ✅ 5) Using Client Component for interactive filters

Server components cannot do:
- button click navigation
- interactive UI state

So we build a separate **Client Component** for filters using:
- `"use client"`

Filter UI includes:
- Category buttons
- Sort buttons
- Search input
- Clear filters button

---

## ✅ 6) `useSearchParams()` — Reading query params in Client Components

In client components, we cannot access `searchParams` prop directly like server pages.

So Next.js provides:
- `useSearchParams()`

It allows:
- reading current query values
- highlighting active filters
- setting default values in UI

Example:
If URL is:
- `/blogs?category=career`

Then filter UI can show:
- CAREER button active

---

## ✅ 7) `useRouter()` — Updating URL dynamically

When user clicks filter:
- we do not refresh the page manually
- instead we update URL using router navigation

Next.js provides:
- `useRouter()`

Using router:
- we can push new URL
- Next.js rerenders blog list using the updated query params

### Example flow:
User clicks TECH:
1. router updates URL → `/blogs?category=tech`
2. Next.js rerenders `/blogs` page
3. Server reads new `searchParams`
4. Filtered result appears instantly

---

## ✅ 8) Why we build query string using `URLSearchParams`

Query params should be handled cleanly to avoid bugs.

So we:
- read existing query params
- update only one param (category/sort/search)
- keep rest intact

Example:
If current URL is:
- `/blogs?category=tech&sort=desc`

And user sets search:
- `search=next`

Final URL becomes:
- `/blogs?category=tech&sort=desc&search=next`

This is the correct way.

---

## ✅ 9) `params` vs `useParams()` (Important Difference)

### `params` (Server Component)
In server pages like:
- `/blogs/[id]/page.js`

Next.js provides `params` so you can:
- find blog by id
- render blog details
- handle 404 using `notFound()`

---

### `useParams()` (Client Component)
If you need the blog id inside a client component (interactive feature), you use:
- `useParams()`

Example use cases:
- Like button
- Save blog feature
- Comment posting
- Client-side fetch based on blog id
- Open modal using route id

---

## ✅ 10) Server + Client Integration (Next.js Superpower)

This project uses hybrid rendering:

### Server responsibilities:
- filter blog list using query params
- render pages
- return SEO-friendly HTML

### Client responsibilities:
- filter UI
- user interactions
- pushing URL updates

So our UI becomes:
✅ fast (server rendered)  
✅ interactive (client actions)  
✅ scalable architecture  

---

## ✅ 11) Blog Details Page Working (Dynamic Route)

Blog details route:
- `/blogs/[id]`

Working:
1. Next.js reads blog ID from `params`
2. Finds blog from dataset
3. If blog not found → show 404
4. If found → render details page

Additionally:
- client component is used to display blog id using `useParams()` (learning purpose)

---

## ✅ Day 4 Summary

You learned:
✅ route params in dynamic routing  
✅ query params for filterable pages  
✅ server-side filtering using `searchParams`  
✅ `useSearchParams()` for query reading in client components  
✅ `useRouter()` for URL updates and navigation  
✅ `useParams()` for client-side access to route params  
✅ best practice of mixing server pages + client UI  

---

