import {  useNavigate } from 'react-router-dom'
import Header from '../Header'
import RegisterContext from '../../context/RegisterContext'
import {
  HomeContainer,
  HomeHeading,
  HomePara,
  Button,
  Image,
  Name,
  Topic,
} from './style'

const Home = () => {
  const navigate = useNavigate() // ✅ Use navigate instead of history

  const onRegister = () => {
    navigate('/register') // ✅ Correct way to navigate in React Router v6
  }

  return (
    <RegisterContext.Consumer>
      {value => {
        const { isRegistered, name, topic } = value
        console.log(isRegistered)
        return (
          <div>
            <Header />

            {isRegistered === true ? (
              <HomeContainer>
                <Name>Hello {name}</Name>
                <Topic>Welcome to {topic}</Topic>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            ) : (
              <HomeContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <HomePara>Please register for the topic</HomePara>
                <Button onClick={onRegister}>Register</Button> {/* ✅ Removed <Link> because navigate() handles it */}
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                />
              </HomeContainer>
            )}
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )
}

export default Home
