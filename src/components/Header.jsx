import PropTypes from 'prop-types';

function Header({text, bgColor, textColor}) {
      
      const headerStlyes = {
        backgroundColor:bgColor,
        color : textColor
      }
      return (
           <header style={headerStlyes}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
      )
}

Header.defaultProps = {
  text :"Feedback UI",
  bgColor : 'pink',
  textColor : 'blue'
}

Header.propTypes = {
  text : PropTypes.string
}

export default Header