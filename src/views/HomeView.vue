<script setup>
import { inject, ref, onBeforeMount, onMounted } from 'vue'
import emailjs from '@emailjs/browser'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


const swal = inject('$swal')
const form = ref({})
const projectPrincipal = ref('')
const othersProjects = ref([])

//SE BUSCA LA IMAGEN PRINCIPAL
const getPrincipalProject = async () => {
  let name = ''
  let url = new URL(`../json/project.json`, import.meta.url)
  let reponse = await fetch(url)
  let data = await reponse.json()
  for (const [index, project] of data.entries()) {
    if (project.image_is_principal == true) {
      name = project.name
    }
  }
  return name
}
//SE BUSCA LAS IMAGENES
const getImage = (folderName) => {
  return new URL(`../assets/images/proyectos/${folderName}/principal.webp`, import.meta.url)
}

//SE BUSCA LA LISTA DE PROYECTOS CARGADOS EN EL JSON
const getOthersProjects = async () => {
  let list = []
  let url = new URL(`../json/project.json`, import.meta.url)
  let reponse = await fetch(url)
  let data = await reponse.json()
  let count = 0
  for (const [index, project] of data.entries()) {
    if(count < 6){
      if (project.image_is_principal != true) {
        list.push({
          name: project.name
        })
        count++
      }
    }
  }
  return list
}

//SE HACE ENVIO DE EMAIL
const onSendEmail = () => {
  //SE MUESTRA MENSAJE
  swal({
    title: 'Enviando correo',
    text: 'Por favor espere',
    icon: 'info',
    showConfirmButton: false
  })

  //ENVIO DE FORMAULARIO
  emailjs
    .sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.value,
      import.meta.env.VITE_KEY_ID
    )
    .then(
      (result) => {
        if (result.status == 200) {
          swal({
            title: 'Correo enviado',
            text: 'Pronto nos pondremos en contacto contigo',
            icon: 'success',
            timer: 3000,
            showConfirmButton: false
          })
        }
      },
      (error) => {
        swal({
          title: 'Correo no envidoo',
          text: 'Upss.. no se pudo enviar tu mensaje',
          icon: 'error',
          showConfirmButton: true
        })
        console.log('FAILED...', error.text)
      }
    )
}

const detectScrollInSection = () => {
  let validate = false
  window.addEventListener('scroll', () => {
    const section = document.querySelector('#section')
    const sectionTop = section.offsetTop
    const sectionBottom = sectionTop + section.offsetHeight - 70

    if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
      console.log('Estás en la sección')
      if (validate == false) {
        let textAnimation = section.querySelector('#section_2_text_animation')
        textAnimation.classList.remove('section-2--text-animation--hide')
        textAnimation.classList.add('section-2--text-animation--show')
        validate = true
      }
    }
  })
}

const animation = () => {
  setTimeout(() => {
    document.querySelector('#section_title').querySelector('h1').classList.add('opacity-1')
    document.querySelector('#section_title').querySelector('p').classList.add('opacity-1')

    document.querySelector('#section_title').querySelector('h1').classList.remove('opacity-0')
    document.querySelector('#section_title').querySelector('p').classList.remove('opacity-0')
  }, 1800)
}

onMounted(async () => {
  animation()
  projectPrincipal.value = await getPrincipalProject()
  othersProjects.value = await getOthersProjects()
})

onBeforeMount(() => {
  detectScrollInSection()
})
</script>


