<script defer>
  export let src;
  export let projectName;
  export let projectDisp;
  export let className;
  export let btnID;
  export let projectClassName;
  import "../lib/global.css";
</script>

<main>
  <div class="w-full border-lime-yellow border-2 rounded-lg h-64 p-3">
    <div
      class="flexTitle flex justify-start items-center h-14 bg-lime-yellow rounded-lg"
    >
      <div class="titleLogo rounded-full ml-2 bg-nav-color">
        <img
          src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-1024.png"
          alt=""
          class="w-10 h-10"
        />
      </div>
      <div class="techName ml-2 text-text-black">
        <p>{projectName}</p>
        <p>Html, css , js</p>
      </div>
    </div>
    <div class="desc">
      <p>
        {projectDisp}
      </p>
    </div>
    <div class="visit mt-2">
      <button class="uppercase font-bold text-left transition-all" id={btnID}
        >Visit Site<span class="text-lime-yellow">.</span>
        <span class="{projectClassName} opacity-0">
          <svg
            width="154"
            height="28"
            viewBox="0 0 154 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="w-auto -mt-6 h-6"
          >
            <path
              d="M0 25.5H125L152.5 3"
              stroke="#E6FC00"
              stroke-width="4"
              class={className}
            />
            <path
              d="M135 3H151V19"
              stroke="#E6FC00"
              stroke-width="5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class={className}
            />
          </svg>
        </span>
      </button>
    </div>
  </div>
</main>
