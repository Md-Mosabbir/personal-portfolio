import PropTypes from 'prop-types'
const InputFiled = ({
  type,
  name,
  label,
  placeholder,
  id,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col border-y-2  gap-1 font-poppins text-neutralWhite w-full bg-transparent px-3 py-4">
      <label
        htmlFor={id}
        className="text-base font-500 px-2 py-2 max-sm:text-[1.1rem] max-lg:text-base"
      >
        {label}
      </label>
      <input
        className="rounded-xl text-[1.2rem]  max-xs:w-full bg-transparent px-2 py-2"
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  )
}

// Prop Types
InputFiled.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputFiled
