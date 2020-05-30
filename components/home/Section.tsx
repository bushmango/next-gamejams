import React from 'react'
import { Icon } from './Icon-sidecar'
import { solidIcons } from './solidIcons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export const Section = (props: {
  icon?: IconDefinition
  title?: string
  children: React.ReactNode
}) => {
  return (
    <div
      style={{
        borderTop: 'solid 1px #ccc',
        marginBottom: '10px',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          minHeight: '40px',
        }}
      >
        {props.icon && (
          <div
            style={{
              marginRight: '10px',
              minWidth: '40px',
              fontSize: '24px',
            }}
          >
            <Icon icon={props.icon} />
          </div>
        )}
        {props.title && <div style={{ fontSize: '24px' }}>{props.title}</div>}
      </div>
      <div>{props.children}</div>
    </div>
  )
}
