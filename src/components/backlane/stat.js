import React from 'react'
import PropTypes from 'prop-types'
import StatItem from './stat-item'

const BackLaneStat = props => {
  const {
    data
  } = props

  const devStats = (
    <>
    <h2 className="text-2xl text-green-800 border-t-2 border-dotted mt-4">DEV STATS:</h2>
      <ul className="list-disc ml-8">
        <li>Ruelles sans image: <strong>{data.nopic.totalCount}</strong></li>
        <li>Ruelles en warning: <strong>{data.warning.totalCount}</strong></li>
        <li>Ruelles sans date: <strong>{data.nodate.totalCount}</strong></li>
      </ul>
    </>
  )

  return (
    <div className="m-10 p-2">
      <p>Ce site référence  <span className="text-4xl text-green-800">{data.all.totalCount} ruelles</span> dans la ville de Montréal dont <span className="text-4xl text-green-800">
        {data.green.totalCount} ruelles vertes</span></p>

      <h2 className="text-2xl text-green-800 border-t-2 border-dotted mt-4">Par arrondissement:</h2>
      <div className="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
      {/* stat by district */}
      {data.all.district.map(district => (
        <StatItem 
          key={district.fieldValue} 
          value={district.totalCount} 
          text={district.fieldValue}
        />
      ))}
      </div>

      <h2 className="text-2xl text-green-800 border-t-2 border-dotted mt-4">Par année de création (pour les ruelles vertes):</h2>
      <div className="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
      {/* stat by date */}
      {data.all.date.map(date => (
        <StatItem 
          key={date.fieldValue} 
          value={date.totalCount} 
          text={date.fieldValue}
        />
      ))}
      </div>
      {(process.env.NODE_ENV !== `production`) && devStats}
    </div>
    )
}

BackLaneStat.propTypes = {
    data: PropTypes.object
}

export default BackLaneStat