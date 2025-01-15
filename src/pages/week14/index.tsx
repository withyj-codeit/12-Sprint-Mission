/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/Button'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'

type CurrentState = {
  current: number
}

const Page = () => {
  const [state, setState] = useState<CurrentState | null>(null)
  const [value, setValue] = useState<string | number>(0)

  // 함수의 리턴 타입 추론, 타입 지정
  const add = (a: number, b: number) => a + b
  const sub = (a: number, b: number): number => a - b
  const addedResult = add(1, 2)

  // Promise를 리턴하는 함수의 타입 지정
  const getTodo = async (id: number) => {
    const response = await axios.get<{ id: number, content: string }[]>(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return response.data
  }
  
  // any 와 unknown 의 차이점
  let anyValue: any
  let unknownValue: unknown
  let strValue: string = 'hi'

  anyValue = 123
  anyValue = 345

  unknownValue = 123
  unknownValue = 'hi'
  unknownValue = { a: 1 }

  strValue = anyValue

  if (typeof unknownValue === 'string') {
    strValue = unknownValue
  }

  useEffect(() => {
    (async () => {
      const response = await getTodo(1)
      console.log(response)
    })()

    const root = document.getElementById('__next') as HTMLDivElement
    root.style.backgroundColor = 'green'

    setState({ current: 777 })

    if (typeof value === 'string') {
      console.log('string', value)
      setValue(0)
    }

    console.log(anyValue.a)
    console.log(unknownValue)
    console.log(strValue)
  }, [])

  if (!state) {
    return <div>Loading...</div>
  }

  return (
    <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
      <h1>Week 14</h1>
      <h2>{state.current} {addedResult}</h2>
      <Button param={{ b: 'abc' }} />
      <div style={ { width: '100%', height: '100px', position: 'relative' } }>
        <Image src="/logo.png" alt="sprint 로고" fill />
      </div>
    </div>
  )
}

export default Page
