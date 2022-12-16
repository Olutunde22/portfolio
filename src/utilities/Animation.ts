export const containerVariantAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeIn' },
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
}

export const toastVariantAnimation = {
  hidden: {
    opacity: 0,
    x: '100%',
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: '100%',
  },
}

export const sideBarVariantAnimation = {
  hidden: {
    opacity: 0,
    x: '-100%',
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: '-100%',
  },
}

export const modalVariantAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: { opacity: 0 },
}
