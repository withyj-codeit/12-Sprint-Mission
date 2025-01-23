import { PropsWithChildren, useEffect, useState } from "react"
import { createPortal } from "react-dom"

export const Portal = ({ children }: PropsWithChildren) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setMountNode(document.body)
  }, [])

  return mountNode ? createPortal(children, mountNode) : null
}
