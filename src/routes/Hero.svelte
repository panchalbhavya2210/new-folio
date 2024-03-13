<script>
  import gsap from "gsap";
  import TextPlugin from "gsap/dist/TextPlugin";
  import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
  import Observer from "gsap/dist/Observer";
  import { onMount } from "svelte";
  import MyImage from "../lib/assets/img-self.webp";

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
    let sectionNext = document.getElementById("section-next");
    gsap.registerPlugin(TextPlugin, ScrollToPlugin, Observer);
    gsap.to(".box", {
      opacity: 1,
      duration: 0.5,
    });
    gsap.to(".fstack", {
      width: "100%",
      duration: 1,
    });
    gsap.to(".btn", {
      transform: "scale(1)",
    });

    const paths = document.querySelectorAll(".one-line");

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

  function scrollTo() {
    gsap.to(window, {
      duration: 0.7,
      scrollTo: {
        y: "#section-next",
      },
      ease: "power1.inOut",
    });
  }
  // Define the target element
</script>

<main>
  <div class="flex lg:justify-between max-w-full overflow-hidden min-h-svh">
    <div
      class="box relative top-28 sm:px-14 md:px-14 lg:px-14 px-8 leading-10 opacity-0"
    >
      <p
        class="lg:text-7xl sm:text-6xl md:text-6xl text-4xl sm:my-6 md:my-6 lg:my-6 my-7 sm:hidden md:hidden lg:hidden"
      >
        Hello
      </p>
      <p
        class="lg:text-7xl sm:text-6xl md:text-6xl text-4xl sm:my-6 md:my-6 lg:my-6 my-7"
      >
        {greeting}
      </p>
      <p
        class="lg:text-7xl sm:text-6xl md:text-6xl text-4xl sm:my-6 md:my-6 lg:my-6 my-7"
      >
        I am Bhavya Panchal.
      </p>
      <div
        class="lg:text-7xl sm:text-6xl md:text-6xl text-4xl sm:my-6 md:my-6 lg:my-6 my-7 flex items-center"
      >
        A&nbsp;
        <div class="outer-wrapper">
          <div
            class="w-0 overflow-hidden fstack bg-lime-yellow px-2 text-text-black"
          >
            <span class="">fullstack</span>
          </div>
        </div>
        &nbsp;developer.
      </div>
      <div class="btn block sm:hidden md:hidden lg:hidden mt-12">
        <button
          class="border border-lime-yellow backdrop-blur-sm text-left w-40"
          aria-label="Explore my work"
          on:click={scrollTo}
        >
          <p class="ml-2 text-2xl">
            EXPLORE
            <br />MY <span class="text-lime-yellow">WORK</span>.
          </p>
        </button>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div
        on:click={scrollTo}
        class="arrow hidden relative -top-8 -left-2 sm:left-2.5 md:left-2.5 lg:left-5 lg:-top-16 sm:block md:block lg:block"
      >
        <svg
          class="cursor-pointer"
          width="81"
          height="190"
          viewBox="0 0 81 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41 3V184.5"
            stroke="#E6FC00"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="one-line"
          />
          <path
            d="M3 161.5L40.5 187L78.5 161.5"
            stroke="#E6FC00"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="draw-chev"
          />
        </svg>
      </div>
    </div>
    <div class="absolute right-0 top-16 -z-20 overflow-hidden max-h-screen">
      <div>
        <svg
          width="394"
          height="610"
          viewBox="0 0 394 610"
          fill="none"
          class="sm:opacity-100 md:opacity-100 lg:opacity-100 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M394 1C335.315 36.8153 305.205 67.0965 269.117 126.593C230.141 190.849 250.219 246.167 213.556 311.842C182.25 367.922 143.815 383.887 108.553 437.435C72.6506 491.955 65.4898 530.301 33.1128 587.1C20.9735 608.396 13.9376 620.205 1 641"
            stroke="url(#paint0_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M394 1C335.315 36.8153 305.205 67.0965 269.117 126.593C230.141 190.849 250.219 246.167 213.556 311.842C182.25 367.922 143.815 383.887 108.553 437.435C72.6506 491.955 65.4898 530.301 33.1128 587.1C20.9735 608.396 13.9376 620.205 1 641"
            stroke="url(#paint1_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M411 1C352.315 36.8153 322.205 67.0965 286.117 126.593C247.141 190.849 267.219 246.167 230.556 311.842C199.25 367.922 160.815 383.887 125.553 437.435C89.6506 491.955 82.4898 530.301 50.1128 587.1C37.9735 608.396 30.9376 620.205 18 641"
            stroke="url(#paint2_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M428 1C369.315 36.8153 339.205 67.0965 303.117 126.593C264.141 190.849 284.219 246.167 247.556 311.842C216.25 367.922 177.815 383.887 142.553 437.435C106.651 491.955 99.4898 530.301 67.1128 587.1C54.9735 608.396 47.9376 620.205 35 641"
            stroke="url(#paint3_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M445 1C386.315 36.8153 356.205 67.0965 320.117 126.593C281.141 190.849 301.219 246.167 264.556 311.842C233.25 367.922 194.815 383.887 159.553 437.435C123.651 491.955 116.49 530.301 84.1128 587.1C71.9735 608.396 64.9376 620.205 52 641"
            stroke="url(#paint4_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M462 1C403.315 36.8153 373.205 67.0965 337.117 126.593C298.141 190.849 318.219 246.167 281.556 311.842C250.25 367.922 211.815 383.887 176.553 437.435C140.651 491.955 133.49 530.301 101.113 587.1C88.9735 608.396 81.9376 620.205 69 641"
            stroke="url(#paint5_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M479 1C420.315 36.8153 390.205 67.0965 354.117 126.593C315.141 190.849 335.219 246.167 298.556 311.842C267.25 367.922 228.815 383.887 193.553 437.435C157.651 491.955 150.49 530.301 118.113 587.1C105.973 608.396 98.9376 620.205 86 641"
            stroke="url(#paint6_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M496 1C437.315 36.8153 407.205 67.0965 371.117 126.593C332.141 190.849 352.219 246.167 315.556 311.842C284.25 367.922 245.815 383.887 210.553 437.435C174.651 491.955 167.49 530.301 135.113 587.1C122.973 608.396 115.938 620.205 103 641"
            stroke="url(#paint7_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M513 1C454.315 36.8153 424.205 67.0965 388.117 126.593C349.141 190.849 369.219 246.167 332.556 311.842C301.25 367.922 262.815 383.887 227.553 437.435C191.651 491.955 184.49 530.301 152.113 587.1C139.973 608.396 132.938 620.205 120 641"
            stroke="url(#paint8_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M530 1C471.315 36.8153 441.205 67.0965 405.117 126.593C366.141 190.849 386.219 246.167 349.556 311.842C318.25 367.922 279.815 383.887 244.553 437.435C208.651 491.955 201.49 530.301 169.113 587.1C156.973 608.396 149.938 620.205 137 641"
            stroke="url(#paint9_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M547 1C488.315 36.8153 458.205 67.0965 422.117 126.593C383.141 190.849 403.219 246.167 366.556 311.842C335.25 367.922 296.815 383.887 261.553 437.435C225.651 491.955 218.49 530.301 186.113 587.1C173.973 608.396 166.938 620.205 154 641"
            stroke="url(#paint10_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M564 1C505.315 36.8153 475.205 67.0965 439.117 126.593C400.141 190.849 420.219 246.167 383.556 311.842C352.25 367.922 313.815 383.887 278.553 437.435C242.651 491.955 235.49 530.301 203.113 587.1C190.973 608.396 183.938 620.205 171 641"
            stroke="url(#paint11_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M581 1C522.315 36.8153 492.205 67.0965 456.117 126.593C417.141 190.849 437.219 246.167 400.556 311.842C369.25 367.922 330.815 383.887 295.553 437.435C259.651 491.955 252.49 530.301 220.113 587.1C207.973 608.396 200.938 620.205 188 641"
            stroke="url(#paint12_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M598 1C539.315 36.8153 509.205 67.0965 473.117 126.593C434.141 190.849 454.219 246.167 417.556 311.842C386.25 367.922 347.815 383.887 312.553 437.435C276.651 491.955 269.49 530.301 237.113 587.1C224.973 608.396 217.938 620.205 205 641"
            stroke="url(#paint13_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M615 1C556.315 36.8153 526.205 67.0965 490.117 126.593C451.141 190.849 471.219 246.167 434.556 311.842C403.25 367.922 364.815 383.887 329.553 437.435C293.651 491.955 286.49 530.301 254.113 587.1C241.973 608.396 234.938 620.205 222 641"
            stroke="url(#paint14_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M632 1C573.315 36.8153 543.205 67.0965 507.117 126.593C468.141 190.849 488.219 246.167 451.556 311.842C420.25 367.922 381.815 383.887 346.553 437.435C310.651 491.955 303.49 530.301 271.113 587.1C258.973 608.396 251.938 620.205 239 641"
            stroke="url(#paint15_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M649 1C590.315 36.8153 560.205 67.0965 524.117 126.593C485.141 190.849 505.219 246.167 468.556 311.842C437.25 367.922 398.815 383.887 363.553 437.435C327.651 491.955 320.49 530.301 288.113 587.1C275.973 608.396 268.938 620.205 256 641"
            stroke="url(#paint16_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M666 1C607.315 36.8153 577.205 67.0965 541.117 126.593C502.141 190.849 522.219 246.167 485.556 311.842C454.25 367.922 415.815 383.887 380.553 437.435C344.651 491.955 337.49 530.301 305.113 587.1C292.973 608.396 285.938 620.205 273 641"
            stroke="url(#paint17_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M683 1C624.315 36.8153 594.205 67.0965 558.117 126.593C519.141 190.849 539.219 246.167 502.556 311.842C471.25 367.922 432.815 383.887 397.553 437.435C361.651 491.955 354.49 530.301 322.113 587.1C309.973 608.396 302.938 620.205 290 641"
            stroke="url(#paint18_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M700 1C641.315 36.8153 611.205 67.0965 575.117 126.593C536.141 190.849 556.219 246.167 519.556 311.842C488.25 367.922 449.815 383.887 414.553 437.435C378.651 491.955 371.49 530.301 339.113 587.1C326.973 608.396 319.938 620.205 307 641"
            stroke="url(#paint19_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M717 1C658.315 36.8153 628.205 67.0965 592.117 126.593C553.141 190.849 573.219 246.167 536.556 311.842C505.25 367.922 466.815 383.887 431.553 437.435C395.651 491.955 388.49 530.301 356.113 587.1C343.973 608.396 336.938 620.205 324 641"
            stroke="url(#paint20_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M734 1C675.315 36.8153 645.205 67.0965 609.117 126.593C570.141 190.849 590.219 246.167 553.556 311.842C522.25 367.922 483.815 383.887 448.553 437.435C412.651 491.955 405.49 530.301 373.113 587.1C360.973 608.396 353.938 620.205 341 641"
            stroke="url(#paint21_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M751 1C692.315 36.8153 662.205 67.0965 626.117 126.593C587.141 190.849 607.219 246.167 570.556 311.842C539.25 367.922 500.815 383.887 465.553 437.435C429.651 491.955 422.49 530.301 390.113 587.1C377.973 608.396 370.938 620.205 358 641"
            stroke="url(#paint22_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M768 1C709.315 36.8153 679.205 67.0965 643.117 126.593C604.141 190.849 624.219 246.167 587.556 311.842C556.25 367.922 517.815 383.887 482.553 437.435C446.651 491.955 439.49 530.301 407.113 587.1C394.973 608.396 387.938 620.205 375 641"
            stroke="url(#paint23_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <path
            d="M785 1C726.315 36.8153 696.205 67.0965 660.117 126.593C621.141 190.849 641.219 246.167 604.556 311.842C573.25 367.922 534.815 383.887 499.553 437.435C463.651 491.955 456.49 530.301 424.113 587.1C411.973 608.396 404.938 620.205 392 641"
            stroke="url(#paint24_linear_0_1)"
            class="one-line"
            stroke-width="2"
          />
          <defs>
            <linearGradient
              id="paint0_linear_0_1"
              x1="197.5"
              y1="1"
              x2="197.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="197.5"
              y1="1"
              x2="197.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_1"
              x1="214.5"
              y1="1"
              x2="214.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_0_1"
              x1="231.5"
              y1="1"
              x2="231.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_0_1"
              x1="248.5"
              y1="1"
              x2="248.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_0_1"
              x1="265.5"
              y1="1"
              x2="265.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_0_1"
              x1="282.5"
              y1="1"
              x2="282.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_0_1"
              x1="299.5"
              y1="1"
              x2="299.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint8_linear_0_1"
              x1="316.5"
              y1="1"
              x2="316.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint9_linear_0_1"
              x1="333.5"
              y1="1"
              x2="333.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_0_1"
              x1="350.5"
              y1="1"
              x2="350.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_0_1"
              x1="367.5"
              y1="1"
              x2="367.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint12_linear_0_1"
              x1="384.5"
              y1="1"
              x2="384.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint13_linear_0_1"
              x1="401.5"
              y1="1"
              x2="401.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_0_1"
              x1="418.5"
              y1="1"
              x2="418.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_0_1"
              x1="435.5"
              y1="1"
              x2="435.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_0_1"
              x1="452.5"
              y1="1"
              x2="452.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_0_1"
              x1="469.5"
              y1="1"
              x2="469.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint18_linear_0_1"
              x1="486.5"
              y1="1"
              x2="486.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint19_linear_0_1"
              x1="503.5"
              y1="1"
              x2="503.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint20_linear_0_1"
              x1="520.5"
              y1="1"
              x2="520.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint21_linear_0_1"
              x1="537.5"
              y1="1"
              x2="537.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint22_linear_0_1"
              x1="554.5"
              y1="1"
              x2="554.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint23_linear_0_1"
              x1="571.5"
              y1="1"
              x2="571.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
            <linearGradient
              id="paint24_linear_0_1"
              x1="588.5"
              y1="1"
              x2="588.5"
              y2="641"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E6FC00" />
              <stop offset="1" stop-color="#252F27" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  </div>

  <div id="section-next" class="sectionNext">
    <div class="flex">
      <div
        class="bioDiv text-center bg-lime-yellow text-text-black text-5xl p-5 font-bold"
      >
        <p>B</p>
        <p class="-rotate-45">I</p>
        <p>O</p>
      </div>

      <div
        class="imgSelf w-32 h-32 overflow-hidden flex justify-center items-center rounded-full sm:ml-16 sm:mr-16"
      >
        <img
          src={MyImage}
          alt=""
          class="object-cover scale-150 -translate-y-7"
        />
      </div>

      <div class="para leading-10">
        <h1 class="text-4xl font-semibold flex items-center">
          Full-Stack&nbsp;<span class="text-lime-yellow"
            ><svg
              width="65"
              height="54"
              viewBox="0 0 65 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M63.1147 39.0152L33.1047 53.0472L0.76751 36.8181L31.5676 21.3877L63.1147 39.0152Z"
                fill="#B4C509"
              />
              <path
                d="M64.0573 28.7158L34.0474 42.7477L1.71017 26.5187L32.5103 11.0883L64.0573 28.7158Z"
                fill="#C1D309"
              />
              <path
                d="M65 18.4164L34.99 32.4483L2.65282 16.2192L33.4529 0.788866L65 18.4164Z"
                fill="#E6FC00"
              />
            </svg>
          </span>&nbsp;developer.
        </h1>
        <p>
          I am a full-stack developer with experience of over 1.5 year creating
          my side projects.
        </p>
        <p>
          I want to develop a creative website while also providing a unique
          experience to users.
        </p>
        <p>
          I also look forward to working with an experienced team to gain
          experience too.
        </p>
      </div>
    </div>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
    <h1>hello</h1>
  </div>
</main>

<style>
</style>
