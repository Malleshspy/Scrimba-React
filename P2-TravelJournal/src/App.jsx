
import './App.css'
import Entry from './Components/Entry'
import Header from './Components/Header'
import Tajmahal from "./assets/Tajmahal.png"; 
import places  from './Components/entrydata'


function App() {
 
  const newEntry=places.map((x)=>{
    return (<Entry 
                  object={x}/>
                    )

  })


  return (
    <>
    <Header/>
    {newEntry}



    </>
  )
}

export default App
