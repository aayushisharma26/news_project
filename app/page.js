import Navbar from './navbar'
import Detail from './detail'
import SearchBar from "./search";
import Footer from './footer';
import './detail.css'
import './navbar.css'
 
const Home=()=>{
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Detail/>
      <Footer/>
    </div>
  )
}
export default Home;
