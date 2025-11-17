import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [showContactForm, setShowContactForm] = useState(false);
  const [filters, setFilters] = useState({
    searchLocation: '',
    category: 'all',
    propertyType: 'all',
    priceRange: 'all'
  });
  const propertyGridRef = useRef(null);
  const navigate = useNavigate();

  // ⭐ Scroll function for Left/Right buttons
  const scrollProperties = (direction) => {
    if (!propertyGridRef.current) return;

    const scrollAmount = 350;
    propertyGridRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    let storedHouses = JSON.parse(localStorage.getItem('houses') || '[]');
    
    if (storedHouses.length === 0) {
      const sampleHouses = [
        {
          id: '1',
          title: 'Modern Apartment - Bandra',
          price: 18000,
          location: 'Mumbai',
          images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1598928506312-7a4f8f6e6a5a?auto=format&fit=crop&w=1200&q=80'
          ],
          bedrooms: 2,
          bathrooms: 2,
          area: 1200,
          type: 'apartment',
          category: 'rent',
          available: true,
          description: 'Beautiful modern apartment in the heart of Mumbai with balcony and sea view.',
          contact: '+91-9876543210',
          parking: 1,
          furnished: 'Fully Furnished',
          floor: 5,
          totalFloors: 10,
          yearBuilt: 2020,
          facing: 'east',
        },
        {
          id: '2',
          title: 'Luxury Villa with Pool',
          price: 45000,
          location: 'Bangalore',
          images: [
            'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80'
          ],
          bedrooms: 4,
          bathrooms: 3,
          area: 3500,
          type: 'villa',
          category: 'lease',
          available: true,
          description: 'Spacious villa with private pool, garden and covered parking.',
          contact: '+91-9876543211',
          parking: 3,
          furnished: 'Semi Furnished',
          floor: 0,
          totalFloors: 2,
          yearBuilt: 2018,
          facing: 'north',
        },
        {
          id: '3',
          title: 'Cozy Independent House',
          price: 28000,
          location: 'Hyderabad',
          images: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
          ],
          bedrooms: 3,
          bathrooms: 2,
          area: 2000,
          type: 'independent house',
          category: 'rent',
          available: true,
          description: 'Comfortable independent house in a peaceful neighborhood near parks and schools.',
          contact: '+91-9876543212',
          parking: 2,
          furnished: 'Unfurnished',
          floor: 0,
          totalFloors: 1,
          yearBuilt: 2015,
          facing: 'west',
        },
        {
          id: '4',
          title: 'City Center Studio',
          price: 9000,
          location: 'Pune',
          images: [
            'https://images.unsplash.com/photo-1505691723518-36a22c9b09c0?auto=format&fit=crop&w=1200&q=80'
          ],
          bedrooms: 1,
          bathrooms: 1,
          area: 450,
          type: 'studio',
          category: 'rent',
          available: true,
          description: 'Affordable studio in the city center—ideal for students and professionals.',
          contact: '+91-9876543213',
          parking: 0,
          furnished: 'Furnished',
          yearBuilt: 2012,
          facing: 'south',
        },
        {
          id: '5',
          title: 'Modern 2BHK',
          price: 15000,
          location: 'Chennai',
          images: [
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
          ],
          bedrooms: 2,
          bathrooms: 2,
          area: 1000,
          type: 'apartment',
          category: 'rent',
          available: true,
          description: 'Clean, bright 2BHK with balcony and easy metro access.',
          contact: '+91-9876543214',
          parking: 1,
          furnished: 'Minimal Furnished',
          yearBuilt: 2019,
          facing: 'east',
        },
        {
          id: '6',
          title: 'Suburban Family Home',
          price: 35000,
          location: 'Noida',
          images: [
            'https://images.unsplash.com/photo-1560448070-c1f7ae6c9f1b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
          ],
          bedrooms: 4,
          bathrooms: 3,
          area: 2800,
          type: 'house',
          category: 'rent',
          available: true,
          description: 'Ideal family home with large backyard and nearby schools.',
          contact: '+91-9876543215',
          parking: 2,
          furnished: 'Semi Furnished',
          yearBuilt: 2016,
          facing: 'north',
        },
        {
          id: '7',
          title: 'Premium Penthouse',
          price: 95000,
          location: 'Mumbai',
          images: [
            'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505691723518-36a22c9b09c0?auto=format&fit=crop&w=1200&q=80'
          ],
          bedrooms: 3,
          bathrooms: 3,
          area: 1800,
          type: 'penthouse',
          category: 'sale',
          available: true,
          description: 'Skyline views, rooftop access, modern finishes throughout.',
          contact: '+91-9876543216',
          parking: 2,
          furnished: 'Fully Furnished',
          yearBuilt: 2021,
          facing: 'west',
        },
        {
          id: '8',
          title: 'Budget PG / Room',
          price: 6000,
          location: 'Kochi',
          images: [
            'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
          ],
          bedrooms: 1,
          bathrooms: 1,
          area: 180,
          type: 'pg / rooms',
          category: 'rent',
          available: true,
          description: 'Shared accommodation with utilities included.',
          contact: '+91-9876543217',
          parking: 0,
          furnished: 'Shared Furnishing',
          yearBuilt: 2010,
          facing: 'east',
        },
        {
          id: '9',
          title: '5 BHK Bungalow - Premium Location',
          price: 60000,
          location: 'Delhi',
          images: [
            'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1505691723518-36a22c9b09c0?auto=format&fit=crop&w=1200&q=80'
          ],
          bedrooms: 5,
          bathrooms: 5,
          area: 4000,
          type: 'house',
          category: 'rent',
          available: true,
          description: 'Spacious bungalow in premium location with lush garden and modern amenities.',
          contact: '+91-9876543218',
          parking: 4,
          furnished: 'Unfurnished',
          floor: 0,
          totalFloors: 1,
          yearBuilt: 2008,
          facing: 'south',
        },
        {
          id: '10',
          title: '1 BHK Cozy Room - Student Friendly',
          price: 6500,
          location: 'Bangalore',
          images: [
            'https://images.unsplash.com/photo-1598928506312-7a4f8f6e6a5a?auto=format&fit=crop&w=1200&q=80'
          ],
          bedrooms: 1,
          bathrooms: 1,
          area: 450,
          type: 'apartment',
          category: 'rent',
          available: true,
          description: 'Affordable and cozy 1BHK perfect for students and working professionals.',
          contact: '+91-9876543219',
          parking: 0,
          furnished: 'Furnished',
          floor: 2,
          totalFloors: 4,
          yearBuilt: 2016,
          facing: 'east',
        }
      ];
      
      localStorage.setItem('houses', JSON.stringify(sampleHouses));
      storedHouses = sampleHouses;
    }
    
    setHouses(storedHouses);
    setFilteredHouses(storedHouses);
  }, []);

  useEffect(() => {
    let filtered = [...houses];

    if (filters.category !== 'all') {
      filtered = filtered.filter(house => house.category === filters.category);
    }

    if (filters.propertyType !== 'all') {
      filtered = filtered.filter(house => house.type === filters.propertyType.toLowerCase());
    }

    if (filters.searchLocation) {
      filtered = filtered.filter(house =>
        house.location.toLowerCase().includes(filters.searchLocation.toLowerCase())
      );
    }

    if (filters.priceRange !== 'all') {
      filtered = filtered.filter(house => {
        const price = house.price;
        switch(filters.priceRange) {
          case '0-10000': return price >= 0 && price <= 10000;
          case '10000-20000': return price > 10000 && price <= 20000;
          case '20000-30000': return price > 20000 && price <= 30000;
          case '30000-50000': return price > 30000 && price <= 50000;
          case '50000+': return price > 50000;
          case 'sale': return price >= 5000000;
          default: return true;
        }
      });
    }

    setFilteredHouses(filtered);
  }, [houses, filters]);

  return (
    <div className="home-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-left">
          <div className="navbar-brand">
            <h1 className="brand-name">Elite Nest</h1>
          </div>
          <div className="navbar-links">
            <Link to="/home" className="nav-link">Home</Link>
            <a href="#properties" className="nav-link">Properties</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#about" className="nav-link">About Us</a>
          </div>
        </div>

        <div className="nav-right">
          <button className="btn-sell-property">+ Sell Property</button>
          <Link to="/login" className="btn-login-nav">Login</Link>
          <Link to="/register" className="btn-register">Sign Up</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Find Your Perfect Home</h1>
          <p>Rent beautiful houses, apartments and rooms at the best prices.</p>

          {/* SEARCH BAR */}
          <div className="search-box">
            <input 
              type="text"
              placeholder="Location"
              value={filters.searchLocation}
              onChange={(e) => setFilters({...filters, searchLocation: e.target.value})}
            />
            <select 
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value})}
            >
              <option value="all">All Categories</option>
              <option value="rent">Rent</option>
              <option value="lease">Lease</option>
              <option value="sale">Sale</option>
            </select>
            <select 
              value={filters.propertyType}
              onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
            >
              <option value="all">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="independent house">Independent House</option>
              <option value="pg / rooms">PG / Rooms</option>
            </select>
            <select 
              value={filters.priceRange}
              onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
            >
              <option value="all">Price Range</option>
              <option value="0-10000">₹0 - ₹10,000</option>
              <option value="10000-20000">₹10,000 - ₹20,000</option>
              <option value="20000-30000">₹20,000 - ₹30,000</option>
              <option value="30000-50000">₹30,000 - ₹50,000</option>
              <option value="50000+">Above ₹50,000</option>
              <option value="sale">For Sale</option>
            </select>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="featured-section" id="properties">
        <h2>Featured Properties</h2>

        {filteredHouses.length === 0 ? (
          <p style={{textAlign: 'center', padding: '2rem'}}>No properties found.</p>
        ) : (
          <div className="property-scroll-wrapper">
            <button
              className="scroll-btn left"
              onClick={() => scrollProperties('left')}
              aria-label="Scroll left"
            >
              ‹
            </button>

            <div className="property-grid" id="propertyGrid" ref={propertyGridRef}>
              {filteredHouses.map((house) => (
                <div key={house.id} className="property-card">
                  <div style={{position: 'relative', background: '#e5e7eb'}}>
                    <img 
                      src={(house.images && house.images[0]) || house.image} 
                      alt={house.title}
                      loading="lazy"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/320x190?text=' + encodeURIComponent(house.title); }}
                      style={{display: 'block', width: '100%', height: '190px', objectFit: 'cover'}}
                    />

                    <span style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      backgroundColor: house.category === 'sale' ? '#dc3545' :
                                       house.category === 'lease' ? '#ffc107' : '#28a745',
                      color: '#fff',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: 'bold'
                    }}>
                      {house.category}
                    </span>
                  </div>

                  <div style={{padding: '1rem', display: 'flex', flexDirection: 'column', gap: '8px', flex: '1 1 auto'}}>
                    <h3 style={{margin: 0}}>{house.title}</h3>
                    <p style={{margin: 0}}><strong>₹{house.price.toLocaleString('en-IN')}</strong> • 📍 {house.location}</p>

                    <div style={{display: 'flex', gap: '12px', margin: '6px 0', flexWrap: 'wrap'}}>
                      <span style={{fontSize: '0.9rem'}}>🛏️ {house.bedrooms} BHK</span>
                      <span style={{fontSize: '0.9rem'}}>🚿 {house.bathrooms} Bath</span>
                      <span style={{fontSize: '0.9rem'}}>📐 {house.area} sqft</span>
                      <span style={{fontSize: '0.9rem'}}>🚗 {house.parking} Parking</span>
                      <span style={{fontSize: '0.9rem'}}>{house.furnished}</span>
                    </div>

                    <p style={{margin: 0, color: '#374151', fontSize: '0.95rem'}}>{house.description}</p>

                    {house.images && house.images.length > 1 && (
                      <div className="thumbs">
                        {house.images.slice(0,3).map((src, idx) => (
                          <img key={idx} src={src} alt={`${house.title}-thumb-${idx}`} />
                        ))}
                      </div>
                    )}

                    <div style={{marginTop: 'auto'}}>
                      <button onClick={() => navigate(`/house/${house.id}`)}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="scroll-btn right"
              onClick={() => scrollProperties('right')}
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        )}
      </section>

      {/* ABOUT US SECTION */}
      <section className="about-section" id="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Elite Nest is a leading online real estate platform dedicated to helping people find their perfect homes. 
            With over 10,000+ properties listed across major cities, we connect property owners with renters and buyers 
            looking for quality living spaces.
          </p>
          <p>
            Our mission is to make the property search process simple, transparent, and hassle-free. We provide detailed 
            information about each property, verified owner contacts, and a user-friendly platform to facilitate smooth transactions.
          </p>
          <div className="about-stats">
            <div className="stat">
              <h3>10,000+</h3>
              <p>Properties Listed</p>
            </div>
            <div className="stat">
              <h3>50,000+</h3>
              <p>Happy Users</p>
            </div>
            <div className="stat">
              <h3>100+</h3>
              <p>Cities Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT US SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-content">
          <div className="contact-header">
            <h2>Get In Touch</h2>
            <p>Have questions? Our dedicated team is ready to assist you with any inquiries about finding your perfect home.</p>
          </div>
          
          <div className="contact-info">
            <div className="contact-card">
              <div className="card-icon">📍</div>
              <h4>Office Address</h4>
              <p>Elite Nest Corporate Office<br />
                 123 Business Avenue<br />
                 Mumbai, Maharashtra 400001<br />
                 India</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">📞</div>
              <h4>Call Us</h4>
              <p><strong>Toll Free:</strong> +91-1800-ELITE-NEST<br />
                 <strong>Customer Support:</strong> +91-22-6789-0123<br />
                 <strong>WhatsApp Business:</strong> +91-9876-543-210</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">✉️</div>
              <h4>Email Us</h4>
              <p><strong>General Inquiries:</strong> hello@elitenest.com<br />
                 <strong>Support Team:</strong> support@elitenest.com<br />
                 <strong>Business Relations:</strong> business@elitenest.com</p>
            </div>

            <div className="contact-card">
              <div className="card-icon">🕐</div>
              <h4>Working Hours</h4>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM IST<br />
                 <strong>Saturday:</strong> 10:00 AM - 5:00 PM IST<br />
                 <strong>Sunday & Holidays:</strong> Closed</p>
            </div>
          </div>

          <div className="contact-cta">
            <p>Ready to share your feedback or have questions? We'd love to hear from you!</p>
            <button 
              className="feedback-btn"
              onClick={() => setShowContactForm(true)}
            >
              💬 Send Feedback / Contact
            </button>
          </div>

          {showContactForm && (
            <div className="modal-overlay" onClick={() => setShowContactForm(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="modal-close-btn"
                  onClick={() => setShowContactForm(false)}
                >
                  ✕
                </button>
                <h3>Send Us a Message</h3>
                <p>Fill out the form below and our team will get back to you within 24 hours.</p>
                <form>
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                  <input type="text" placeholder="Subject" required />
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
