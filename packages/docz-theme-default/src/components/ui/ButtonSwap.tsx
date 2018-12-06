import * as React from 'react'
import { jsx } from '@emotion/core'
import { useState, SFC } from 'react'
import { Button as BaseButton } from './Button'

export type AnimatedButtonProps = React.ButtonHTMLAttributes<any> & {
  as?: React.ComponentType<React.ButtonHTMLAttributes<any>>
  swap?: React.ReactNode
}

export const ButtonSwap: SFC<AnimatedButtonProps> = ({
  as: Button = BaseButton,
  onClick,
  swap,
  children,
  ...props
}) => {
  const Btn: any = Button
  const hasSwap = Boolean(swap)
  const [on, setOn] = useState(false)
  const toggle = () => setOn(s => !s)

  const handleClick = (ev: any) => {
    hasSwap && toggle()
    onClick && onClick(ev)
    hasSwap && setTimeout(toggle, 500)
  }

  return (
    <Btn onClick={handleClick} {...props}>
      {on ? swap : children}
    </Btn>
  )
}
