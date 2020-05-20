import React, {
  createContext,
  useRef,
  forwardRef,
  useImperativeHandle,
  Ref,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefExoticComponent,
  ReactNode,
} from 'react'
import { StateManager } from '@antv/g2plot'

const manager = new StateManager()

export const StateManagerContext = createContext<StateManager>(manager)

export interface StateManagerProviderProps {
  children?: ReactNode
}

const StateManagerProvider: ForwardRefExoticComponent<
  PropsWithoutRef<StateManagerProviderProps> & RefAttributes<StateManager>
> = forwardRef(({ children }, ref?: Ref<StateManager>) => {
  const managerRef = useRef(new StateManager())
  useImperativeHandle(ref, () => managerRef.current, [])
  return (
    <StateManagerContext.Provider value={managerRef.current}>
      {children}
    </StateManagerContext.Provider>
  )
})

export default StateManagerProvider
