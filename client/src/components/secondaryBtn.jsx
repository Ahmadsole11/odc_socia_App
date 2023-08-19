
export default function secondaryBtn({title, onClick}) {
  return (
    <div className="flex justify-start">
        <button onClick={onClick} className="bg-[#06B6D4] px-5 text-sm text-white font-bold rounded-full">
            {title}
        </button>
    </div>
  )
}
