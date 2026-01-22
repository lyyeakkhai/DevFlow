'use client';


import { SignUpSchema } from '@/lib/validation'
import AuthForm from '@/components/forms/AuthForm'

const SignUp = () => {
  return (
    <AuthForm 
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{
        username: "",
        name: "",
        email: "",
        password: ""
      }}
      onSubmit={(data) => Promise.resolve({
        success: true,
        data
      })}
    />
  )
}

export default SignUp