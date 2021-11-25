function SelectSerie() {

  const serieList = ['X 72500', 'Z 21500', 'X 73500']

  return (

    <label className="flex items-baseline w-1/2 mx-auto mt-6">
      <select
        className="form-select block mx-auto mt-1 bg-gray-200 text-md sm:text-3xl font-bold text-gray-800 text-center">
        <option disabled>Série</option>
        {serieList.map((serie, index) => (
          <option key={`${serie}-${index}`}>{serie}</option>
        ))}
      </select>
    </label>

  )
}

export default SelectSerie
