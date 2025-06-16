<template >

<!-- first section -->

  <article class="bg-blue min-h-screen bg-cover bg-center text-white relative" >  
      <div class="absolute inset-0 bg-white/5 "></div>
      <header
    :class="[
      'fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16 ',
      isScrolled ? 'bg-white shadow-md' : ''
    ]"
  >
    <div class="flex justify-between md:ml-64 md:pt-12 md:pb-6 p-4 md:p-0 ">
      <!-- Logo -->
      <div class="flex md:ml-6 ">
        <img
          :src="isScrolled ? '/public/r-icon2.png' : '/public/r-icon.png'"
          alt="RetailPay Logo"
          class="w-14 h-14 transition-all duration-300 md:absolute top-10 left-[15.5%]"
        />
        <h1 class="text-2xl md:text-[40px] font-bold md:ml-2 mt-4 md:mt-2 ml-2" :class="isScrolled ? 'text-black' : 'text-white'">
          RetailPay
        </h1>
      </div>

      <!-- Hamburger -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none ">
        <svg
          v-if="!menuOpen"
          :class="[isScrolled ? 'text-black' : 'text-white']"
          class="w-8 h-8 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        > 
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"/>
        </svg>

        <svg
          v-else
          :class="[isScrolled ? 'text-black' : 'text-white']"
          class="w-6 h-6 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"/>
        </svg>

      </button>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center justify-center space-x-20 md:mr-36 relative">
        <ul class="flex space-x-7 text-[17px] font-medium lg:mb-2 ">
          <li><a href="home" :class="isScrolled ? 'text-black' : 'text-white'" class="hover:text-purple-400">Home</a></li>

          <li class="relative group cursor-pointer">
            <div class="flex items-center hover:text-purple-400" :class="isScrolled ? 'text-black' : 'text-white'">
              Our solutions <span class="ml-1">⌄</span>
            </div>
            <div class="absolute hidden p-2 group-hover:flex flex-col border-b-2 border-l-2 rounded-xl" :class="isScrolled ? 'text-purple-600' : 'text-white'">
              <a href="#" class="text-lg p-1 hover:text-purple-400">Inventory Management</a>
              <a href="#" class="text-lg p-1 hover:text-purple-400">Sales & Billing</a>
            </div>
          </li>

          <li><a href="about" :class="isScrolled ? 'text-black' : 'text-white'" class="hover:text-purple-400">About us</a></li>

          <li class="relative group cursor-pointer">
            <div class="flex items-center hover:text-purple-400" :class="isScrolled ? 'text-black' : 'text-white'">
              Resources <span class="ml-1">⌄</span>
            </div>
            <div class="absolute hidden p-2 group-hover:flex flex-col border-b-2 border-l-2 rounded-xl" :class="isScrolled ? 'text-purple-600' : 'text-white'">
              <a href="#" class="text-lg p-1 hover:text-purple-400">FAQs</a>
              <a href="#" class="text-lg p-1 hover:text-purple-400">Customer Stories</a>
            </div>
          </li>

          <li><a href="contact" :class="isScrolled ? 'text-black' : 'text-white'" class="hover:text-purple-400">Contact us</a></li>
        </ul>

        <!-- Buttons -->
        <button class="bg-custom-blue-3 text-white rounded-full px-6 py-2 hover:bg-purple-400">Book a Demo</button>
        <img src="/public/line2.png" alt="" class="h-10" />
        <img src="/public/message-icon.png" alt="" class="w-8 h-8 cursor-pointer" />
      </nav>
    </div>

    <!-- Mobile Nav -->
    <div v-if="menuOpen" class="md:hidden mt-2 space-y-2 bg-white rounded-3xl shadow-lg p-6 text-black">
      <a href="home" class="block mb-2.5">Home</a>
      
      <div>
        <div @click="toggleSolutions" class="flex justify-between items-center cursor-pointer">
        Our Solutions <span>⌄</span>
        </div>
        <i><div v-if= "openSolutions" class="space-y-2 ml-4 ">
          <a href="#" class= "block">. Inventory Management</a>
          <a href="#" class= "block">. Sales & Billing</a>
        </div></i>
      </div>

      <a href="about" class="block">About us</a>
      
      
        <div @click="toggleResources" class="mt-2.5 flex justify-between items-center cursor-pointer">
        Resources <span>⌄</span> 
        </div>
        <i><div v-if="openResources" class="space-y-2 ml-4">
          <a href="#" class= "block">. FAQs</a>
          <a href="#" class= "block">. Customer Stories</a>
        </div></i>
      

      <a href="contact" class="block ">Contact us</a>
      <button class="bg-custom-blue-3 text-white rounded-full p-3 w-full ">Book a Demo</button>
    </div>
  </header>
  <div class="md:h-32 h-12"></div>
  
    <div class="text-center md:text-[80px] text-[33px] md:leading-[90px] leading-[40px] mt-20 font-bold tracking-tight">
      <p> Forging the Future <br/> of Retail, Wholesale & <br/> Distribution. </p>
    </div>

    <div class="flex flex-col items-center justify-center">
      <p class=" md:max-w-[800px] font-light text-center mt-[40px] md:text-2xl text-sm md:leading-[37px]">RetailPay provides a digital end-to-end platform that connects all members of the supply chain ecosystem for maximum value</p>
      <button className="relative bg-custom-blue-3  md:mt-14 md:py-6 rounded-full md:px-16 md:text-[20px] font-bold md:hover:bg-purple-400  mt-8 text-sm py-2 px-6">
        Get Started
      </button>
    </div>

    <section class="border md:flex md:flex-row items-center justify-between md:mt-28 rounded-t-3xl md:mr-48 md:ml-48 backdrop-blur-sm bg-blue-2 bg-cover bg-center border-white/80 md:mx-0 mx-5  mt-14 flex flex-col">
      <div class="text-white md:text-[41px] md:leading-[57px] tracking-tight font-light md:p-0 md:pl-28 pl-0 md:pt-0 pt-4 text-[25px] md:w-[50%] w-[60%]">
        <p class="text-center md:text-left">
          Our product, <strong class="font-bold">Bizwiz</strong> is a state-of-the-art software solution tailored for
          <strong class="font-bold">Wholesalers</strong>, <strong class="font-bold">Distributors</strong>, <strong class="font-bold">Retailers</strong> and <strong class="font-bold">Hoteliers</strong>.
        </p>
      </div>

      <div class=" ">
        <!-- <div class="absolute bg-yellow-300 blur-[60px] z-0 opacity-80  w-full h-full rounded-full top-[80px]"></div> -->
        <img src="/src/assets/lady-in-yellow.png" alt="woman_smiling" class="w-[800px] h-auto z-10" />
      </div>
    </section>


  </article>


