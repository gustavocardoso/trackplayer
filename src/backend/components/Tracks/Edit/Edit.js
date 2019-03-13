import React from 'react'

const Edit = props => {
  console.log(props.match)
  return <h2>Edit track: {props.match.params.id}</h2>
}

export default Edit
