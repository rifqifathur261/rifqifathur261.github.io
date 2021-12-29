<template>
  <div id="home">
    <nav
      :class="{ scrolled: !view.atTopOfPage }"
      class="
        sticky
        top-0
        z-10
        font-sans
        flex flex-col
        text-center
        sm:flex-row sm:justify-between
        py-4
        px-40
        bg-white bg-primary
        w-full
        font-lexend
      "
    >
      <div class="mb-2 sm:mb-0 flex flex-row">
        <a href="/">
          <div class="h-14 self-center">
            <img class="h-14 self-center" src="../assets/rifth.svg" />
          </div>
          <span class="text-xs text-white">Rifqi Fathurrahman</span>
        </a>
      </div>
      <div class="sm:mb-0 self-center">
        <a
          href="#home"
          class="
            text-lg
            no-underline
            text-white
            hover:text-primary-light
            ml-2
            px-1
          "
          >Home</a
        >
        <a
          href="#projects"
          class="
            text-lg
            no-underline
            text-white
            hover:text-primary-light
            ml-2
            px-1
          "
          >Projects</a
        >
        <a
          href="#me"
          class="
            text-lg
            no-underline
            text-white
            hover:text-primary-light
            ml-2
            px-1
          "
          >About</a
        >
      </div>

      <div class="sm:mb-0 self-center">
        <button
          class="
            bg-secondary
            p-2
            rounded-md
            text-md
            no-underline
            text-white
            hover:bg-secondary-dark
            ml-2
          "
        >
          Hire Me
        </button>
      </div>
    </nav>
    <div class="bg-primary font-lexend text-text pb-10">
      <!-- body -->
      <div class="grid sm:grid-cols-5 gap-4 px-32">
        <div
          class="flex col-span-2 justify-center rounded-lg text-4xl flex-col"
        >
          <p class="font-bold text-4xl text-white">Hi, I'm Rifqi</p>
          <div class="text-text-gray">Code Enthusiast</div>
          <div>
            <button
              class="
                mt-4
                bg-secondary
                p-2
                rounded-md
                text-base
                no-underline
                text-white
                hover:bg-secondary-dark
              "
            >
              Download CV
            </button>
          </div>
        </div>

        <div
          class="flex justify-center col-span-3 rounded-lg h-screen transform"
        >
          <img src="../assets/me-green.svg" class="bg-contain" />
        </div>
      </div>
      <!-- projects -->
      <div id="projects" class="px-32 pt-32">
        <div class="flex justify-center text-4xl font-bold">
          Projects Portofolio
        </div>
        <div class="flex justify-center mt-2 text-xl text-white">
          Some of the WIP projects and i have successfully completed
        </div>
        <div class="grid grid-cols-3 gap-8 pt-8">
          <div
            class="
              rounded-xl
              shadow-xl
              overflow-hidden
              transform
              hover:scale-105
              cursor-pointer
              duration-200
            "
            v-for="project in projects"
            :key="project.id"
          >
            <img :src="project.image" class="bg-contain w-full" />
            <div class="p-4 bg-primary-light">
              <span
                class="bg-carnation-500 rounded-full px-3 py-1 mr-2 text-white"
                v-for="tag in project.tag"
                :key="tag.id"
              >
                {{ tag }}
              </span>
              <h1 class="font-bold text-2xl mt-4 text-white">
                {{ project.name }}
              </h1>
              <p class="text-md mt-2 text-white">
                {{ project.name }}
              </p>
            </div>
          </div>
        </div>
        <div class="h-full text-center">
          <button
            class="m-8 bg-secondary rounded-md text-md no-underline text-white"
            @click="loadMore()"
          >
            <div class="flex p-2">
              <h1>Load more</h1>

              <RefreshIcon
                class="
                  w-6
                  h-6
                  ml-2
                  transition
                  duration-300
                  ease-in-out
                  transform
                  hover:rotate-45
                "
              />
            </div>
          </button>
        </div>
      </div>
      <!-- me -->
      <div id="me" class="px-32 pt-32">
        <div class="flex justify-center">
          <h1 class="text-4xl font-bold">About Me</h1>
        </div>

        <div class="flex justify-center mt-8">
          <div class="h-40 w-40 bg-blue-700 rounded-full overflow-hidden">
            <img src="../assets/profile.webp" class="bg-contain bg-center" />
          </div>
        </div>
        <div
          class="flex justify-center mt-8 text-xl px-52 text-center text-white"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          iure et nulla doloribus asperiores voluptatum obcaecati molestiae
          beatae ipsa atque aliquam harum sequi labore consequuntur voluptatem
          nam consectetur omnis? Necessitatibus. Let's work together so I don't
          put my back on the pillow again
        </div>

        <div class="flex justify-center mt-12">
          <h1 class="text-2xl font-bold">Follow Me</h1>
        </div>
        <div class="flex justify-center mt-8">
          <div
            class="
              h-14
              w-14
              bg-white
              rounded-full
              bg-primary-light
              shadow
              cursor-pointer
              hover:shadow-2xl
              transition
              duration-300
              ease-in-out
              mr-4
              flex
              justify-center
              items-center
            "
          >
            <linked-in-icon />
          </div>
          <div
            class="
              h-14
              w-14
              bg-white
              rounded-full
              bg-primary-light
              shadow
              cursor-pointer
              hover:shadow-2xl
              transition
              duration-300
              ease-in-out
              mr-4
              flex
              justify-center
              items-center
            "
          >
            <instagram-icon />
          </div>
          <div
            class="
              h-14
              w-14
              bg-white
              rounded-full
              bg-primary-light
              shadow
              cursor-pointer
              hover:shadow-2xl
              transition
              duration-300
              ease-in-out
              mr-4
              flex
              justify-center
              items-center
            "
          >
            <github-icon />
          </div>
          <div
            class="
              h-14
              w-14
              bg-white
              rounded-full
              bg-primary-light
              shadow
              cursor-pointer
              hover:shadow-2xl
              transition
              duration-300
              ease-in-out
              flex
              justify-center
              items-center
            "
          >
            <facebook-icon />
          </div>
        </div>
        <div
          class="flex justify-center mt-32 text-xl px-52 text-center text-white"
        >
          © Copyright 2021. Rifqi Fathurrahman
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LinkedInIcon from "./icons/LinkedInIcon.vue";
import InstagramIcon from "./icons/InstagramIcon.vue";
import GithubIcon from "./icons/GithubIcon.vue";
import FacebookIcon from "./icons/FacebookIcon.vue";
import { RefreshIcon } from "@heroicons/vue/outline";
export default {
  components: {
    InstagramIcon,
    RefreshIcon,
    LinkedInIcon,
    GithubIcon,
    FacebookIcon,
  },
  data() {
    return {
      projects: [
        {
          name: "Attendance System",
          type: "Web Application",
          tag: ["Vue 3", "Firebase", "Taildwind", "Vuex"],
          image:
            "https://cdn.dribbble.com/users/5031392/screenshots/15683103/media/f59eea3c37c652505e1cfce75e10b7c1.png?compress=1&resize=1600x1200",
        },
        {
          name: "Attendance System",
          type: "Web Application",
          tag: ["Vue 3", "Firebase", "Taildwind", "Vuex"],
          image:
            "https://cdn.dribbble.com/users/5031392/screenshots/15683103/media/f59eea3c37c652505e1cfce75e10b7c1.png?compress=1&resize=1600x1200",
        },
        {
          name: "Attendance System",
          type: "Web Application",
          tag: ["Vue 3", "Firebase", "Taildwind", "Vuex"],
          image:
            "https://cdn.dribbble.com/users/5031392/screenshots/15683103/media/f59eea3c37c652505e1cfce75e10b7c1.png?compress=1&resize=1600x1200",
        },
        {
          name: "Attendance System",
          type: "Web Application",
          tag: ["Vue 3", "Firebase", "Taildwind", "Vuex"],
          image:
            "https://cdn.dribbble.com/users/5031392/screenshots/15683103/media/f59eea3c37c652505e1cfce75e10b7c1.png?compress=1&resize=1600x1200",
        },
        {
          name: "Attendance System",
          type: "Web Application",
          tag: ["Vue 3", "Firebase", "Taildwind", "Vuex"],
          image:
            "https://cdn.dribbble.com/users/5031392/screenshots/15683103/media/f59eea3c37c652505e1cfce75e10b7c1.png?compress=1&resize=1600x1200",
        },
        {
          name: "Attendance System",
          type: "Web Application",
          tag: ["Vue 3", "Firebase", "Taildwind", "Vuex"],
          image:
            "https://cdn.dribbble.com/users/5031392/screenshots/15683103/media/f59eea3c37c652505e1cfce75e10b7c1.png?compress=1&resize=1600x1200",
        },
      ],
      view: {
        atTopOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    loadMore() {
      this.projects.push({
        name: "Attendance System",
        type: "Web Application",
        tag: ["Vue 3", "Firebase", "Taildwind", "Vuex"],
        image:
          "https://cdn.dribbble.com/users/5031392/screenshots/15683103/media/f59eea3c37c652505e1cfce75e10b7c1.png?compress=1&resize=1600x1200",
      });
      this.projects.push({
        name: "Attendance System",
        type: "Web Application",
        tag: ["Vue 3", "Firebase", "Taildwind", "Vuex"],
        image:
          "https://cdn.dribbble.com/users/5031392/screenshots/15683103/media/f59eea3c37c652505e1cfce75e10b7c1.png?compress=1&resize=1600x1200",
      });
      this.projects.push({
        name: "Attendance System",
        type: "Web Application",
        tag: ["Vue 3", "Firebase", "Taildwind", "Vuex"],
        image:
          "https://cdn.dribbble.com/users/5031392/screenshots/15683103/media/f59eea3c37c652505e1cfce75e10b7c1.png?compress=1&resize=1600x1200",
      });
    },
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      // when the user scrolls, check the pageYOffset
      if (window.pageYOffset > 0) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>

<style scoped>
nav {
  z-index: 10;
}

nav.scrolled {
  @apply shadow-xl;
  border-bottom: 0px;
}
</style>
