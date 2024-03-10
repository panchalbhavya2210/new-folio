<script>
  import gsap from "gsap";
  import Logo from "../lib/assets/logo.svg";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  // register the effect with GSAP:
  onMount(() => {
    gsap.to(".box", { opacity: 1, duration: 0.7 });

    gsap.from(".link", {
      opacity: 1,
      y: 100,
    });
    gsap.to(".link", {
      opacity: 1,
      y: -0,
    });
    gsap.from(".link1", {
      opacity: 1,
      y: 100,
      delay: 0.3,
    });
    gsap.to(".link1", {
      opacity: 1,
      y: -0,
      delay: 0.3,
    });
    gsap.from(".link2", {
      opacity: 1,
      y: 100,
      delay: 0.6,
    });
    gsap.to(".link2", {
      opacity: 1,
      y: -0,
      delay: 0.6,
    });
    gsap.from(".link3", {
      opacity: 1,
      y: 100,
      delay: 0.9,
    });
    gsap.to(".link3", {
      opacity: 1,
      y: -0,
      delay: 0.9,
    });
  });
</script>

<main>
  <div
    class="w-11/12 mx-auto bg-nav-color p-3 rounded-lg mt-5 overflow-hidden fixed fixed-container"
  >
    <div class="flex justify-between items-center">
      <div>
        <img src={Logo} alt="" class="box opacity-0" />
      </div>
      <div
        class="links sm:justify-between lg:w-2/5 md:w-96 sm:w-96 sm:flex md:flex lg:flex hidden mr-5 text-xl"
      >
        <div
          class="link opacity-0 link-ani p-2 aria"
          aria-current={$page.url.pathname === "/" ? "page" : undefined}
        >
          <a href="/">Home</a>
        </div>
        <div
          class="link1 opacity-0 link-ani p-2 aria"
          aria-current={$page.url.pathname === "/About" ? "page" : undefined}
        >
          <a href="/">About Me</a>
        </div>
        <div
          class="link2 opacity-0 link-ani p-2 aria"
          aria-current={$page.url.pathname === "/Work" ? "page" : undefined}
        >
          <a href="/">My Work</a>
        </div>
        <div
          class="link3 opacity-0 link-ani p-2 aria"
          aria-current={$page.url.pathname === "/Connect" ? "page" : undefined}
        >
          <a href="/">Connect</a>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  .link-ani::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: #e6fc00;
    opacity: 100%;
    z-index: -1;
    transition: all 0.3s;
    color: #000;
    cursor: pointer;
  }
  .link-ani:nth-child(2)::before {
    top: 00%;
  }
  .link-ani:nth-child(4)::before {
    top: 00%;
  }
  .aria[aria-current="page"] {
    border-bottom: 1px solid #e6fc00;
  }
  .link-ani:hover::before,
  .link-ani:hover {
    height: 100%;
    color: #000;
    transition: all 0.3s;
  }
  .fixed-container {
    position: fixed;
    top: 0; /* Fixed at the top */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Move back by half of its own width */
    z-index: 999; /* Ensure it stays above other content */
  }
</style>
