import PropTypes from 'prop-types'

const Logo = ({ src, alt }) => {
  return (
    <span className="w-14 h-12 inline-block mb-[-15.5px] rounded-full">
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </span>
  )
}

// Prop types
Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default Logo
