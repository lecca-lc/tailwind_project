<template>
  <!-- first section -->

  <article class="bg-blue bg-cover bg-center text-white relative lg:w-full">
    <div class="absolute inset-0 bg-white/5"></div>
    <header
      :class="[
        'fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16 ',
        isScrolled ? 'bg-white shadow-lg' : '',
      ]"
    >
      <div
        class="flex justify-between lg:grid lg:grid-cols-20 lg:pt-[38px] lg:pb-4 pt-4 pb-2 lg:p-0 lg:w-full"
      >
        <!-- Logo -->
        <div class="flex lg:col-span-6 lg:justify-end items-center lg:space-x-2 space-x-1">
          <img
            :src="isScrolled ? '/public/r-icon2.png' : '/public/r-icon.png'"
            alt="RetailPay Logo"
            class="lg:w-12 lg:h-12 h-10 w-10 transition-all duration-300"
          />
          <h1
            class="text-3xl lg:text-[35px] font-bold mt-2 lg:mb-2"
            :class="isScrolled ? 'text-black' : 'text-white'"
          >
            RetailPay
          </h1>
        </div>

        <!-- Hamburger -->
        <button @click="toggleMenu" class="lg:hidden focus:outline-none">
          <svg
            v-if="!menuOpen"
            :class="[isScrolled ? 'text-black' : 'text-white']"
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            :class="[isScrolled ? 'text-black' : 'text-white']"
            class="w-6 h-6 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Desktop Nav -->
        <div
          class="hidden lg:grid items-center lg:col-span-8 lg:pt-2 lg:mx-auto"
        >
          <ul class="flex space-x-7 text-[12px] lg:mb-2 font-[500]">
            <li>
              <a
                href="home"
                :class="isScrolled ? 'text-black' : 'text-white'"
                class="hover:text-purple-400"
                >Home</a
              >
            </li>

            <li class="relative group cursor-pointer">
              <div
                class="flex items-center hover:text-purple-400"
                :class="isScrolled ? 'text-black' : 'text-white'"
              >
                Our solutions <span class="ml-1">⌄</span>
              </div>
              <div
                class="absolute hidden p-2 group-hover:flex flex-col border-b-2 border-l-2 rounded-xl bg-white"
                :class="isScrolled ? 'text-purple-600' : 'text-white'"
              >
                <a href="#" class="text-l p-1 hover:text-purple-400 text-black"
                  >Inventory Management</a
                >
                <a href="#" class="text-l p-1 hover:text-purple-400 text-black"
                  >Sales & Billing</a
                >
              </div>
            </li>

            <li>
              <a
                href="about"
                :class="isScrolled ? 'text-black' : 'text-white'"
                class="hover:text-purple-400"
                >About us</a
              >
            </li>

            <li class="relative group cursor-pointer">
              <div
                class="flex items-center hover:text-purple-400"
                :class="isScrolled ? 'text-black' : 'text-white'"
              >
                Resources <span class="ml-1">⌄</span>
              </div>
              <div
                class="absolute hidden p-2 group-hover:flex flex-col border-b-2 border-l-2 rounded-xl bg-white"
                :class="isScrolled ? 'text-purple-600' : 'text-white'"
              >
                <a href="#" class="text-l p-1 hover:text-purple-400 text-black"
                  >FAQs</a
                >
                <a href="#" class="text-l p-1 hover:text-purple-400 text-black"
                  >Customer Stories</a
                >
              </div>
            </li>

            <li>
              <a
                href="contact"
                :class="isScrolled ? 'text-black' : 'text-white'"
                class="hover:text-purple-400"
                >Contact us</a
              >
            </li>
          </ul>
        </div>

        <!-- Buttons -->
        <div class="hidden space-x-20 lg:col-span-6 lg:flex">
          <button
            class="bg-custom-blue-3 text-white rounded-full px-6 py-2 hover:bg-purple-400 lg:text-[12px] lg:px-[25px] lg:py-[9px] lg:h-10 lg:mt-3 font-[800]"
          >
            Book a Demo
          </button>
          <img src="/public/line2.png" alt="" class="h-10 lg:h-10 mt-3" />
          <img
            src="/public/message-icon.png"
            alt=""
            class="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer lg:mt-3"
          />
        </div>
      </div>

      <!-- Mobile Nav -->
      <div
        v-if="menuOpen"
        class="lg:hidden mt-2 space-y-2 bg-white rounded-3xl text-[12px] shadow-lg p-6 text-black"
      >
        <a href="home" class="block mb-2.5">Home</a>

        <div>
          <div
            @click="toggleSolutions"
            class="flex justify-between items-center cursor-pointer"
          >
            Our Solutions <span>⌄</span>
          </div>
          <div v-if="openSolutions" class="space-y-2 ml-4">
            <a href="#" class="block">. Inventory Management</a>
            <a href="#" class="block">. Sales & Billing</a>
          </div>
        </div>

        <a href="about" class="block">About us</a>

        <div
          @click="toggleResources"
          class="mt-2.5 flex justify-between items-center cursor-pointer"
        >
          Resources <span>⌄</span>
        </div>
        <div v-if="openResources" class="space-y-2 ml-4">
          <a href="#" class="block">. FAQs</a>
          <a href="#" class="block">. Customer Stories</a>
        </div>

        <a href="contact" class="block">Contact us</a>
        <button class="bg-custom-blue-3 text-white rounded-full p-3 w-full">
          Book a Demo
        </button>
      </div>
    </header>
    <div class="lg:h-32 h-12"></div>

    <div
      class="text-center lg:text-[60px] text-[43px] lg:leading-[116%] leading-[50px] mt-[47px] font-[800] font-sans tracking-normal"
    >
      <p>
        Forging the Future <br />
        of Retail, Wholesale & <br />
        Distribution.
      </p>
    </div>

    <div class="flex flex-col items-center justify-center">
      <p
        class="lg:max-w-[700px] text-center mt-[30px] lg:text-[21px] text-[17px] lg:leading-[132%] font-[300]"
      >
        RetailPay provides a digital end-to-end platform that connects all
        members of the supply chain ecosystem for maximum value
      </p>
      <button
        class="relative bg-custom-blue-3 lg:mt-[47px] lg:py-[14px] rounded-full lg:px-[48px] lg:text-[16px] font-[700] lg:hover:bg-purple-400 mt-8 text-sm py-2 px-6"
      >
        Get Started
      </button>
    </div>

    <div class="flex justify-center">
      <section
        class="border flex lg:flex-row items-center lg:mt-[78px] rounded-t-3xl lg:max-w-[1400px] backdrop-blur-sm bg-blue-2 bg-cover bg-center border-white/80 lg:mx-0 mx-5 mt-14 flex-col"
      >
        <div
          class="text-white lg:text-[33px] lg:leading-[53px] font-[300] lg:p-0 pl-0 lg:pt-0 pt-4 text-[21px] w-[55%] lg:w-[40%] leading-[132%] lg:mt-[136px] lg:mb-[128px] lg:translate-x-32 "
        >
          <p class="text-center lg:text-left lg:min-w-[490px] ">
            Our product, <strong class="font-[600]">Bizwiz</strong> is a
            state-of-the-art software solution tailored for
            <strong class="font-[600]">Distributors</strong>,
            <strong class="font-[600]">Wholesalers</strong>,
            <strong class="font-[600]">Retailers</strong> and
            <strong class="font-[600]">Hoteliers</strong>.
          </p>
        </div>

        <div class="">
          <!-- <div class="absolute bg-yellow-300 blur-[60px] z-0 opacity-80  w-full h-full rounded-full top-[80px]"></div> -->
          <img
            src="/src/assets/lady-in-yellow.png"
            alt="woman_smiling"
            class="w-[800px] h-auto z-10 lg:w-[900px] lg:h-auto"
          />
        </div>
      </section>
    </div>
  </article>

  <!-- Second section -->

  <article>
    <section class="flex justify-center items-center">
      <div
        class="lg:border-2 lg:shadow-lg flex lg:flex-row flex-col justify-center items-center lg:space-x-56 rounded-b-3xl lg:p-8 p-4 lg:min-w-[1400px]"
      >
        <p class="lg:leading-[50px] text-center lg:mb-0 mb-4">
          <span
            class="lg:text-[60px] text-[55px] font-bold text-custom-blue-2 "
            >100K+</span
          ><br />
          <code
            class="text-custom-blue-2 lg:text-[20px] text-[17px] "
            >Clients</code
          >
        </p>
        <p class="lg:leading-[50px] text-center pb-4 lg:pb-0">
          <span
            class="lg:text-[60px] text-[55px] font-bold text-custom-blue-2 "
            >40M + USD</span
          ><br />
          <code
            class="text-custom-blue-2 lg:text-[20px] text-[17px]  "
            >Turnover per month</code
          >
        </p>
        <p class="lg:leading-[50px] text-center ">
          <span
            class="lg:text-[60px] text-[55px] font-bold text-custom-blue-2 "
            >15+</span
          ><br />
          <code
            class="text-custom-blue-2 lg:text-[20px] text-[17px]"
            >Counties</code
          >
        </p>
      </div>
    </section>

    <div
      class="flex lg:flex-row flex-col lg:p-0 lg:mb-[55px] mb-16 p-4 lg:mt-[103px] mt-8 lg:ml-[380px] text-center lg:text-left "
    >
      <p
        class="lg:max-w-[450px] lg:text-[45px] text-[28px] font-[600] lg:mb-0 mb-4 lg:leading-[106%] lg:tracking-tight"
      >
        Why is RetailPay is the best tool for you.
      </p>

      <p
        class="lg:max-w-[400px] max-w-[620px] lg:text-[24px] text-[17px] tracking-[1px] leading-[40px] lg:leading-[139%] font-[400] lg:ml-[117px]"
      >
        The RetailPay <strong>Bizwiz</strong> Suite comprises of multiple
        software organs that assist businesses in their day-to-day functions.
      </p>
    </div>

    <div
      class="flex lg:flex-row flex-col justify-center items-center text-white lg:gap-8 "
    >
      <div
        class="border bg-custom-blue-1 rounded-xl p-4 lg:p-0 shadow-2xl lg:m-0 m-3 max-w-[700px] lg:pl-[16px] "
      >
        <img
          src="/public/shield-icon.png"
          alt=""
          class="lg:w-[65px] lg:h-auto lg:mt-[16px] lg:p-0 lg:mb-[30px]"
        />

        <h1 class="font-bold lg:text-[24px] text-xl pt-4 lg:pt-0">Bizwiz ERP</h1>
        <p
          class="max-w-[1000px] lg:max-w-[240px] lg:mt-[30px] lg:p-0 pt-4 text-[14px] lg:text-[14px] font-[400] lg:mr-[36px]"
        >
          Streamline your operations and boost productivity with our intuitive
          ERP system, tailored for distributors, wholesalers and reatilers
        </p>
        <button
          class="lg:mt-[30px] lg:text-[12px] text-[12px] mt-6 border rounded-full bg-white/20 border-white/0 lg:pl-[20px] lg:mr-[20px] lg:mb-[25px] lg:p-0 p-2  flex justify-between w-[95%] lg:hover:bg-white/30 "
        >
          <span class="lg:py-[10px] py-1 pl-2 lg:pl-0 ">Learn more</span>
            <span class="lg:pt-[8px] lg:m-0 lg:pr-2 ">
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.63281 18L12.3875 12L7.63281 6"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
        </button>
      </div>

      <div
        class="border bg-custom-blue-1 rounded-xl p-4 lg:p-0 shadow-2xl lg:m-0 m-3 max-w-[700px] lg:pl-[16px] "
      >
        <img
          src="/public/shield-icon.png"
          alt=""
          class="lg:w-[65px] lg:h-auto lg:mt-[16px] lg:p-0 lg:mb-[30px]"
        />

        <h1 class="font-bold lg:text-[24px] text-xl pt-4 lg:pt-0">Bizwiz POS</h1>
        <p
          class="max-w-[1000px] lg:max-w-[240px] lg:mt-[30px] lg:p-0 pt-4 lg:text-[14px] text-[14px] font-[400] lg:mr-[36px]"
        >
          Transform your retail experience with our sleek and efficient POS system, designed to streamline transactions and enhance customer interactions.
        </p>
        <button
          class="lg:mt-[30px] lg:text-[12px] text-[12px] mt-6 border rounded-full bg-white/20 border-white/0 lg:pl-[20px] lg:mr-[20px] lg:mb-[25px] lg:p-0 p-2  flex justify-between w-[95%] lg:hover:bg-white/30 "
        >
        <span class="lg:py-[10px] py-1 pl-2 lg:pl-0 ">Learn more</span>
          <span class="lg:pt-[8px] lg:m-0 lg:pr-2">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.63281 18L12.3875 12L7.63281 6"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <div
        class="border bg-custom-blue-1 rounded-xl p-4 lg:p-0 shadow-2xl lg:m-0 m-3 max-w-[700px] lg:pl-[16px] "
      >
        <img
          src="/public/shield-icon.png"
          alt=""
          class="lg:w-[65px] lg:h-auto lg:mt-[16px] lg:p-0 lg:mb-[30px]"
        />

        <h1 class="font-bold lg:text-[24px] text-xl pt-4 lg:pt-0">Bizwiz Supplier Portal</h1>
        <p
          class="max-w-[1000px] lg:max-w-[240px] lg:mt-[30px] lg:p-0 pt-4 lg:text-[14px] text-[14px] font-[400] lg:mr-[36px]"
        >
          Empower your suppliers with our intuitive portal, simplifying communication, streamlining orders, and fostering stronger partnerships.
        </p>
        <button
          class="lg:mt-[30px] lg:text-[12px] text-[12px] mt-6 border rounded-full bg-white/20 border-white/0 lg:pl-[20px] lg:mr-[20px] lg:mb-[25px] lg:p-0 p-2  flex justify-between w-[95%] lg:hover:bg-white/30 "
        >
        <span class="lg:py-[10px] py-1 pl-2 lg:pl-0 ">Learn more</span>
          <span class="lg:pt-[8px] lg:m-0 lg:pr-2">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.63281 18L12.3875 12L7.63281 6"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>

      <div
        class="border bg-custom-blue-1 rounded-xl p-4 lg:p-0 shadow-2xl lg:m-0 m-3 max-w-[700px] lg:pl-[16px] "
      >
        <img
          src="/public/shield-icon.png"
          alt=""
          class="lg:w-[65px] lg:h-auto lg:mt-[14px] lg:p-0 lg:mb-[24px]"
        />

        <h1 class="font-bold lg:text-[24px] text-xl pt-4 lg:pt-0 lg:max-w-[300px]">Bizwiz Order-taking Delivery App</h1>
        <p
          class="max-w-[1000px] lg:max-w-[270px] lg:mt-[26px] lg:p-0 pt-4 lg:text-[14px] text-[14px] font-[400] lg:mr-[30px]"
        >
          Elevate your distribution business with our user-friendly app, empowering you to manage orders, track inventory, and optimise logistics with ease.
        </p>
        <button
          class="lg:mt-[22px] lg:text-[12px] text-[12px] mt-6 border rounded-full bg-white/20 border-white/0 lg:pl-[20px] lg:mr-[20px] lg:mb-[20px] lg:p-0 p-2  flex justify-between w-[95%] lg:hover:bg-white/30 "
        >
        <span class="lg:py-[10px] py-1 pl-2 lg:pl-0 ">Learn more</span>
          <span class="lg:pt-[8px] lg:m-0 lg:pr-2">
            <svg
              width="20"
              height="24"
              viewBox="0 0 20 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.63281 18L12.3875 12L7.63281 6"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </article>

  <!-- Third section  -->

  <article>
    <main>
      <div
        class="flex flex-col lg:flex-row justify-center items-center lg:space-x-30"
      >
        <div class="relative lg:mr-[89px] mr-8 lg:mt-[103px] mt-12">
          <!-- <div class="absolute bg-blue-300 blur-[70px] z-0 opacity-80  w-96 h-[500px] rounded-full top-[100px] left-[200px]"></div> -->
          <!-- <img src="/src/assets/light-blue-globe.png" alt="" class="absolute top-[80px] z-0"> -->
          <img
            src="/public/phone3.png"
            alt="black phone"
            class="w-[840px] h-auto lg:w-[600px] object-contain"
          />
        </div>
        <div
          class="lg:mt-[168px] mt-12 lg:p-0 p-2 flex flex-col justify-center items-center lg:grid"
        >
          <h2 class="text-2xl font-bold lg:text-[18px]">Our product</h2>
          <h1
            class="lg:text-[45px] text-5xl font-extrabold text-custom-blue-2 lg:mt-[35px] mt-6"
          >
            Bizwiz Features
          </h1>

          <p
            class="text-center lg:text-left lg:text-[24px] text-[17px] lg:mt-[35px] lg:pt-0 pt-6 lg:pb-0 lg:mb-[35px]  lg:leading-[139%] max-w-[550px] lg:max-w-[420px]"
          >
            With <strong> Bizwiz</strong>, you'll benefit from a one- stop
            commerce platform that gives you innovative tools that will improve
            your bsiness management.Below are some benefits:
          </p>
          <a
            href="#"
            class="text-custom-blue lg:text-[14px] text-[12px] p-4 lg:pt-4 lg:pr-4 lg:pd-4 lg:pl-1 font-semibold flex lg:hover:border-b-4 lg:hover:border-l-4 lg:hover:shadow hover:rounded-full hover: transition w-3/6 lg:w-full justify-between max-w-[440px] lg:max-w-[1000px]"
            >learn more about POS hardware
            <!-- <span class="text-blue-400">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="current" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span> -->
            <img
              class="lg:h-4 lg:w-auto h-4 w-auto lg:mt-1.5"
              src="/public/vector.png"
              alt="arrow-icon"
            />
          </a>
        </div>
      </div>
    </main>

    <main class="flex flex-col justify-center items-center lg:mt-0">
      <div>
        <img
          src="/src/assets/business-structurex2.png"
          alt=""
          class="lg:w-[1150px] w-[600px] h-auto lg:mt-[105px] lg:mb-[28px] mt-16 mb-8"
        />
      </div>

      <div class="text-center ">
        <h1 class="font-bold text-[16px] lg:text-[18px]">Sales & Distribution</h1>
        <p
          class="lg:text-[24px] text-[20px] lg:mt-[28px] mt-4 lg:tracking-wide lg:leading-[139%]"
        >
          With <strong> Bizwiz</strong> you'll benefit from a one-stop commerce
          platform that<br />
          gives you innovative tools that will improve yourbusiness <br />
          management. Below are some benefits:
        </p>
      </div>
    </main>
  </article>

  <!-- Forth section -->

  <article>
    <div class="flex lg:flex-row flex-col justify-center items-center">
      <section
        class="bg-purple bg-cover bg-center text-white flex lg:flex-row flex-col justify-center items-center lg:mt-[236px] mt-32 rounded-3xl p-2 lg:m-0 m-8"
      >
        <div class="">
          <img
            src="/src/assets/woman-in-blue.png"
            alt="woman"
            class="lg:h-auto lg:w-full "
          />
        </div>

        <div class="flex lg:grid flex-col lg:pr-[73px]">
          <p
            class="text-center lg:text-left max-w-[500px] font-bold lg:text-[54px] text-5xl tracking-tight lg:max-w-[800px] lg:pt-0 pt-8"
          >
            Let us be part of<br />
            your growth journey.
          </p>
          <p
            class="text-center lg:text-left lg:text-[22px] font-light text-[17px] leading-[1.4] lg:mt-[25px] mt-8 lg:max-w-[560px] max-w-[500px]"
          >
            Whether you’re a micro, small, medium or large enterprise,
            <strong class="font-bold">Bizwiz</strong> has the tools for you to
            scale up and achieve maximum profit.
          </p>
          <button
            class="lg:max-w-[200px] bg-yellow-300 rounded-full lg:py-[14px] lg:px-[43px] p-2 lg:mt-[25px] mt-10 lg:mb-0 mb-4 pl-14 pr-14 text-black font-bold lg:text-[16px] lg:hover:bg-yellow-500"
          >
            Book a Demo
          </button>
        </div>
      </section>
    </div>
    <div class="lg:m-0 lg:mt-[51px] m-8 mt-16 flex flex-col justify-center items-center lg:mb-[58px]">
      <h1 class="font-bold lg:text-[18px] text-[23px] lg:mb-0 mb-3">
        Our Benefits
      </h1>
      <p
        class="text-center lg:text-[45px] text-5xl text-custom-blue-2 font-[800] lg:mb-0 mb-4 lg:mt-[21px] lg:leading-[100%] leading-[50px] lg:max-w-[600px] max-w-[500px]"
      >
        Level up Your Business With Bizwiz
      </p>
      <img src="/public/line.png" alt="line" class="w-36 h-0.2 lg:mt-[21px] " />
      <p
        class="text-center lg:text-[24px] text-[18px] lg:leading-[139%] leading-[35px] lg:mt-[21px] mt-4 lg:max-w-[750px]"
      >
        With <strong>Bizwiz,</strong> you'll benefit from a one-stop commerce
        platform that gives you innovative tools that will improve your
        businesses management. Below are some benefits:
      </p>
    </div>

    <section class="flex lg:flex-row flex-col justify-center items-center gap-6">
      <div class="border rounded-3xl p-3 lg:m-0 lg:p-0 lg:min-w-[330px] max-w-[480px]">
        <img src="/public/laptop-icon.png" alt="" class="w-16 h-auto lg:w-20 lg:ml-[16px] lg:mt-[16px]" />

        <h2
          class="text-[24px] font-medium lg:mt-[26px] mt-2 lg:max-w-[200px] lg:text-[22px] lg:ml-[16px] tracking-tight"
        >
          Reduced Operating Costs
        </h2>

        <p
          class="lg:text-[16px] lg:mt-[26px] mt-5 mb-8 lg:mb-[26px] text-[15px] font-light lg:max-w-[300px] max-w-[500px] lg:ml-[16px]"
        >
          Empower your suppliers with our instuitive portal, simplifying comms,
          streamlining orders, and fostering stronger partnerships.
        </p>

        <button
          class="text-custom-blue-4 lg:text-[14px] text-[13px] font-medium flex justify-between lg:hover:bg-custom-blue-3 rounded-full p-3 lg:py-2 lg:pl-1  w-full lg:w-11/12 lg:hover:text-white lg:ml-[16px] lg:mb-[16px]"
        >
          <span class="">Learn More</span>

          
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            class=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.63281 18L12.3875 12L7.63281 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          
        </button>
      </div>

      <div class="border rounded-3xl p-3 lg:m-0 lg:p-0 lg:min-w-[330px]">
        <img src="/public/laptop-icon.png" alt="" class="w-16 h-auto lg:w-20 lg:ml-[16px] lg:mt-[16px]" />

        <h2
          class="text-[24px] font-medium lg:mt-[26px] mt-2 lg:max-w-[200px] lg:text-[22px] lg:ml-[16px] tracking-tight"
        >
          Streamlined Supply Chain Processes
        </h2>

        <p
          class="lg:text-[16px] lg:mt-[26px] mt-5 mb-8 lg:mb-[82px] text-[15px] font-light lg:max-w-[250px] max-w-[500px] lg:ml-[16px]"
        >
          Empower your suppliers with our intuitive portal, simplifying comms.
        </p>

        <button
          class="text-custom-blue-4 lg:text-[14px] text-[13px] font-medium flex justify-between lg:hover:bg-custom-blue-3 rounded-full p-3 lg:py-2 lg:pl-1  w-full lg:w-11/12 lg:hover:text-white lg:ml-[16px] lg:mb-[16px]"
        >
          <span class="">Learn More</span>

          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            class=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.63281 18L12.3875 12L7.63281 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div class="border rounded-3xl p-3 lg:m-0 lg:p-0 lg:min-w-[330px]">
        <img src="/public/laptop-icon.png" alt="" class="w-16 h-auto lg:w-20 lg:ml-[16px] lg:mt-[16px]" />

        <h2
          class="text-[24px] font-medium lg:mt-[26px] mt-2 lg:max-w-[200px] lg:text-[22px] lg:ml-[16px] tracking-tight"
        >
         Optimized Inventory Management
        </h2>

        <p
          class="lg:text-[16px] lg:mt-[26px] mt-5 mb-8 lg:mb-[82px] text-[15px] font-light lg:max-w-[250px] max-w-[500px] lg:ml-[16px]"
        >
          Empower your suppliers with our intuitive portal, simplifying comms.
        </p>

        <button
          class="text-custom-blue-4 lg:text-[14px] text-[13px] font-medium flex justify-between lg:hover:bg-custom-blue-3 rounded-full p-3 lg:p-0 lg:py-2 lg:pl-1  w-full lg:w-11/12 lg:hover:text-white lg:ml-[16px] lg:m-0 lg:mb-[16px]"
        >
          <span class="">Learn More</span>
          <div class="lg:mr-2">
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            class=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.63281 18L12.3875 12L7.63281 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          </div>
        </button>
      </div>
    </section>

    <section class="flex lg:flex-row flex-col justify-center items-center gap-6 lg:mt-[22px]">
      <div class="border rounded-3xl p-3 lg:m-0 lg:p-0 lg:min-w-[330px]">
        <img src="/public/laptop-icon.png" alt="" class="w-16 h-auto lg:w-20 lg:ml-[16px] lg:mt-[16px]" />

        <h2
          class="text-[24px] font-medium lg:mt-[26px] mt-2 lg:max-w-[200px] lg:text-[22px] lg:ml-[16px] tracking-tight"
        >
          Simplified Sales Processes
        </h2>

        <p
          class="lg:text-[16px] lg:mt-[26px] mt-5 mb-8 lg:mb-[82px] text-[15px] font-light lg:max-w-[260px] max-w-[500px] lg:ml-[16px]"
        >
          Empower your suppliers with our intuitive portal, simplifying comms.
        </p>

        <button
          class="text-custom-blue-4 lg:text-[14px] text-[13px] font-medium flex justify-between lg:hover:bg-custom-blue-3 rounded-full p-3 lg:py-2 lg:pl-1  w-full lg:w-11/12 lg:hover:text-white lg:ml-[16px] lg:mb-[16px]"
        >
          <span class="">Learn More</span>

          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            class=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.63281 18L12.3875 12L7.63281 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div class="border rounded-3xl p-3 lg:m-0 lg:p-0 lg:min-w-[330px] max-w-[480px]">
        <img src="/public/laptop-icon.png" alt="" class="w-16 h-auto lg:w-20 lg:ml-[16px] lg:mt-[16px]" />

        <h2
          class="text-[24px] font-medium lg:mt-[26px] mt-2 lg:max-w-[200px] lg:text-[22px] lg:ml-[16px] tracking-tight"
        >
          Improved Business Performance
        </h2>

        <p
          class="lg:text-[16px] lg:mt-[26px] mt-5 mb-8 lg:mb-[82px] text-15px font-light lg:max-w-[260px] max-w-[500px] lg:ml-[16px]"
        >
          Empower your suppliers with our intuitive portal, simplifying comms.
        </p>

        <button
          class="text-custom-blue-4 lg:text-[14px] text-[13px] font-medium flex justify-between lg:hover:bg-custom-blue-3 rounded-full p-3 lg:py-2 lg:pl-1  w-full lg:w-11/12 lg:hover:text-white lg:ml-[16px] lg:mb-[16px]"
        >
          <span class="">Learn More</span>

          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            class=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.63281 18L12.3875 12L7.63281 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div class="border rounded-3xl p-3 lg:m-0 lg:p-0 lg:min-w-[330px] max-w-[480px]">
        <img src="/public/laptop-icon.png" alt="" class="w-16 h-auto lg:w-20 lg:ml-[16px] lg:mt-[16px]" />

        <h2
          class="text-[24px] font-medium lg:mt-[26px] mt-2 lg:max-w-[200px] lg:text-[22px] lg:ml-[16px] tracking-tight"
        >
          Improved Reporting Accuracy
        </h2>

        <p
          class="lg:text-[16px] lg:mt-[26px] mt-5 mb-8 lg:mb-[82px] text-[15px]font-light lg:max-w-[260px] max-w-[500px] lg:ml-[16px]"
        >
          Empower your suppliers with our intuitive portal, simplifying comms.
        </p>

        <button
          class="text-custom-blue-4 lg:text-[14px] text-[13px] font-medium flex justify-between lg:hover:bg-custom-blue-3 rounded-full p-3 lg:py-2 lg:pl-1  w-full lg:w-11/12 lg:hover:text-white lg:ml-[16px] lg:mb-[16px]"
        >
          <span class="">Learn More</span>

          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            class=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.63281 18L12.3875 12L7.63281 6"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  </article>

  <!-- Fifth section -->

  <article>
    <main
      class="bg-blend text-white lg:h-[1030px] h-[192vh] bg-cover bg-center z-0 lg:mt-96 mt-72 "
    >
      <!-- floating section (header) -->

      <div class="flex items-center justify-center">
        <main
          class="bg-blue-3 bg-cover bg-center border-b border-l lg:w-[1200px] lg:h-[610px] flex lg:flex-row flex-col text-white rounded-3xl lg:-translate-y-[290px] -translate-y-[200px] lg:m-0 m-4"
        >
          <div class="lg:p-0 p-8 lg:mt-[59px] lg:translate-x-16 lg:ml-[30px]">
            <h1 class="font-bold lg:text-[18px] text-[17px] lg:pt-4"> Our product </h1>
            <p
              class="text-[30px] font-bold lg:mt-4 mt-4 leading-[37px] lg:max-w-[400px] lg:text-[32px] tracking-tight lg:leading-[119%]"
            >
              Here's a message from some of our clients.
            </p>
            <p class="mt-5 lg:text-[17px] font-[400] text-[16px] lg:max-w-[400px]">
              It's helped us better track our sales, manage our inventory and
              improve our customer service.
            </p>

            <fieldset
              class="bg-yellow-400 text-black mt-8 rounded-xl lg:p-0 p-4 lg:pr-[64px] lg:pl-[32px] lg:pb-[32px]"
            >
              <h1 class="lg:text-[24px] text-[22px] font-bold mt-2 lg:mt-[32px] leading-[129%]">
                Prime Mattresses ltd - Nakuru
              </h1>
              <p
                class="lg:text-[18px] text-[16px] font-[400] lg:mt-[21px] mt-4 lg:max-w-[340px] max-w-[500px]"
              >
                It's helped us better track our sales, manage our inventory, and
                improve our customer service.
              </p>
              <i class="text-5xl text-white leading-[60%]">
                <span class="text-black">.</span>.......</i
              >
            </fieldset>
          </div>

          <div class="lg:flex hidden ">
            <img
              src="/src/assets/woman-in-blue4.png"
              alt="woman"
              class="lg:h-[590px] lg:w-full lg:mr-[102px] mt-4"
            />
          </div>
        </main>
      </div>

      <!-- footer -->

      <div class="lg:-translate-y-96 -translate-y-[150px] lg:pt-40">
        <section
          class="flex lg:flex-row flex-col space-y-8 lg:space-y-0 justify-center space-x-16"
        >
          <div class="bg-custom-black lg:p-[30px] p-6 rounded-xl lg:m-0 ml-8 mr-8 mb-8 h-full">
            <figure class="flex">
              <img src="/public/r-icon.png" alt="" class="lg:w-12 h-auto w-8" />
              <h1 class="lg:text-[35px] text-2xl pl-2 lg:pt-3 font-bold">
                RetailPay
              </h1>
            </figure>

            <p
              class="mt-4 mb-8 lg:mt-[30px] lg:mb-[30px] leading-[25px] lg:leading-[25px] text-[13px] lg:text-[13px] font-light lg:max-w-[250px] max-w-[500px]"
            >
              Whether you're a micro, small, medium or large enterprise Bizwiz
              has the tools for you to sclae up and archive maximum profit.
            </p>

            <h2 class="font-bold lg:text-[11px] text-[12px]">Email Address</h2>
            <input
              type="text"
              placeholder="sanjeevk@gmail.com"
              class="border rounded-full p-1 pl-2 lg:p-1 lg:pl-2 w-full lg:mb-[14px] lg:text-[12px] text-[11px] mb-2 mt-2 bg-transparent max-w-[500px]"
            />

            <button
              class="bg-[#115c99] lg:text-[12px] text-[12px] flex rounded-full lg:py-[9px] py-2 lg:px-[30px] px-4 lg:mb-[30px] mb-4"
            >
              <span class="lg:pr-1 ">Book a Demo</span>
              <!-- <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                class="ml-4 lg:mt-0 mt-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.63281 18L12.3875 12L7.63281 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> -->
              <img src="/public/arrow_right.png" alt="arrow" />
            </button>

            <P class="font-medium lg:text-[14px] text-[14px]"
              >Find us at:<br />
              <em class="font-thin">13 Lavington, Jacaranda Avenue</em>
            </P>
          </div>

          <div class="">
            <h1 class="font-bold lg:text-[20px] text-xl">Main</h1>
            <p
              class="lg:leading-[250%] leading-[30px] lg:text-[15px] text-[13px] font-[400] lg:mt-[30px] mt-4"
            >
              Home<br />About<br />Blog<br />Carrer<br />Pricing<br />Integration<br />
              Book Demo<br />Privacy Policy<br />Terms & conditions
            </p>
          </div>

          <div>
            <h1 class="font-bold lg:text-[20px] text-xl">
              Our<br />
              Solutions
            </h1>
            <p
              class="lg:leading-[250%] leading-[30px] lg:text-[15px] text-[13px] font-[400] lg:mt-[30px] mt-4"
            >
              ERP<br />POS<br />Suppliers portal<br />Mobile Application<br />Bizwiz
              cloud<br />
            </p>
          </div>

          <div class="">
            <h1 class="font-bold lg:text-[20px] text-xl">Our Contacts</h1>
            <p class="lg:text-[15px] text-[14px] lg:mt-[19px] mt-4 font-[400]">
              Contact our technical support <br />team<br />
              <span class="text-yellow-200">support@retailpay.africa</span>
            </p>

            <p class="lg:text-[15px] text-[14px] lg:mt-[19px] mt-4 font-[400]">
              Submit your enquiries to<br />
              <span class="text-yellow-200">info@retailpay.africa</span>
            </p>

            <p class="lg:mb-[145px] mb-20 lg:text-[15px] text-[14px] mt-8 lg:mt-[19px] font-[400]">
              Talk to us on<br />
              +254 790 345260
            </p>

            <div class="flex space-x-4 cursor-pointer">
              <div
                class="lg:w-10 lg:h-10 w-10 h-10 rounded-full bg-[#07609b] p-0 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-5 h-5 text-white/70 lg:group-hover:text-black transition-colors duration-300 "
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  />
                </svg>
              </div>
              

              <div
                class="lg:w-10 lg:h-10 w-10 h-10 rounded-full bg-[#07609b] p-0 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                  class="w-5 h-5 text-white/70 lg:group-hover:text-black transition-colors duration-300"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </div>

              <div
                class="lg:w-10 lg:h-10 w-10 h-10 rounded-full bg-[#07609b] p-0 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                  class="w-5 h-5 text-white/70 lg:group-hover:text-black transition-colors duration-300"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  />
                </svg>
              </div>

              <div
                class="lg:w-10 lg:h-10 w-10 h-10 rounded-full p-0 bg-[#07609b] flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                  class="w-5 h-5 text-white/70 lg:group-hover:text-black transition-colors duration-300"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>

              <div
                class="lg:w-10 lg:h-10 w-10 h-10 rounded-full bg-[#07609b] p-0 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                  class="w-5 h-5 text-white/70 lg:group-hover:text-black transition-colors duration-300"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                  />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        <p
          class="border-t lg:text-[14px] lg:leading-[150%] lg:tracking-wide text-sm font-[400] flex justify-center items-center lg:mt-[51px] mt-16 pt-14 border-white/40"
        >
          <i class="mr-2"><Copyright /></i
          ><span class="flex"> Copyright - Retailpay </span>
          <span class="hidden lg:flex"
            > | Designed by RetailPay - Powered by Retailpay</span
          >
        </p>
      </div>
    </main>
  </article>
