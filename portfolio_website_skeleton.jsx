# Portfolio Website Skeleton

This Next.js + React + Tailwind project is scaffolded for easy deployment (e.g., Vercel). Edit content in `src/app`, `src/components`, and root files as needed.

```bash
# Initialize Next.js TypeScript app in current folder
npx create-next-app@latest . --typescript --app --name portfolio
# When prompted, enable ESLint, import alias `@`, and Tailwind CSS
# Then install UI libraries and charting
npm install @shadcn/ui lucide-react recharts
```

---

## jsconfig.json (for the `@/` alias)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { extend: {} },
  plugins: [],
};
```

## postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

---

## src/app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## src/app/layout.tsx
```tsx
import './globals.css';
import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

// Load Geist fonts
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Showcase of projects, MN 500 holdings, articles & publications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}>
        <NavBar />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
```

---

## src/components/NavBar.tsx
```tsx
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold">Pej Hamidi</h1>
      <ul className="space-x-6">
        {['Home','Projects','Portfolio','Articles','Publications','Contact'].map(section => (
          <li key={section}>
            <Link href={section === 'Home' ? '/' : `#${section.toLowerCase()}`}>{section}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

---

## src/components/PortfolioChart.tsx
```tsx
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

// Replace with real MN 500 data
const data = [
  { date: '2025-01-01', value: 10000 },
  { date: '2025-02-01', value: 10500 },
  { date: '2025-03-01', value: 10200 },
];

export default function PortfolioChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="value" />
      </LineChart>
    </ResponsiveContainer>
  );
}
```

---

## src/components/ClientPortfolioChart.tsx
```tsx
'use client';
import dynamic from 'next/dynamic';

// Dynamically load the chart on client only
const PortfolioChart = dynamic(() => import('@/components/PortfolioChart'), {
  ssr: false,
});

export default function ClientPortfolioChart() {
  return <PortfolioChart />;
}
```

---

## src/app/page.tsx
```tsx
import ClientPortfolioChart from '@/components/ClientPortfolioChart';

export default function Home() {
  return (
    <>
      <section id="home" className="py-12">
        <h2 className="text-3xl font-semibold">Welcome</h2>
        <p>Explore my work: projects, MN 500 portfolio, articles & publications.</p>
      </section>

      <section id="projects" className="py-12">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        {/* Embed project appendices here */}
      </section>

      <section id="portfolio" className="py-12">
        <h2 className="text-3xl font-semibold mb-4">MN 500 Holdings</h2>
        <ClientPortfolioChart />
      </section>

      <section id="articles" className="py-12">
        <h2 className="text-3xl font-semibold mb-4">Articles</h2>
        {/* List or embed article links */}
      </section>

      <section id="publications" className="py-12">
        <h2 className="text-3xl font-semibold mb-4">Publications</h2>
        {/* List publications */}
      </section>

      <section id="contact" className="py-12">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        {/* Email / social links */}
      </section>
    </>
  );
}
```

---

### Next Steps
1. **Add `jsconfig.json`** at the project root to enable `@/` import paths.  
2. Restart your dev server: `npm run dev`.  
3. Confirm http://localhost:3000 loads without errors.  
4. Deploy to Vercel to get your live URL.  
5. Populate content sections with your real work and data.  
