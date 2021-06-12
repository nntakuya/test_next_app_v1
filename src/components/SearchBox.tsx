export default function SearchBox(props) {
  return (
    <div className="mb-32">
      <div className="box-border h-16 w-21 m-10 p-4 border-4 rounded-full"></div>
      <div className="box-border h-16 w-21 m-10">
        <ul className="flex">
          <li className="relative flex-auto">
            <p className="box-border h-10 inline-block p-2 border-4 rounded-full absolute top-0 hover:bg-blue-500 hover:text-white hover:border-transparent">
              smaple text text
            </p>
            <ul className="box-border h-30 inline-block p-4 border-4 z-30 bg-white absolute left-3 top-10">
              <li>category1</li>
              <li>category2</li>
              <li>category3</li>
            </ul>
          </li>
          <li className="relative flex-auto">
            <p className="box-border h-10 inline-block p-2 border-4 rounded-full absolute top-0 hover:bg-blue-500 hover:text-white hover:border-transparent">
              smaple text text
            </p>
            <ul className="box-border h-30 inline-block p-4 border-4 z-30 bg-white absolute top-10 left-3">
              <li>category1</li>
              <li>category2</li>
              <li>category3</li>
            </ul>
          </li>
          <li className="relative flex-auto">
            <p className="box-border h-10 inline-block p-2 border-4 rounded-full absolute top-0 hover:bg-blue-500 hover:text-white hover:border-transparent">
              smaple text text
            </p>
            <ul className="box-border h-30 inline-block p-4 border-4 z-30 bg-white absolute top-10 left-3">
              <li>category1</li>
              <li>category2</li>
              <li>category3</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}
