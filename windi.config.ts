import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: '#28B78D',
        secondary: '#17A2B8',
      },
    },
  },
  shortcuts: {
    'btn': {
      '@apply': 'px-3.5 py-2 bg-primary text-white rounded-md',
      '&:focus': {
        '@apply': 'outline-none',
      },
      '&-outline': {
        '@apply': 'bg-white text-primary border border-primary'
      }
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
        '@apply': 'bg-white border border-secondary text-secondary',
      },
    },
    'card': {
      '@apply': 'border border-gray-300 rounded-md px-4 py-2',
      '&-header': {
        '@apply': 'flex items-center justify-between'
      }
    }
  },
})
