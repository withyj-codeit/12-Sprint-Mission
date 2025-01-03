import { ButtonHTMLAttributes, CSSProperties, PropsWithChildren, ReactElement, ReactNode } from "react"

type ButtonProps = {
  children: ReactElement | string
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  borderStyle?: CSSProperties['borderStyle']
  text?: ReactNode
  onClick: () => void;
}

export const Button = ({
  children,
  type = 'button',
  borderStyle = 'solid',
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} style={{ borderStyle }} type={type}>
      {children}
    </button>
  );
}

export const TestChild = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <h1>Test Child</h1>
      {children}
    </div>
  );
}
