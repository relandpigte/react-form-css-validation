import { useState } from 'react'
import { Form } from 'react-bootstrap'
import ButtonSubmit from './components/common/buttonSubmit'
import FormInput from './components/common/formInput'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    displayName: '',
    password: '',
    confirmPassword: '',
  })

  const regInputs = [
    {
      id: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      required: true,
      pattern: '^[A-Za-z0-9]{3,16}$',
      errMsg:
        "Username should be 3-16 characters and shouldn't include any special character!",
    },
    {
      id: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      required: true,
      pattern:
        '^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|"[a-zA-Z0-9.+!% -]{1,64}")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$',
      errMsg: 'It should be a valid email address!',
    },
    {
      id: 'displayName',
      type: 'text',
      placeholder: 'Display name',
      label: 'Display name',
    },
    {
      id: 'birthday',
      type: 'date',
      placeholder: 'Birthday',
      label: 'Birthday',
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      required: true,
      pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}',
      errMsg:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
    },
    {
      id: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      required: true,
      errMsg: 'Password does not match!',
      pattern: inputData.password,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted!')
  }

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.id]: e.target.value })
  }

  return (
    <Form
      onSubmit={handleSubmit}
      className="form-validation position-absolute top-50 start-50 translate-middle"
    >
      <h1>Rregister</h1>
      {regInputs.map((input) => (
        <FormInput
          key={input.id}
          {...input}
          onChange={handleChange}
          value={inputData[input.id]}
        />
      ))}
      <ButtonSubmit />
    </Form>
  )
}

export default App
