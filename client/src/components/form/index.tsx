export const Form: React.FC = () => {

  return (
    <form action="GET" className="w-full flex justify-center items-center flex-col mb-7">
      <input type="text" placeholder="Eat" className="w-96 p-4 text-xl border mb-5" />
      <button type="submit" className="bg-purple-500 text-white text-2xl px-5 py-2 rounded hover:bg-purple-800 hover:shadow-lg">Create</button>
    </form>
  )
}
