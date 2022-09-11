import { useState } from "react";
import dropDown from "../dropDown.module.css";

export const DropDown = (props) => {
  const [variables, setVariable] = useState(props.values)
  return (
    <div>
      <select className={dropDown.dropDownList}>
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
