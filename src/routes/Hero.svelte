<script>
  import gsap from "gsap";
  import TextPlugin from "gsap/dist/TextPlugin";
  import maple from "../lib/assets/tree.svg";
  import { onMount } from "svelte";

  let clock = new Date();
  let greeting = "";

  if (clock.getHours() < 12) {
    greeting = "Good Morning,";
  } else if (clock.getHours() < 18) {
    greeting = "Good Afternoon,";
  } else {
    greeting = "Good Evening,";
  }

  onMount(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(".hell", {
      duration: 2,
      text: greeting,
      ease: "back.out",
      delay: 2,
    });
  });
</script>

<main>
  <div class="relative top-28 px-14 leading-10">
    <p class="text-7xl hell my-6">Hello There,</p>
    <p class="text-7xl my-6">I am Panchal Bhavya</p>
  </div>
</main>
