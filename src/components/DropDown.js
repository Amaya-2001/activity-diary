import { useState } from "react";

export const DropDown = (props) => {
  const [variables, setVariable] = useState(props.programmes)
  console.log(variables)
  return (
    <div>
      <select>
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
