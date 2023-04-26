import { useEffect } from "react"


export function AddStudent({ setActiveTab }) {

    useEffect(() => {
        setActiveTab(3)
      }, [])


    return (
        <div>
            <h1>Add Student</h1>
        </div>
    )
}