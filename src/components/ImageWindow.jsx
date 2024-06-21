import PropTypes from 'prop-types'

const ImageWindow = ({ img, alt, className }) => {
  return (
    <div className={className}>
      <img
        src={img}
        alt={alt}
        className="w-full h-full object-cover rounded-full"
      />
    </div>
  )
}

// Prop types
ImageWindow.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default ImageWindow
