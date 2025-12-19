import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useI18n } from '../i18n'

function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const { t, toggle, lang } = useI18n()

  const isActive = (path) => location.pathname === path
  const handleNavClick = () => setIsOpen(false)

  const DesktopNavLink = ({ to, labelKey, fallback }) => (
    <Link
      to={to}
      onClick={handleNavClick}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive(to) ? 'text-primary-red bg-red-50' : 'text-gray-700 hover:text-primary-red hover:bg-gray-50'
      }`}
    >
      {t(labelKey, fallback)}
    </Link>
  )

  const MobileNavLink = ({ to, labelKey, fallback }) => (
    <Link
      to={to}
      onClick={handleNavClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
    >
      {t(labelKey, fallback)}
    </Link>
  )

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3" onClick={handleNavClick}>
            <img src="/logo.svg?v=2" alt="Jazser Logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-bold text-gray-900">Jazser 杰仕丝带</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <DesktopNavLink to="/" labelKey="nav.intro" fallback="公司介绍" />
            <DesktopNavLink to="/products" labelKey="nav.products" fallback="零售丝带" />
            <DesktopNavLink to="/custom" labelKey="nav.custom" fallback="订制丝带" />
            <DesktopNavLink to="/swimwear" labelKey="nav.swimwear" fallback="泳衣配饰" />
            <DesktopNavLink to="/underwear" labelKey="nav.underwear" fallback="内衣配饰" />
            <button
              className="px-3 py-2 rounded-md bg-primary-red text-white hover:bg-primary-darkRed transition-colors"
              onClick={handleNavClick}
            >
              {t('nav.contact', '在线咨询')}
            </button>
            <button
              className="text-sm text-gray-700 hover:text-primary-red px-3 py-2 border border-gray-200 rounded-md"
              onClick={toggle}
              title={t('nav.langLabel', '切换语言')}
            >
              {t('nav.lang', lang === 'zh' ? '中文' : 'EN')}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <MobileNavLink to="/" labelKey="nav.intro" fallback="公司介绍" />
            <MobileNavLink to="/products" labelKey="nav.products" fallback="零售丝带" />
            <MobileNavLink to="/custom" labelKey="nav.custom" fallback="订制丝带" />
            <MobileNavLink to="/swimwear" labelKey="nav.swimwear" fallback="泳衣配饰" />
            <MobileNavLink to="/underwear" labelKey="nav.underwear" fallback="内衣配饰" />
            <button
              className="w-full bg-primary-red text-white px-6 py-2 rounded-md hover:bg-primary-darkRed mt-4"
              onClick={handleNavClick}
            >
              {t('nav.contact', '在线咨询')}
            </button>
            <button
              className="w-full text-sm text-gray-700 border border-gray-200 rounded-md px-3 py-2 mt-2"
              onClick={() => {
                toggle()
                setIsOpen(false)
              }}
              title={t('nav.langLabel', '切换语言')}
            >
              {t('nav.lang', lang === 'zh' ? '中文' : 'EN')}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar



