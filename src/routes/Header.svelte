<script>
  import gsap from "gsap";
  import { onMount } from "svelte";
  // import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import { page } from "$app/stores";
  // register the effect with GSAP:
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trigger",
        start: "top top",
        end: "+=10",
        scrub: 0.5,
      },
    });
    tl.to(".fixHeight", {
      width: "100%",
      marginTop: 0,
      borderRadius: 0,
    });

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

    const paths = document.querySelectorAll(".my-path");

    // Animate stroke of each path
    paths.forEach((path, index) => {
      gsap.fromTo(
        path,
        {
          // Set initial stroke-dasharray to the length of the path
          "stroke-dasharray": path.getTotalLength(),
          "stroke-dashoffset": path.getTotalLength(),
        },
        {
          // Animate stroke-dashoffset to 0
          "stroke-dashoffset": 0,
          duration: 1 + index * 0.1, // Adjust duration for staggered effect
          ease: "power1.inOut",
          opacity: 1,
          delay: 1,
        }
      );
    });
  });
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;

    // Animate hamburger bars
    if (isOpen) {
      gsap.to(".burger", {
        rotate: 45,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(".bar:nth-child(1)", {
        duration: 0.5,
        y: 15,
        ease: "power2.inOut",
        opacity: 1,
        rotate: 90,
      });
      gsap.to(".bar:nth-child(2)", {
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      });
      gsap.to(".bar:nth-child(3)", {
        duration: 0.5,
        ease: "power2.inOut",
        y: -5,
        opacity: 1,
        rotate: -360,
      });
      gsap.to(".fixHeight", {
        height: "350px",
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(".burger", {
        rotate: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(".bar:nth-child(1)", {
        duration: 0.5,
        scaleY: 1,
        y: 0,
        ease: "power2.inOut",
        opacity: 1,
        rotate: 0,
      });
      gsap.to(".bar:nth-child(2)", {
        duration: 0.5,
        opacity: 1,
        ease: "power2.inOut",
      });
      gsap.to(".bar:nth-child(3)", {
        duration: 0.5,
        scaleY: 1,
        y: 0,
        ease: "power2.inOut",
        opacity: 1,
        rotate: 0,
      });
      gsap.to(".fixHeight", {
        height: "70px",
        duration: 1,
        ease: "power2.inOut",
      });
    }
  }
</script>

<main>
  <div
    class="w-11/12 fixHeight h-[70px] mx-auto bg-nav-color bg-opacity-55 backdrop-blur-lg p-3 rounded-lg mt-5 overflow-hidden fixed fixed-container sm:h-[70px] md:h-[70px] lg:h-[70px]"
  >
    <div class="flex justify-between items-center">
      <div>
        <svg
          class="box opacity-0"
          width="61"
          height="47"
          viewBox="0 0 61 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            class="my-path"
            d="M38.4401 46.192V46.0899L44.1918 46.192V44.592L42.7838 44.464C41.0772 44.2933 39.7545 44.08 38.8158 43.824C37.8772 43.5253 37.2158 42.928 36.8318 42.032C36.4905 41.0933 36.3198 39.5787 36.3198 37.488V25.84H43.8078C49.2692 25.84 53.4292 24.6667 56.2878 22.32C59.1465 19.9733 60.5758 16.9013 60.5758 13.104C60.5758 10.4587 60.1065 8.304 59.1678 6.64C58.2292 4.976 56.9278 3.71733 55.2638 2.864C53.5998 1.968 51.6585 1.37066 49.4398 1.072C47.2212 0.730665 44.8318 0.559998 42.2718 0.559998H38.4401V0.367981L31.2676 0.513371L24.0958 0.367996V0.559982H21.1601C20.0081 0.559982 18.6641 0.60265 17.1281 0.687984C15.5921 0.773317 14.0561 0.98665 12.5201 1.32798C10.9414 1.62665 9.49076 2.15998 8.1681 2.92798C6.80276 3.65332 5.71477 4.67732 4.9041 5.99998C4.05076 7.27998 3.6241 8.94398 3.6241 10.992C3.6241 12.9546 4.09343 14.64 5.0321 16.048C5.9281 17.456 7.0801 18.6293 8.4881 19.568C9.85343 20.464 11.2828 21.168 12.7761 21.68C10.7281 21.8507 8.8081 22.32 7.0161 23.088C5.2241 23.856 3.77343 25.0507 2.6641 26.672C1.5121 28.2507 0.936096 30.384 0.936096 33.072C0.936096 35.5466 1.42676 37.6373 2.4081 39.344C3.34676 41.008 4.62676 42.3307 6.2481 43.312C7.86943 44.2507 9.66143 44.9333 11.6241 45.36C13.5868 45.7867 15.5708 46 17.5761 46H24.0958V46.192L31.1949 46.0451L38.4401 46.192ZM19.2401 2.35198H26.4721V21.232H17.9601C15.3148 21.232 13.2668 20.3787 11.8161 18.672C10.3228 16.9653 9.5761 14.4053 9.5761 10.992C9.5761 8.55998 9.9601 6.72532 10.7281 5.48798C11.4961 4.25065 12.6054 3.41865 14.0561 2.99198C15.4641 2.56532 17.1921 2.35198 19.2401 2.35198ZM21.1601 44.208H17.5761C15.4428 44.208 13.5868 43.9093 12.0081 43.312C10.3868 42.7147 9.14943 41.6267 8.2961 40.048C7.4001 38.4267 6.9521 36.1227 6.9521 33.136C6.9521 30.2346 7.44277 28.0587 8.4241 26.608C9.40543 25.1573 10.8988 24.1973 12.9041 23.728C14.9094 23.2586 17.4481 23.024 20.5201 23.024H26.4721V37.744C26.4721 40.304 26.0454 42.032 25.1921 42.928C24.2961 43.7813 22.9521 44.208 21.1601 44.208ZM44.7678 2.352H36.3198V23.92H43.8078C46.7518 23.92 48.9918 23.4933 50.5278 22.64C52.0638 21.7867 53.1092 20.5493 53.6638 18.928C54.2185 17.3067 54.4958 15.3653 54.4958 13.104C54.4958 10.672 54.1758 8.752 53.5358 7.344C52.9385 5.89333 52.1278 4.80533 51.1038 4.08C50.1225 3.35466 49.0558 2.88533 47.9038 2.672C46.7945 2.45866 45.7492 2.352 44.7678 2.352ZM48.992 45.156C49.76 45.9667 50.7413 46.372 51.936 46.372C53.0453 46.372 53.984 45.9667 54.752 45.156C55.52 44.3453 55.904 43.3853 55.904 42.276C55.904 41.2093 55.52 40.292 54.752 39.524C53.984 38.7133 53.0453 38.308 51.936 38.308C50.7413 38.308 49.76 38.7133 48.992 39.524C48.224 40.292 47.84 41.2093 47.84 42.276C47.84 43.3853 48.224 44.3453 48.992 45.156Z"
            fill="#E6FC00"
          />
        </svg>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        class="burger sm:hidden md:hidden lg:hidden cursor-pointer"
        on:click={toggleMenu}
      >
        <div class="bar w-10 bg-lime-yellow h-0.5 my-2 mr-2 rounded-md"></div>
        <div class="bar w-10 bg-lime-yellow h-0.5 my-2 mr-2 rounded-md"></div>
        <div class="bar w-10 bg-lime-yellow h-0.5 my-2 mr-2 rounded-md"></div>
      </div>
      <div
        class="links sm:justify-between lg:w-6/12 md:w-96 sm:w-8/12 sm:flex md:flex lg:flex hidden mr-5 text-xl"
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
    <div class="mobile-menu sm:hidden md:hidden lg:hidden">
      <div
        class="link opacity-0 link-ani-mob p-2 aria-mobile my-5 mt-10"
        aria-current={$page.url.pathname === "/" ? "page" : undefined}
      >
        <a href="/">Home</a>
      </div>
      <div
        class="link1 opacity-0 link-ani-mob p-2 aria-mobile my-5"
        aria-current={$page.url.pathname === "/About" ? "page" : undefined}
      >
        <a href="/">About Me</a>
      </div>
      <div
        class="link2 opacity-0 link-ani-mob p-2 aria-mobile my-5"
        aria-current={$page.url.pathname === "/Work" ? "page" : undefined}
      >
        <a href="/">My Work</a>
      </div>
      <div
        class="link3 opacity-0 link-ani-mob p-2 aria-mobile my-5"
        aria-current={$page.url.pathname === "/Connect" ? "page" : undefined}
      >
        <a href="/">Connect</a>
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
  .link-ani-mob::before {
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
  .aria-mobile[aria-current="page"] {
    border-left: 2px solid #e6fc00;
  }
  .link-ani:hover::before,
  .link-ani:hover {
    height: 100%;
    color: #000;
    transition: all 0.3s;
  }
  .link-ani-mob:hover::before,
  .link-ani-mob:hover {
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
