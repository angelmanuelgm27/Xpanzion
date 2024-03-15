<script setup>
import { defineProps, onMounted, ref } from 'vue'
const props = defineProps({
  classAdd: {
    type: String
  },
  nameId: {
    type: String
  }
})

const othersProjects = ref([])

const getOthersProjects = async () => {
  let list = []
  let url = new URL(`../../../json/project.json`, import.meta.url)
  let reponse = await fetch(url).catch((error) => console.log(error))
  let data = await reponse.json()
  let count = 0
  for (const [index, project] of data.entries()) {
    if (count < 4) {
      list.push({
        name: project.name
      })
      count++
    }
  }
  return list
}

const getImage = (folderName) => {
  return new URL(`../../../assets/images/proyectos/${folderName}/1.png`, import.meta.url)
}

onMounted(async () => {
  othersProjects.value = await getOthersProjects()
})
</script>
<template>
  <nav class="" :id="props.nameId">
    <ul
      class="lg:flex transition-all ease-out duration-300 md:bg-white md:h-screen md:w-96 lg:w-auto lg:h-auto lg:bg-transparent lg:flex-row justify-center gap-4 list-none lg:static md:flex-col md:fixed md:-left-96 md:-z-10 lg:z-auto lg:top-0 md:top-20 min-[300px]:bg-white min-[300px]:h-screen min-[300px]:w-96 min-[300px]:flex-col min-[300px]:fixed min-[300px]:-left-96 min-[300px]:-z-10 min-[300px]:top-20"
      id="menu"
    >
      <li class="item-menu">
       <span
          :class="
            props.classAdd +
            ' cursor-pointer block text-druk-wide-bold text-sm item-menu--border relative md:pl-7 md:hover:bg-black lg:hover:bg-transparent lg:py-8 lg:px-3 md:py-4 min-[300px]:pl-7 min-[300px]:hover:bg-black  min-[300px]:hover:text-white  min-[300px]:py-4 uppercase'
          "
          >Proyectos</span>
        <div class="dropdown-menu bg-white lg:inline-block">
          
          <!--  ITEM DE MENU -->
          <div class="grid grid-rows-1 min-[300px]:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div class="w-2/4 ml-auto my-4 min-[300px]:hidden md:hidden lg:inline-block">
              <div class="flex flex-row flex-wrap gap-2 justify-center">
                <div class="basis-1/3" v-for="project in othersProjects" :key="project.name">
                  <img
                    :src="getImage(project.name)"
                    :alt="project.name"
                    class="w-full border border-black"
                  />
                </div>
              </div>
            </div>
            <div class="lg:mt-4 min-[300px]:my-6 md:my-6">
              <h3 class="text-druk-wide-bold uppercase">Proyectos Reales</h3>
              <ul v-for="project in othersProjects" :key="project.name">
                <li class="md:my-2 lg:my-0">
                  <RouterLink
                    :to="'/proyectos/' + project.name"
                    class="text-montserrat font-semibold uppercase hover:text-gray-700"
                    >{{ project.name }}</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li class="item-menu">
        <span
          :class="
            props.classAdd +
            ' cursor-pointer block text-druk-wide-bold text-sm item-menu--border relative md:pl-7  min-[300px]:hover:text-white md:hover:bg-neutral-950 lg:hover:bg-transparent lg:py-8 lg:px-3 md:py-4 min-[300px]:pl-7 min-[300px]:hover:bg-neutral-950 min-[300px]:py-4 uppercase'
          "
          >Servicios</span
        >
        <div class="dropdown-menu bg-white min-[300px]:py-4 lg:py-0 lg:inline-block">
          <!--  ITEM DE MENU -->
          <div class="grid grid-rows-1 grid-cols-1 services">
            <div class="md:px-4 min-[300px]:px-4 lg:px-12">
              <div class="flex flex-row flex-wrap gap-4">
                <div class="md:basis-full min-[300px]:basis-full lg:flex-1 services--item md:mt-2 min-[300px]:mt-2 lg:my-4">
                  <a href="https://api.whatsapp.com/send?phone=584161199224" target="_blank" class="block">
                    <div
                      class="lg:bg-black md:bg-white min-[300px]:bg-white min-[300px]:rounded-none md:rounded-none lg:rounded-md md:p-0 min-[300px]:p-0 lg:p-4 md:h-0 min-[300px]:h-0 lg:h-60 relative services--modify-content"
                    >
                      <h4
                        class="text-druk-wide-bold md:text-lg min-[300px]:text-lg lg:text-3xl uppercase md:text-black lg:text-white"
                      >
                        Marketing Digital
                      </h4>
                      <div class="services--image-position md:hidden min-[300px]:hidden lg:inline-block">
                        <img
                          alt="Xpanzion marketing ditial"
                          class="w-1/4 block ml-auto mr-4"
                          src="@/assets/images/recurso_2.png"
                        />
                      </div>
                    </div>
                    <div class="item-menu-text--animation md:hidden min-[300px]:hidden lg:inline-block">
                      <p class="text-montserrat my-3">
                        Amplifica tu presencia en línea y llega a nuevas audiencias con estrategias
                        de marketing digital innovadoras. Desde campañas de redes sociales hasta SEO
                        y PPC, impulsamos el crecimiento de tu negocio en el mundo digital
                      </p>
                    </div>
                    <div class="md:my-0 min-[300px]:my-0 md:mt-11 min-[300px]:mt-11 lg:my-8 item-menu-button--animation">
                      <p
                        class="uppercase p-4 bg-black block w-full text-center text-white rounded-xl min-[300px]:text-lg md:text-lg lg:text-2xl font-bold"
                        >Contratar</p>
                    </div>
                  </a>
                </div>
                <div class="md:basis-full min-[300px]:basis-full lg:flex-1 services--item md:mt-2 min-[300px]:mt-2 lg:my-4">
                  <a href="https://api.whatsapp.com/send?phone=584161199224" target="_blank" class="block">
                    <div
                      class="lg:bg-black md:bg-white min-[300px]:bg-white md:rounded-none min-[300px]:rounded-none lg:rounded-md md:p-0 min-[300px]:p-0 lg:p-4 md:h-0 min-[300px]:h-0 lg:h-60 services--modify-content relative"
                    >
                      <h4
                        class="text-druk-wide-bold min-[300px]:text-lg md:text-lg lg:text-2xl uppercase md:text-black min-[300px]:text-black lg:text-white"
                      >
                        Diseño Grafico
                      </h4>
                      <div class="services--image-position min-[300px]:hidden md:hidden lg:inline-block">
                        <img
                          alt="Xpanzion marketing ditial"
                          class="w-1/4 block ml-auto mr-4"
                          src="@/assets/images/recurso_3.png"
                        />
                      </div>
                    </div>
                    <div class="item-menu-text--animation md:hidden min-[300px]:hidden lg:inline-block">
                      <p class="text-montserrat my-3">
                        Diferénciate con una identidad visual impactante y una experiencia de
                        usuario cautivadora. Desde logotipos memorables hasta interfaces intuitivas,
                        creamos un diseño que conecta emocionalmente con tu audiencia y impulsa la
                        participación y conversión
                      </p>
                    </div>
                    <div class="md:my-0 min-[300px]:my-0 md:mt-11 min-[300px]:mt-11 lg:my-8 item-menu-button--animation">
                      <p
                        class="uppercase p-4 bg-black block w-full text-center text-white rounded-xl min-[300px]:text-lg md:text-lg lg:text-2xl font-bold"
                        >Contratar</p>
                    </div>
                  </a>
                </div>
                <div class="md:basis-full min-[300px]:basis-full lg:flex-1 services--item min-[300px]:mt-2 md:mt-2 lg:my-4">
                  <a href="https://api.whatsapp.com/send?phone=584161199224" target="_blank" class="block">
                    <div
                      class="lg:bg-black md:bg-white min-[300px]:bg-white md:rounded-none min-[300px]:rounded-none lg:rounded-md md:p-0 min-[300px]:p-0 lg:p-4 md:h-0 min-[300px]:h-0 lg:h-60 services--modify-content relative"
                    >
                      <h4 class="text-druk-wide-bold md:text-lg min-[300px]:text-lg lg:text-2xl  uppercase md:text-black min-[300px]:text-black lg:text-white">
                        Desarrollo Web
                      </h4>
                      <div class="services--image-position md:hidden min-[300px]:hidden lg:inline-block">
                        <img
                          alt="Xpanzion marketing ditial"
                          class="w-1/4 block ml-auto mr-4"
                          src="@/assets/images/recurso_1.png"
                        />
                      </div>
                    </div>
                    <div class="item-menu-text--animation md:hidden min-[300px]:hidden lg:inline-block">
                      <p class="text-montserrat my-3">
                        Haz realidad tus ideas digitales con soluciones tecnológicas a medida. Desde
                        aplicaciones móviles personalizadas hasta sitios web responsivos y avanzados
                        sistemas de comercio electrónico, creamos herramientas que potencian la
                        eficiencia y el crecimiento de tu negocio en línea
                      </p>
                    </div>
                    <div class="md:my-0 min-[300px]:my-0 md:mt-11 min-[300px]:mt-11 lg:my-10 item-menu-button--animation">
                      <p
                        class="uppercase p-4 bg-black block w-full text-center text-white rounded-xl md:text-lg min-[300px]:text-lg lg:text-2xl font-bold"
                        >Contratar</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="item-menu">
        <a
          href="https://api.whatsapp.com/send?phone=584161199224"
          target="_blank"
          :class="
            props.classAdd + 
            ' cursor-pointer block text-druk-wide-bold text-sm item-menu--border relative md:pl-7  min-[300px]:hover:text-white min-[300px]:pl-7 md:hover:bg-neutral-950 lg:hover:bg-transparent min-[300px]:hover:bg-neutral-950 lg:py-8 lg:px-3 md:py-4 min-[300px]:py-4 uppercase'
          "
          >Contacto</a>
      </li>
    </ul>
  </nav>
</template>
