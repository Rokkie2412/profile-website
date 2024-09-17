import { NavigationBar, About, Footer, Certification, Contact, Experience } from './components'
import {href} from './config'

const App = () => {
  return (
    <div>
      {NavigationBar(href)}
      {About('about')}
      {Contact('contact')}
      {Experience('experience')}
      {Certification('certif')}
      {Footer()}
    </div>
  )
}

export default App