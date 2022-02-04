
const months = Array(12).fill(null).map( (_, index) => {
  const month = new Date(0, index).toLocaleString('en', { month: 'long' })
  const obj = {number: index, name: month};
  return obj
})


const MonthSelector = (props) => {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = parseInt(event.target.value);
    props.notifyChange(name, value)
  }

  return (
    <div>
      <form className="input-form">
        <div className="input-form__row">
          <select 
            className="input-form__select"
            value={props.month}
            onChange={handleChange}
            name="month"
          >
            {months.map((month) => {
              return (
                <option 
                  key={month.number} 
                  value={month.number}
                >
                  {month.name}
                </option>)
            })}
          </select>
          <select 
            className="input-form__select"
            value={props.year}
            onChange={handleChange}
            name="year"
          >
            <option 
              key={2021} 
              value={2021}
            >
              2021
            </option>
            <option 
              key={2022} 
              value={2022}
            >
              2022
            </option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default MonthSelector;
