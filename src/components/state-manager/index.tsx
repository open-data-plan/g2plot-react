import React, {
  createContext,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { StateManager } from '@antv/g2plot'

const manager = new StateManager()

export const StateManagerContext = createContext<StateManager>(manager)

const StateManagerProvider = forwardRef<StateManager>(({ children }, ref) => {
  const managerRef = useRef(new StateManager())
  useImperativeHandle(ref, () => managerRef.current, [])
  return (
    <StateManagerContext.Provider value={managerRef.current}>
      {children}
    </StateManagerContext.Provider>
  )
})

export default StateManagerProvider
