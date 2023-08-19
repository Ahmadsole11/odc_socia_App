import { Link } from "react-router-dom";
export default function PostCard(props) {
    // eslint-disable-next-line react/prop-types
    const {id, userId, title, body, image, userName, userImage, likes, date} = props;
  return (
    <div>
        <Link to={`/detail/${id}`}>
        <div>
            <div className="">
                <h1 className="font-bold text-3xl">{userId}</h1>
                <div></div>
                <img className="" src={image} alt="" />
                <h1>{title}</h1>
                <p>{body}</p>
                <div className="flex items-center">
                    <div className="flex justify-start items-center">
                        <img className="w-10 h-10 object-cover" src={userImage} alt="" />
                        <p className="font-bold text-sm">{userName}</p>
                    </div>
                    <div className="flex items-center">
                        <svg></svg>
                        <p>{likes}</p>
                    </div>
                    <div>
                        <svg></svg>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    </div>
  )
}
