
type ParamA = {
  a: number
}

type ParamB = {
  b: string
}

type Props = {
  param: ParamA | ParamB
}

export const Button = ({ param }: Props) => {
  if ('a' in param) {
    return <button>Click me with number { param.a }</button>
  }

  if ('b' in param) {
    return <button>Click me with string { param.b }</button>
  }

  return <button>Click me</button>
}
