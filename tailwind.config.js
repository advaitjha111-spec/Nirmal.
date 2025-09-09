module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Forest Green
        primary: {
          50: "#E8F5E8", // green-50
          100: "#C8E6C9", // green-100
          200: "#A5D6A7", // green-200
          300: "#81C784", // green-300
          400: "#66BB6A", // green-400
          500: "#4CAF50", // green-500
          600: "#43A047", // green-600
          700: "#2E7D32", // green-700
          800: "#2E7D32", // green-800
          900: "#1B5E20", // green-900
          DEFAULT: "#2E7D32", // green-700
        },
        // Secondary Colors - Institutional Blue
        secondary: {
          50: "#E3F2FD", // blue-50
          100: "#BBDEFB", // blue-100
          200: "#90CAF9", // blue-200
          300: "#64B5F6", // blue-300
          400: "#42A5F5", // blue-400
          500: "#2196F3", // blue-500
          600: "#1E88E5", // blue-600
          700: "#1565C0", // blue-700
          800: "#1565C0", // blue-800
          900: "#0D47A1", // blue-900
          DEFAULT: "#1565C0", // blue-700
        },
        // Accent Colors - Warm Amber
        accent: {
          50: "#FFF8E1", // amber-50
          100: "#FFECB3", // amber-100
          200: "#FFE082", // amber-200
          300: "#FFD54F", // amber-300
          400: "#FFCA28", // amber-400
          500: "#FFC107", // amber-500
          600: "#FF8F00", // amber-600
          700: "#FF8F00", // amber-700
          800: "#FF6F00", // amber-800
          900: "#E65100", // amber-900
          DEFAULT: "#FF8F00", // amber-600
        },
        // Background Colors
        background: "#FAFAFA", // gray-50
        surface: "#FFFFFF", // white
        // Text Colors
        text: {
          primary: "#212121", // gray-800
          secondary: "#757575", // gray-500
        },
        // Status Colors
        success: "#4CAF50", // green-500
        warning: "#FF9800", // orange-500
        error: "#F44336", // red-500
        // Border Colors
        border: {
          light: "#E0E0E0", // gray-300
          medium: "#BDBDBD", // gray-400
        },
      },
      fontFamily: {
        // Headings
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        // Body Text
        body: ['Open Sans', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        // UI Elements
        ui: ['Roboto', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        // Data Display
        mono: ['JetBrains Mono', 'monospace'],
        'jetbrains-mono': ['JetBrains Mono', 'monospace'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'civic-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'civic': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'civic-md': '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'civic-lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'civic-xl': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'fade-in': 'fadeIn 200ms ease-out',
        'scale-in': 'scaleIn 150ms ease-out',
        'slide-up': 'slideUp 200ms ease-out',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'civic': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      minHeight: {
        'touch': '44px',
      },
      minWidth: {
        'touch': '44px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.touch-target': {
          minHeight: '44px',
          minWidth: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        '.transition-civic': {
          transition: 'all 200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
        '.transition-civic-fast': {
          transition: 'all 150ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
        '.transition-civic-slow': {
          transition: 'all 300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }
      addUtilities(newUtilities)
    }
  ],
}