<!-- Second section -->

  <article>

    <div class=" md:border-2 md:shadow-lg flex md:flex-row flex-col space-y-4 justify-center items-center md:space-x-44 space-x-10  rounded-b-3xl md:mb-0 md:p-8 p-4 md:mr-48 md:ml-48 mb-10 ">
      <p>
        <span class="md:text-[83px] text-[50px] font-bold text-custom-blue-2 tracking-tighter">100K+</span><br/>
        <code class="text-custom-blue-2 md:text-[25px] text-[20px] tracking-tight md:ml-16 ml-12">Clients</code>
      </p>
      <p>
        <span class="md:text-[83px] text-[50px] font-bold text-custom-blue-2 tracking-tighter">40M + USD</span><br/>
        <code class="text-custom-blue-2 md:text-[25px] text-[20px] tracking-tight md:ml-16 ml-4">Turnover per month</code>
      </p>
      <p>
        <span class="md:text-[83px] text-[50px] font-bold text-custom-blue-2 tracking-tighter">15+</span><br/>
        <code class="text-custom-blue-2 md:text-[25px] text-[20px] tracking-tight md:ml-8 md:mr-0 mr-2 ">Counties</code>
      </p>
    </div>

    <div class="flex md:flex-row flex-col  justify-center items-center md:space-x-40 md:leading-[60px] md:p-32 md:mb-0 mb-20 p-4">
      <p class="md:max-w-[600px] md:text-[60px] text-[28px] tracking-tight font-bold md:mr-32 md:mb-0 mb-4">
        Why is RetailPay the very best tool for you.
      </p>

      <p class="text-center md:text-left md:max-w-[500px] max-w-[620px] md:text-3xl text-[17px] tracking-[1px] leading-[40px] ">
        The RetailPay <strong>Bizwiz</strong> Suite comprises of multiple software organs that assist businesses in their day-to-day functions.
      </p>
    </div>

    <div class="flex md:flex-row flex-col justify-center items-center text-white md:space-x-12 ">
      <div class=" border bg-custom-blue-2 rounded-xl md:p-5 p-4 shadow-2xl md:pr-6 md:m-0 m-3">
       
        <img src="/public/shield-icon.png" alt="" class="md:w-[80px] md:h-[80px]">

        <h1 class=" font-bold md:text-3xl text-xl pt-4 md:pt-10">Bizwiz ERP</h1>
        <p class="max-w-[1000px] md:max-w-[337px] md:pt-10 pt-4 md:text-[18px] font-light">
          Streamline your operations and boost productivity with our intuitive ERP system, tailored for distributors, wholesalers and reatilers
        </p>
        <button class="md:mt-12 mt-6 border rounded-full bg-white/20 border-white/30 md:p-[10px] p-2 flex md:hover:bg-white/30 w-full justify-between ">Learn more 
          <span class=" ">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      </div>

      <div class=" border bg-custom-blue-2 rounded-xl md:p-5 p-4 shadow-2xl md:pr-6 md:m-0 m-3 ">
       
        <img src="/public/shield-icon.png" alt="" class="md:w-[80px] md:h-[80px]">

        <h1 class=" font-bold md:text-3xl text-xl pt-4 md:pt-10">Bizwiz POS</h1>
        <p class="max-w-[1000px] md:max-w-[337px] md:pt-10 pt-4 md:text-[18px] font-light">
          Transform your retail experience with our sleek and efficient POS system, designed to streamline transactions and enhance customer interactions.        
        </p>
        <button class="md:mt-12 mt-6 border rounded-full bg-white/20 border-white/30 md:p-[10px] p-2 flex md:hover:bg-white/30 w-full justify-between ">Learn more 
          <span class=" ">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      </div>

      <div class=" border bg-custom-blue-2 rounded-xl md:p-5 p-4 shadow-2xl md:pr-6 md:m-0 m-3">
       
        <img src="/public/shield-icon.png" alt="" class="md:w-[80px] md:h-[80px]">

        <h1 class=" font-bold md:text-3xl text-xl pt-4 md:pt-10">Bizwiz Supplier Portal</h1>
        <p class="max-w-[1000px] md:max-w-[337px] md:pt-10 pt-4 md:text-[18px] font-light">
          Empower your suppliers with our intuitive portal, simplifying communication, streamlining orders, and fostering stronger partnerships.
        </p>
        <button class="md:mt-12 mt-6 border rounded-full bg-white/20 border-white/30 md:p-[10px] p-2 flex md:hover:bg-white/30 w-full justify-between ">Learn more 
          <span class=" ">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      </div>

      <div class=" border bg-custom-blue-2 rounded-xl md:p-5 p-4 shadow-2xl md:pr-6 md:m-0 m-3">
       
        <img src="/public/shield-icon.png" alt="" class="md:w-[80px] md:h-[80px]">

        <h1 class="max-w-[1000px] md:max-w-[337px] font-bold md:text-3xl text-xl pt-4 md:pt-6">Bizwiz Order-taking & Delivery App</h1>
        <p class="max-w-[1000px] md:max-w-[337px] md:pt-10 pt-4 md:text-[18px] font-light">
          Elevate your distribution business with our user-friendly app, empowering you to manage orders, track inventory, and optimise logistics with ease.
        </p>
        <button class="md:mt-6 mt-6 border rounded-full bg-white/20 border-white/30 md:p-[10px] p-2 flex md:hover:bg-white/30 w-full justify-between ">Learn more 
          <span class=" ">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      </div>
    </div>


  </article>

