import Logo from './logo.svg'

type DefaultLogoProps = {
  className?: string
}

export const DefaultLogo = ({
  className
}: DefaultLogoProps) => {
  return (
    <Logo
      role="img"
      className={className}
    />
  )
}
