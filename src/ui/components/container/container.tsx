import './container.css'

type Props = {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className = '' }: Props) => {
  return <main className={`main-container ${className}`}>{children}</main>
}

export { Container }
