import { useState } from "react";

export const DropDown = (props) => {
  const [variables, setVariable] = useState(props.values)
  console.log(variables)
  return (
    <div>
      <select>
        <option value=''>Choose Option</option>
      {variables.map((variable) =>{
        return (
          <option value={variable}>{variable}</option>
        )
      })
      }
      </select>

    </div>
  )
};
