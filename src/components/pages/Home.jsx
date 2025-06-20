import React, { useState, useEffect } from 'react'
import breast from '../../assets/breast.png'
import chickenThighs from '../../assets/chickenThighs.png';
import wholeChicken from '../../assets/wholeChicken.png';
import chickenWings from '../../assets/chickenWings.png';
import chickenDrumsticks from '../../assets/chickenDrumsticks.png';
import chickenMince from '../../assets/chickenMince.png';
import chickenLiver from '../../assets/chickenLiver.png';
import freshFishRohu from '../../assets/freshFishRohu.png';
import pomfretFish from '../../assets/pomfretFish.png';
import salmonFillet from '../../assets/salmonFillet.png';
import tunaSteak from '../../assets/tunaSteak.png';
import catlaFish from '../../assets/catlaFish.png';
import mackerelFish from '../../assets/mackerelFish.png';
import muttonCurryCut from '../../assets/muttonCurryCut.png';
import muttonChops from '../../assets/muttonChops.png';
import muttonBiryaniCut from '../../assets/muttonBiryaniCut.png';
import muttonKeema from '../../assets/muttonKeema.png';
import muttonRibs from '../../assets/muttonRibs.png';
import goatMeat from '../../assets/goatMeat.png';
import goatCurryCut from '../../assets/goatCurryCut.png';
import duckMeat from '../../assets/duckMeat.png';
import quailMeat from '../../assets/quailMeat.png';
import bg from '../../assets/bg.jpg';
function Home() {
  const [cart, setCart] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [weightInput, setWeightInput] = useState({}) // { [productId]: weightInGrams }
  const [showWeightInput, setShowWeightInput] = useState(null) // productId or null

  // Load cart data from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('taazaCart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Non-veg items data
  const nonVegItems = [
    {
      id: 1,
      name: 'Fresh Chicken Breast',
      price: 180,
      image: breast,
      category: 'chicken',
      description: 'Premium quality chicken breast, perfect for grilling'
    },
    {
      id: 2,
      name: 'Chicken Thighs',
      price: 160,
      image: chickenThighs,
      category: 'chicken',
      description: 'Juicy chicken thighs, great for curries'
    },
    {
      id: 3,
      name: 'Whole Chicken',
      price: 350,
      image: wholeChicken,
      category: 'chicken',
      description: 'Fresh whole chicken, ready to cook'
    },
    {
      id: 4,
      name: 'Chicken Wings',
      price: 140,
      image: chickenWings,
      category: 'chicken',
      description: 'Crispy chicken wings, perfect for snacks'
    },
    {
      id: 5,
      name: 'Chicken Drumsticks',
      price: 150,
      image: chickenDrumsticks,
      category: 'chicken',
      description: 'Tender drumsticks, ideal for roasting'
    },
    {
      id: 6,
      name: 'Chicken Mince',
      price: 170,
      image: chickenMince,
      category: 'chicken',
      description: 'Fresh minced chicken for kebabs and patties'
    },
    {
      id: 7,
      name: 'Chicken Liver',
      price: 120,
      image: chickenLiver,
      category: 'chicken',
      description: 'Nutritious chicken liver, rich in iron'
    },
    {
      id: 8,
      name: 'Fresh Fish - Rohu',
      price: 220,
      image: freshFishRohu,
      category: 'fish',
      description: 'Fresh water fish, perfect for traditional dishes'
    },
    {
      id: 9,
      name: 'Pomfret Fish',
      price: 280,
      image: pomfretFish,
      category: 'fish',
      description: 'Premium sea fish, excellent taste'
    },
    {
      id: 10,
      name: 'Salmon Fillet',
      price: 450,
      image: salmonFillet,
      category: 'fish',
      description: 'Imported salmon, rich in omega-3'
    },
    {
      id: 11,
      name: 'Tuna Steak',
      price: 380,
      image: tunaSteak,
      category: 'fish',
      description: 'Fresh tuna steak, perfect for grilling'
    },
    {
      id: 12,
      name: 'Catla Fish',
      price: 200,
      image: catlaFish,
      category: 'fish',
      description: 'Fresh water fish, great for curries'
    },
    {
      id: 13,
      name: 'Mackerel Fish',
      price: 180,
      image: mackerelFish,
      category: 'fish',
      description: 'Oily fish rich in omega-3 fatty acids'
    },
    {
      id: 14,
      name: 'Mutton Curry Cut',
      price: 380,
      image: muttonCurryCut,
      category: 'mutton',
      description: 'Tender mutton pieces, ideal for curries'
    },
    {
      id: 15,
      name: 'Mutton Chops',
      price: 420,
      image: muttonChops,
      category: 'mutton',
      description: 'Premium mutton chops, perfect for grilling'
    },
    {
      id: 16,
      name: 'Mutton Biryani Cut',
      price: 360,
      image: muttonBiryaniCut,
      category: 'mutton',
      description: 'Special cut for biryani preparation'
    },
    {
      id: 17,
      name: 'Mutton Keema',
      price: 340,
      image: muttonKeema,
      category: 'mutton',
      description: 'Minced mutton for kebabs and curries'
    },
    {
      id: 18,
      name: 'Mutton Ribs',
      price: 400,
      image: muttonRibs,
      category: 'mutton',
      description: 'Tender mutton ribs, great for slow cooking'
    },
    {
      id: 19,
      name: 'Goat Meat',
      price: 350,
      image: goatMeat,
      category: 'goat',
      description: 'Fresh goat meat, lean and healthy'
    },
    {
      id: 20,
      name: 'Goat Curry Cut',
      price: 330,
      image: goatCurryCut,
      category: 'goat',
      description: 'Goat meat pieces, perfect for traditional dishes'
    },
    {
      id: 21,
      name: 'Duck Meat',
      price: 280,
      image: duckMeat,
      category: 'duck',
      description: 'Fresh duck meat, rich and flavorful'
    },
    {
      id: 22,
      name: 'Quail Meat',
      price: 200,
      image: quailMeat,
      category: 'quail',
      description: 'Tender quail meat, delicacy for special occasions'
    }
  ]

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id)
    
    let updatedCart
    if (existingItem) {
      updatedCart = cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    } else {
      updatedCart = [...cart, { ...item, quantity: 1 }]
    }
    
    setCart(updatedCart)
    localStorage.setItem('taazaCart', JSON.stringify(updatedCart))
    
    setSuccessMessage(`${item.name} added to cart successfully!`)
    setShowSuccess(true)
    
    setTimeout(() => {
      setShowSuccess(false)
    }, 2000)
  }

  const containerStyle = {
    padding: '2rem',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    // backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '2rem'
  }

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '0.5rem'
  }

  const subtitleStyle = {
    fontSize: '1.1rem',
    color: '#666',
    marginBottom: '2rem'
  }

  const categoryStyle = {
    marginBottom: '3rem'
  }

  const categoryTitleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: '1rem',
    borderBottom: '2px solid #e74c3c',
    paddingBottom: '0.5rem'
  }

  const itemsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  }

  const itemCardStyle = {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '1rem',
    boxShadow: '0 3px 5px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #e9ecef'
  }

  const itemImageStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '0.75rem'
  }

  const itemNameStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '0.4rem'
  }

  const itemDescriptionStyle = {
    color: '#666',
    fontSize: '0.8rem',
    marginBottom: '0.75rem',
    lineHeight: '1.3'
  }

  const itemPriceStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: '0.75rem'
  }

  const addToCartButtonStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.6rem 1rem',
    borderRadius: '6px',
    fontSize: '0.9rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%'
  }

  const successMessageStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    zIndex: 1000
  }

  const filterContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginBottom: '2rem',
    flexWrap: 'wrap'
  }

  const filterTileStyle = {
    padding: '0.5rem 1rem',
    borderRadius: '25px',
    border: '2px solid #e74c3c',
    backgroundColor: 'white',
    color: '#e74c3c',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease',
    minWidth: '80px',
    textAlign: 'center'
  }

  const activeFilterTileStyle = {
    ...filterTileStyle,
    backgroundColor: '#e74c3c',
    color: 'white'
  }

  // Group items by category
  const groupedItems = {
    chicken: nonVegItems.filter(item => item.category === 'chicken'),
    fish: nonVegItems.filter(item => item.category === 'fish'),
    mutton: nonVegItems.filter(item => item.category === 'mutton'),
    goat: nonVegItems.filter(item => item.category === 'goat'),
    duck: nonVegItems.filter(item => item.category === 'duck'),
    quail: nonVegItems.filter(item => item.category === 'quail')
  }

  // Get filtered items based on active filter
  const getFilteredItems = () => {
    if (activeFilter === 'all') {
      return nonVegItems
    }
    return groupedItems[activeFilter] || []
  }

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }

  // Calculate price based on weight (in grams)
  const calculatePrice = (item, weight) => {
    if (!item.perKgPrice) return item.price
    return Math.round((item.perKgPrice * (weight / 1000)))
  }

  // Handle Add to Cart click: show weight input for this product
  const handleAddToCartClick = (item) => {
    setShowWeightInput(item.id)
    setWeightInput((prev) => ({ ...prev, [item.id]: 500 })) // default 500g
  }

  // Handle weight change
  const handleWeightChange = (itemId, value) => {
    let val = parseInt(value, 10)
    if (isNaN(val) || val < 100) val = 100
    if (val > 5000) val = 5000
    setWeightInput((prev) => ({ ...prev, [itemId]: val }))
  }

  // Confirm add to cart with selected weight
  const handleConfirmAddToCart = (item) => {
    const weight = weightInput[item.id] || 500
    const price = calculatePrice(item, weight)
    const cartItem = {
      ...item,
      weight,
      price,
      quantity: 1
    }
    // Check if same item+weight exists
    const existingItem = cart.find(
      (cartItem) => cartItem.id === item.id && cartItem.weight === weight
    )
    let updatedCart
    if (existingItem) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id && cartItem.weight === weight
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    } else {
      updatedCart = [...cart, cartItem]
    }
    setCart(updatedCart)
    localStorage.setItem('taazaCart', JSON.stringify(updatedCart))
    setSuccessMessage(`${item.name} (${weight}g) added to cart successfully!`)
    setShowSuccess(true)
    setShowWeightInput(null)
    setTimeout(() => {
      setShowSuccess(false)
    }, 2000)
  }

  return (
    <div style={containerStyle}>
      {/* Success Message */}
      {showSuccess && (
        <div style={successMessageStyle}>
          ✅ {successMessage}
        </div>
      )}

      {/* Header */}
      <div style={headerStyle}>
        <h1 style={titleStyle}>Taaza Non-Veg Market</h1>
        <p style={subtitleStyle}>Fresh & Premium Quality Meat Products</p>
      </div>

      {/* Filter Container */}
      <div style={filterContainerStyle}>
        <button 
          style={activeFilter === 'all' ? activeFilterTileStyle : filterTileStyle} 
          onClick={() => handleFilterClick('all')}
          onMouseEnter={(e) => {
            if (activeFilter !== 'all') {
              e.target.style.backgroundColor = '#fdf2f2'
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== 'all') {
              e.target.style.backgroundColor = 'white'
            }
          }}
        >
          All
        </button>
        <button 
          style={activeFilter === 'chicken' ? activeFilterTileStyle : filterTileStyle} 
          onClick={() => handleFilterClick('chicken')}
          onMouseEnter={(e) => {
            if (activeFilter !== 'chicken') {
              e.target.style.backgroundColor = '#fdf2f2'
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== 'chicken') {
              e.target.style.backgroundColor = 'white'
            }
          }}
        >
          🍗 Chicken
        </button>
        <button 
          style={activeFilter === 'fish' ? activeFilterTileStyle : filterTileStyle} 
          onClick={() => handleFilterClick('fish')}
          onMouseEnter={(e) => {
            if (activeFilter !== 'fish') {
              e.target.style.backgroundColor = '#fdf2f2'
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== 'fish') {
              e.target.style.backgroundColor = 'white'
            }
          }}
        >
          🐟 Fish
        </button>
        <button 
          style={activeFilter === 'mutton' ? activeFilterTileStyle : filterTileStyle} 
          onClick={() => handleFilterClick('mutton')}
          onMouseEnter={(e) => {
            if (activeFilter !== 'mutton') {
              e.target.style.backgroundColor = '#fdf2f2'
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== 'mutton') {
              e.target.style.backgroundColor = 'white'
            }
          }}
        >
          🐑 Mutton
        </button>
        <button 
          style={activeFilter === 'goat' ? activeFilterTileStyle : filterTileStyle} 
          onClick={() => handleFilterClick('goat')}
          onMouseEnter={(e) => {
            if (activeFilter !== 'goat') {
              e.target.style.backgroundColor = '#fdf2f2'
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== 'goat') {
              e.target.style.backgroundColor = 'white'
            }
          }}
        >
          🐐 Goat
        </button>
        <button 
          style={activeFilter === 'duck' ? activeFilterTileStyle : filterTileStyle} 
          onClick={() => handleFilterClick('duck')}
          onMouseEnter={(e) => {
            if (activeFilter !== 'duck') {
              e.target.style.backgroundColor = '#fdf2f2'
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== 'duck') {
              e.target.style.backgroundColor = 'white'
            }
          }}
        >
          🦆 Duck
        </button>
        <button 
          style={activeFilter === 'quail' ? activeFilterTileStyle : filterTileStyle} 
          onClick={() => handleFilterClick('quail')}
          onMouseEnter={(e) => {
            if (activeFilter !== 'quail') {
              e.target.style.backgroundColor = '#fdf2f2'
            }
          }}
          onMouseLeave={(e) => {
            if (activeFilter !== 'quail') {
              e.target.style.backgroundColor = 'white'
            }
          }}
        >
          🦅 Quail
        </button>
      </div>

      {/* Display filtered items */}
      {activeFilter === 'all' && (
        <>
          {/* Chicken Section */}
          {groupedItems.chicken.length > 0 && (
            <div style={categoryStyle}>
              <h2 style={categoryTitleStyle}>🍗 Chicken Products</h2>
              <div style={itemsGridStyle}>
                {groupedItems.chicken.map(item => (
                  <div key={item.id} style={itemCardStyle} onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)'
                    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)'
                  }} onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={itemImageStyle}>
                      {typeof item.image === 'string' && item.image.startsWith('data') === false && item.image.length < 10
                        ? item.image
                        : <img src={item.image} alt={item.name} style={{ width: '400px', height: '120px', objectFit: 'cover', borderRadius: '8px', background: '#f8f8f8' }} />
                      }
                    </div>
                    <h3 style={itemNameStyle}>{item.name}</h3>
                    <p style={itemDescriptionStyle}>{item.description}</p>
                    <div style={itemPriceStyle}>₹{item.price}/kg</div>
                    <button 
                      style={addToCartButtonStyle}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
                      onClick={() => handleAddToCartClick(item)}
                    >
                      Add to Cart
                    </button>
                    {showWeightInput === item.id && (
                      <div style={{ marginTop: 8 }}>
                        <input type="number" min={100} max={5000} step={50} value={weightInput[item.id] || 500} onChange={e => handleWeightChange(item.id, e.target.value)} style={{ width: 80, marginRight: 8 }} />
                        g
                        <span style={{ marginLeft: 12, fontWeight: 500 }}>Price: ₹{calculatePrice(item, weightInput[item.id] || 500)}</span>
                        <button style={{ marginLeft: 12, background: '#e74c3c', color: 'white', border: 'none', borderRadius: 6, padding: '0.3rem 0.8rem', cursor: 'pointer' }} onClick={() => handleConfirmAddToCart(item)}>Confirm</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fish Section */}
          {groupedItems.fish.length > 0 && (
            <div style={categoryStyle}>
              <h2 style={categoryTitleStyle}>🐟 Fish Products</h2>
              <div style={itemsGridStyle}>
                {groupedItems.fish.map(item => (
                  <div key={item.id} style={itemCardStyle} onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)'
                    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)'
                  }} onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={itemImageStyle}>
                      {typeof item.image === 'string' && item.image.startsWith('data') === false && item.image.length < 10
                        ? item.image
                        : <img src={item.image} alt={item.name} style={{ width: '400px', height: '120px', objectFit: 'cover', borderRadius: '8px', background: '#f8f8f8' }} />
                      }
                    </div>
                    <h3 style={itemNameStyle}>{item.name}</h3>
                    <p style={itemDescriptionStyle}>{item.description}</p>
                    <div style={itemPriceStyle}>₹{item.price}/kg</div>
                    <button 
                      style={addToCartButtonStyle}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
                      onClick={() => handleAddToCartClick(item)}
                    >
                      Add to Cart
                    </button>
                    {showWeightInput === item.id && (
                      <div style={{ marginTop: 8 }}>
                        <input type="number" min={100} max={5000} step={50} value={weightInput[item.id] || 500} onChange={e => handleWeightChange(item.id, e.target.value)} style={{ width: 80, marginRight: 8 }} />
                        g
                        <span style={{ marginLeft: 12, fontWeight: 500 }}>Price: ₹{calculatePrice(item, weightInput[item.id] || 500)}</span>
                        <button style={{ marginLeft: 12, background: '#e74c3c', color: 'white', border: 'none', borderRadius: 6, padding: '0.3rem 0.8rem', cursor: 'pointer' }} onClick={() => handleConfirmAddToCart(item)}>Confirm</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mutton Section */}
          {groupedItems.mutton.length > 0 && (
            <div style={categoryStyle}>
              <h2 style={categoryTitleStyle}>🐑 Mutton Products</h2>
              <div style={itemsGridStyle}>
                {groupedItems.mutton.map(item => (
                  <div key={item.id} style={itemCardStyle} onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)'
                    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)'
                  }} onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={itemImageStyle}>
                      {typeof item.image === 'string' && item.image.startsWith('data') === false && item.image.length < 10
                        ? item.image
                        : <img src={item.image} alt={item.name} style={{ width: '400px', height: '120px', objectFit: 'cover', borderRadius: '8px', background: '#f8f8f8' }} />
                      }
                    </div>
                    <h3 style={itemNameStyle}>{item.name}</h3>
                    <p style={itemDescriptionStyle}>{item.description}</p>
                    <div style={itemPriceStyle}>₹{item.price}/kg</div>
                    <button 
                      style={addToCartButtonStyle}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
                      onClick={() => handleAddToCartClick(item)}
                    >
                      Add to Cart
                    </button>
                    {showWeightInput === item.id && (
                      <div style={{ marginTop: 8 }}>
                        <input type="number" min={100} max={5000} step={50} value={weightInput[item.id] || 500} onChange={e => handleWeightChange(item.id, e.target.value)} style={{ width: 80, marginRight: 8 }} />
                        g
                        <span style={{ marginLeft: 12, fontWeight: 500 }}>Price: ₹{calculatePrice(item, weightInput[item.id] || 500)}</span>
                        <button style={{ marginLeft: 12, background: '#e74c3c', color: 'white', border: 'none', borderRadius: 6, padding: '0.3rem 0.8rem', cursor: 'pointer' }} onClick={() => handleConfirmAddToCart(item)}>Confirm</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Goat Section */}
          {groupedItems.goat.length > 0 && (
            <div style={categoryStyle}>
              <h2 style={categoryTitleStyle}>🐐 Goat Products</h2>
              <div style={itemsGridStyle}>
                {groupedItems.goat.map(item => (
                  <div key={item.id} style={itemCardStyle} onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)'
                    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)'
                  }} onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={itemImageStyle}>
                      {typeof item.image === 'string' && item.image.startsWith('data') === false && item.image.length < 10
                        ? item.image
                        : <img src={item.image} alt={item.name} style={{ width: '400px', height: '120px', objectFit: 'cover', borderRadius: '8px', background: '#f8f8f8' }} />
                      }
                    </div>
                    <h3 style={itemNameStyle}>{item.name}</h3>
                    <p style={itemDescriptionStyle}>{item.description}</p>
                    <div style={itemPriceStyle}>₹{item.price}/kg</div>
                    <button 
                      style={addToCartButtonStyle}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
                      onClick={() => handleAddToCartClick(item)}
                    >
                      Add to Cart
                    </button>
                    {showWeightInput === item.id && (
                      <div style={{ marginTop: 8 }}>
                        <input type="number" min={100} max={5000} step={50} value={weightInput[item.id] || 500} onChange={e => handleWeightChange(item.id, e.target.value)} style={{ width: 80, marginRight: 8 }} />
                        g
                        <span style={{ marginLeft: 12, fontWeight: 500 }}>Price: ₹{calculatePrice(item, weightInput[item.id] || 500)}</span>
                        <button style={{ marginLeft: 12, background: '#e74c3c', color: 'white', border: 'none', borderRadius: 6, padding: '0.3rem 0.8rem', cursor: 'pointer' }} onClick={() => handleConfirmAddToCart(item)}>Confirm</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Duck Section */}
          {groupedItems.duck.length > 0 && (
            <div style={categoryStyle}>
              <h2 style={categoryTitleStyle}>🦆 Duck Products</h2>
              <div style={itemsGridStyle}>
                {groupedItems.duck.map(item => (
                  <div key={item.id} style={itemCardStyle} onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)'
                    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)'
                  }} onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={itemImageStyle}>
                      {typeof item.image === 'string' && item.image.startsWith('data') === false && item.image.length < 10
                        ? item.image
                        : <img src={item.image} alt={item.name} style={{ width: '400px', height: '120px', objectFit: 'cover', borderRadius: '8px', background: '#f8f8f8' }} />
                      }
                    </div>
                    <h3 style={itemNameStyle}>{item.name}</h3>
                    <p style={itemDescriptionStyle}>{item.description}</p>
                    <div style={itemPriceStyle}>₹{item.price}/kg</div>
                    <button 
                      style={addToCartButtonStyle}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
                      onClick={() => handleAddToCartClick(item)}
                    >
                      Add to Cart
                    </button>
                    {showWeightInput === item.id && (
                      <div style={{ marginTop: 8 }}>
                        <input type="number" min={100} max={5000} step={50} value={weightInput[item.id] || 500} onChange={e => handleWeightChange(item.id, e.target.value)} style={{ width: 80, marginRight: 8 }} />
                        g
                        <span style={{ marginLeft: 12, fontWeight: 500 }}>Price: ₹{calculatePrice(item, weightInput[item.id] || 500)}</span>
                        <button style={{ marginLeft: 12, background: '#e74c3c', color: 'white', border: 'none', borderRadius: 6, padding: '0.3rem 0.8rem', cursor: 'pointer' }} onClick={() => handleConfirmAddToCart(item)}>Confirm</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quail Section */}
          {groupedItems.quail.length > 0 && (
            <div style={categoryStyle}>
              <h2 style={categoryTitleStyle}>🦅 Quail Products</h2>
              <div style={itemsGridStyle}>
                {groupedItems.quail.map(item => (
                  <div key={item.id} style={itemCardStyle} onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px)'
                    e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)'
                  }} onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.1)'
                  }}>
                    <div style={itemImageStyle}>
                      {typeof item.image === 'string' && item.image.startsWith('data') === false && item.image.length < 10
                        ? item.image
                        : <img src={item.image} alt={item.name} style={{ width: '400px', height: '120px', objectFit: 'cover', borderRadius: '8px', background: '#f8f8f8' }} />
                      }
                    </div>
                    <h3 style={itemNameStyle}>{item.name}</h3>
                    <p style={itemDescriptionStyle}>{item.description}</p>
                    <div style={itemPriceStyle}>₹{item.price}/kg</div>
                    <button 
                      style={addToCartButtonStyle}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
                      onClick={() => handleAddToCartClick(item)}
                    >
                      Add to Cart
                    </button>
                    {showWeightInput === item.id && (
                      <div style={{ marginTop: 8 }}>
                        <input type="number" min={100} max={5000} step={50} value={weightInput[item.id] || 500} onChange={e => handleWeightChange(item.id, e.target.value)} style={{ width: 80, marginRight: 8 }} />
                        g
                        <span style={{ marginLeft: 12, fontWeight: 500 }}>Price: ₹{calculatePrice(item, weightInput[item.id] || 500)}</span>
                        <button style={{ marginLeft: 12, background: '#e74c3c', color: 'white', border: 'none', borderRadius: 6, padding: '0.3rem 0.8rem', cursor: 'pointer' }} onClick={() => handleConfirmAddToCart(item)}>Confirm</button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* Display single category when filtered */}
      {activeFilter !== 'all' && groupedItems[activeFilter] && groupedItems[activeFilter].length > 0 && (
        <div style={categoryStyle}>
          <h2 style={categoryTitleStyle}>
            {activeFilter === 'chicken' && '🍗 Chicken Products'}
            {activeFilter === 'fish' && '🐟 Fish Products'}
            {activeFilter === 'mutton' && '🐑 Mutton Products'}
            {activeFilter === 'goat' && '🐐 Goat Products'}
            {activeFilter === 'duck' && '🦆 Duck Products'}
            {activeFilter === 'quail' && '🦅 Quail Products'}
          </h2>
          <div style={itemsGridStyle}>
            {groupedItems[activeFilter].map(item => (
              <div key={item.id} style={itemCardStyle} onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-5px)'
                e.target.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.15)'
              }} onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)'
                e.target.style.boxShadow = '0 3px 5px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={itemImageStyle}>
                  {typeof item.image === 'string' && item.image.startsWith('data') === false && item.image.length < 10
                    ? item.image
                    : <img src={item.image} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px', background: '#f8f8f8' }} />
                  }
                </div>
                <h3 style={itemNameStyle}>{item.name}</h3>
                <p style={itemDescriptionStyle}>{item.description}</p>
                <div style={itemPriceStyle}>₹{item.price}/kg</div>
                <button 
                  style={addToCartButtonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#c0392b'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e74c3c'}
                  onClick={() => handleAddToCartClick(item)}
                >
                  Add to Cart
                </button>
                {showWeightInput === item.id && (
                  <div style={{ marginTop: 8 }}>
                    <input type="number" min={100} max={5000} step={50} value={weightInput[item.id] || 500} onChange={e => handleWeightChange(item.id, e.target.value)} style={{ width: 80, marginRight: 8 }} />
                    g
                    <span style={{ marginLeft: 12, fontWeight: 500 }}>Price: ₹{calculatePrice(item, weightInput[item.id] || 500)}</span>
                    <button style={{ marginLeft: 12, background: '#e74c3c', color: 'white', border: 'none', borderRadius: 6, padding: '0.3rem 0.8rem', cursor: 'pointer' }} onClick={() => handleConfirmAddToCart(item)}>Confirm</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Home