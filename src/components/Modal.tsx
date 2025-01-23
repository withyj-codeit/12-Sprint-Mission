import { Portal } from "@/components/Portal"
import { PropsWithChildren } from "react"

type ModalProps = {
  open: boolean
  onCloseClick: () => void
}

export const Modal = ({ open, onCloseClick, children }: PropsWithChildren<ModalProps>) => {

  if (!open) {
    return null
  }

  return (
    <Portal>
      <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", paddingTop: 100 }}>
        <button style={{ fontSize: "32px" }} onClick={onCloseClick}>X</button>
        {children}
      </div>
    </Portal>
  )
}
