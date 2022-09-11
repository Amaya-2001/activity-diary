import { DropDown } from "./DropDown"

export const Form = ()=> {
    let programmes = ["Software Engineering", "Computer Science", "Textile Engineering"]
    let batch_year = ["2020", "2021", "2022"]
    let batch_number = ["01", "02", "03"]

    return (
        <div> 
             <DropDown values ={programmes}> </DropDown>
             <DropDown values={batch_year}></DropDown>
             <DropDown values={batch_number}></DropDown>
        </div>
    )

}
