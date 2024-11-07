import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel.jsx'
import Footer from './components/Footer/Footer.jsx'
import Cards from './components/Card/Cards.jsx'
import authservice from '../src/appwrite/auth.js'
import {useDispatch} from 'react-redux'
function App() {
  const [loading,setloading]=useState(true);
  const dispatch=useDispatch()

  useEffect(()=>{
  authservice.getcurrentUser()
  .then((userdata)=>{

    if(userdata){
    dispatch(login({userdata}));
    }
    else{
    dispatch(logout());
    }

  })
  .finally(()=>setloading(false));
  },[])

  return (
    <>
    <Header/>
    <Carousel/>
    <Cards/>
    <Footer/>
    </>
  )
}

export default App
