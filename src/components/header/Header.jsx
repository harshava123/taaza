import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [cartCount, setCartCount] = useState(0)
  const navigate = useNavigate()

  // Load cart data from localStorage and update count
  useEffect(() => {
    const updateCartCount = () => {
      const savedCart = localStorage.getItem('taazaCart')
      if (savedCart) {
        const cartItems = JSON.parse(savedCart)
        const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0)
        setCartCount(totalCount)
      } else {
        setCartCount(0)
      }
    }

    // Update count on mount
    updateCartCount()

    // Listen for storage changes (when cart is updated from other components)
    const handleStorageChange = () => {
      updateCartCount()
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Also check for changes periodically (for same-tab updates)
    const interval = setInterval(updateCartCount, 1000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  const handleCartClick = () => {
    navigate('/cart')
  }

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid #e9ecef',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  }

  const logoStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#e74c3c',
    textDecoration: 'none',
    transition: 'color 0.3s ease'
  }

  const contactStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#666',
    fontSize: '0.9rem',
    backgroundColor: '#f8f9fa',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    border: '1px solid #e9ecef'
  }

  const emailStyle = {
    color: '#3498db',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s ease'
  }

  const cartContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: 'pointer',
    padding: '0.75rem 1.25rem',
    borderRadius: '12px',
    backgroundColor: '#f8f9fa',
    transition: 'all 0.3s ease',
    border: '1px solid #e9ecef',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  }

  const cartIconStyle = {
    fontSize: '1.4rem',
    color: '#e74c3c'
  }

  const cartTextStyle = {
    fontSize: '1rem',
    fontWeight: '600',
    color: '#2c3e50'
  }

  const cartCountStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(231, 76, 60, 0.3)',
    animation: cartCount > 0 ? 'pulse 0.6s ease-in-out' : 'none'
  }

  const pulseAnimation = `
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }
  `

  return (
    <>
      <style>{pulseAnimation}</style>
      <header style={headerStyle}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/" style={logoStyle} onMouseEnter={(e) => {
            e.target.style.color = '#c0392b'
          }} onMouseLeave={(e) => {
            e.target.style.color = '#e74c3c'
          }}>
            Taaza
          </a>
          <div style={contactStyle}>
            <span>📧</span>
            <span>Contact us:</span>
            <a href="mailto:info@taaza.com" style={emailStyle} onMouseEnter={(e) => {
              e.target.style.color = '#2980b9'
            }} onMouseLeave={(e) => {
              e.target.style.color = '#3498db'
            }}>
              info@taaza.com
            </a>
          </div>
        </div>
        
        <div style={cartContainerStyle} 
          onClick={handleCartClick}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#e9ecef'
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)'
          }} onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#f8f9fa'
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)'
          }}>
          <span style={cartIconStyle}>🛒</span>
          <span style={cartTextStyle}>My Cart</span>
          <div style={cartCountStyle}>{cartCount}</div>
        </div>
      </header>
    </>
  )
}

export default Header