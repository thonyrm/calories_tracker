import { PencilSquareIcon, XCircleIcon } from "@heroicons/react/24/outline"
import { useActivity } from "@/hooks/useActivity"


export default function ActivityList() {

    const {state , dispatch, isEmptyActivities, categoryName} = useActivity()
  
    return (
        <>
            <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>
            {
                isEmptyActivities ?  <p className="text-center my-3">No hay actividades aún...</p> : 
                state.activities.map(activity =>(
                    <div key={activity.id} className="px-5 py-10 bg-sky-100 rounded-lg  mt-5 flex justify-between ">
                        <div className="space-y-2 relative">
                            <p className= {`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                                            ${activity.category === 1 ? 'bg-sky-900' : 'bg-sky-600 '}`} >
                                {categoryName(+activity.category)}
                            </p>
                            <p className="text-2xl font-bold pt-5">{activity.name}</p>
                            <p className="font-black text-4xl text-sky-700 ">
                                {activity.calories}{' '}
                                <span>
                                    Calorias
                                </span>
                            </p>
                        </div>
                        <div className="flex gap-5 items-center">
                            <button
                                onClick={() => dispatch({type: "set-activeId", payload:{id:activity.id}})} 
                            >
                                <PencilSquareIcon className="h-8 w-8 text-gray-800 cursor-pointer "/> 
                            </button>

                            <button
                                onClick={() => dispatch({type: "delete-activity", payload:{id:activity.id}})} 
                            >
                                <XCircleIcon className="h-8 w-8 text-red-500 cursor-pointer "/> 
                            </button>

                        </div>
                    </div>
                ))
            }
        </>
    )
}
