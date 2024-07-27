<script setup>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import { onMounted, ref, watch } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import showdown from 'showdown'

const route = useRoute()
const othersProjects = ref([])


//EN CASO DE QUE LA IMAGEN SE CAMBIE SE CARGA UNA NUEVA FOTO
const changeImage = (position) => {
  let image_principal = document.getElementById('image_principal')
  image_principal.src = new URL(
    `../../assets/images/proyectos/${route.params.slug.replaceAll(' ', '_')}/${position + 1}.png`,
    import.meta.url
  )

  document.querySelectorAll('#btn_image_change').forEach((btn, index) => {
    if (index == position) {
      btn.style.filter = 'contrast(0.4)'
    } else {
      btn.style.filter = 'contrast(1)'
    }
  })
}

//SE BUSCA LAS IMAGENES
const getImage = (position) => {
  return new URL(
    `../../assets/images/proyectos/${route.params.slug.replaceAll(' ', '_')}/${position + 1}.png`,
    import.meta.url
  )
}

const getImageOthers = (folderName) => {
  return new URL(`../../assets/images/proyectos/${folderName}/1.png`, import.meta.url)
}

//SE CARGA EL CONTENIDO MARKDOWN DE LA SECCION DE LA PAGINA
const markDownContent = async () => {
  let url = new URL(`../../markdown/${route.params.slug}.md`, import.meta.url)
  let response = await fetch(url).catch((error) => console.log(error))
  let data = await response.text()
  let converter = new showdown.Converter()
  document.getElementById('description').innerHTML = converter.makeHtml(data).replace(/[ ]*\n/g, "<br />\n")
}

//POSICIONAR AL CAMBIAR DE URL ARRIBA
const scrollToUp = () => {
  window.scrollTo(0, 0)
}


const getOthersProjects = async () => {
  let list = []
  let url = new URL(`../../json/project.json`, import.meta.url)
  let reponse = await fetch(url)
  let data = await reponse.json()
  let count = 0
  for (const [index, project] of data.entries()) {
    if(project.image_is_principal == false){
        list.push({
          name: project.name
        })
        count++
    }
  }
  return list
}

watch(route, (newX) => {
  changeImage(0)
  markDownContent()
})

onMounted( async () => {
  changeImage(0)
  scrollToUp()
  markDownContent()
  othersProjects.value = await getOthersProjects()
})

onBeforeRouteUpdate( async () => {
  scrollToUp()
  othersProjects.value = await getOthersProjects()  
})

</script>

<template>
  <div>
    <Header menuModel="2" />
    <main>
    <div class="lg:mx-12 xl:mx-16 md:mx-12 min-[300px]:mx-8 grid grid-rows-1 gap-2 min-[300px]:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mt-20 mb-12">
      <div>
        <!-- <div class="flex justify-between gap-4">
          <div class="w-32">
            <div class="">
              <button @click="changeImage(0)" id="btn_image_change">
                <img :src="getImage(0)" alt="fonseplus" class="w-full" />
              </button>
            </div>
          </div>
          <div class="w-32">
            <div class="">
              <button @click="changeImage(1)" id="btn_image_change">
                <img :src="getImage(1)" alt="fonseplus" class="w-full" />
              </button>
            </div>
          </div>
          <div class="w-32">
            <div class="">
              <button @click="changeImage(2)" id="btn_image_change">
                <img :src="getImage(2)" alt="fonseplus" class="w-full" />
              </button>
            </div>
          </div>
          <div class="w-32">
            <div class="">
              <button @click="changeImage(3)" id="btn_image_change">
                <img :src="getImage(3)" alt="fonseplus" class="w-full" />
              </button>
            </div>
          </div>
          <div class="w-32">
            <div>
              <button @click="changeImage(4)" id="btn_image_change">
                <img :src="getImage(4)" alt="fonseplus" class="w-full" />
              </button>
            </div>
          </div>
        </div> -->
        <div class="flex flex-row">
          <div class="flex-1">
            <div>
              
              <img :src="getImage(0)" id="image_principal" alt="xpanzion" class="w-full mx-auto pr-20 " />
            </div>
          </div>
        </div>
      </div>
      <div class="max-[500px]:mx-4">
        <div class="text-montserrat mb-4" id="description"></div>
        <div class="text-montserrat mb-4" id="website_link">

          <div class="grid grid-cols-3 justify-items-center w-3/12 py-5">
            
            <a href=""><img src="@/assets/images/iconos-links/icon-web.png" alt="" class="w-14 h-14">
            </a>
            <a href=""><img src="@/assets/images/iconos-links/icon-ig.png" alt="" class="w-14 h-14">
            </a>
            <a href=""><img src="@/assets/images/iconos-links/icon-fb.png" alt="" class="w-14 h-14">
            </a>

          </div>

        </div>
        <a
          href="https://api.whatsapp.com/send?phone=584121165984"
          target="_blank"
          class="text-montserrat text-2xl block  bg-black text-center text-white p-5 rounded-xl w-full font-bold"
          >Necesito un proyecto</a
        >
        
      </div>
    </div>

    


    <div class="grid grid-rows-1 grid-cols-1">
      <div class="mb-10 md:mx-0 xl:mx-20">
         <h2 class="lg:mx-12 md:mx-12 min-[300px]:mx-8 text-druk-wide-bold md:text-3xl min-[300px]:text-2xl lg:text-4xl xl:text-7xl  text-montserrat font-bold text-center py-12">
            Otros Proyectos
          </h2>
          <div class="flex flex-row gap-4 mt-6 flex-wrap min-[300px]:mx-0 max-[500px]:mx-8 md:mx-0 lg:mx-0">
            <div class="md:basis-2/5 min-[300px]:mx-auto md:mx-auto lg:mx-0 min-[300px]:basis-full lg:flex-1" v-for="(project, index) in othersProjects" :key="index">
              <div class="max-[500px]:mx-8">
                <RouterLink :to="`/proyectos/${project.name.replaceAll(' ', '-')}`">
                <img
                  :src="getImageOthers(project.name.replaceAll(' ', '_'))"
                  :alt="project.name.replaceAll(' ', '-')"
                  class="md:w-full hover:scale-95 transition-all"
                />
              </RouterLink>
              </div>
            </div>
          </div>
      </div>
    </div>
    </main>
    <Footer modelFooter="2" />
  </div>
</template>
