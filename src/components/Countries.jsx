import React from 'react'

function Countries({countries, loading}) {
    if(loading) {
        return <h2>Loading ...</h2>
    }

  return (
        <ul>
        {countries.map((el, idx) => <li key={idx}>{el.name}</li> )}
        </ul>
    )
  }

export default Countries
