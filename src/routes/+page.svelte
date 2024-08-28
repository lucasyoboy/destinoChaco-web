<script>
    import Header from "../components/Header.svelte";
</script>
<section class="bg-[url('/img/hero.webp')] bg-cover bg-top">
    <div class="container mx-auto">
        <Header/>
        <div class="flex gap-5 flex-row items-center justify-center px-20 py-32">
            <div class="flex flex-row gap-10 items-center">
                <div>
                    <h1 class="text-5xl md:text-6xl  text-left font-bold leading-tight">Un Vieja <br> asegurado con <br> DESTINO <span class="font-black text-primary">CHACO</span></h1>
                    <div class="mt-5 flex flex-row gap-2">
                        <button class="w-1/2 btn btn-lg bg-primary text-accent uppercase text-lg">Viajero 
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-ramp-right" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M7 3l0 8.707" />
                                <path d="M11 7l-4 -4l-4 4" />
                                <path d="M17 14l4 -4l-4 -4" />
                                <path d="M7 21a11 11 0 0 1 11 -11h3" />
                            </svg>
                        </button>
                        <button class="w-1/2 btn btn-lg base-100 text-accent uppercase text-lg">Conductor <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-car" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
                          </svg></button>
                    </div>
                </div>
                <img src="/img/logo.png" class="object-scale-down bg-base-100 bg-opacity-75 p-10 rounded-md py-20 hidden lg:block" alt="">
            </div>
        </div>
        <a href="#sobre" class="text-xl font-bold uppercase flex flex-col items-center justify-center">¿Por qué Destino Chaco?
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bar-down" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="#EFEFEF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 20l0 -10" />
                <path d="M12 20l4 -4" />
                <path d="M12 20l-4 -4" />
                <path d="M4 4l16 0" />
            </svg>
        </a>
    </div>
</section>
<section class="container mx-auto px-5 py-14 text-center" id="sobre">
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-4xl uppercase">sobre destino <span class="text-primary font-bold">chaco</span></h1>
        <p>Información sobre la idea de Destino Chaco.</p>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dots" width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          </svg>
    </div>
    <p class="text-xl">
        En el pasado, quienes carecían de vehículo propio dependían de redes sociales como Facebook o WhatsApp para encontrar oportunidades de viaje al Chaco enfrentando riesgos y falta de certeza. DestinoChaco se presenta como una solución más segura y estructurada, conectando eficientemente a quienes necesitan trasladarse con aquellos que ofrecen espacio disponible, asegurando un viaje confiable y un regreso garantizado.
    </p>
</section>
