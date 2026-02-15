import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const SiteShell = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen overflow-x-hidden ${className}`.trim()}>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default SiteShell
