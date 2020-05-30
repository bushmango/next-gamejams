import React from 'react'
import { ExternalLink } from './ExternalLink-sidecar'
import { Section } from './Section-sidecar'
import { solidIcons } from './solidIcons'
import _ from 'lodash'

interface ILdJam {
  num: string
  ldUrl: string
  url: string
  name: string
  desc?: string
}

let jams: ILdJam[] = [
  {
    num: '45',
    ldUrl: 'https://ldjam.com/events/ludum-dare/45/untitled-zombie-game',
    url: 'https://raz.stevebushman.com/ludum-dare/ludum-dare-45',
    name: 'Untitled Zombie Game',
  },
  {
    num: '43',
    ldUrl: 'https://ldjam.com/events/ludum-dare/43/space-goat-coast-to-coast',
    url: 'https://jams.steviebushman.com/ludum-dare-43.html',
    name: 'Space Goat Coast to Coast',
  },
]

export const Games = () => {
  return (
    <Section icon={solidIcons.faGamepad} title='Games'>
      <div>Ludum Dare Jam Games:</div>
      <div>
        {_.map(jams, (c) => (
          <div>
            <ExternalLink href={c.url} label={`LD${c.num} ${c.name}`} /> (
            <ExternalLink href={c.ldUrl} label={`Ratings`} />)
          </div>
        ))}
      </div>
      <ExternalLink
        href='https://ldjam.com/users/stevie-bushman/games'
        label="Bushmango's Games"
      />{' '}
      - New Ludum Dare 48/72 hour games
      <br />
      <ExternalLink
        href='http://ludumdare.com/compo/author/bushmango3/'
        label="Bushmango's Games"
      />{' '}
      - Older Ludum Dare 48/72 hour games
      <br />
      <ExternalLink
        href='https://brendens-adventure.steviebushman.com'
        label="Brenden's Adventure"
      />{' '}
      - An adventure game written by my son
      {/* <BlockContainer>
        <Block title="Brenden's Adventure">

        </Block>
        <Block title='Ludum Dare games'>
          <ExternalLink href='http://ludumdare.com/compo/author/bushmango3/' label="Bushmango's Games" />
        </Block>
      </BlockContainer> */}
    </Section>
  )
}
