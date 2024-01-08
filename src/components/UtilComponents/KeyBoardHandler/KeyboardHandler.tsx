import { setIsOptionKeyPressed } from '@/src/store/keyboard'
import { ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'

type Props = {
  children: JSX.Element
}

function KeyboardEventHandler(props: Props) {
  const dispatch = useDispatch()

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.altKey || event.code === 'AltLeft' || event.code === 'AltRight') {
      event.preventDefault()
      dispatch(setIsOptionKeyPressed({ optionKeyPressed: true }))
    }
  }

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.altKey || event.code === 'AltLeft' || event.code === 'AltRight') {
      dispatch(setIsOptionKeyPressed({ optionKeyPressed: false }))
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  return props.children
}

export default KeyboardEventHandler
