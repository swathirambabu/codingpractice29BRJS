// Write your JS code here
import './index.css'
import LogoutButton from '../LogoutButton'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home">
      <h1>Home Route</h1>
      <LogoutButton />
    </div>
  </>
)
export default Home
