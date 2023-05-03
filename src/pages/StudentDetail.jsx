import { useEffect } from "react";
import useStudents from "../hooks/useStudents";

export default function StudentDetail(){
    const {getStudent} = useStudents();

    const student = getStudent();

    return(
        <div className="detalle">
            
        </div>
    )
}