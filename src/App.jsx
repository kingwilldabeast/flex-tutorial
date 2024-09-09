import { useState, useEffect } from 'react'
// import axios from 'axios'
// import {useParams, Link, useNavigate } from 'react-router-dom'
// import {Route, Routes} from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Header from './components/Header'
import Torso from './components/Torso'

export default function App() {


  return (
    <div className='app'>

    <Header/>
    <Torso/>


    </div>
  )
}

