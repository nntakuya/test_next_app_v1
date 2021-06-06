import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
  title: string
  description: string
  purpose_category: string
  tag: number
}

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()

  // [保存先] LocalStorage
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const items = JSON.parse(localStorage.getItem('test'))
    const list = [...items]

    list.push(data)
    localStorage.setItem('test', JSON.stringify(list))
  }

  //console.log(watch('title'))

  return (
    <div className="grid grid-cols-1 gap-6 m-16">
      <form className="w-full max-wlg" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register('title', { required: true })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.title && <p>This field is required</p>}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              {...register('description', { required: true })}
            />
            <p className="text-red-500 text-xs italic">
              {errors.description && <p>This field is required</p>}
            </p>
          </div>
        </div>

        <div className="inline-block relative w-64 mb-6">
          <label className="inline-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Purpose
          </label>
          <select
            className="inline-block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            {...register('purpose_category')}
          >
            <option value="study">study</option>
            <option value="work">work</option>
            <option value="hobby">hobby</option>
          </select>
          <div className="pointer-events-none absolute top-10 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="inline-block relative w-64 mb-6">
          <label className="inline-block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Tag
          </label>
          <select
            className="inline-block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            {...register('tag')}
          >
            <option value="1">Tag1</option>
            <option value="2">Tag2</option>
            <option value="3">Tag3</option>
          </select>
          <div className="pointer-events-none absolute top-10 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="block relative w-64">
          <input
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            type="submit"
          />
        </div>
      </form>
    </div>
  )
}
