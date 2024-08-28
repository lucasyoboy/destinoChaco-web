<script>
  import LoginModal from "./LoginModal.svelte";
</script>

<div class="navbar bg-transparent flex-wrap">
    <div class="navbar-start w-1/2 order-1 lg:w-1/3">
      <img src="/img/logo.png" alt="" class=" h-14">
    </div>
    <div class="navbar-center w-full order-3 lg:order-2 lg:w-1/3">
      <ul class="menu menu-horizontal px-1 flex w-full lg:justify-center">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div class="navbar-end w-1/2 order-2 lg:w-1/3">
      <LoginModal/>
      <a class="btn btn-md btn-accent btn-sm uppercase text-sm" href="/register">Registrar</a>
    </div>
  </div>