<script>
export default {
  name: "HomeView",
  data() {
    return {};
  },
  components: {},
  methods: {},
};
</script>
<template>
  <div class="body bg-white min-h-screen dark:bg-[#0F172A]">
    <!-- CONTENT -->
    <div
      class="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4"
    >
      <nav
        class="flex px-5 py-3 text-gray-700 rounded-lg bg-gray-50 dark:bg-[#1E293B]"
        aria-label="Breadcrumb"
      >
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                ></path>
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <a
                href="#"
                class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                >{{ $route.name }}</a
              >
            </div>
          </li>
        </ol>
      </nav>
      <div class="flex flex-wrap my-5 -mx-2">
        <div class="w-full lg:w-1/3 p-2 hover:scale-105 duration-500">
          <!-- Open Weather Map -->
          <div class="flex items-center justify-center h-full">
            <div
              class="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50"
            >
              <div class="flex flex-col">
                <div>
                  <h2 class="font-bold text-gray-600 text-center">
                    Bucharest, Romania
                  </h2>
                </div>
                <div class="my-6">
                  <div class="flex flex-row space-x-4 items-center">
                    <div id="icon">
                      <span>
                        <svg
                          class="w-20 h-20 fill-stroke text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div id="temp">
                      <h4 class="text-4xl">12&deg;C</h4>
                      <p class="text-xs text-gray-500">Feels like +14&deg;C</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Open Weather Map -->
        </div>
        <div class="w-full lg:w-1/3 p-2 hover:scale-105 duration-500">
          <!-- Open Weather Map -->
          <div class="flex items-center justify-center h-full">
            <div
              class="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50"
            >
              <div class="flex flex-col">
                <div>
                  <h2 class="font-bold text-gray-600 text-center">
                    Bucharest, Romania
                  </h2>
                </div>
                <div class="my-6">
                  <div class="flex flex-row space-x-4 items-center">
                    <div id="icon">
                      <span>
                        <svg
                          class="w-20 h-20 fill-stroke text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div id="temp">
                      <h4 class="text-4xl">12&deg;C</h4>
                      <p class="text-xs text-gray-500">Feels like +14&deg;C</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Open Weather Map -->
        </div>
        <div class="w-full lg:w-1/3 p-2 hover:scale-105 duration-500">
          <!-- Open Weather Map -->
          <div class="flex items-center justify-center h-full">
            <div
              class="bg-white shadow-2xl p-6 rounded-2xl border-2 border-gray-50"
            >
              <div class="flex flex-col">
                <div>
                  <h2 class="font-bold text-gray-600 text-center">
                    Bucharest, Romania
                  </h2>
                </div>
                <div class="my-6">
                  <div class="flex flex-row space-x-4 items-center">
                    <div id="icon">
                      <span>
                        <svg
                          class="w-20 h-20 fill-stroke text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div id="temp">
                      <h4 class="text-4xl">12&deg;C</h4>
                      <p class="text-xs text-gray-500">Feels like +14&deg;C</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Open Weather Map -->
        </div>
      </div>
      <!-- ------------------------------------------- start feed RSS  ------------------------------------------- -->
      <div
        class="content ml-12 transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4"
      >
        <div
          class="w-[300px] rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100"
        >
          <div
            class="flex items-center justify-between px-2 text-base font-medium text-gray-700"
          >
            <div>Feed Rss</div>
            <div>
              <button
                class="flex h-8 w-8 items-center justify-center text-black"
              >
                <svg
                  class="mx-auto h-6 w-6"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-4">
            <div class="flex max-h-[400px] w-full flex-col overflow-y-scroll">
              <button
                class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
              >
                <div
                  class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                >
                  <span
                    class="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900"
                    >A</span
                  >
                </div>
                <div
                  class="flex flex-col items-start justify-between font-light text-gray-600"
                >
                  <p class="text-[15px]">Text</p>
                  <span class="text-xs font-light text-gray-400"
                    >just start writing with plain text</span
                  >
                </div>
              </button>
              <button
                class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
              >
                <div
                  class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                >
                  <span
                    class="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900"
                  >
                    <svg
                      class="mx-auto h-6 w-6"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  class="flex flex-col items-start justify-between font-light text-gray-600"
                >
                  <p class="text-[15px]">Checklist</p>
                  <span class="text-xs font-light text-gray-400"
                    >create a to-do or checklist</span
                  >
                </div>
              </button>
              <button
                class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
              >
                <div
                  class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                >
                  <span
                    class="tag w-full text-center text-lg font-medium text-gray-700 group-hover:text-green-900"
                  >
                    H1
                  </span>
                </div>
                <div
                  class="flex flex-col items-start justify-between font-light text-gray-600"
                >
                  <p class="text-[15px]">Heading 1</p>
                  <span class="text-xs font-light text-gray-400"
                    >Big section heading</span
                  >
                </div>
              </button>
              <button
                class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
              >
                <div
                  class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                >
                  <span
                    class="tag w-full text-center text-lg font-medium text-gray-700 group-hover:text-green-900"
                  >
                    H2
                  </span>
                </div>
                <div
                  class="flex flex-col items-start justify-between font-light text-gray-600"
                >
                  <p class="text-[15px]">Heading 2</p>
                  <span class="text-xs font-light text-gray-400"
                    >Medium section heading</span
                  >
                </div>
              </button>
              <button
                class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
              >
                <div
                  class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                >
                  <span
                    class="tag w-full text-center text-lg font-medium text-gray-700 group-hover:text-green-900"
                  >
                    H3
                  </span>
                </div>
                <div
                  class="flex flex-col items-start justify-between font-light text-gray-600"
                >
                  <p class="text-[15px]">Heading 3</p>
                  <span class="text-xs font-light text-gray-400"
                    >small section heading</span
                  >
                </div>
              </button>
              <h3 class="my-2 px-4 text-[15px] text-gray-400">More</h3>
              <button
                class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
              >
                <div
                  class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                >
                  <span
                    class="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900"
                  >
                    <svg
                      class="mx-auto h-6 w-6"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  class="flex flex-col items-start justify-between font-light text-gray-600"
                >
                  <p class="text-[15px]">Bullet list</p>
                  <span class="text-xs font-light text-gray-400"
                    >Create a simple bullet list</span
                  >
                </div>
              </button>
              <button
                class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
              >
                <div
                  class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                >
                  <span
                    class="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900"
                  >
                    <svg
                      class="mx-auto h-6 w-6"
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                    >
                      <g fill="currentColor" fill-rule="evenodd">
                        <path
                          d="M21 16a1 1 0 0 1 0 2H10a1 1 0 0 1 0-2h11zm0-10a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2h11z"
                        ></path>
                        <path
                          d="M4.464 13.74c.256 0 .496.036.72.108.224.072.419.179.584.32.165.141.295.319.388.532.093.213.14.461.14.744 0 .181-.019.345-.056.492a1.666 1.666 0 0 1-.392.732c-.09.101-.19.2-.296.296l-1.72 1.48h2.512V19.5H2.392v-1.272l2.2-1.976c.112-.101.224-.216.336-.344a.66.66 0 0 0 .168-.448.544.544 0 0 0-.208-.452.765.765 0 0 0-.488-.164c-.224 0-.399.07-.524.208a.839.839 0 0 0-.212.512l-1.2-.088c.016-.293.077-.548.184-.764.107-.216.248-.396.424-.54.176-.144.383-.252.62-.324.237-.072.495-.108.772-.108zm.992-9.404V10H4.304V5.68l-1.136 1-.68-.784 1.848-1.56h1.12z"
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
                <div
                  class="flex flex-col items-start justify-between font-light text-gray-600"
                >
                  <p class="text-[15px]">Ordered list</p>
                  <span class="text-xs font-light text-gray-400"
                    >Create a list with numbered</span
                  >
                </div>
              </button>
              <button
                class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
              >
                <div
                  class="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200"
                >
                  <span
                    class="tag w-full text-center text-xl font-medium text-gray-700 group-hover:text-green-900"
                  >
                    <svg
                      class="mx-auto h-6 w-6"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  class="flex flex-col items-start justify-between font-light text-gray-600"
                >
                  <p class="text-[15px]">Info box</p>
                  <span class="text-xs font-light text-gray-400"
                    >Add a box with additional info</span
                  >
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- --------------------------------------------------------- feed RSS  ------------------------------------------- -->
    </div>
  </div>
</template>
