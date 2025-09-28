import {  createContext, useMemo, useReducer, type Dispatch, type ReactNode } from "react"
import { activityReducer, initalState, type ActivityActions, type ActivityState } from "../reducers/activity-reducer"
import { categories } from "@/data/categories"
import type { Activity } from "@/types"


type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state : ActivityState,
    dispatch : Dispatch<ActivityActions>
    caloriesConsumed : number
    caloriesBurned : number
    netCalories : number
    categoryName: (categoty: number) => string[]
    isEmptyActivities: boolean

}

export const ActivityContext =  createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({children} : ActivityProviderProps) => {

    const [state , dispatch] = useReducer(activityReducer,initalState )

    
    const caloriesConsumed = useMemo(() => state.activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total , 0) ,[state.activities])
    const caloriesBurned = useMemo(() => state.activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total , 0) ,[state.activities])
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned , [state.activities])

    const categoryName = useMemo(() => (categoty: Activity['category']) => categories.map(cat => cat.id ===categoty ? cat.name : ''),[state.activities]) 
    const isEmptyActivities = useMemo(() => state.activities.length === 0, [state.activities])

    return  (
        <ActivityContext.Provider value = {{
            state,
            dispatch,
            caloriesConsumed,
            caloriesBurned,
            netCalories,
            categoryName,
            isEmptyActivities,
        }}
        >
            {children}
        </ActivityContext.Provider>
    )
}