<!-- Third section  -->

  <article>

    <main>
      <div class="flex flex-col md:flex-row justify-center items-center md:mr-36 mr-0">
        <div class="relative pt-8 md:mr-0 mr-8">
          <!-- <div class="absolute bg-blue-300 blur-[70px] z-0 opacity-80  w-96 h-[500px] rounded-full top-[100px] left-[200px]"></div> -->
          <!-- <img src="/src/assets/light-blue-globe.png" alt="" class="absolute top-[80px] z-0"> -->
          <img src="/public/phone.png" alt="black phone" class="w-[840px] h-auto object-contain">
        </div>
        <div class="md:mt-20 md:p-0 p-2 flex flex-col justify-center items-center md:grid">

          <h2 class="text-2xl font-bold ">Our product</h2>
          <h1 class="md:text-6xl text-5xl font-extrabold text-custom-blue-2 md:mt-12 mt-6">Bizwiz Features</h1>

          <p class="text-center md:text-left md:text-3xl text-xl md:pt-12 pt-6 md:pb-10 pb-8 md:leading-[44px] max-w-[550px] md:max-w-[530px]">With <strong> Bizwiz</strong>, you'll benefit from a one- stop commerce platform that gives you innovative tools that will improve your bsiness management.Below are some benefits:</p>
          <a href="#" class="text-custom-blue md:text-[18px] p-2 font-semibold flex md:hover:border-b-4 md:hover:border-l-4 md:hover:shadow hover:rounded-full hover: transition w-full justify-between max-w-[440px] md:max-w-[1000px]">learn more about POS hardware 
            <!-- <span class="text-blue-400">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="current" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span> -->
          <img class="md:h-6 h-5 " src="/public/vector.png" alt="arrow-icon">
          </a>

        </div>
      </div>

    </main>


    <main class="flex flex-col justify-center items-center md:mt-0 mt-14  ">
      <div >
        <img src="/src/assets/business-structure.png" alt="" class="md:w-full w-[600px] h-auto m-6 mt-12 mb-10">
      </div>

      <div class="text-center ">
        <h1 class=" font-bold text-[24px] ">Sales & Distribution</h1>
      <p class="md:text-3xl text-xl md:mt-10 mt-4 tracking-wide md:leading-[44px]">
        With <strong> Bizwiz</strong> you'll benefit from a one-stop commerce platform that<br/>  gives you innovative tools  that will improve yourbusiness <br/>
        management. Below are some benefits: 
      </p>
      </div>
      

    </main>


  </article>


