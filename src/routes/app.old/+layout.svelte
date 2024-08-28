<script>
    import Header from "./components/Header.svelte";
    import "../../app.css";
</script>
<div class="text-accent">
  <Header/>
<div class="container mx-auto px-5">
  <div role="alert" class="alert w-full rounded-md my-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="h-6 w-6 shrink-0 stroke-current">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>Recordamos que eres responsable de tu propia seguridad al organizar o realizar un viaje. Toma las precauciones necesarias y verifica la información antes de viajar con otros.</span>
  </div>
  <slot />
</div>
<div class="btm-nav">
    <a class="active" href="/app">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      <span class="btm-nav-label">Inicio</span>
    </a>
    <a class="" href="/rides">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-road" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 19l4 -14" />
            <path d="M16 5l4 14" />
            <path d="M12 8v-2" />
            <path d="M12 13v-2" />
            <path d="M12 18v-2" />
          </svg>
      <span class="btm-nav-label">Mis Viajes</span>
        </a>
    <a href="/account">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
      <span class="btm-nav-label">Cuenta</span>
    </a>
  </div>
</div>