</template>

<style scoped>
.bg-blue {
  background-image: url("/public/blue-bg2.png");
}
.bg-purple {
  background-image: url("/public/bg-purple-final.png");
}
.bg-blue-3 {
  background-image: url("/public/bg-blue-final-2.png");
}
.bg-purple-3 {
  background-image: url("/public/purple-background-3.jpg");
}
.bg-blend {
  background-image: url("/public/blue-bg-footer.png");
}
.bg-blue-2 {
  background-image: url("/public/bg-blue-final.png");

  /* width: 70%; */
}
</style>

<script setup>
import { TruckElectric } from "lucide-vue-next";
import { ShieldUser } from "lucide-vue-next";
import { Handshake } from "lucide-vue-next";
import { CircleChevronRight } from "lucide-vue-next";
import { Webhook } from "lucide-vue-next";
import { Instagram } from "lucide-vue-next";
import { Linkedin } from "lucide-vue-next";
import { Twitter } from "lucide-vue-next";
import { Chrome } from "lucide-vue-next";
import { Youtube } from "lucide-vue-next";
import { Copyright } from "lucide-vue-next";

import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const menuOpen = ref(false);
const openSolutions = ref(false);
const openResources = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const toggleSolutions = () => {
  openSolutions.value = !openSolutions.value;
};

const toggleResources = () => {
  openResources.value = !openResources.value;
};
</script>

<!-- 
class="fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16 bg-white shadow-lg"
class="fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16"
-->
