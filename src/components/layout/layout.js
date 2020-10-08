import React from "react"
import { Link } from "gatsby"
import Style from './layout.module.scss'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  // if (isRootPath) {
    header = (
      <h1 className={Style.titleLink}>
        <Link to="/">
          <div  className={Style.titleText}>
            {title}
          </div>
        </Link>
      </h1>
    )
  // } else {
  //   header = (
  //     <Link  to="/">
  //       {title}
  //     </Link>
  //   )
  // }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className={Style.header}>{header}</header>
      <main className={Style.main}>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
