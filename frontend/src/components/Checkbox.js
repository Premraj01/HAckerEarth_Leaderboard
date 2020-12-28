/** @format */

import React, { useState, useEffect } from 'react'

const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef()
  const resolvedRef = ref || defaultRef

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  const [checked, setChecked] = useState({})
  const disabled = false
  const onSelectedChange = (index) => {
    setChecked((previousState) => ({
      checked: {
        ...previousState.checked,
        [index]: !previousState.checked[index],
      },
    }))
  }

  useEffect(() => {
    const checkedCount = Object.keys(checked).filter((key) => checked[key])
      .length
    disabled = checkedCount > 1
  }, [])

  return (
    <div>
      {Array.from({ length: 5 }, (_element, index) => (
        <input
          type='checkbox'
          onChange={() => onSelectedChange(index)}
          checked={checked[index] || false}
          disabled={!checked[index] && disabled}
          ref={resolvedRef}
          {...rest}
        />
      ))}
    </div>
  )
})

export default Checkbox
