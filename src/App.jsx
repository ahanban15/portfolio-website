import Navbar from "./Components/Navbar/Navbar";
import "./app.scss"
import Test from './Test';

const App = () => {
  return <div>
    <section>
      <Navbar/>
    </section>
    <section>Parallax</section>
    <section>About</section>
    <section>Parallax</section>
    <section>Projects</section>
    <section>Parallax</section>
    <section>Contact</section>
  {/* <Test/>
  <Test/> */}
  </div>;
};

export default App;

