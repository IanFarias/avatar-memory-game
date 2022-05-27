import './button.css'

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

const getButtonVariant = (variant: string | undefined): string => {
  return variant || ''
}

const Button = ({ variant, children, onClick, isDisabled, ...props }: ButtonProps) => {
  return (
    <button className={`base-button ${getButtonVariant(variant)}`} onClick={onClick} disabled={isDisabled} {...props}>
      {children}
    </button>
  )
}

export { Button }
