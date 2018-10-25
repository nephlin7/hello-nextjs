import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import NextSeo from 'next-seo';

    const Index = (props) => (

            <Layout>
            <NextSeo
      config={{
        title: 'Index Page',
        description: 'Description Index Page',
        canonical: 'https://www.canonical.ie/Index',
      }}
    />
<section className="hero is-primary">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
      Batman 
      </h1>
      <h2 className="subtitle">
      TV Shows
      </h2>
    </div>
  </div>
</section>
<br />
<div className="container">
  <div className="notification box-shadow">
  <section className="columns">
    <div className="column">
    <ul>
            {props.shows.map(({show}) => (
              <li key={show.id}>
                <Link as={`/post?id=${show.id}`} href={`/post?id=${show.id}`}>
                 <a>{show.name}</a>
                </Link>
              </li>
            ))}
          </ul> 
    </div>

    <div className="column">
    <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">John Smith</p>
        <p className="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br />
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
    </div>
  </section>
</div>
</div>

     </Layout>
      )
      
       Index.getInitialProps = async function() {
         const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
         const data = await res.json()
      
         console.log(`Show data fetched. Count: ${data.length}`)
      
         return {
           shows: data
         }
       }
      
      export default Index