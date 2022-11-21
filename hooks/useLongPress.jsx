import { useRef, useState } from 'react';

export const useLongPress = ({ lpAction } = {}) => {
  const [actionState, setActionState] = useState('touch')
  const timerRef = useRef(null)
  const isLongPress = useRef(false)

  const startPressTimer = () => {
    isLongPress.current = false
    timerRef.current = setTimeout(() => {
      isLongPress.current = true
      setActionState('longpress')
    }, 500)
  }

  const handleTouchAction = () => {
    if (isLongPress.current) {
      console.log('Is long press - not continuing.')

      if (typeof lpAction === 'function') {
        lpAction()
      }
      return
    }
    console.log(
      'not a long press! - conitinuing with action.'
    )
    setActionState('touch')
    
  }

  const handleOnTouchStart = () => {
    startPressTimer()
  }

  const handleOnTouchEnd = () => {
    if (actionState === 'longpress') {
      return
    }
    clearTimeout(timerRef.current)
  }

  return {
    actionState,
    handlers: {
      onTouchStart: handleOnTouchStart,
      onTouchEnd: handleOnTouchEnd,
      onClick: handleTouchAction,
    }
  }
}
