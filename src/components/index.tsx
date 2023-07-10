import { w } from 'windstitch';

export const Button = w.button(
  `
  hover:shadow-outline text-center
  font-medium focus:outline-none
  focus:ring-4 ring-opacity-30
`,
  {
    variants: {
      color: {
        gray: `
          bg-gray-300
          hover:bg-gray-400
          dark:bg-gray-700
          dark:hover:bg-gray-600
          text-gray-900
          dark:text-white
          ring-gray-400
        `,
        violet: `
          bg-violet-500
          hover:bg-violet-400
          dark:bg-violet-700
          dark:hover:bg-violet-600
          text-white
          dark:text-white
          ring-violet-400
        `,
        blue: `
          bg-blue-500
          hover: bg-blue-400
          dark:bg-blue-700
          dark:hover:bg-blue-600
          text-gray-400
          ring-blue-400
        `
      },
      size: {
        xs: 'px-1.5 py-0.5 rounded text-xs',
        sm: 'px-2 py-1 rounded-md text-sm',
        base: 'px-3 py-2 rounded-md text-base',
        md: 'px-4 py-3 rounded-md text-lg',
        lg: 'px-5 py-4 rounded-lg text-lg',
        xl: 'px-6 py-5 rounded-lg text-xl',
      },
    },
    defaultVariants: {
      size: 'base',
    },
  }
);

export const Title = w.p(``, {
  variants: {
    size: {
      base: 'text-base',
      lg: 'text-4xl',
      xl: 'text-7xl',
    },
    weight: {
      normal: 'font-normal',
      bold: 'font-bold',
    },
    color: {
      white: 'text-gray-50',
      gray: 'text-gray-400'
    },
    theme: {
      h1: '',
      base: '',
    },
  },
  defaultVariants: {
    variant: 'base',
    weight: 'normal',
    size: 'base',
  },
  compoundVariants: [
    {
      theme: 'h1',
      defaultTo: {
        size: 'xl',
        weight: 'bold',
        color: 'white'
      },
    },
    {
      theme: 'base',
      defaultTo: {
        size: 'base',
        weight: 'normal',
        color: 'gray'
      },
    },
  ],
});