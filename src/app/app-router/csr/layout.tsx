import { Metadata } from "next"
import { PropsWithChildren } from "react"

export const metadata: Metadata = {
  title: "csr",
  description: "csr layout",
}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <h1>CSR Layout</h1>
      {children}
    </>
  )
}

export default Layout
