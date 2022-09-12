import { useState } from "react";
import dropDownStyles from "../dropDown.module.css";

export const DropDown = (props) => {
  const [variables, setVariable] = useState(props.values)

  const handleDropDown = (event) => {
    props.func(event.target.value)
  }

  return (
    <div>
      <select className={dropDownStyles.dropDownList} onChange={handleDropDown}>
        <option value=''>Choose Option</option>
        {variables.map((variable) =>{
          return (
            <option key={variable} value={variable}>{variable}</option>
          )
        })
        }
      </select>

    </div>
  )
};