<!-- Forth section -->


  <article>

    <div class="flex md:flex-row flex-col justify-center items-center">
    <section class=" bg-purple bg-cover bg-center text-white flex md:flex-row flex-col justify-center items-center md:mt-80 mt-36 rounded-3xl p-2 md:m-0 m-8">
      <div>
        <img src="/src/assets/woman-in-blue.png" alt="woman" class=" md:h-[600px] md:w-[800px]  ">
      </div>

      <div class="flex md:grid flex-col justify-center items-center">
        <p class=" text-center md:text-left max-w-[500px] font-bold md:text-7xl text-5xl tracking-tight md:max-w-[680px] md:pt-0 pt-8" >Let us be part of your growth journey.</p>
        <p class=" text-center md:text-left md:text-[26px] text-xl leading-[1.4] mt-12 md:max-w-[650px] max-w-[500px]">
          Whether you’re a micro, small, medium or large enterprise, <strong class="font-bold">Bizwiz</strong> has the tools for you to scale up and achieve maximum profit.
        </p>
        <button class="md:max-w-[300px] bg-yellow-300 rounded-full md:p-5 p-2 mt-10 md:mb-0 mb-4 pl-14 pr-14 text-black font-bold md:text-xl md:hover:bg-yellow-500">Book a Demo</button>
      </div>

    </section>
    </div>
    <div class="md:m-14 m-8 flex flex-col justify-center items-center">
      
      <h1 class="font-bold text-[23px] md:mb-8 mb-4">Our Benefits</h1>
      <p class="text-center md:text-6xl text-5xl text-custom-blue-2 font-bold md:mb-12 mb-6 md:leading-[70px] leading-[50px] md:max-w-[700px] max-w-[500px]">Level up Your Business With Bizwiz</p>
      <img src="/public/line.png" alt="line" class="w-52 h-0.5">
      <p class="text-center md:text-3xl text-xl md:leading-[45px] leading-[35px] md:mt-12 mt-6 md:max-w-[990px]">With  <strong>Bizwiz,</strong> you'll benefit from a one-stop commerce platform that
      gives you innovative tools that will improve your businesses 
      management. Below are some benefits:
      </p>

    </div>

    <section class="flex md:flex-row flex-col justify-center items-center ">
      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto">

        <h2 class="text-3xl font-medium mt-6 md:max-w-[350px] ">
          Reduced Operating  Costs
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light md:max-w-[350px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex md:hover:bg-custom-blue-3 rounded-full p-3 md:hover:text-white w-full justify-between md:min-w-[380px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto hover:fill">

        <h2 class="text-3xl font-medium mt-6 md:max-w-[350px]">
          Streamlined Supply Chain Processes
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light md:max-w-[350px] max-w-[500px]">
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex md:hover:bg-custom-blue-3 rounded-full p-3 md:hover:text-white w-full justify-between md:min-w-[380px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto">

        <h2 class="text-3xl font-medium mt-6 md:max-w-[350px]">
          Optimised Inventory Management
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light md:max-w-[350px] max-w-[500px]">
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex md:hover:bg-custom-blue-3 rounded-full p-3 md:hover:text-white w-full justify-between md:min-w-[380px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>
      </div>

    </section>

    <section class="flex md:flex-row flex-col justify-center items-center ">

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto">

        <h2 class="text-3xl font-medium mt-6 md:max-w-[350px]">
          Simplified Sales Processes
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light md:max-w-[350px] max-w-[500px]">
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex md:hover:bg-custom-blue-3 rounded-full p-3 md:hover:text-white w-full justify-between md:min-w-[380px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>
      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto">

        <h2 class="text-3xl font-medium mt-6 md:max-w-[350px]">
          Improved Business Perfomance
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light md:max-w-[350px] max-w-[500px]">
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex md:hover:bg-custom-blue-3 rounded-full p-3 md:hover:text-white w-full justify-between md:min-w-[380px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>
      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto">

        <h2 class="text-3xl font-medium mt-6 md:max-w-[350px] ">
          Improved Reporting Accuracy
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light md:max-w-[350px] max-w-[500px]">
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex md:hover:bg-custom-blue-3 rounded-full p-3 md:hover:text-white w-full justify-between md:min-w-[380px]">
          Learn More

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

    </section>

  </article>



<!-- Fifth section -->

  <article >

           
    <main class="bg-blend text-white md:h-[1300px] h-full bg-cover bg-center z-0 md:mt-96 mt-72">

    <!-- floating section (header) -->


    <div class="flex items-center justify-center">

    <main class=" bg-blue-3 bg-cover bg-center border-b border-l flex md:flex-row flex-col justify-center items-center text-white rounded-3xl md:-translate-y-[290px] -translate-y-[200px] md:m-0 m-4">

      <div class="md:pl-40 md:p-0 p-8" >
        <h1 class="font-bold md:text-2xl text-xl">
          Our product
        </h1>
        <p class="text-[45px] font-bold md:mt-8 mt-4 leading-[47px] md:max-w-[600px]">
          Here's a message from some of our clients.
        </p>
        <p class="mt-6 md:text-2xl text-xl md:max-w-[600px]">
          It's helped us better track our sales, manage our
          inventory and improve our customer service.
        </p>


        <fieldset class=" bg-yellow-400 text-black mt-10  rounded-3xl md:p-8 p-4 ">
          <h1 class="md:text-3xl text-2xl font-bold mt-2">Prime Mattresses ltd - Nakuru</h1>
          <p class="md:text-2xl text-xl font-light md:mt-8 mt-4 md:max-w-[380px] max-w-[500px]">It's helped us better track our sales,
            manage our inventory, and improve our
            customer service.
          </p>
          <i class="text-5xl text-white "> <span class="text-black">.</span>...........</i>
        </fieldset>
      </div>

      <div class="md:flex hidden">
        
        <img src="/src/assets/woman-in-blue2.png" alt="woman" class=" md:h-[700px] md:w-[900px]">
      </div>

    </main>
    </div>

    <!-- footer -->

      <div class="md:-translate-y-96 -translate-y-[100px]">

      <section class=" flex md:flex-row flex-col space-y-8 justify-center items-cente md:pt-44 space-x-20 ">

      <div class=" bg-custom-black md:p-12 p-6 rounded-xl md:m-0 m-8">
        <figure class="flex ">
          <img src="/public/r-icon.png" alt="" class="md:w-14 md:h-14 w-8 h-8 " >
          <h1 class="md:text-[40px] text-2xl pl-2 font-bold ">
            RetailPay
          </h1>
        </figure>

        <p class="mt-8 mb-8 leading-[30px] md:text-[18px] font-light md:max-w-[300px] max-w-[500px]"> Whether you're a micro, small, medium or large enterprise Bizwiz
        has the tools for you to sclae up and archive maximum profit.
        </p>

        <h2 class="font-bold">Email Address</h2>
        <input type="text" placeholder="sanjeevk@gmail.com" class="border rounded-full p-2 w-full md:mb-6 mb-4 mt-2 bg-transparent max-w-[500px]" />
        
        <button class="bg-blue-500 flex rounded-full md:p-3 p-2 pl-8 md:mb-12 mb-6">Book a Demo 
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="ml-2" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <P class="font-medium md:text-xl">Find us at:<br> <em class="font-thin">13 Lavington, Jacaranda Avenue</em> </P>

      </div>

      <div>

        <h1 class="font-bold md:text-3xl text-xl">Main</h1>
        <p class="md:leading-[50px] leading-[30px] md:text-xl text-sm font-light md:mt-8 mt-4" >Home<br/>About<br/>Blog<br/>Carrer<br/>Pricing<br/>Integration<br/>
        Book Demo<br/>Privacy Policy<br/>Terms of Service
        </p>

      </div>

      <div>
        <h1 class="font-bold md:text-3xl text-xl">Our<br/> Solutions</h1>
        <p class="md:leading-[50px] leading-[30px] md:text-xl text-sm font-light md:mt-8 mt-4">ERP<br/>POS<br/>Suppliers portal<br/>Mobile Application<br/>Bizwiz cloud<br/>
        </p>

      </div>

      <div class="">
        <h1 class="font-bold md:text-3xl text-xl">Our Contacts</h1>
        <p class="md:text-xl  md:mt-8 mt-4 font-light">Contact our technical support <br/>team<br/>
        <span class="text-yellow-200">support@retailpay.africa</span>
        </p>

        <p class="md:text-xl md:mt-8 mt-4 font-light">Submit your enquiries to<br>
        <span class="text-yellow-200">info@retailpay.africa</span>
        </p>

        <p class="md:mb-36 mb-20 md:text-[18px] mt-8 font-light">Talk to us on<br/>
        +254 790 345260
        </p>

        <div class="flex space-x-4 cursor-pointer">

        <div class="md:w-12 md:h-12 w-10 h-10 rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 md:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white md:group-hover:text-black transition-colors duration-300">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </div>

        <div class="md:w-12 md:h-12 w-10 h-10  rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 md:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white md:group-hover:text-black transition-colors duration-300">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
        </div>

        <div class="md:w-12 md:h-12 w-10 h-10 rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 md:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white md:group-hover:text-black transition-colors duration-300">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </div>

        

        <div class="md:w-12 md:h-12 w-10 h-10 rounded-full p-3 bg-[#07609b] flex items-center justify-center transition-colors duration-300 md:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white md:group-hover:text-black transition-colors duration-300">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
        </div>

        <div class="md:w-12 md:h-12 w-10 h-10  rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 md:hover:bg-white group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white md:group-hover:text-black transition-colors duration-300">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </div>



        </div>

      </div>


      </section>

      <p class="border-t md:text-xl text-sm font-light flex justify-center items-center mt-16 p-14 border-white/40"> <i class="mr-2"><Copyright /></i><span class="flex"> Copyright - Retailpay </span> <span class="hidden">| Designed by RetailPay - Powered by Retailpay</span></p>

  </div>
    </main>

  </article>



  </template>

  <style scoped>
    .bg-blue{
      background-image: url('/public/blue-image.png');
    }
    .bg-purple{
      background-image: url('/public/bg-purple-final.png');
    }
    .bg-blue-3{
      background-image: url('/public/bg-blue-final-2.png');
    }
    .bg-purple-3{
      background-image: url('/public/purple-background-3.jpg');
    }
    .bg-blend{
      background-image: url('/public/blue-bg-footer.png');
    }
    .bg-blue-2{
      background-image: url('/public/bg-blue-final.png');
    
      /* width: 70%; */
      
    }

  </style>
    
<script setup>
import { TruckElectric } from 'lucide-vue-next';
import { ShieldUser } from 'lucide-vue-next';
import { Handshake } from 'lucide-vue-next';
import { CircleChevronRight } from 'lucide-vue-next';
import { Webhook } from 'lucide-vue-next';
import { Instagram } from 'lucide-vue-next';
import { Linkedin } from 'lucide-vue-next';
import { Twitter } from 'lucide-vue-next';
import { Chrome } from 'lucide-vue-next';
import { Youtube } from 'lucide-vue-next';
import { Copyright } from 'lucide-vue-next';


import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)
const openSolutions = ref(false)
const openResources = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleSolutions = () => {
  openSolutions.value = !openSolutions.value
}

const toggleResources = () => {
  openResources.value = !openResources.value
}

</script>



<!-- 
class="fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16 bg-white shadow-md"
class="fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16"
-->