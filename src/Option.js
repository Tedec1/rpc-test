const Option = ({ name, value, setSelect }) => {
  const handleClick = (e) => {
    console.log(name + " " + value + " was clicked")
    setSelect({ name: name, value: value })
  }

  return (
    <div className="option" value={value} onClick={handleClick}>
      {name}
    </div>
  )
}

export default Option
