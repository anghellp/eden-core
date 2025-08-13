import { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input(props: InputProps) {
  return <input className="w-full px-4 py-2 border rounded text-black" {...props} />
}
