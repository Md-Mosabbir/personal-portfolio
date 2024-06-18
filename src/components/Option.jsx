import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Option = ({ data, variant, className }) => {
  return (
    <NavLink to={data.link} className={className}>
      <motion.li
        variants={variant}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={data.index}
      >
        {data.name}
      </motion.li>
    </NavLink>
  )
}

// Prop types
Option.propTypes = {
  data: PropTypes.object.isRequired,
  variant: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
}

export default Option
