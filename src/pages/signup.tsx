import { SignupBottom } from "@/auth/feature-signup-bottom"
import { SignupForm } from "@/auth/feature-signup-form"
import { SignupLayout } from "@/auth/ui-layout"
import { DefaultLogo } from "@/shared/design-system/logo/DefaultLogo/DefaultLogo"
import Link from "next/link"
import { useEffect } from "react"

const SignupPage = () => {
  const isLoggedIn = false

  useEffect(() => {
    if (isLoggedIn) {
      alert('이미 로그인되어 있습니다.')
    }
  }, [isLoggedIn])

  return (
    <SignupLayout
      header={
        <Link href="/">
          <DefaultLogo />
        </Link>
      }
      form={<SignupForm />}
      bottom={<SignupBottom />}
    />
  )
}

export default SignupPage
