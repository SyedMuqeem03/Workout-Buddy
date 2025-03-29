import { createContext, useReducer } from "react";

export const WorkoutContext = createContext()

export const workoutReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS':
            return { workouts: action.payload, isLoading: false, error: null }
        case 'CREATE_WORKOUT':
            return { workouts:[action.payload,...state.workouts], isLoading: false, error: null }
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        case 'DELETE_WORKOUT':
            return { workouts: state.workouts.filter(workout => workout._id !== action.payload._id), isLoading: false, error: null }
        default:
            return state
    }
}

export const WorkoutProvider=({children})=>{
    const [state,dispatch]=useReducer(workoutReducer,{
        workouts:null,
        isLoading:true,
        error:null
    })
    return(
        <WorkoutContext.Provider value={{...state,dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}