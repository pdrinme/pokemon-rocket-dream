import './App.css'


function App() {

  return (
    <>
    <header class="grid gap-2 bg-gray-950 rounded-2xl static h-30 text-white">
      <div class="bg-gray-950 fixed rounded-2xl">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Team_Rocket_Logo.svg/3840px-Team_Rocket_Logo.svg.png" class="max-w-30 max-h-30 p-3 " />
      </div>
      <div class="text-end grid gap-2 pr-3">
        <a href="whoheknow">Quem nos somos?</a>
        <a href="cause">Nossa causa</a>
        <a class="comewithus">Juntisse a nos</a>
      </div>
    </header>
    <body class='bg-gray-800'>
      <section class="whoheknow p-2">
        <div class="bg-gray-600 justify-self-center min-w-min w-250 flex gap-2 rounded-2xl p-2">
          <div class="p-3">
            <h1 class="text-3xl text-white pb-1">Boas Vindas a Equipe <h1 class="pb-1 text-3xl text-red-600 inline">ROCKET</h1></h1>
            <p class="justify-self-auto text-white pt-1">A Equipe Rocket é uma organização dedicada a expandir seu domínio e influência em todas as regiões. Atuamos nas sombras, com estratégia, tecnologia e ambição, sempre em busca de poder, controle e raros Pokémon. Nosso objetivo é claro: moldar o mundo de acordo com nossos próprios ideais — custe o que custar.</p>
          </div>
          <img src="https://i.etsystatic.com/11377579/r/il/eccbb0/4027137712/il_fullxfull.4027137712_b5m0.jpg" class="max-w-100 max-h-100 justify-self-end rounded-2xl p-2" />
        </div>
        </section>
        <section class="cause p-2">
          <div class="bg-gray-600 justify-self-center min-w-min w-290 grid gap-2 rounded-2xl p-2">
            <div class="flex">
              <div class="p-2">
                <h2 class="text-2xl text-white">Nossa Causa</h2>
                <p class="text-white pt-2">A causa da Equipe Rocket nasce da convicção de que o mundo precisa de controle, direção e liderança forte. Acreditamos que o verdadeiro poder está na posse de Pokémon raros e no uso estratégico da tecnologia, recursos que não devem permanecer nas mãos de treinadores comuns ou de sistemas ineficientes. Nosso propósito é reunir esse poder, estudá-lo e utilizá-lo para moldar uma nova ordem. Agimos onde outros hesitam, tomamos o que é necessário e avançamos sem remorso. Para a Equipe Rocket, não se trata apenas de ambição, mas de visão: criar um mundo onde a força dita as regras e o futuro pertence àqueles que têm coragem de conquistá-lo.</p>
              </div>
            <div class="justify-items-center">
              <p class="text-white text-xl">Veja a nossa melhor dupla da equipe <p class="text-red-600 text-xl inline">rocket</p>!</p>
              <iframe class="rounded-2xl" width="560" height="315" src="https://www.youtube.com/embed/OHCarmKeBTw?si=AdZuTIUxq5cJcwec" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
          </div>
        </section>
        <section class="comewithus p-2">
          <div class="bg-gray-600 justify-self-center min-w-min w-290 grid gap-2 rounded-2xl p-2">
            <form>
            </form>
          </div>
        </section>
    </body>
    </>
  )
}

export default App
