import {useState} from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";



const Workform=()=>{
    const {dispatch}=useWorkoutsContext()
    const [title,setTitle]=useState('')
    const [load,setLoad]=useState('')
    const [reps,setReps]=useState('')
    const [error,setError]=useState(null)
    const [emptyFields,setEmptyFields]=useState([])

const handleSumbit=async(e)=>{
    e.preventDefault()

    const workout={title,load,reps}


    const response=await fetch('https://workout-buddy-production-03a9.up.railway.app/api/workouts',{
        method:'POST',
        body:JSON.stringify(workout),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const json=await response.json()
    if (!response.ok){
        setError(json.error)
        setEmptyFields(json.emptyFields)
    }
    if(response.ok){
        setError(null)
        setEmptyFields([])
         console.log('New workout added:',json)
        setTitle('')
        setLoad('')
        setReps('')
        dispatch({type:'CREATE_WORKOUT',payload:json})
      
    }

}



    return (
        <form className="create" onSubmit={handleSumbit} > 
            <h3>Add a New Workout</h3>
            <label>Exercise Title:</label>
            <input 
                type="text" 
                onChange={(e)=>setTitle(e.target.value)} 
                value={title} 
                className={emptyFields.includes('title') ? 'error' : ''}
            />
            <label>Load (in kg):</label>
            <input 
                type="number" 
                onChange={(e)=>setLoad(e.target.value)} 
                value={load} 
                className={emptyFields.includes('load') ? 'error' : ''}
            />
            <label>Reps:</label>
            <input 
                type="number" 
                onChange={(e)=>setReps(e.target.value)} 
                value={reps} 
                className={emptyFields.includes('reps') ? 'error' : ''}
            />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}



export default Workform