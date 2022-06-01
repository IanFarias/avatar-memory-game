import './title.css'

type TitleProps = {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Title = ({ children, className = '', as = 'h1', ...props }: TitleProps) => {
  switch (as) {
    case 'h2':
      return (
        <h2 className={`page-title ${className}`} {...props}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h2 className={`page-title ${className}`} {...props}>
          {children}
        </h2>
      )
    case 'h4':
      return (
        <h2 className={`page-title ${className}`} {...props}>
          {children}
        </h2>
      )
    case 'h5':
      return (
        <h2 className={`page-title ${className}`} {...props}>
          {children}
        </h2>
      )
    case 'h6':
      return (
        <h2 className={`page-title ${className}`} {...props}>
          {children}
        </h2>
      )
    default:
      return (
        <h1 className={`page-title ${className}`} {...props}>
          {children}
        </h1>
      )
  }
}

export { Title }
