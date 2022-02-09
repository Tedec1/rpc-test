const Option = ({ name, value, setSelect, disabled }) => {
  const handleClick = (e) => {
    if(disabled) return;
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
