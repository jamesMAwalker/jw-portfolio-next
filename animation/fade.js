import { smooth, phases } from './transition'


const fsd = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: '-20vh',
  },
}

export const fadeSlideDown = {
  variants: fsd,
  ...phases,
  transition: smooth(1),
}

const fsu = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: '40vh',
  },
}

export const fadeSlideUp = {
  variants: fsu,
  transition: smooth(1),
}

const fsus = {
  visible: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: '2vh',
  },
}

export const fadeSlideUpShort = {
  variants: fsus,
}

const fsr = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: '-3vw',
  },
}

export const fadeSlideRight = {
  variants: fsr,
}

const fsl = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: {
    opacity: 0,
    x: '3vw',
  },
}

export const fadeSlideLeft = {
  variants: fsl,
}

const bfi = {
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    color: "var(--text-color)"
  },
  hidden: {
    opacity: 0,
    filter: 'blur(3px)',
    color: "var(--primary-mute)"
  },
}

export const blurFadeIn = {
  variants: bfi,
}
