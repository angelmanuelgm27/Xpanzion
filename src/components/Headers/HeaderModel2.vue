<script setup>
import { defineProps, watch } from 'vue'
import Nav from './Menu/Nav.vue'
import { useRoute } from 'vue-router';
const props = defineProps({
  slugName: { type: String }
})


const route = useRoute()

const openMenu = () => {
  console.log('openMenu')
  if (window.matchMedia("(min-width: 501px)").matches && window.matchMedia("(max-width: 900px)").matches){ 
    let menu = document.querySelector('#menu')
    
    //MD MENU
    if(menu.classList.contains('md:-left-96')) {
        menu.classList.remove('md:-left-96')
        menu.classList.add('md:left-0')
        menu.classList.add('modifiy-menu')
        return
    }
    if(menu.classList.contains('md:left-0')) {
        menu.classList.add('md:-left-96') 
        menu.classList.remove('md:left-0')
        menu.classList.remove('modifiy-menu')
        return
    }
  }

  if (window.matchMedia("(min-width: 300px)").matches && window.matchMedia("(max-width: 500px)").matches){ 
    let menu = document.querySelector('#menu')
    
    //MD MENU
    if(menu.classList.contains('min-[300px]:-left-96')) {
        menu.classList.remove('min-[300px]:-left-96')
        menu.classList.add('min-[300px]:left-0')
        menu.classList.add('modifiy-menu')
        return
    }
    if(menu.classList.contains('min-[300px]:left-0')) {
        menu.classList.add('min-[300px]:-left-96') 
        menu.classList.remove('min-[300px]:left-0')
        menu.classList.remove('modifiy-menu')
        return
    }
  }
}

watch(route, (newX) => {
  let tmp = ''
  if(tmp != newX.path){
    openMenu()
  }else{
    tmp = newX.path
  }
})

</script>

<template>
  <div>
    <header class="relative">
      <div class="grid grid-rows-1 grid-flow-col gap-4 bg-white min-[300px]:fixed lg:relative min-[300px]:w-full lg:w-auto min-[300px]:z-20 lg:z-auto">
        <div class="lg:py-5 min-[300px]:py-6 px-4 min-[300px]:ml-8 lg:mx-auto">
          <div>
            <RouterLink to="/" class="block sm:w-40 md:w-60 lg:w-60">
              <img alt="Vue logo" class="w-60 block" src="@/assets/logo-black.png" />
            </RouterLink>
          </div>
        </div>
        <div class="my-auto">
          <div>
            <div class="min-[300px]:inline-block lg:hidden min-[300px]:absolute min-[300px]:right-8 min-[300px]:top-3">
               <button type="button" @click="openMenu" class="md:bg-black min-[300px]:bg-black py-2 px-4 rounded-md"><i class="fa fa-bars text-2xl min-[300px]:text-white" aria-hidden="true"></i></button>
            </div>
            <!-- CONTENIDO DE MENU -->
            <Nav classAdd="text-dark" nameId="header-model-2" />
          </div>
        </div>
        <div class="my-auto min-[300px]:hidden lg:inline-block">
          <div>
            <div class="flex flex-row gap-4 px-4 justify-center">
              <div>
                <a href="https://api.whatsapp.com/send?phone=584121165984" class="block text-3xl">
                  <i class="fab fa-whatsapp"></i>
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/xpanzion_laagencia" class="block text-3xl">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div>
                <a href="https://www.facebook.com/share/ix8mFMkH71DVkgCu/?mibextid=qi2Omg" class="block text-3xl">
                  <i class="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-rows-1 grid-flow-col gap-4">
        <div class="relative" id="main_blur">
          <video autoplay muted loop class="w-full min-[300px]:top-16 md:top-0">
            <source src="@/assets/mp4/proyectos-descripcion.mp4" type="video/mp4" />
          </video>
          <div
            class="absolute lg:top-0 md:top-8 min-[300px]:top-8 z-10 w-full h-full flex gap-4 flex-col justify-center items-center"
          >
            <h1 class="xl:text-8xl lg:text-7xl md:text-6xl min-[300px]:text-4xl text-montserrat font-black uppercase">
              {{ props.slugName }}
            </h1>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
