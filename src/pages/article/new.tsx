import { useForm, SubmitHandler } from 'react-hook-form'

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
    <div className="grid grid-cols-1 gap-6 m-16">
      <form className="w-full max-wlg" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              タイトル
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              defaultValue="test"
              {...register('example', { required: true })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.example && <p>This field is required</p>}
            </p>
          </div>
        </div>
        <input
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          type="submit"
        />
      </form>
    </div>
  )
}
