import React,{useState, useEffect} from 'react'
import DogList from '../Components/DogList/DogList'
import Form from '../Components/Form/Form'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const[dogsData,setDogsData]=useState();
  const [numberOfDogs, setNumberOfDogs] = useState(3); 
  useEffect(()=>{
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then((r)=>r.json())
    .then((data) => setDogsData(data.message));
  }, [numberOfDogs]);
 
 console.log(`dogsData`,dogsData);

   return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      <Form setNumberOfDogs={setNumberOfDogs}/> 
      {/* This page should receive the images array */}
      <DogList dogsList={dogsData}/>
    </div>
  );
}

