import { NavigationBar, About, Footer, Certification, Contact } from './components'
import {href} from './config'

const App = () => {
  return (
    <div>
      {NavigationBar(href)}
      {About('home')}
      {Contact()}
      {Certification()}
      {Footer()}
    </div>
  )
}

export default App