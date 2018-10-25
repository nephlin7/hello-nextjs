import Header from './Header'
import "../styles.scss"

const MyLayout = ( props ) => (

<div>
    <Header />
    { props.children }
</div>
)

export default MyLayout