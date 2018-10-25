import Layout from '../components/MyLayout'
import NextSeo from 'next-seo';

const About = () => (
    <Layout>
          <NextSeo
              config={{
                title: 'About Page - Batman Shows',
                description: 'Description About Page - Buil Web Site SSR with Next.js - Amazing',
                canonical: 'https://g7nextjs.herokuapp.com/about',
                openGraph: {
                  type: 'website',
                  locale: 'en_IE',
                  url: 'https://g7nextjs.herokuapp.com/about',
                  title: 'Batman History Shows ',
                  description: 'Description About Page - Buil Web Site SSR with Next.js - Amazing',
                },
              }}
            />
       <section className="hero is-primary">
  <div className="hero-body">
    <div className="container">
      <h1 className="title">
      About Page
      </h1>
      <h2 className="subtitle">
      Buil Web Site SSR with Next.js - Amazing
      </h2>
    </div>
  </div>
</section>
<br/>
<div className="container">
<div className="content is-medium">
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p>
  </div>
</div>
    </Layout>
)

export default About