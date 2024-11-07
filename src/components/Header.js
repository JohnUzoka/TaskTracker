import PropTypes from 'prop-types'
import Button from './Button'

//header component
const Header = ({ title, onAdd, showAdd }) => {

  return (
    //Classame"header" flexbox from style sheet
    //with button component ebedded, passing in properties defined here
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick ={onAdd} />
    </header>
  )
}

//set default properties
Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
 title: PropTypes.string.isRequired,
}

//CSS IN JS
// const headingStyle = {
//   color: 'red'
//   backgroundColor: 'black'
// }
export default Header
