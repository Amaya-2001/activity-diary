import { useState } from "react";
import dropDownStyles from "../dropDown.module.css";

export const DropDown = (props) => {
  const [variables, setVariable] = useState(props.values)

  return (
    <div>
      <select className={dropDownStyles.dropDownList}>
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
