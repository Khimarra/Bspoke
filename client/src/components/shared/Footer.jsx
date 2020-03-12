import React from 'react'
import '../../styles/stylesheets/footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h3>© {new Date().getFullYear()} Tara Solbrig</h3>
            <div>
                <a className="icons" href="https://www.linkedin.com/in/tarasolbrig/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a  className="icons" href="https://github.com/Khimarra">
                    <i className="fab fa-github-square"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
