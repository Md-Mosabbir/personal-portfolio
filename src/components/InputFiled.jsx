const InputFiled = ({ type, name, label, placeholder, id }) => {
  return (
    <div className="flex flex-col  gap-1 font-poppins w-full">
      <label htmlFor={id} className="text-base ">
        {label}
      </label>
      <input
        className="px-2 py-4 bg-accent rounded-xl "
        type={type}
        name={name}
        placeholder={placeholder}
        id={id}
        required
      />
    </div>
  )
}

export default InputFiled
