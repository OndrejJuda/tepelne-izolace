import React from 'react'

export const HSecondary = ({ children, additionalStyling }) => {
  return (
    <div className={`font-semibold text-primary-800 ${additionalStyling}`}>
      {children}
    </div>
  )
}
