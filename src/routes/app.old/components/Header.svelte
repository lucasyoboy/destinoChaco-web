<script>
  import AddModal from "./AddModal.svelte";
const detectDeviceType = () =>
  /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
    ? false
    : true;
</script>
<div class="navbar bg-transparent">
    <div class="navbar-start">
      <img src="/img/logo.png" alt="" class=" h-14">
    </div>
    <div class="navbar-end">

      {#if detectDeviceType()}
        <div role="alert" class="alert w-fit mr-5 hidden md:flex">
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
          <span>Recomendamos el uso del móvil para una mejor experiencia.</span>
        </div>
      {/if}
      <AddModal/>
    </div>
  </div>