import ReactDOM from 'react-dom'
import { useEffect } from 'react'
import styles from './modal.module.css'
import { motion, AnimatePresence } from 'framer-motion'


const modalAnimation = {
  start: {
      opacity: 0,
  },
  show: {
  opacity: 1,
  transition: {
    when: 'beforeChildren',
    },
   },
   end: {
  opacity: 0,
  transition: {
    when: 'afterChildren',
    },
   },
  }

const modalInnerVariants = {
  start: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
  end: {
    y: 200,
    opacity: 0,
  },
}  
  

function Modal({ children, state, ...rest }) {
  return ReactDOM.createPortal(
    <AnimatePresence>
    {state && <ModalInner {...rest}>{children}</ModalInner>}
    </AnimatePresence>,
    document.getElementById('modal-root'),
  )
}

export default Modal

function ModalInner({ children, onClose }) {
  const escHandler = (e) => {
    if (e.code === 'Escape') {
      onClose()
    }
  }

  

  useEffect(() => {
    window.document.addEventListener('keydown', escHandler)

    return () => {
      window.document.removeEventListener('keydown', escHandler)
    }
  }, [])

  const closeClickHandler = () => {
    onClose()
  }

  
  const innerClickHandler = (e) => {
    e.stopPropagation()
  }

  return (
    <motion.div variants={modalAnimation} initial='start' animate='show' exit='end' onClick={closeClickHandler} className={styles.wrapper}>
      <motion.div variants={modalInnerVariants} onClick={innerClickHandler} className={styles.inner}>
      <svg onClick={closeClickHandler} role="button" className={`bi bi-x-lg ${styles.icon}`}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
        {children}
      </motion.div>
    </motion.div>
  )
}
