import { smooth, phases } from './transition'

const su = {
  visible: {
    y: 0,
  },
  hidden: {
    y: '40vh',
  },
}

export const slideUp = {
  variants: su,
  ...phases,
  transition: smooth(1),
}

