import React from 'react'

import PropTypes from 'prop-types'

import Group from './group'
import './menu1.css'

const Menu1 = (props) => {
  return (
    <div className={`menu1-menu1 ${props.rootClassName} `}>
      <div className="menu1-container">
        <Group rootClassName="group-root-class-name" className=""></Group>
      </div>
    </div>
  )
}

Menu1.defaultProps = {
  rootClassName: '',
}

Menu1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Menu1
