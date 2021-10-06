import { useRef, useEffect } from "react"
export const useDidUpdateEffect = function useDidUpdateEffect(fn, inputs) {
  const didMountRef = useRef(false)
  useEffect(() => {
    if (didMountRef.current) fn()
    else didMountRef.current = true
  }, inputs)
}
