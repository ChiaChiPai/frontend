import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: '#28B78D',
        secondary: '#17A2B8',
        line: '#00B900',
        facebook: '#1778F2',
        twitter: '#55ACEE',
        google: '#EA4335',
      },
    },
  },
  shortcuts: {
    'btn': {
      '@apply': 'inline-block px-3.5 py-2 bg-primary text-white rounded-md',
      '&:focus': {
        '@apply': 'outline-none',
      },
      '&:disabled': {
        '@apply': 'bg-gray-300',
      },
      '&-outline': {
        '@apply': 'px-3.25 py-1.75 bg-white border border-primary text-primary',
      },
    },
    'icon-btn': {
      '@apply': 'p-2 text-2xl inline-flex items-center',
      '&:focus': {
        '@apply': 'outline-none',
      },
    },
    'tag': {
      '@apply': 'inline-block p-1 bg-secondary text-white text-sm font-bold leading-4 rounded-sm',
      '&-outline': {
        '@apply': 'bg-white p-0.75 border border-secondary text-secondary',
      },
    },
    'card': {
      '@apply': 'border border-gray-300 rounded-md p-4',
      '&-header': {
        '@apply': 'flex items-center justify-between py-1 mb-2',
      },
    },
  },
})
