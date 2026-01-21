import './App.css'

function App() {

  return (
    <>
    <header class="flex gap-2 justify-items-center bg-gray-950 rounded-2xl static h-30 text-white">
      <div class="bg-gray-950 fixed rounded-2xl">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Team_Rocket_Logo.svg/3840px-Team_Rocket_Logo.svg.png" class="max-w-30 max-h-30 p-3 " />
      </div>
      <p class="text-end">Quem nos somos?</p>
      <p class="text-end">Nossa causa</p>
      <p class="text-end">Juntisse a nos</p>
    </header>
    <body class='bg-gray-800'>
      <div class="bg-gray-600 justify-self-center min-w-min w-250 flex gap-2">
        <div class="p-3">
          <h1 class="text-3xl text-white pb-1">Boas Vindas a Equipe ROCKET</h1>
          <p class="justify-self-auto">Preparem-se para encrenca! Encrenca em dobro! Para proteger o mundo da devastação! Para unir todos os povos dentro da nossa nação! Para denunciar os males da verdade e do amor! Para estender nosso alcance às estrelas lá no alto! Jessie! James! Equipe Rocket, decole na velocidade da luz! Renda-se agora ou prepare-se para lutar! Meowth, é isso mesmo!</p>
        </div>
        <img src="https://i.etsystatic.com/11377579/r/il/eccbb0/4027137712/il_fullxfull.4027137712_b5m0.jpg" class="max-w-100 max-h-100 justify-self-end rounded-2xl p-2" />
      </div>
    </body>
    </>
  )
}

export default App
