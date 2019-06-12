import React from 'react'
import PropTypes from 'prop-types'


const Fa = ({ name, number })=>(
    <span className="fa fa-dribbble" href="#">{name} <br /> {number} </span>
)

Fa.defaultProps = {
    name: 'Nào encontrado',
    number: 0
}
Fa.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number
}

export default Fa