<template>
  <div>
    <Header menuModel="1" />
    <main>
    <!-- SECCION 1 -->
    <section>
      <div class="grid grid-rows-1 grid-cols-12 lg:pb-40 xl:pt-10 min-[300px]:py-20 md:py-14 max-[400px]:mx-6 ">
        <div class="col-span-12 md:col-span-4 md:col-start-2 relative z-10 my-auto">
          <h2 class="text-druk-wide-bold min-[300px]:text-center md:text-left min-[300px]:text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase">
            Fabricamos tu marca digital desde cero 
          </h2>
          <div class="my-2">
            <p class="text-lg text-montserrat mt-5">
              Construimos marcas digitales desde las ideas, el concepto y el objetivo de cada
              emprendimiento hasta hacerlo realidad, dando vida a tu visión con creatividad y
              precisión.
            </p>
          </div>
          <div class="mt-16 min-[300px]:hidden md:hidden lg:inline-block">
            <img
              alt="Xpanzion imagen"
              class="md:w- lg:w-11/12 xl:w-full transform rotate-180"
              src="@/assets/images/home_points.png"
            />
          </div>
        </div>
        <div class="col-span-12 md:col-span-7 relative z-10 my-auto">
            <img
              alt="Xpanzion imagen"
              class="w-100 relative min-[300px]:top-0 md:-top-20"
              src="@/assets/images/head.png"
            />
        </div>
      </div>
    </section>

    <!-- SECCION 2 -->
    <section id="section">
      <div class="grid grid-rows-1 grid-cols-12 py-32 background-section-2 relative fix--section max-[400px]:mx-6 ">
        <div class="col-span-12 md:col-span-5 md:col-start-2 relative z-10">
          <img alt="Xpanzion imagen" class="w-100" src="@/assets/images/home_image_1.png" />
        </div>
        <div
          class="col-span-12 md:col-span-5 relative z-10 my-auto ml-4 section-2--text-animation--hide"
          id="section_2_text_animation"
        >
          <h2 class="text-druk-wide-bold md:text-3xl lg:text-4xl xl:text-5xl uppercase min-[300px]:text-center md:text-left">Creatividad y tecnologia</h2>
          <p class="xl:text-xl lg:text-xl md:text-lg text-montserrat mt-5">
            En Xpanzion no solo creamos marcas dgotales, las moldeamos desde la esencia. Nuestra
            diferenciación radica en funsionar creatividad y tecnología. Destacamos tu marca en un
            mercado saturado.
          </p>
        </div>
      </div>
    </section>

    <!-- SECCION 3 -->
    <section>
      <div class="relative grid grid-rows-1 grid-cols-12 background-section-3 text-white bg-black">
        <div class="col-span-12 md:col-span-12 relative z-10 mt-48 lg:mx-32 md:mx-12 max-[400px]:mx-6">
          <h2 class="text-druk-wide-bold md:text-2xl lg:text-4xl xl:text-5xl uppercase text-center">
            ¿Quieres xpandir tu marca?
          </h2>
          <p class="md:text-lg xl:text-2xl lg:text-xl text-montserrat font-light mt-5 text-center">
            Dejanos tu contacto para hablar de tu negocio, empresa o emprendimiento
          </p>
        </div>
        <div class="col-span-12 w-full mx-auto relative z-10 mt-16">
          <form ref="form" @submit.prevent="onSendEmail" class="text-center max-[400px]:mx-8">
            <div class="my-4 lg:w-2/4 md:w-9/12 mx-auto">
              <input
                type="text"
                placeholder="Nombre"
                name="client_name"
                class="px-4 py-5 text-montserrat border outline-none bg-black border-white w-full block"
              />
            </div>
            <div class="my-4 lg:w-2/4 md:w-9/12 mx-auto">
              <input
                type="number"
                placeholder="Telefono"
                name="client_phone"
                class="px-4 py-5 text-montserrat border outline-none bg-black border-white w-full block"
              />
            </div>
            <div class="my-4 lg:w-2/4 md:w-9/12 mx-auto">
              <input
                type="email"
                placeholder="Correo electronico"
                name="client_email"
                class="px-4 py-5 text-montserrat border outline-none bg-black border-white w-full block"
              />
            </div>
            <div class="my-4 lg:w-2/4 md:w-9/12 mx-auto">
              <textarea
                name="client_message"
                class="px-4 py-5 text-montserrat border outline-none bg-black border-white w-full block"
                cols="5"
                rows="5"
                placeholder="¿Que proyectos tienes?"
              ></textarea>
            </div>
            <div class="my-4 lg:w-2/4 md:w-9/12 mx-auto">
              <button
                type="submit"
                class="text-montserrat m-0 lg:text-xl md:text-lg font-bold rounded-md px-4 py-5 w-full cursor-pointer border border-white bg-white text-black transition duration-300 ease hover:text-white hover:bg-black"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- SECCION 4 -->
    <section class="bg-black md:pb-0 pb-10">
      <div class="relative grid grid-rows-1 grid-cols-12 background-section-4 text-white max-[400px]:mx-6">
        <div class="col-span-12 md:col-span-12 lg:mx-32 md:mx-12 relative z-10 pt-48 max-[400px]:pt-32 ">
          <h2 class="text-druk-wide-bold md:text-3xl xl:text-5xl lg:text-4xl text-3xl uppercase max-[400px]:text-center xs:text-center">Proyectos Reales</h2>
        </div>
      </div>
      <div class="grid md:grid-rows-1 md:grid-cols-1 pt-8 relative z-10">
        <div class="col-span-12 md:col-span-12 md:col-start-2 relative z-10">
          <div class="md:flex md:flex-row grid grid-cols-2 gap-4 mt-6 flex-wrap justify-center lg:mx-32 md:mx-8">
            <div class="flex-initial xl:w-2/5 lg:w-60 md:w-52" v-for="(project, index) in othersProjects" :key="index">
              <RouterLink :to="`/proyectos/${project.name.replaceAll(' ', '-')}`">
                <img
                  :src="getImage(project.name.replaceAll(' ', '_'))"
                  :alt="project.name.replaceAll(' ', '-')"
                  class="md:w-full min-[300px]:w-11/12 mx-auto hover:scale-95 transition-all"
                />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
     <!-- SECCION 5 -->

     <section class=" bg-black py-24 lg:px-10 2xl:px-0 md:px-10">
        <div class="grid grid-cols-1  2xl:py-10 xl:py-10 lg:py-10 md:py-10 sm:py-12 xs:py-12 xs:px-10 sm:px-0 md:gap-y-10 lg:gap-y-0 justify-items-center justify-self-center object-fit content-center place-items-center place-content-center place-self-center ">
         
            <div class="lg:flex w-full 2xl:flex-row xl:flex-row lg:flex-row xs:grid md:grid-cols-3 xs:grid-cols-2 justify-center gap-5 mt-10 pb-0 md:px-5 lg:px-0">

              <div class="flex 2xl:basis-1/12 xl:basis-1/12 lg:basis-2/12 md:basis-2/12 sm:basis-2/5 xs:basis-2/5 mx-1 mt-2 order-order-1 justify-center items-center">

                <img 
                  src="@/assets/images/logos-marcas/sdprime-logo.svg"
                  loading="lazy"
                  class="w-28 h-24 mx-2 "
                  alt="sdprime">

              </div>  


              <div class="flex 2xl:basis-1/12 xl:basis-1/12 lg:basis-2/12 md:basis-2/12 sm:basis-2/5 xs:basis-2/5 mx-1 mt-2 order-6 justify-center items-center">

                <img 
                  src="@/assets/images/logos-marcas/equinex-logo.svg"
                  loading="lazy"
                  class="w-32 h-32 mx-2"
                  alt="equinex">

              </div>

              
             
              <div class=" flex 2xl:basis-1/12 xl:basis-1/12 lg:basis-2/12 md:basis-2/12 sm:basis-2/5 xs:basis-2/5 mx-1 mt-2 order-4 justify-center items-center">

                <img 
                  src="@/assets/images/logos-marcas/prodsantarosa-logo.svg"
                  loading="lazy"
                  class="w-20 h-20 mx-2"
                  alt="santarosa">
              
              </div>

               <div class=" flex 2xl:basis-2/12 xl:basis-1/12 lg:basis-2/12 md:basis-2/12 sm:basis-2/5 xs:basis-2/5 mx-1 mt-2 order-5 justify-center items-center">

                <img 
                  src="@/assets/images/logos-marcas/stelarlink-logo.svg"
                  loading="lazy"
                  class="w-[300px] h-full mx-2 "
                  alt="stelarlink">
              
              </div> 
              
              <div class=" flex 2xl:basis-1/12 xl:basis-1/12 lg:basis-2/12 md:basis-2/12 sm:basis-2/5 xs:basis-2/5 mx-1 mt-2 order-3 justify-center items-center">

                <img 
                  src="@/assets/images/logos-marcas/sdpanel-logo.svg"
                  loading="lazy"
                  class="w-[150px] h-[180px] mx-2 scale-125 "
                  alt="sdpanel">
              
              </div>
                 <div class="flex 2xl:basis-2/12 xl:basis-1/12 lg:basis-2/12 md:basis-2/12 sm:basis-2/5 xs:basis-2/5 mx-1 mt-2 order-2 justify-center items-center">

                <img 
                  src="@/assets/images/logos-marcas/agriculture-logo.svg"
                  loading="lazy"
                  class="w-full h-10 mx-2"
                  alt="agriculture">
              
              </div>
             
            </div>

            <div class="lg:flex w-full 2xl:flex-row xl:flex-row lg:flex-row xs:grid md:grid-cols-3 xs:grid-cols-2 xs:gap-y-10 lg:gap-y-0 justify-center gap-5 md:px-5 lg:px-36">
              

              <div class=" flex 2xl:basis-3/12 xl:basis-1/12 lg:basis-2/12 md:basis-2/12 sm:basis-2/5 xs:basis-2/5 mx-1 mt- order-8 justify-center items-center">

                <img 
                  src="@/assets/images/logos-marcas/diamondbase-logo.svg"
                  loading="lazy"
                  class="w-full h-full mx-2"
                  alt="diamondbase">
              
              </div>
             
              <div class="flex 2xl:basis-2/12 xl:basis-1/12 lg:basis-2/12 md:basis-2/12 sm:basis-2/5 xs:basis-2/5 mx-1 mt-2 order-10 justify-center items-center md:col-span-3 lg:col-span-1">

                <img 
                  src="@/assets/images/logos-marcas/sdgames-blanco.svg"
                  loading="lazy"
                  class="w-24 h-28 mx-2"
                  alt="sdgames">
              
              </div>

               <div class="flex 2xl:basis-2/12 xl:basis-1/12 lg:basis-2/12 md:basis-2/12 sm:basis-2/5 xs:basis-2/5 mx-1 mt-2 order-9 justify-center items-center">

                <img 
                  src="@/assets/images/logos-marcas/keyzin-logo.svg"
                  loading="lazy"
                  class="lg:w-full md:w-2/4 lg:h-40 mx-2"
                  alt="keyzin">
              
              </div> 

              <div class="flex 2xl:basis-2/12 xl:basis-1/12 lg:basis-2/12 md:basis-2/12 sm:basis-2/5 xs:basis-2/5 mx-1 mt-2 order-7 justify-center items-center">

                <img 
                  src="@/assets/images/logos-marcas/girasol-logo.svg"
                  loading="lazy"
                  class="w-full h-28 mx-2"
                  alt="girasol">

              </div>
             
            </div>
        </div>
     </section>

    <!-- SECCION 6 -->
    <section>
      <div class="relative grid grid-rows-1 grid-cols-12 background-section-4 text-white">
        <div class="col-span-12 relative z-10 mx-14">
          <video autoplay muted loop class="w-full lg:pl-20 lg:pr-12 mt-12">
            <source src="@/assets/mp4/home-conocenos.mp4" type="video/mp4" />
          </video>
          <div class="col-span-12 absolute z-20 lg:mt-32 md:mt-24 left-0 right-0 top-0">
            <h2 class="text-druk-wide-bold md:text-3xl lg:text- 4xl xl:text-5xl uppercase text-center">Conoce a Xpanzion</h2>
          </div>
          <div class="col-span-12 absolute z-20 left-0 right-0 lg:top-36 md:top-36 ">
            <div class="flex flex-row flex-wrap justify-center w-full h-full">
              <div class="xl:basis-2/5 lg:basis-3/4 md:basis-3/4 lg:my-auto text-center">
                <p class="text-druk-wide-bold xl:text-4xl lg:text-2xl md:text-2xl lg:mt-20 xl:mt-56 min-[300px]:my-6">Forjadores de Futuros Digitales</p>
              </div>
              <div class="xl:basis-2/5 lg:basis-3/5 md:basis-3/4 lg:ml-12 md:mt-4 lg:mt-8 xl:mt-40 ">
                <p class="md:text-lg lg:text-2xl font-light text-montserrat">
                  Somos arquitectos de marcas digitales, construyendo el mañana hoy.
                  <span class="font-bold">Nuestra misión es impulsar</span> tu presencia en linea,
                  fusionando innovación y visión para crear un futuro
                </p>
                <p class="md:text-lg lg:text-2xl font-light text-montserrat mt-2 md:hidden min-[300px]:hidden lg:hidden xl:inline-block">
                  Como arquitectos de marcas digitales, entendemos la importancia de la presencia en
                  línea en el mundo actual.
                  <span class="font-bold">Nos dedicamos a construir soluciones</span> digitales que
                  representen verdaderamente tu visión y valores. Nos apasiona marcar la diferencia
                  en cada proyecto, comprometidos con la excelencia, la creatividad y la innovación.
                  <span class="font-bold"
                    >Con Xpanzion, El futuro digital de tu marca está en buenas manos.</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCION 7 -->
    <section class="bg-black sm:pt-10 xs:pt-48 pb-10">

      <div class="relative grid grid-rows-1 grid-cols-12 background-section-4 text-white max-[400px]:mx-6">
        <div class="col-span-12 md:col-span-12 lg:mx-32 md:mx-12 relative z-10 pt-48 max-[400px]:pt-32 ">
          <h2 class="text-druk-wide-bold xs:text-4xl sm:text-5xl md:text-4xl xl:text-6xl lg:text-8xl uppercase max-[400px]:text-center xs:text-center md:pb-32 xs:pb-16 ">TEAM Xpanzion</h2>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 justify-items-center lg:gap-y-10 md:gap-y-16 w-full 2xl:px-60 lg:px-28 md:px-24 sm:px-24 sm:gap-y-10 xs:px-10 xs:gap-y-10 lg:gap-5 md:gap-0   ">

        <div class="max-w-sm rounded-b-[50px] bg-white xs:scale-90">
            <img class="w-[210px] h-[200px] object-cover grayscale hover:grayscale-0 " src="@/assets/images/teamxpanzion/ceo.jpeg" alt="Sunset in the mountains">

            <div class="px-4 py-4 text-center leading-3">
              <div class="font-extrabold text-sm mb-1">Angel Garaban</div>
              <p class="font-extrabold text-xl mb-2">
               CEO
              </p>

              <p class="font-medium italic ">
               Xatencion
              </p>
            </div>

        </div>

        <div class=" max-w-sm rounded-b-[50px] bg-white xs:scale-90">
            <img class="w-[210px] h-[200px] object-cover grayscale hover:grayscale-0" src="@/assets/images/teamxpanzion/cooxdiseñador.png" alt="Sunset in the mountains">

            <div class="px-4 py-4 text-center">
              <div class="font-extrabold text-sm mb-1">Jhon Mendoza</div>
              <p class="font-extrabold text-xl mb-2">
               COO
              </p>

              <p class="font-medium italic ">
               Xdiseño 
              </p>
            </div>

        </div>


        <div class=" max-w-sm rounded-b-[50px] bg-white xs:scale-90">
            <img class="w-[210px] h-[200px] object-cover grayscale hover:grayscale-0 " src="@/assets/images/teamxpanzion/xdesarrollodaniel.jpeg" alt="Sunset in the mountains">

            <div class="px-4 py-4 text-center">
              <div class="font-extrabold text-sm mb-1">Daniel Yepez</div>
              <p class="font-extrabold text-xl mb-2">
               Web Developer
              </p>

              <p class="font-medium italic ">
               Xdesarrollo
              </p>
            </div>

        </div>


        <div class=" max-w-sm rounded-b-[50px] bg-white xs:scale-90  ">
            <img class="w-[210px] h-[200px] grayscale hover:grayscale-0" src="@/assets/images/teamxpanzion/xdesarrolladorhenry.jpeg" alt="Sunset in the mountains">

            <div class="px-4 py-4 text-center">
              <div class="font-extrabold text-sm mb-1">Henry Gonzalez</div>
              <p class="font-extrabold text-xl mb-2">
               Web Developer
              </p>

              <p class="font-medium italic ">
               Xdesarrollo
              </p>
            </div>

        </div>

        <div class=" max-w-sm rounded-b-[50px] bg-white grid xs:col-span-2 lg:col-span-4 xl:col-span-1 xs:scale-90">
            <img class="w-[210px] h-[200px] object-cover grayscale hover:grayscale-0  " src="@/assets/images/teamxpanzion/sdsoporte.jpeg" alt="Sunset in the mountains">

            <div class="px-4 py-4 text-center">
              <div class="font-extrabold text-sm mb-1">Miguel Ibarra</div>
              <p class="font-extrabold text-xl mb-2">
                Developer
              </p>

              <p class="font-medium italic ">
               Xsoportee
              </p>
            </div>

        </div>

      </div>
    </section>


    
    

    <img class="hidden" src="@/assets/images/iconos-links/icon-ig.png" alt="">
    <img class="hidden" src="@/assets/images/iconos-links/icon-web.png" alt="">
    <img class="hidden" src="@/assets/images/iconos-links/icon-fb.png" alt="">
    </main>    
    <Footer modelFooter="1" />
  </div>
</template>
