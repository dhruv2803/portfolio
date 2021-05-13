import './App.css';
import Details from './components/details/Details';
import Experience from './components/experience/Experience';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Publication from './components/publication/Publication';
import Projects from './components/project/Projects';
import Awards from './components/award/Awards';
import {Route,Switch} from "react-router-dom";
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Details />
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/experience" component={Experience} />
        <Route exact path="/publication" component={Publication} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/awards" component={Awards} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
