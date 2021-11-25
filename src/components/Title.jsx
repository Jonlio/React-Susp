import icon from '../assets/icon.png'

function Title() {

  const title = "Réglage suspension"
  
  return (
    <div className="mt-10">
      <h1 className="text-center text-4xl sm:text-6xl font-bold text-gray-800">{title}</h1>
      <img
        src={icon}
        alt="icon réglage susp"
        className="w-1/2 mt:8 sm:mt-16 mx-auto"/>
    </div>
  )
}

export default Title