import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme base colors
        'dark-bg': '#0a0a0a',
        'dark-surface': '#1a1a1a',
        'dark-card': '#2a2a2a',
        'dark-border': '#3a3a3a',
        
        // Neon accent colors
        'neon-blue': '#00d4ff',
        'neon-violet': '#8b5cf6',
        'neon-lime': '#84cc16',
        'neon-pink': '#f472b6',
        'neon-cyan': '#06b6d4',
        
        // Gradient colors
        'gradient-start': '#1e1b4b',
        'gradient-end': '#312e81',
      },
      fontFamily: {
        'heading': ['Orbitron', 'Rajdhani', 'Exo 2', 'sans-serif'],
        'body': ['Inter', 'Poppins', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff' },
          '100%': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #00d4ff 0%, #8b5cf6 50%, #f472b6 100%)',
      },
    },
  },
  plugins: [],
}

export default config

