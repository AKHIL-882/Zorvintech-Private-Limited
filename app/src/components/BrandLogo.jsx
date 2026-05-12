import logo from '../assets/images/logo.jpeg'
import logoWithName from '../assets/images/logo_with_company_name.jpeg'

export function BrandLogo({ variant = 'full', className = '' }) {
  const isFull = variant === 'full'

  return (
    <img
      className={`brand-logo brand-logo-${variant} ${className}`.trim()}
      src={isFull ? logoWithName : logo}
      alt={isFull ? 'Zorvintech Private Limited' : 'Zorvintech logo'}
    />
  )
}
