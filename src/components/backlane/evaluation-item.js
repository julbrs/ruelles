import React from 'react'
import PropTypes from 'prop-types'

const EvaluationItem = props => {
  const {
    icon,
    text,
    value,
    important,
  } = props

  return (
    <li className="flex flex-row mb-1">
        <div className={"border-gray-400 border-solid border rounded-md flex flex-1 items-center p-2 " + (important ? "bg-gray-400" : "")}>
        <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">{icon}</div>
        <div className="flex-1 pl-1 mr-16">
            <div className={important ? "text-2xl" : "font-medium"}>{text}</div>
        </div>
        
        <div className="shadow w-32 bg-grey-light">
            <div className="bg-green-900 text-xs leading-none py-1 text-center text-white w-5/12" >45%</div>
        </div>

        <div className="text-gray-600 text-xs">{value}</div>
        </div>
    </li>
    )
}

EvaluationItem.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    important: PropTypes.bool
}

export default EvaluationItem