import { TextField } from "@material-ui/core"
import { ChangeEvent, useState, KeyboardEvent } from "react"

interface IProps {
  title: string
  onChange: (newValue: string) => void
}
type TEditMode = false | true

function EditableSpan({title, onChange }: IProps) {
  let [editMode, setEditMode] = useState<TEditMode>(false)
  let [newTitle, setNewTitle] = useState(title)

  const onActivateEditMode = () => {
    setEditMode(true)
    setNewTitle(title)
  }

  const onActivateViewMode = () => {
    setEditMode(false)
    onChange(newTitle)
  }
  const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => 
    setNewTitle(e.currentTarget.value)
  
   const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
     if (e.key === "Enter") {
       onActivateViewMode()
     }
   }

  return editMode ? (
    <TextField
      value={newTitle}
      onChange={onChangeTitleHandler}
      onBlur={onActivateViewMode}
      onKeyDown={onKeyPressHandler}
      autoFocus
    />
  ) : (
    <span onDoubleClick={onActivateEditMode}>{title}</span>
  )
}

export default EditableSpan
