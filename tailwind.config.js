function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else {
      return `rgba(${variableName})`;
    }
  }
}
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          blanc: withOpacity('--color-text-blanc'),
          gris: withOpacity('--color-text-gris'),
          muted: withOpacity('--color-text-muted'),
          primary: withOpacity('--color-text-primary'),
          inverted: withOpacity('--color-text-inverted'),
        }
      },
      backgroundColor: {
        skin: {
          primary: withOpacity('--color-primary'),
          'btn-accent': withOpacity('--color-btn-accent'),
          'btn-accent-hover': withOpacity('--color-btn-accent-hover'),
          'btn-muted': withOpacity('--color-btn-muted'),
          'btn-inverted': withOpacity('--color-btn-inverted'),
        }
      },
      gradientColorStops: {
        skin: {
          hue: withOpacity('--color-primar')
        }
      },
      borderColor: {
        skin: {
          primary: withOpacity('--color-primary'),
          inverted: withOpacity('--color-btn-inverted'),
        }
      }
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover']
    },
  },
  plugins: [
  ],
}
