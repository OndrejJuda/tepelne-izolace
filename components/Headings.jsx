import React from 'react'

export const HSecondary = ({ children, additionalStyling }) => {
  return (
    <div className={`font-semibold text-primary-300 ${additionalStyling}`}>
      {children}
    </div>
  )
}
