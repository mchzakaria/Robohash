import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let Robots = [
    {
      id : 0 ,
      image : "https://robohash.org/zack",
      nom :"ZACK",
      email :"ZACK@gmail.com" 
    },
    {
      id : 1 ,
      image : "https://robohash.org/ayman",
      nom :"Ayman",
      email :"ayman@gmail.com" 
    },
    {
      id : 2 ,
      image : "https://robohash.org/zineb",
      nom :"Zineb",
      email :"zineb@gmail.com" 
    },
    {
      id : 3 ,
      image : "https://robohash.org/pindo",
      nom :"Pindo",
      email :"pindo@gmail.com" 
    }
  ]
const [elements , setelements] = useState(Robots) ;
const [color , colorState] = useState('');
const [AddRobot , AddRobotState] = useState(false);

const [newRobotName, setNewRobotName] = useState();
const [newRobotEmail, setNewRobotEmail] = useState();

let changeHandler = (e)=>{
  setelements(Robots.filter(c=> c.nom.toLowerCase().includes(e.target.value.toLowerCase())));
};

const deleteRobot = (index) => {
  const updatedElements = elements.filter((e)=>e.id !== index );
  setelements(updatedElements);
};


  const addRobot = () => {
    const newRobot = {
      id: elements.length,
      image: 'https://robohash.org/newrobot',
      nom: newRobotName,
      email: newRobotEmail,
    };
    setelements((prevElements) => [...prevElements, newRobot]);
    
  }

  const HideAddRobot = () =>{
    AddRobotState(!AddRobot);
  }
  

  return (
    <>
      <div className='container'>
        <div className='InputField'>
            <input className="search" type="text" placeholder='Search' onChange={changeHandler}/>
            <input className="color" type="Color" value = {color} onChange={(e)=>colorState(e.target.value)}/>
            <input type="submit" value="Add Robot" onClick={()=>AddRobotState(!AddRobot)}/>
        </div>
        {
          AddRobot?(
            <div className='AddRobot'>
              <input type="text" className='' onChange={(e)=>setNewRobotName(e.target.value)} placeholder='Name :'/>
              <input type="text" className='' onChange={(e)=>setNewRobotEmail(e.target.value)} placeholder='Email :'/>
              <input type="submit" value="Save" onClick={addRobot} className='submit'/>
              <input type="button" value="X" onClick={HideAddRobot}/>
            </div>
            ): null
        }
          
        <div className='cardList'>
          {
            elements.map( e =>(
             <div className='card' key={e.id} style={{backgroundColor:color}}>
                <input className="color" type="Color" value = {color} onChange={(e)=>colorState(e.target.value)}/>
                <img className="img" src={e.image}/>
                <h3>{e.nom}</h3>
                <h5>{e.email}</h5>
                <input type="button" value="Delete" onClick={()=> deleteRobot(e.id)}/>
              </div> 
            )
            )
          }
        </div>

      </div>
    </>
  )
}

export default App
