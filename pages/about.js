import Layout from '../components/MyLayout'
import NextSeo from 'next-seo';

const About = () => (
    <Layout>
            <NextSeo
      config={{
        title: 'About Page',
        description: 'Description About Page',
        canonical: 'https://www.canonical.ie/About',
      }}
    />
        <h1>About Page</h1>
    </Layout>
)

export default About