import React, { useContext } from 'react'
import Loader from "../UI/Loader"
import About from "./About"
import HeroSection from '../UI/HeroSection';
import { OurContext } from '../../context/Provider';
import { useNavigation } from 'react-router-dom';

const Home = () => {
  const {theme} = useContext(OurContext);
  const navigation = useNavigation();
  
  if (navigation.state==="loading") {
    return <Loader/>
  }
  return (
    <main className={`${theme==="dark"?"theme-dark":"theme-light"}`}>
        <HeroSection/>
        <About/>
    </main>

  )
}

export default Home
