import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAppt } from '../../store/activeAppointmentSlice'


export function AddStudent({ setActiveTab }) {

    const dispatch = useDispatch()

    useEffect(() => {
      setActiveTab(3)
      dispatch(setAppt(null))
    }, [])


    return (
        <div>
            <h1>Add Student</h1>
        </div>
    )
}