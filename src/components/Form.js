import { Button } from "./Button"
import { DropDown } from "./DropDown"
import FormStyles from "../form.module.css"
import { useState } from "react"

export const Form = () => {
    let programmes = ["Software Engineering", "Computer Science", "Textile Engineering"]
    let batchYear = ["2020", "2021", "2022"]
    let batchNumber = ["01", "02", "03"]

    const [programme, setProgramme] = useState('')
    const [year, setYear] = useState('')
    const [batchNo, setBatchNo] = useState('')

    const handleForm =(event)=>{
        event.preventDefault();
    };

    return (
  
        <form className={FormStyles.form} onSubmit={handleForm}>
             <DropDown values={programmes} func={setProgramme}></DropDown>
             <DropDown values={batchYear} func={setYear}></DropDown>
             <DropDown values={batchNumber} func={setBatchNo}></DropDown>

             <Button />

             <h1>{programme}</h1>
             <h1>{year}</h1>
             <h1>{batchNo}</h1>
        </form>
    )

}
