import './button.css'
import './variants/button-primary.css'
import './variants/button-start.css'
import './variants/button-secondary.css'

type ButtonProps = {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'start'
  icon?: string
  size?: string
  variantColor?: string
  isDisabled?: boolean
  isLoading?: boolean
  onClick: () => void
  id?: string
}

interface ButtonVariants {
  [key: string]: string
}

const BUTTON_VARIANTS: ButtonVariants = {
  primary: 'button-primary',
  secondary: 'button-secondary',
  start: 'button-start',
}

const getButtonVariant = (variant: string | undefined): string => {
  return variant ? BUTTON_VARIANTS[variant] : ''
}

const Button = ({ variant, children, onClick, isDisabled, ...props }: ButtonProps) => {
  return (
    <button className={`base-button ${getButtonVariant(variant)}`} onClick={onClick} disabled={isDisabled} {...props}>
      {children}
    </button>
  )
}

export { Button }
