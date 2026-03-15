export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: { DEFAULT: '#0F1117', 50: '#f8f9fc', 100: '#eef0f6', 200: '#d4d8e8', 300: '#a8b0cc', 400: '#7880aa', 500: '#4d5780', 600: '#323d6b', 700: '#202952', 800: '#141b3a', 900: '#0F1117' },
        purple: {
          DEFAULT: '#4B2E83',
          50: '#f5f0fb',
          100: '#ece0f7',
          200: '#d9c2ef',
          300: '#C499CA',
          400: '#b07dc0',
          500: '#744EC2',
          600: '#5c3aa0',
          700: '#4B2E83',
          800: '#3a2266',
          900: '#28184a',
        },
        slate: { bg: '#F8F7FC', card: '#FFFFFF', border: '#E8E4F0', muted: '#6B7280' },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(75,46,131,0.07), 0 4px 16px rgba(75,46,131,0.04)',
        'card-hover': '0 4px 12px rgba(75,46,131,0.12), 0 12px 32px rgba(116,78,194,0.12)',
        'purple': '0 4px 24px rgba(75,46,131,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
      },
    },
  },
  plugins: [],
}
