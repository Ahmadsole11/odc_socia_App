import { Link } from "react-router-dom"

export default function LinkTo({text, link, target}) {
  return (
    <div className="flex space-x-2">
      <span>{text}</span>
        
        <Link to={target} className="flex items-center justify-center   border-2  bg-[#ffffff] px-5 text-sm text-black font-bold rounded-full" >
            {link}
        </Link>
    </div>
  )
}
