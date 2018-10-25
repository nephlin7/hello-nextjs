import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import {withRouter} from 'next/router'
import Markdown from 'react-markdown'
import NextSeo from 'next-seo';
import ReactHtmlParser from 'react-html-parser';


const Post  = withRouter((props) => (
    <Layout>

          <NextSeo
              config={{
                title: `${ props.show.name }`,
                description: `${ props.show.summary.substring(0, 100)  + "..." }`,
                canonical: 'https://g7nextjs.herokuapp.com/about',
                openGraph: {
                  type: 'website',
                  locale: 'en_IE',
                  url: 'https://g7nextjs.herokuapp.com/about',
                  title: `${ props.show.name }`,
                  description: `${ props.show.summary.substring(0, 100)  + "..." }`,
                  images: [
                    { url: `${ props.show.image.medium }` },
                  ],
                },
              }}
            />

       <br/>

<div className="container">
<nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
  <ul>
    <li>
      <Link href="/">
          <a title="home">Home ></a> 
      </Link>
    </li>
    <li class="is-active"><a href="#" aria-current="page">{ props.show.name } </a></li>
  </ul>
</nav>
</div>
       <br/>
        <div className="container">
        <div className="columns">
<div className="column is-half">

<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img alt={ props.show.name }  src={props.show.image.medium}/> 
    </figure>
  </div>
  <br/>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{ props.show.name }</p>
        <p className="subtitle is-6">@g7dev</p>
      </div>
    </div>
    <br/>
    <div className="content">
        { ReactHtmlParser(props.show.summary) }
        <Link  href={props.show.url}>
        <a className="button is-dark" target="_blank">Ir a show </a> 
      </Link>
    
    </div>
  </div>
</div>
</div>
</div>
        </div>
    </Layout>
  ))

 Post.getInitialProps = async function (context) {
   const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
 const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
 }

 export default Post