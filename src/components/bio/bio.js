/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Image from "gatsby-image"
import profile from './profile-pic.png'

import Style from './bio.module.scss'

const Bio = () => {
  // const data = useStaticQuery(graphql`
  //   query BioQuery {
  //     avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
  //       childImageSharp {
  //         fixed(width: 50, height: 50, quality: 95) {
  //           ...GatsbyImageSharpFixed
  //         }
  //       }
  //     }
  //     site {
  //       siteMetadata {
  //         author {
  //           name
  //           summary
  //         }
  //         social {
  //           twitter
  //         }
  //       }
  //     }
  //   }
  // `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  // const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  // const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className={Style.bio}>
      <img src={profile} className={Style.profile} alt=''/>
      <p className={Style.profileName}>ane</p>
      <p className={Style.profileDsc}>プログラミング・デザイン・勉強についてただただ興味を持っている初心者が、全くの初心者目線で学習・分析・研究を行い、記事としてアップしているblogです。日記や趣味について書くことも多々あると思います。</p>
      {/* {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          imgStyle={{borderRadius:100}}
        />
      )}
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}

        </p>
      )} */}
    </div>
  )
}

export default Bio
