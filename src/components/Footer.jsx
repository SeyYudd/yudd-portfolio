// Modern Footer Component
import React from 'react';
import './footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/muhamad-syifa-wahyudi/',
            color: 'var(--primary-color)'
        },
        {
            name: 'GitHub',
            url: 'https://github.com/SeyYudd',
            color: 'var(--text-dark)'
        },
        {
            name: 'Email',
            url: 'mailto:wahyuditester@gmail.com',
            color: 'var(--accent-red)'
        }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                   
                    <div className="footer-links">
                        <div className="social-links">
                            {socialLinks.map((link, index) => (

                                <a
                                    key={index}
                                    href={link.url} // Fixed href to directly use the URL
                                    className="social-link"
                                    style={{ '--link-color': link.color }}
                                    title={link.name}
                                    target="_blank" // Added target attribute for opening in a new tab
                                    rel="noopener noreferrer" // Added rel attribute for security
                                >
                                    <span className="social-name">{link.name}</span>
                                </a>
                            ))}
                        </div>

                        <div className="quick-contact">
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <span>Tangerang, Indonesia</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-info">
                        <p className="copyright">
                            © {currentYear} Yudd Portfolio. Crafted with
                            <span className="heart">❤️</span>
                            and tested with
                            <span className="precision">🎯</span>
                            precision.
                        </p>
                        <p className="tagline">
                            "Quality is not an act, it's a habit" - Aristotle
                        </p>
                    </div>
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="footer-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </footer>
    );
};

export default Footer;