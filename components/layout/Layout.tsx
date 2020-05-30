import Head from 'next/head'
import React from 'react'
import { CenterPanel } from './CenterPanel-sidecar'
import { ColumnTwo } from './ColumnTwo-sidecar'
import css from './Layout.module.scss'

export const Layout = (props: { children: React.ReactNode; title: string }) => {
  return (
    <div className={css.layout}>
      <Head>
        <title>{props.title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <link
          href='https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap'
          rel='stylesheet'
        ></link>
      </Head>

      <div>
        <CenterPanel>
          <ColumnTwo>
            <div>StevieBushman.com</div>
            <div>stevie@steviebushman.com</div>
          </ColumnTwo>

          {props.children}

          <ColumnTwo>
            <div>&copy; Stevie Bushman</div>
            <div>stevie@steviebushman.com</div>
          </ColumnTwo>
        </CenterPanel>
      </div>
    </div>
  )
}
