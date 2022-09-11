import { useState } from "react";

export const DropDown = (props) => {
  const [variables, setVariable] = useState(props.values)
  return (
    <div>
      <select>
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
