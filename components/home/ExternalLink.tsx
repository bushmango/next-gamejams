import React from 'react'
import { regularIcons } from './regularIcons'
import { solidIcons } from './solidIcons'
import { Icon } from './Icon-sidecar'

// function clickOutboundLink(url: string) {
//   // analytics.outboundLink(url)
// }

export const ExternalLink = (props: {
  url?: string
  href?: string
  title?: string
  label?: string
  disableIcon?: boolean
  children?: any
}) => (
  <div style={{ display: 'inline-flex', alignItems: 'center' }}>
    {props.disableIcon !== true && (
      <div
        style={{
          display: 'inline-block',
          width: '15px',
          height: '15px',
          marginRight: '5px',
        }}
      >
        <a href={props.url || props.href}>
          <Icon icon={solidIcons.faExternalLinkAlt} />
        </a>
      </div>
    )}
    <div>
      <a
        href={props.url || props.href}
        // onMouseDown={memoizeBind(
        //   clickOutboundLink,
        //   this,
        //   props.url || props.href,
        // )}
      >
        {props.title ||
          props.label ||
          props.url ||
          props.href ||
          props.children}
      </a>
    </div>
  </div>
)

// export class ExternalLink extends React.Component<{
//   label?: string,
//   href?: string,
// }, any> {

//   render() {

//     return (
//       <a href={this.props.href}><FontAwesome name='external-link' /> {this.props.label || this.props.children || this.props.href}</a>
//     )
//   }
// }
