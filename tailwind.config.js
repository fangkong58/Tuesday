const { withTV } = require('tailwind-variants/transformer');
const plugin = require('tailwindcss/plugin');
const { nextui } = require('@nextui-org/theme');

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'player-subtitle-window-color': 'var(--art-subtitle-window-color)',
        'player-subtitle-background-color': 'var(--art-subtitle-background-color)',
        'movie-brand-color': 'var(--colors-movie-brand)',
      },
      keyframes: {
        enterFromRight: {
          from: { opacity: 0, transform: 'translateX(200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        enterFromLeft: {
          from: { opacity: 0, transform: 'translateX(-200px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        exitToRight: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(200px)' },
        },
        exitToLeft: {
          from: { opacity: 1, transform: 'translateX(0)' },
          to: { opacity: 0, transform: 'translateX(-200px)' },
        },
        scaleIn: {
          from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
        },
        scaleOut: {
          from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
          to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        shadowAnimation: {
          '0%, 100%': {
            transform: 'scale(1, 1)',
          },
          '50%': {
            transform: 'scale(1.2, 1)',
          },
        },
        jumpAnimation: {
          '15%': {
            borderBottomRightRadius: '3px',
          },
          '25%': {
            transform: 'translateY(9px) rotate(22.5deg)',
          },
          '50%': {
            transform: 'translateY(18px) scale(1, .9) rotate(45deg)',
            borderBottomRightRadius: '40px',
          },
          '75%': {
            transform: 'translateY(9px) rotate(67.5deg)',
          },
          '100%': {
            transform: 'translateY(0) rotate(90deg)',
          },
        },
        slideIn: {
          from: { transform: '$$transformValue' },
          to: { transform: 'translate3d(0,0,0)' },
        },
        slideOut: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: '$$transformValue' },
        },
        progressBarStripes: {
          '0%': { backgroundPosition: '40px 0' },
          '100%': { backgroundPosition: '0 0' },
        },
      },
      animation: {
        scaleIn: 'scaleIn 200ms ease',
        scaleOut: 'scaleOut 200ms ease',
        fadeIn: 'fadeIn 200ms ease',
        fadeOut: 'fadeOut 200ms ease',
        enterFromLeft: 'enterFromLeft 250ms ease',
        enterFromRight: 'enterFromRight 250ms ease',
        exitToLeft: 'exitToLeft 250ms ease',
        exitToRight: 'exitToRight 250ms ease',
        shadow: 'shadowAnimation 500ms linear infinite',
        jump: 'jumpAnimation 500ms linear infinite',
        progressBarStripes: 'progressBarStripes 2s linear infinite',
      },
      gridTemplateAreas: {
        wide: ['image title', 'image info', 'image buttons'],
        small: ['image title', 'info info', 'buttons buttons'],
      },
      fontSize: {
        xs: [
          '0.75rem',
          {
            lineHeight: '1rem',
            letterSpacing: '-0.05em',
          },
        ],
        sm: [
          '0.875rem',
          {
            lineHeight: '1.25rem',
            letterSpacing: '-0.05em',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.5rem',
            letterSpacing: '-0.025em',
          },
        ],
        lg: [
          '1.125rem',
          {
            lineHeight: '1.75rem',
            letterSpacing: '0',
          },
        ],
        xl: [
          '1.25rem',
          {
            lineHeight: '1.5',
            letterSpacing: '0',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            lineHeight: '1.5',
            letterSpacing: '0',
          },
        ],
        '3xl': [
          '1.875rem',
          {
            lineHeight: '1.5',
            letterSpacing: '0',
          },
        ],
        '4xl': [
          '2.25rem',
          {
            lineHeight: '1.5',
            letterSpacing: '0',
          },
        ],
        'player-subtitle-font-size': 'var(--art-subtitle-custom-font-size)',
      },
      textShadow: {
        none: 'none',
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        player: 'var(--art-subtitle-text-shadow)',
      },
      width: {
        logo: 'calc(var(--movie-logo-width) * 1px)',
        'logo-sm': 'calc(var(--movie-logo-width-sm) * 1px)',
      },
    },
    screens: {
      '2xs': '375px',
      xs: '425px',
      sm: '650px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1400px',
      '3xl': '1600px',
      '4xl': '1920px',
      '5xl': '2560px',
      'nextui-xs': '650px',
      'nextui-sm': '960px',
      'nextui-md': '1280px',
      'nextui-lg': '1400px',
      'nextui-xl': '1920px',
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      );
    }),
    require('tailwind-scrollbar-hide'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('prettier-plugin-tailwindcss'),
    require('tailwindcss-animate'),
    nextui({
      prefix: 'colors',
      themes: {
        light: {
          'background-body': '#ffffff',
          'background-title-bar': '#ffffff',
        },
        dark: {
          'background-body': '#000000',
          'background-title-bar': '#000000',
        },
        bumblebee: {
          'background-title-bar': '#fefcf4',
          'background-body': '#ffffff',
          background: {
            DEFAULT: '#ffffff',
          },
          foreground: {
            DEFAULT: '#333333',
          },
          border: {
            DEFAULT: '#BBBBEA',
          },
          content1: {
            DEFAULT: '#ECECFB',
            foreground: '#040417',
          },
          content2: {
            DEFAULT: '#DCDCF4',
            foreground: '#07071B',
          },
          content3: {
            DEFAULT: '#BBBBEA',
            foreground: '#0C0C22',
          },
          content4: {
            DEFAULT: '#8787C0',
            foreground: '#111129',
          },
          default: {
            50: '#ECECFB',
            100: '#DCDCF4',
            200: '#BBBBEA',
            300: '#8787C0',
            400: '#515182',
            500: '#181830',
            600: '#111129',
            700: '#0C0C22',
            800: '#07071B',
            900: '#040417',
            DEFAULT: '#181830',
            foreground: '#bab9ef',
          },
          primary: {
            50: '#FEF9E4',
            100: '#FBF3D2',
            200: '#F8E4A6',
            300: '#ECCB76',
            400: '#D9AF52',
            500: '#C08921',
            600: '#A56F18',
            700: '#8A5710',
            800: '#6F410A',
            900: '#5C3206',
            DEFAULT: '#C08921',
            foreground: '#181830',
          },
          secondary: {
            50: '#FDFBE5',
            100: '#F8F1D3',
            200: '#F0E2A3',
            300: '#E9D477',
            400: '#E2C74B',
            500: '#D6B422',
            600: '#AC911B',
            700: '#806C14',
            800: '#54470D',
            900: '#2C2507',
            950: '#161303',
            DEFAULT: '#D6B422',
            foreground: '#181830',
          },
          success: {
            50: '#EEFEEC',
            100: '#DFFCE3',
            200: '#C0FACD',
            300: '#9EF1B8',
            400: '#81E3AA',
            500: '#59D298',
            600: '#41B488',
            700: '#2C9779',
            800: '#1C7969',
            900: '#11645E',
            DEFAULT: '#59D298',
            foreground: '#0b3320',
          },
          warning: {
            50: '#FEFBE2',
            100: '#FEF7CF',
            200: '#FDEEA1',
            300: '#FBE171',
            400: '#F8D34E',
            500: '#F4BE15',
            600: '#D19D0F',
            700: '#AF7F0A',
            800: '#8D6206',
            900: '#754E04',
            DEFAULT: '#F4BE15',
            foreground: '#362800',
          },
          danger: {
            50: '#FEF6EE',
            100: '#FEEDE3',
            200: '#FDD6C8',
            300: '#F9B9AB',
            400: '#F49E95',
            500: '#EE7372',
            600: '#CC535C',
            700: '#AB394C',
            800: '#8A243D',
            900: '#721534',
            DEFAULT: '#EE7372',
          },
        },
        autumn: {
          'background-title-bar': '#fcf2f1',
          'background-body': '#ffffff',
          background: {
            DEFAULT: '#f1f1f1',
          },
          foreground: {
            DEFAULT: '#303030',
          },
          border: {
            DEFAULT: '#F2E5D6',
          },
          content1: {
            DEFAULT: '#FDFAF4',
            foreground: '#3E1711',
          },
          content2: {
            DEFAULT: '#F8F3EA',
            foreground: '#4B251D',
          },
          content3: {
            DEFAULT: '#F2E5D6',
            foreground: '#5D392E',
          },
          content4: {
            DEFAULT: '#D9C6B3',
            foreground: '#6F5043',
          },
          default: {
            50: '#FDFAF4',
            100: '#F8F3EA',
            200: '#F2E5D6',
            300: '#D9C6B3',
            400: '#B49D8C',
            500: '#826A5C',
            600: '#6F5043',
            700: '#5D392E',
            800: '#4B251D',
            900: '#3E1711',
            DEFAULT: '#826A5C',
            foreground: '#fbdbc5',
          },
          primary: {
            50: '#FED7E5',
            100: '#F8C9C7',
            200: '#F19298',
            300: '#D6576B',
            400: '#AE2D4E',
            500: '#78022C',
            600: '#67012F',
            700: '#560130',
            800: '#45002D',
            900: '#39002B',
            DEFAULT: '#78022C',
            foreground: '#f9b6c9',
          },
          secondary: {
            50: '#F9ECED',
            100: '#FBE2D9',
            200: '#F8C1B4',
            300: '#EA948A',
            400: '#D56968',
            500: '#B93B45',
            600: '#9F2B3E',
            700: '#851D38',
            800: '#6B1231',
            900: '#580B2D',
            DEFAULT: '#B93B45',
            foreground: '#fbd5d4',
          },
          success: {
            50: '#EBF5F2',
            100: '#E0F9E9',
            200: '#C3F4D9',
            300: '#9BDEC0',
            400: '#76BEA4',
            500: '#499380',
            600: '#357E72',
            700: '#246965',
            800: '#175355',
            900: '#0E3F46',
            DEFAULT: '#499380',
            foreground: '#ccfff0',
          },
          warning: {
            50: '#FDF2E8',
            100: '#FDF0CF',
            200: '#FCDCA0',
            300: '#F8C270',
            400: '#F1A74C',
            500: '#E97F14',
            600: '#C8620E',
            700: '#A7490A',
            800: '#873306',
            900: '#6F2403',
            DEFAULT: '#E97F14',
            foreground: '#301a00',
          },
          danger: {
            50: '#FCE8EA',
            100: '#FDDCD0',
            200: '#FBB1A2',
            300: '#F57D73',
            400: '#EB4F51',
            500: '#DF1A2F',
            600: '#BF1335',
            700: '#A00D37',
            800: '#810836',
            900: '#6B0435',
            DEFAULT: '#DF1A2F',
            foreground: '#facbd1',
          },
        },
        retro: {
          'background-title-bar': '#f0ebd8',
          'background-body': '#ffffff',
          background: {
            DEFAULT: '#e2d8b3',
          },
          foreground: {
            DEFAULT: '#282425',
          },
          border: {
            DEFAULT: '#F2ECD6',
          },
          content1: {
            DEFAULT: '#FDFBF4',
            foreground: '#3B2911',
          },
          content2: {
            DEFAULT: '#F8F5EA',
            foreground: '#48361C',
          },
          content3: {
            DEFAULT: '#F2ECD6',
            foreground: '#59492C',
          },
          content4: {
            DEFAULT: '#D8CEB2',
            foreground: '#6B5D41',
          },
          default: {
            50: '#FDFBF4',
            100: '#F8F5EA',
            200: '#F2ECD6',
            300: '#D8CEB2',
            400: '#B1A68A',
            500: '#7D7259',
            600: '#6B5D41',
            700: '#59492C',
            800: '#48361C',
            900: '#3B2911',
            DEFAULT: '#7D7259',
            foreground: '#e4d8b4',
          },
          primary: {
            50: '#FAF0F0',
            100: '#FCECE4',
            200: '#FAD5CA',
            300: '#F0B5AB',
            400: '#E19491',
            500: '#CD6C70',
            600: '#B04E5B',
            700: '#93364A',
            800: '#76223C',
            900: '#621433',
            DEFAULT: '#CD6C70',
            foreground: '#282425',
          },
          secondary: {
            50: '#F2F7F5',
            100: '#EBFAEC',
            200: '#D7F6DE',
            300: '#BAE6C8',
            400: '#9DCEB1',
            500: '#77AE93',
            600: '#56957D',
            700: '#3B7D6A',
            800: '#256458',
            900: '#16534E',
            DEFAULT: '#77AE93',
            foreground: '#282425',
          },
          success: {
            50: '#E4FBED',
            100: '#D0FACF',
            200: '#A0F5A6',
            300: '#6DE381',
            400: '#46C769',
            500: '#16A34A',
            600: '#108C4A',
            700: '#0B7547',
            800: '#075E41',
            900: '#044E3C',
            DEFAULT: '#16A34A',
            foreground: '#c6ffd5',
          },
          warning: {
            50: '#FEF1E1',
            100: '#FDEFCB',
            200: '#FBDB99',
            300: '#F3BE65',
            400: '#E8A13E',
            500: '#D97706',
            600: '#BA5D04',
            700: '#9C4603',
            800: '#7D3201',
            900: '#682501',
            DEFAULT: '#D97706',
            foreground: '#2b1800',
          },
          danger: {
            50: '#FBE9E9',
            100: '#FDE1D3',
            200: '#FBBDA8',
            300: '#F4907B',
            400: '#EA6558',
            500: '#DC2626',
            600: '#BD1B29',
            700: '#9E132B',
            800: '#7F0C2A',
            900: '#690729',
            DEFAULT: '#DC2626',
            foreground: '#facdcd',
          },
        },
        synthwave: {
          'background-title-bar': '#1b1140',
          'background-body': '#000000',
          background: {
            DEFAULT: '#2d1b69',
          },
          foreground: {
            DEFAULT: '#f9f7fd',
          },
          border: {
            DEFAULT: '#110938',
          },
          content1: {
            DEFAULT: '#080325',
            foreground: '#EDE5FC',
          },
          content2: {
            DEFAULT: '#0C062D',
            foreground: '#DCD0F6',
          },
          content3: {
            DEFAULT: '#110938',
            foreground: '#BAA5ED',
          },
          content4: {
            DEFAULT: '#180D43',
            foreground: '#866EC9',
          },
          default: {
            50: '#080325',
            100: '#0C062D',
            200: '#110938',
            300: '#180D43',
            400: '#20134E',
            500: '#544094',
            600: '#866EC9',
            700: '#BAA5ED',
            800: '#DCD0F6',
            900: '#EDE5FC',
            DEFAULT: '#1E293B',
            foreground: '#f9f7fd',
          },
          primary: {
            50: '#54105F',
            100: '#6F1C72',
            200: '#8E2C89',
            300: '#AA409A',
            400: '#C658AB',
            500: '#DC80BD',
            600: '#ED9ECB',
            700: '#F9C1DB',
            800: '#FCE0EA',
            900: '#FAF0F7',
            DEFAULT: '#C658AB',
            foreground: '#43012f',
          },
          secondary: {
            50: '#0C2F63',
            100: '#144278',
            200: '#205E95',
            300: '#2E7CB2',
            400: '#409ED0',
            500: '#6DC1E2',
            600: '#8CDAF0',
            700: '#B4EFFA',
            800: '#D9F9FC',
            900: '#EBF5FA',
            DEFAULT: '#409ED0',
            foreground: '#0b2f42',
          },
          success: {
            50: '#155F70',
            100: '#247F87',
            200: '#38A8A7',
            300: '#52C9BC',
            400: '#71EAD2',
            500: '#94F2D6',
            600: '#ABF8DA',
            700: '#C8FCE3',
            800: '#E3FDEE',
            900: '#F2FDFB',
            DEFAULT: '#71EAD2',
            foreground: '#201047',
          },
          warning: {
            50: '#745609',
            100: '#8C6B0F',
            200: '#AE8A18',
            300: '#D0AA23',
            400: '#F3CC30',
            500: '#F7DD62',
            600: '#FBE882',
            700: '#FDF2AC',
            800: '#FEF9D5',
            900: '#FEFAEC',
            DEFAULT: '#F3CC30',
            foreground: '#201047',
          },
          danger: {
            50: '#6C0C3D',
            100: '#831442',
            200: '#A2204A',
            300: '#C22E50',
            400: '#E24056',
            500: '#ED6D73',
            600: '#F6918C',
            700: '#FCBEB3',
            800: '#FDE1D9',
            900: '#FCEDEF',
            DEFAULT: '#E24056',
            foreground: '#f9f7fd',
          },
        },
        dracula: {
          'background-title-bar': '#181921',
          'background-body': '#000000',
          background: {
            DEFAULT: '#282a36',
          },
          foreground: {
            DEFAULT: '#f8f8f2',
          },
          border: {
            DEFAULT: '#20243F',
          },
          content1: {
            DEFAULT: '#0C0F2A',
            foreground: '#F4F6FC',
          },
          content2: {
            DEFAULT: '#141833',
            foreground: '#E9ECF6',
          },
          content3: {
            DEFAULT: '#20243F',
            foreground: '#D5DBEE',
          },
          content4: {
            DEFAULT: '#2F334B',
            foreground: '#ACB3CC',
          },
          default: {
            50: '#0C0F2A',
            100: '#141833',
            200: '#20243F',
            300: '#2F334B',
            400: '#414558',
            500: '#7C829A',
            600: '#ACB3CC',
            700: '#D5DBEE',
            800: '#E9ECF6',
            900: '#F4F6FC',
            DEFAULT: '#414558',
            foreground: '#c4cbf5',
          },
          primary: {
            50: '#631069',
            100: '#7F1C7B',
            200: '#9D2C8E',
            300: '#BC409F',
            400: '#DB58B0',
            500: '#E980BC',
            600: '#F49CC6',
            700: '#FBBFD5',
            800: '#FDDEE7',
            900: '#FBEEF7',
            DEFAULT: '#DB58B0',
            foreground: '#47012c',
          },
          secondary: {
            50: '#261466',
            100: '#38227C',
            200: '#52359A',
            300: '#704EB8',
            400: '#926BD6',
            500: '#B290E6',
            600: '#C9A9F2',
            700: '#E0C8FA',
            800: '#F0E3FC',
            900: '#F3EFFB',
            DEFAULT: '#926BD6',
            foreground: '#200150',
          },
          success: {
            50: '#0F7752',
            100: '#19905A',
            200: '#28B366',
            300: '#3AD771',
            400: '#50FA7B',
            500: '#7BFB8F',
            600: '#96FD9C',
            700: '#BBFEB9',
            800: '#E0FEDC',
            900: '#EBFEF0',
            DEFAULT: '#50FA7B',
            foreground: '#10420e',
          },
          warning: {
            50: '#6D771A',
            100: '#86902C',
            200: '#A9B346',
            300: '#CCD766',
            400: '#F1FA8C',
            500: '#F5FBA8',
            600: '#F9FDBA',
            700: '#FBFED1',
            800: '#FDFEE8',
            900: '#FEFFF5',
            DEFAULT: '#F1FA8C',
            foreground: '#484e00',
          },
          danger: {
            50: '#7A1035',
            100: '#931B3A',
            200: '#B72A43',
            300: '#DB3E4B',
            400: '#FF5555',
            500: '#FF8A7F',
            600: '#FFAA99',
            700: '#FFCCBB',
            800: '#FFE8DD',
            900: '#FFF0F0',
            DEFAULT: '#FF5555',
            foreground: '#401d23',
          },
        },
        night: {
          'background-title-bar': '#0a0e19',
          'background-body': '#000000',
          background: {
            DEFAULT: '#101729',
          },
          foreground: {
            DEFAULT: '#b7c6f0',
          },
          border: {
            DEFAULT: '#151F32',
          },
          content1: {
            DEFAULT: '#050A1C',
            foreground: '#EDF6FC',
          },
          content2: {
            DEFAULT: '#091022',
            foreground: '#DDE9F5',
          },
          content3: {
            DEFAULT: '#0F172A',
            foreground: '#BDD4EB',
          },
          content4: {
            DEFAULT: '#151F32',
            foreground: '#8AA4C4',
          },
          default: {
            50: '#050A1C',
            100: '#091022',
            200: '#0F172A',
            300: '#151F32',
            400: '#1E293B',
            500: '#566B89',
            600: '#8AA4C4',
            700: '#BDD4EB',
            800: '#DDE9F5',
            900: '#EDF6FC',
            DEFAULT: '#1E293B',
            foreground: '#b9cdf5',
          },
          primary: {
            50: '#072B66',
            100: '#0C3D7B',
            200: '#145799',
            300: '#1D73B7',
            400: '#2894D5',
            500: '#59B9E5',
            600: '#7CD4F2',
            700: '#A9EBFA',
            800: '#D3F7FC',
            900: '#E3EFFB',
            DEFAULT: '#2894D5',
            foreground: '#092a3d',
          },
          secondary: {
            50: '#121666',
            100: '#1D237B',
            200: '#2F3699',
            300: '#444DB7',
            400: '#5E68D5',
            500: '#858EE5',
            600: '#A1A9F2',
            700: '#C2C8FA',
            800: '#E0E4FC',
            900: '#EFF0FB',
            DEFAULT: '#5E68D5',
            foreground: '#04084c',
          },
          success: {
            50: '#084F65',
            100: '#0E6A7A',
            200: '#169098',
            300: '#20B6B1',
            400: '#2DD4BF',
            500: '#5DE5C7',
            600: '#7FF2CE',
            700: '#ABFADA',
            800: '#D5FCE9',
            900: '#EAFBF8',
            DEFAULT: '#2DD4BF',
            foreground: '#0c332d',
          },
          warning: {
            50: '#75460F',
            100: '#8D5C19',
            200: '#AF7A28',
            300: '#D19B3A',
            400: '#F4BF50',
            500: '#F8D47B',
            600: '#FBE196',
            700: '#FDEEB9',
            800: '#FEF7DC',
            900: '#FEF8EC',
            DEFAULT: '#F4BF50',
            foreground: '#3f2c00',
          },
          danger: {
            50: '#781549',
            100: '#912353',
            200: '#B43862',
            300: '#D75172',
            400: '#FB7085',
            500: '#FC9399',
            600: '#FDACA9',
            700: '#FECDC6',
            800: '#FEE8E2',
            900: '#FFF0F2',
            DEFAULT: '#FB7085',
            foreground: '#45010c',
          },
        },
      },
    }),
  ],
  variants: {
    gridTemplateAreas: ['responsive'],
  },
});
