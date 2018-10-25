import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import NextSeo from 'next-seo';

    const Index = (props) => (

            <Layout>
            <NextSeo
              config={{
                title: 'Home Page - Batman Shows',
                description: 'Batman History Shows',
                canonical: 'https://g7nextjs.herokuapp.com/',
                openGraph: {
                  type: 'website',
                  locale: 'en_IE',
                  url: 'https://g7nextjs.herokuapp.com/',
                  title: 'Home Page - Batman Shows',
                  description: 'Batman History Shows',
                },
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