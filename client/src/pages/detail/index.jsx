import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


export default function Detail() {
    const [post, setPost] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => response.json())
            .then((json) => setPost(json));
    }, [id]);

        if(!post){
            return <div>
            <svg className="animate-spin h-5 w-5 mr-3 text-red-800" viewBox="0 0 24 24"></svg>
        </div>
    }

  return (
    <div className="container mx-auto w-full">
        <img src="https://www.axa.fr/content/dam/axa-fr-convergence/entreprise/IARD/Mobile/bloc-business-cyber-secure_mob.png" alt="" className="w-full h-96 object-cover" />
        <div className="flex flex-col items-center justify-center p-4">
            <h1 className="text-gray-800 font-bold text-xl text-left">
                {post.title}
            </h1>
            <p className="text-gray-800 mt-2">
                {post.body}
            </p>
            <div className="flex items-center justify-between w-full mt-4">
                <div className="flex items-center">
                    <img className="w-10 h-10 rounded-full object-cover" src="https://www.shutterstock.com/shutterstock/photos/723829372/display_1500/stock-vector-young-afro-man-avatar-character-male-face-portrait-cartoon-person-vector-illustration-723829372.jpg" alt="" />
                    <h1 className="text-gray-800 font-bold ml-2">Mamadou Bah</h1>
                </div>
                <div className="flex items-center">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <p className="text-gray-600">
                12/12/2021
            </p>            
            </div>
            <p className="text-gray-600">
                12,8k
            </p>
            </div>
        </div>
        <div>
            <div>
                <h1>{post.title}</h1>
                <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ullam, quasi eius perferendis tempora unde laboriosam est quo animi at consectetur placeat? Commodi, odit possimus soluta eius porro ex doloribus?</p>
                </div>
                <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ullam, quasi eius perferendis tempora unde laboriosam est quo animi at consectetur placeat? Commodi, odit possimus soluta eius porro ex doloribus?</p>
                </div>
                <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis ullam, quasi eius perferendis tempora unde laboriosam est quo animi at consectetur placeat? Commodi, odit possimus soluta eius porro ex doloribus?</p>
                </div>
            </div>
            <div>
                <form action="">
                    <textarea name="" id="" cols="30" rows="10">Commenter</textarea>
                </form>
            </div>
        </div>
    </div>
  )
}
