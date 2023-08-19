import Layout from "../../pages/auth/Layout"
import TextField from "../../components/TextField"
import Title from "../../components/Title"
import PrimaryButton from "../../components/primaryButton"
import LinkTo from "../../components/LinkTo"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

import { useState } from "react"

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

const handleSubmit = (e)=>{
  e.preventDefault();
  const user = {email, password}
  fetch('http://localhost:5000/auth/login',
      {
        method: "post",
        mode:'cors',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
    }).then((response)=> response.json()
    ).then((data)=>{
      if(data.token){
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/')
      }else{
        Swal.fire(
          'Password or email invalid',
          '',
          'warning'
        )
      }
    }).catch(()=>{
      Swal.fire(
        'Bad data',
        '',
        'error'
      )
    })

}

  return (
    <Layout>
        <div className="shadow-slate-950/100 p-20 shadow-lg rounded-lg   space-y-8 text-black bg-slate-50/50">
            <div className="w-full">
            <form className="" action="">
                <Title title="Connexion" />
                <TextField onChange={(e) => setEmail(e.target.value)} label="Email" type="email" placeholder="Email" />
                <TextField onChange={(e) => setPassword(e.target.value) } label="Mot de passe" type="password" placeholder="Mot de passe" />
                <PrimaryButton onClick={handleSubmit} type="submit" title="Se connecter" />
            </form>
            <div className="flex w-full pt-8">
            <LinkTo text="Vous n'avez pas un compte?" target="/sign_in" link="S'inscrire" />
            </div>
            </div>

        </div>
    </Layout>
  )
}
