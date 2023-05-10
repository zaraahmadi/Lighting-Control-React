import React from 'react'

import PropTypes from 'prop-types'

import './group.css'

const Group = (props) => {
  return (
    <div className={`group-group ${props.rootClassName} `}>
      <img
        alt={props.Vector_alt}
        src={props.Vector_src}
        className="group-vector"
      />
    </div>
  )
}

Group.defaultProps = {
  Vector_src: '/playground_assets/vector3652-hg9i.svg',
  Vector_alt: 'Vector3652',
  rootClassName: '',
}

Group.propTypes = {
  Vector_src: PropTypes.string,
  Vector_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Group
