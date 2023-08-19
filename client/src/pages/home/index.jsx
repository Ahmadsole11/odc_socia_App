import Title from '../../components/Title'
import PrimaryButton from '../../components/primaryButton'
import { useNavigate } from 'react-router-dom'
import TextField from '../../components/TextField'

import PostCard from "../../components/postCard"

import {useState, useEffect} from "react"
const authData = JSON.parse(localStorage.getItem('user'))


export default function Home() {
  const navigate = useNavigate()
  const deconnect = ()=>{
    localStorage.removeItem('user')
    navigate('/')
  }
  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:5000/posts',
    {
    method: 'GET',
      headers: {
         'Content-Type': 'application/json',
        'Authorization': `Bearer ${authData?.token}`,
    }
  }
    )
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  return (
    <div className="space-y-10">
      <header className="flex flex-row justify-around">
        <Title title="Project RS react" />
        <div className="flex flex-row">
          <PrimaryButton onClick={deconnect} title="Se deconnecter" />

        </div>
      </header>
      <main className="grid grid-cols-3 gap-4 my-8">
        <section className="col-span-2 grid lg:grid-cols-3 md:grid-cols-2 gap-4 space-y-4">
          {posts.length > 0 ? posts.map(post => <PostCard 
            key={post.id}
              userId={post.id}
              title={post.title}
              body={post.body}
              image="https://www.convosight.com/blogs/wp-content/uploads/2023/01/How-to-Post-Anonymously-on-Facebook-Group-copy.jpg"
              userName= {`${authData?.user?.firstName}`}
              userImage="https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
              id={post.id}
              likes={10}
              date="il y a 2 jours"
           />) : <div>
              <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <path d="M 130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>
              </svg>
           </div>
          }
        </section>
        <aside className="px-10  rounded-xl py-10">
            <h1 className="text-2xl font-bold text-center pb-5 ">Ajouter une publication</h1>
            <form action="" className="space-y-4">
                <TextField type="text" placeholder="titre" labelStyle={"text-black"}  inputStyle={"bg-transparent border-2 border-gray-600 rounded-lg"}  />
                <textarea name="" id=""  rows="10" placeholder="contenu" className="border-2 border-gray-800 rounded-lg p-2 w-full"></textarea>
                <input type="file" className="" />
                <PrimaryButton title="publier" />
            </form>
        </aside>
      </main>
      <footer className="flex flex-row justify-center items-end">
        Footer
      </footer>
    </div>
  )
}
