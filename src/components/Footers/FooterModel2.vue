<template>
    <div>
    <div class="grid grid-rows-1 grid-cols-1 bg-black md:pt-14 min-[300px]:pt-10 lg:pt-20 pb-16"> 
      <div class="flex flex-row flex-wrap relative z-10 bg-white lg:mx-28 md:mx-16 min-[300px]:mx-4 pt-12 px-12 pb-24 rounded-3xl">
        <div class="xl:flex-1 lg:basis-full md:basis-full min-[300px]:basis-full md:mb-8 min-[300px]:mb-8 lg:mb-8 xl:mb-0">
            <RouterLink to="/">
              <img src="@/assets/logo-black.png" alt="Xpanzion" class="w-3/4 mx-auto" />
            </RouterLink>
        </div>
        <div class="xl:flex-1 lg:basis-full md:basis-full min-[300px]:basis-full md:mb-8 min-[300px]:mb-8 lg:mb-8 xl:mb-0">
          <h3 class="text-druk-wide-bold min-[300px]:text-xl md:text-2xl uppercase md:text-center min-[300px]:text-center lg:text-left xl:text-center md:mx-0 min-[300px]:mx-0 lg:mx-16 xl:mr-11 mb-2">Interactua</h3>
          <nav>
            <ul class="flex flex-row list-none xl:justify-center lg:justify-start md:justify-center min-[300px]:justify-center md:ml-0 min-[300px]:ml-0 lg:ml-4">
              <li>
                <a href="">

                  <RouterLink to="/" class="block hover:text-gray-700 text-druk-wide-bold text-montserrat py-1 text-lg max-[400px]:text-center "
                    >Como podemos ayudarte</RouterLink>
                </a>
                <a href="">
                  <RouterLink to="#menu" class="block hover:text-gray-700 text-druk-wide-bold text-montserrat py-1 text-lg  max-[400px]:text-center"
                    >Nuestros servicios</RouterLink>
                </a>
                <a href="#realprojects">
                  <RouterLink to="#realprojects" class="block hover:text-gray-700 text-druk-wide-bold text-montserrat py-1 text-lg  max-[400px]:text-center"
                    >Proyectos realizados</RouterLink>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="contactos" class="xl:flex-1 lg:basis-full md:basis-full min-[300px]:basis-full">
          <h3 class="text-druk-wide-bold uppercase min-[300px]:text-xl md:text-2xl min-[300px]:text-center md:text-center lg:text-left xl:text-center md:mx-0 min-[300px]:mx-0 lg:mx-16 xl:mr-11 mb-2">Contactanos</h3>
          <div class="flex flex-row gap-3 md:justify-center xl:justify-center lg:justify-center md:ml-0 min-[300px]:ml-0 min-[300px]:justify-center md:mr-0 lg:mr-0">
            <div>
              <a href="https://api.whatsapp.com/send?phone=584121165984" target="_blank" class="w-auto text-4xl"><i class="fab fa-whatsapp hover:text-gray-700"></i></a>
            </div>
            <div>
              <a href="https://www.facebook.com/share/ix8mFMkH71DVkgCu/?mibextid=qi2Omg" class="w-auto text-4xl"><img src="@/assets/images/iconos-links/facebook-footer.png" class="w-10 h-10" alt=""></a>
            </div>
            <div>
                <a href="https://www.instagram.com/xpanzion_laagencia" target="_blank" class="w-auto text-4xl"><i class="fab fa-instagram hover:text-gray-700"></i></a>
              </div>

          </div>
        </div>
      </div>
    </div>
    </div>
</template>