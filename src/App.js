import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Appointment from './components/Appointment'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/test" component={Testimonials} />
        <Route exact path="/appoint" component={Appointment} />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default App
