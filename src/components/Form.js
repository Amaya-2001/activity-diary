import { Button } from "./Button"
import { DropDown } from "./DropDown"
import FormStyles from "../form.module.css"

export const Form = () => {
    let programmes = ["Software Engineering", "Computer Science", "Textile Engineering"]
    let batchYear = ["2020", "2021", "2022"]
    let batchNumber = ["01", "02", "03"]

    const [programme, setProgramme] = useState('')
    const [year, setYear] = useState('')
    const [batchNo, setBatchNo] = useState('')

    return (
        <form className={FormStyles.form}> 
             <DropDown values={programmes}></DropDown>
             <DropDown values={batchYear}></DropDown>
             <DropDown values={batchNumber}></DropDown>

             <Button />
        </form>
    )

}
