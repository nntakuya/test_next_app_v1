import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

//const Article = () => {
//  const router = useRouter()
//  const { id } = router.query
//
//  return <p>Article: {id}</p>
//}
//
//export default Article

type Inputs = {
  example: string
  exampleRequired: string
}

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch('example'))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register('example')} />
      <br />
      <input {...register('exampleRequired', { required: true })} />
      <br />
      {errors.exampleRequired && <p>This field is required</p>}

      <input type="submit" />
    </form>
  )
}
