import Navbar from "./Components/Navbar/Navbar";
import "./app.scss"
import Test from './Test';
import Sidebar from './Components/Sidebar/Sidebar';

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
    </section>
    <section id="About">Parallax</section>
    <section>About</section>
    <section id="Projects">Parallax</section>
    <section>Projects</section>
    <section id = "Contact">Parallax</section>
    <section>Contact</section>
  {/* <Test/>
  <Test/> */}
  </div>;
};

export default App;

