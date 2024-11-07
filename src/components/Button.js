import PropTypes from 'prop-types'
//define button function with properties passed in from header
const Button = ({color, text, onClick}) => {
    //defie onclick function
    // const onClick = () => {
    //    console.log('click') 
    // }
  return (
    //set event property, onclick to a function called on click

    <button onClick={onClick} style={{backgroundColor: color}} 
    className='btn'>
        {text}
    </button>
  )
}

//default property of button unless defined in headerfile
Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
