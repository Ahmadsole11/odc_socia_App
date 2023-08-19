import Layout from "../../pages/auth/Layout"
import TextField from "../../components/TextField"
import Title from "../../components/Title"
import PrimaryButton from "../../components/primaryButton"
import LinkTo from "../../components/LinkTo"
import Swal from 'sweetalert2'



import { useState } from "react"

export default function SignUp(){
  const [lastName, setLastName] = useState('')
  const [firstName, setfirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    const user = {lastName, firstName, email, password, passwordConfirmation}
    if(password !== passwordConfirmation){
      Swal.fire(
        'two password diffrent!',
        '',
        'warning'
      )
    }else if(lastName && firstName && email && password && passwordConfirmation === ""){
      Swal.fire(
        'form is empty',
        '',
        'warning'
      )
   }
    else{
    fetch(
      'http://localhost:5000/auth/register', 
      {
          method: "post",
          mode:'cors',
          body: JSON.stringify(user),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(()=>{
        Swal.fire(
          'Registered successfully!',
          '',
          'success'
        )
      }) 
    }

  }
  return (
    <Layout>
        <div className="shadow-slate-950/100 p-20 shadow-lg rounded-lg w-98  space-y-8 text-black bg-slate-50/50">
        <div className="w-full">
            <form className="" action="">
                <Title title="Inscription" />
                <div>
                <TextField onChange={(e) => setLastName(e.target.value) } label="Nom" type="text" placeholder="Votre nom" />
                <TextField onChange={(e) => setfirstName(e.target.value) } label="Prenom" type="text" placeholder="Votre prenom" />
                </div>
                <TextField onChange={(e) => setEmail(e.target.value) } label="Email" type="email" placeholder="Email" />
                <TextField onChange={(e) => setPassword(e.target.value) } label="Mot de passe" type="password" placeholder="Mot de passe" />
                <TextField onChange={(e) => setPasswordConfirmation(e.target.value) } label="confirmer le mot de passe" type="password" placeholder="confirmer le mot de passe" />
                <PrimaryButton onClick={handleSubmit} type="submit" title="S'inscrire" />
            </form>
            <div className="flex w-full pt-8">
            <LinkTo text="Vous avez deja un compte?" target="/sign_in" link="Connectez-vous" />
            </div>
            </div>
        </div>
    </Layout>

    
  )
}
