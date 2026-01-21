import AuthForm from '@/components/forms/AuthForm'

const ForgotPassword = () => {
  return (
    <AuthForm 
        formType="FORGOT_PASSWORD"
        schema={ForgotPasswordSchema}
        defaultValues={{
          email: ""
        }}
        onSubmit={(data) => Promise.resolve({
          success: true,
          data
        })}
    />
  )
}

export default ForgotPassword