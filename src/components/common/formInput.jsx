import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

function FormInput(props) {
  const { onChange, errMsg, id, label, ...rest } = props
  const [focused, setFocused] = useState(false)

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        {...rest}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={(e) => {
          e.target.id === 'confirmPassword' && setFocused(true)
        }}
        focused={focused.toString()}
      />
      <Form.Text className="text-danger">{errMsg}</Form.Text>
    </Form.Group>
  )
}

export default FormInput
