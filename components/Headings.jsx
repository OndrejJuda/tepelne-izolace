import React from 'react'

export const HSecondary = ({ children, additionalStyling }) => {
  return (
    <div className={`text-5xl sm:text-4xl mb-8 text-center font-bold ${additionalStyling}`}>
      {children}
    </div>
  )
}

export const HTertiary = ({ children, additionalStyling }) => {
  return (
    <div className={`text-3xl sm:text-4xl mb-8 text-center font-bold ${additionalStyling}`}>
      {children}
    </div>
  )
}

