import PropTypes from 'prop-types'

const Tabs = ({ title }) => {
  return (
    <article className="w-fit h-fit px-2 py-1 my-3 bg-accent text-neutralBlack border border-[#e0dcdc34] rounded-3xl">
      <p>{title}</p>
    </article>
  )
}

// Prop types
Tabs.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Tabs
