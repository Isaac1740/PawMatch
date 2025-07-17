/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* saddle brown 20% */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* deep forest green */
        background: 'var(--color-background)', /* warm off-white */
        foreground: 'var(--color-foreground)', /* near-black */
        primary: {
          DEFAULT: 'var(--color-primary)', /* deep forest green */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* saddle brown */
          foreground: 'var(--color-secondary-foreground)', /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* red */
          foreground: 'var(--color-destructive-foreground)', /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* gray-100 */
          foreground: 'var(--color-muted-foreground)', /* medium gray */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* coral orange */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)', /* near-black */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)', /* near-black */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* fresh green */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* amber */
          foreground: 'var(--color-warning-foreground)', /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* red */
          foreground: 'var(--color-error-foreground)', /* white */
        },
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'caption': ['Nunito Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }], /* 12px */
        'sm': ['0.875rem', { lineHeight: '1.25rem' }], /* 14px */
        'base': ['1rem', { lineHeight: '1.5rem' }], /* 16px */
        'lg': ['1.125rem', { lineHeight: '1.75rem' }], /* 18px */
        'xl': ['1.25rem', { lineHeight: '1.75rem' }], /* 20px */
        '2xl': ['1.5rem', { lineHeight: '2rem' }], /* 24px */
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], /* 30px */
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], /* 36px */
      },
      borderRadius: {
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'warm-sm': '0 1px 2px 0 rgba(139, 69, 19, 0.1)',
        'warm': '0 1px 3px 0 rgba(139, 69, 19, 0.1), 0 1px 2px 0 rgba(139, 69, 19, 0.06)',
        'warm-md': '0 4px 6px -1px rgba(139, 69, 19, 0.1), 0 2px 4px -1px rgba(139, 69, 19, 0.06)',
        'warm-lg': '0 10px 15px -3px rgba(139, 69, 19, 0.1), 0 4px 6px -2px rgba(139, 69, 19, 0.05)',
        'warm-xl': '0 20px 25px -5px rgba(139, 69, 19, 0.1), 0 10px 10px -5px rgba(139, 69, 19, 0.04)',
      },
      animation: {
        'pulse-gentle': 'pulse-gentle 1.5s ease-in-out infinite',
        'spring-in': 'spring-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.7',
          },
        },
        'spring-in': {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.05)',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      spacing: {
        '18': '4.5rem', /* 72px */
        '88': '22rem', /* 352px */
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}