import React from 'react'

export default function NoPage(props) {
  return (
    <div>
      <button type="button" className="m-2 btn btn-primary">{props.upperCase}</button>
      <button type="button" className="m-2 btn btn-secondary">{props.lowerCase}</button>
      <button type="button" className="m-2 btn btn-success">{props.reset}</button>
    </div>
  )
}
