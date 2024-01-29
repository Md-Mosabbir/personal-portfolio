const Logo = ({ src, alt }) => {
  return (
    <span className="w-14 h-12 inline-block mb-[-15.5px] rounded-full">
      <img src={src} alt={alt} className="w-full h-full object-contain" />
    </span>
  )
}

export default Logo
