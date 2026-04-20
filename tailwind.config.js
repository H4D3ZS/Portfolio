/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        obsidian: {
          50: '#0a0a0f',
          100: '#0d0d14',
          200: '#12121a',
          300: '#1a1a25',
          400: '#252535',
          500: '#32324a',
        },
        neon: {
          cyan: '#00f5ff',
          purple: '#b983ff',
          green: '#00ff88',
          orange: '#ff9500',
        },
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(40px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 245, 255, 0.3), 0 0 10px rgba(0, 245, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.6), 0 0 30px rgba(0, 245, 255, 0.4)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "linear-gradient(to right, rgba(0, 245, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 245, 255, 0.03) 1px, transparent 1px)",
      },
      perspective: {
        '500': '500px',
        '800': '800px',
        '1000': '1000px',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
