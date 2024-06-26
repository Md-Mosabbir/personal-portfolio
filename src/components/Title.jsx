import PropTypes from 'prop-types'

const Title = ({ title }) => {
  return (
    <span className=" xl:text-7xl sm:text-5xl text-[2.5rem] max-xs:text-base font-600">
      {title}
    </span>
  )
}

// Prop types
Title.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Title
