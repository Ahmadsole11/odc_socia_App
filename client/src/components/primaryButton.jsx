
export default function primaryButton({title, onClick,}) {
  return (
    <div className="flex justify-center">
        <button onClick={onClick} className="border-2  bg-[#ffffff] px-5 text-sm text-black font-bold rounded-full" >{title}</button>
    </div>
  )
}
