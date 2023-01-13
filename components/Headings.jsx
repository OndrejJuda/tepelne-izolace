import React from 'react'

export const HSecondary = ({ children, additionalStyling }) => {
  return (
    <div className={`text-5xl font-semibold text-primary-500 ${additionalStyling}`}>
      {children}
    </div>
  )
}
