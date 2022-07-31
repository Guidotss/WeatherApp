import { useEffect, useState } from 'react';
import { NavBar } from './components/index'; 
import { MainWeather } from './components/InfoWeather/MainWeather';
import { useFetch, useForm } from './hooks';


function App() {
  const [city , setCity] = useState('');
  const { data , loading, setData} = useFetch(city); 
  

  useEffect(() => {
    setData(city); 
  },[city])

  return(
    <>
      <NavBar setCity = {setCity}/>  
      <MainWeather data = {data} loading={loading}/>
    </>
  )
}

export default App
