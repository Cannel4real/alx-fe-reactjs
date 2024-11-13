import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
function App() {

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" /> 
       <Footer />
      <UserContext.Provider value={userData}>
      <ProfilePage />
      <UserProfile />
        </UserContext.Provider> 
    </>
  )
}

export default App
