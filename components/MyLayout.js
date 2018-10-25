import Header from './Header'
import "../styles.scss"

const MyLayout = ( props ) => (

<div  className="site">
    <Header />

   <main className="site__content">
   { props.children }
   </main>

    <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>Made with &#10084; </strong> by <a target="_blank" href="https://www.linkedin.com/in/gmartinez92/">G7Dev</a>.
    </p>
    <a  target="_blank"  href="https://bulma.io">
<img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24" />
</a>
  </div>
</footer>


</div>
)

export default MyLayout