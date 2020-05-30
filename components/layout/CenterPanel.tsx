import React from 'react'

export const CenterPanel = (props: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '1000px', maxWidth: '1000px' }}>
        {props.children}
      </div>
    </div>
  )
}
