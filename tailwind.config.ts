import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-red-500',
    'text-pink-500',
    'text-orange-500',
    'text-pink-500',
    'text-orange-500',
    'text-yellow-500',
    'text-emerald-500',
    'text-cyan-500',
    'text-blue-500',
    'text-purple-500',
    'text-zinc-500',
    'text-rose-500',
    'text-orange-500',
    'bg-blue-100',
    'bg-rose-100',
    'bg-orange-100',
  ],
} satisfies Config;
