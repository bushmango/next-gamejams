import React from 'react'

export const ColumnTwo = (props: { children: React.ReactNode }) => {
  if (2 !== React.Children.count(props.children)) {
    throw new Error('Component requires excatly two children')
  }
  let c = props.children as any
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>{c[0]}</div>
      <div>{c[1]}</div>
    </div>
  )
}
