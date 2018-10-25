import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

import {withRouter} from 'next/router'
import Markdown from 'react-markdown'

import ReactHtmlParser from 'react-html-parser';


const Post  = withRouter((props) => (
    <Layout>
        <h1>{ props.show.name } </h1>
        <p>{ ReactHtmlParser(props.show.summary) }</p>
        <img src={props.show.image.medium}/> 
    </Layout>
  ))

// const Post =  (props) => (
//     <Layout>
//         <h1>{props.title}</h1>
//        {/* <h1>{props.show.name}</h1>
//        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
//        <img src={props.show.image.medium}/> */}
//     </Layout>
// )
 Post.getInitialProps = async function (context) {
   const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
 const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
 }

 export default Post