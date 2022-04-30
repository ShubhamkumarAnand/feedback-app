import PropTypes from "prop-types";

function Header({ text }) {
  return <div>{ text }</div>;
}

Header.defaultProps = {
  text: "Hello Everyone"
}

Header.propTypes = {
  text: PropTypes.string.isRequired
} 
export default Header;
