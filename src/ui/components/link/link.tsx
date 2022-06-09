import { NavLink } from 'react-router-dom'
import { BUTTON_VARIANTS } from '../button/button'
import './link.css'

type LinkProps = {
  href: string
  children: React.ReactNode
  target?: string
  as?: 'route-link' | 'link'
  rel?: string
  variant?: 'button'
  variantLinkButton?: 'primary' | 'secondary'
}

interface LinkVariants {
  [key: string]: string
}

const LINK_VARIANTS: LinkVariants = {
  button: 'link-button',
}

const getLinkVariant = (variant: string | undefined): string => {
  return variant ? LINK_VARIANTS[variant] : ''
}

const getVariantLinkButton = (variant: string | undefined, variantButton: string): string => {
  return variant === 'button' ? BUTTON_VARIANTS[variantButton] : ''
}

const Link = ({ href, variant, variantLinkButton = 'primary', children, as = 'link', ...props }: LinkProps) => {
  return (
    <>
      {as === 'route-link' && (
        <NavLink
          className={`base-link ${getLinkVariant(variant)} ${getVariantLinkButton(variant, variantLinkButton)}`}
          to={href}
          {...props}
        >
          {children}
        </NavLink>
      )}

      {as === 'link' && (
        <a
          className={`base-link ${getLinkVariant(variant)} ${getVariantLinkButton(variant, variantLinkButton)}`}
          href={href}
          {...props}
        >
          {children}
        </a>
      )}
    </>
  )
}

export { Link }
