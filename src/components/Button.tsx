import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    <button
      className="px-4 py-2 rounded bg-black text-white hover:bg-gray-800 transition-colors"
      {...props}
    />
  )
}
