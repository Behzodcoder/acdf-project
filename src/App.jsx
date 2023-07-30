import './App.css'
import Footer from './components/footer/footer'
import Gallery from './components/gallery/gallery'
import Header from './components/header/header'
import Examples from './components/modal/modal'
import More from './components/more/more'
import News from './components/news/news'
import Purpose from './components/purpose/purpose'
import Subscribe from './components/subscribe/subscribe'

function App() {

  return (
    <>
    {/* <Examples/> */}
      <Header/>
      <Purpose/>
      <News/>
      <More/>
      <Gallery/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default App
