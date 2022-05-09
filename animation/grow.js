import { smooth, scrollPhases } from './transition'



const gr = {
  visible: {
    scaleX: 1,
  },
  hidden: {
    scaleX: 0,
  },
}

export const growRight = {
  variants: gr,
  transition: 'var(--smooth-framer)'
}
