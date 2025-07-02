<template >

<!-- first section -->

  <article class="bg-blue bg-cover bg-center text-white relative lg:w-full" >
      <div class="absolute inset-0 bg-white/5 "></div>
      <header
    :class="[
      'fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16 ',
      isScrolled ? 'bg-white shadow-lg' : ''
    ]"
  >
   
    <div class="lg:grid lg:grid-cols-16 gap-5 flex justify-between lg:pt-12 lg:pb-4 p-4 lg:p-0 ">
      <!-- Logo -->
      <div class="flex lg:col-span-5 lg:justify-end items-center">
        <img
          :src="isScrolled ? '/public/r-icon2.png' : '/public/r-icon.png'"
          alt="RetailPay Logo"
          class="w-14 h-14 transition-all duration-300 "
        />
        <h1 class="text-2xl lg:text-[35px] font-bold mt-4 ml-2 lg:mb-2 " :class="isScrolled ? 'text-black' : 'text-white'">
          RetailPay
        </h1>
      </div>

      <!-- Hamburger -->
      <button @click="toggleMenu" class="lg:hidden focus:outline-none">
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
          class="w-6 h-6 text-red-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"/>
        </svg>

      </button>

      <!-- Desktop Nav -->
      <nav class="hidden lg:col-span-11 lg:flex items-center space-x-20 relative">
        <div class="lg:grid lg:w-11/12 lg:grid-cols-8 gap-8 ">
        <div class="lg:col-span-5 mx-auto items-center lg:pt-6">
        <ul class="flex space-x-7 text-[16px] font-medium lg:mb-2 ">
          <li><a href="home" :class="isScrolled ? 'text-black' : 'text-white'" class="hover:text-purple-400">Home</a></li>

          <li class="relative group cursor-pointer">
            <div class="flex items-center hover:text-purple-400" :class="isScrolled ? 'text-black' : 'text-white'">
              Our solutions <span class="ml-1">⌄</span>
            </div>
            <div class="absolute hidden p-2 group-hover:flex flex-col border-b-2 border-l-2 rounded-xl bg-white " :class="isScrolled ? 'text-purple-600' : 'text-white'">
              <a href="#" class="text-l p-1 hover:text-purple-400 text-black">Inventory Management</a>
              <a href="#" class="text-l p-1 hover:text-purple-400 text-black">Sales & Billing</a>
            </div>
          </li>

          <li><a href="about" :class="isScrolled ? 'text-black' : 'text-white'" class="hover:text-purple-400">About us</a></li>

          <li class="relative group cursor-pointer">
            <div class="flex items-center hover:text-purple-400" :class="isScrolled ? 'text-black' : 'text-white'">
              Resources <span class="ml-1">⌄</span>
            </div>
            <div class="absolute hidden p-2 group-hover:flex flex-col border-b-2 border-l-2 rounded-xl bg-white" :class="isScrolled ? 'text-purple-600' : 'text-white'">
              <a href="#" class="text-l p-1 hover:text-purple-400 text-black">FAQs</a>
              <a href="#" class="text-l p-1 hover:text-purple-400 text-black">Customer Stories</a>
            </div>
          </li>

          <li><a href="contact" :class="isScrolled ? 'text-black' : 'text-white'" class="hover:text-purple-400">Contact us</a></li>
        </ul>
        </div>

        <!-- Buttons -->
        <div class="lg:col-span-3 flex space-x-16 ">
          <button class="bg-custom-blue-3 text-white rounded-full px-6 py-2 hover:bg-purple-400 lg:text-l lg:px-6 lg:py-0 lg:h-10 lg:mt-3">Book a Demo</button>
          <img src="/public/line2.png" alt="" class="h-10 lg:h-14 " />
          <img src="/public/message-icon.png" alt="" class="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer lg:mt-3" />
      </div>
      </div>
      </nav>
    </div>

    <!-- Mobile Nav -->
    <div v-if="menuOpen" class="lg:hidden mt-2 space-y-2 bg-white rounded-3xl shadow-lg p-6 text-black">
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
  <div class="lg:h-32 h-12"></div>
  
    <div class="text-center lg:text-[80px] text-[33px] lg:leading-[95px] leading-[40px] mt-12 font-bold tracking-tight">
      <p> Forging the Future <br/> of Retail, Wholesale & <br/> Distribution. </p>
    </div>

    <div class="flex flex-col items-center justify-center">
      <p class=" lg:max-w-[700px] font-light text-center mt-[40px] lg:text-xl text-xl lg:leading-[45px]">RetailPay provides a digital end-to-end platform that connects all members of the supply chain ecosystem for maximum value</p>
      <button className="relative bg-custom-blue-3  lg:mt-14 lg:py-4 rounded-full lg:px-10 lg:text-[20px] font-bold lg:hover:bg-purple-400  mt-8 text-sm py-2 px-6">
        Get Started
      </button>
    </div>

    <div class="flex justify-center items-center">
    <section class="border flex lg:flex-row items-center lg:justify-between lg:mt-28 rounded-t-3xl lg:max-w-[1400px] backdrop-blur-sm bg-blue-2 bg-cover bg-center border-white/80 lg:mx-0 mx-5  mt-14 flex-col">
      <div class="text-white lg:text-[35px] lg:leading-[53px] tracking-tight font-light lg:p-0 lg:pl-28 pl-0 lg:pt-0 pt-4 text-[25px] lg:w-[50%] w-[60%]">
        <p class="text-center lg:text-left">
          Our product, <strong class="font-bold">Bizwiz</strong> is a state-of-the-art software solution tailored for
          <strong class="font-bold">Wholesalers</strong>, <strong class="font-bold">Distributors</strong>, <strong class="font-bold">Retailers</strong> and <strong class="font-bold">Hoteliers</strong>.
        </p>
      </div>

      <div class="">
        <!-- <div class="absolute bg-yellow-300 blur-[60px] z-0 opacity-80  w-full h-full rounded-full top-[80px]"></div> -->
        <img src="/src/assets/lady-in-yellow.png" alt="woman_smiling" class="w-[800px] h-auto z-10 lg:w-full" />
      </div>
    </section>
    </div>


  </article>


<!-- Second section -->

  <article>

    <section class="flex justify-center items-center">
    <div class=" lg:border-2 lg:shadow-lg flex lg:flex-row flex-col space-y-4 lg:space-y-0 justify-center items-center lg:space-x-56 space-x-10  rounded-b-3xl lg:p-8 p-4 lg:min-w-[1400px] ">
      <p class="leading-[50px] ">
        <span class="lg:text-7xl text-[50px] font-bold text-custom-blue-2 tracking-tighter ">100K+</span><br/>
        <code class="text-custom-blue-2 lg:text-xl text-[20px] tracking-tight lg:ml-16 ml-12 ">Clients</code>
      </p>
      <p class="leading-[50px] ">
        <span class="lg:text-7xl text-[50px] font-bold text-custom-blue-2 tracking-tighter">40M + USD</span><br/>
        <code class="text-custom-blue-2 lg:text-xl text-[20px] tracking-tight lg:ml-16 ml-4">Turnover per month</code>
      </p>
      <p class="leading-[50px] ">
        <span class="lg:text-7xl text-[50px] font-bold text-custom-blue-2 tracking-tighter">15+</span><br/>
        <code class="text-custom-blue-2 lg:text-xl text-[20px] tracking-tight lg:ml-4 lg:mr-0 mr-2 ">Counties</code>
      </p>
    </div>
    </section>

    <div class="flex lg:flex-row flex-col justify-center items-center lg:space-x-40 lg:leading-[60px] lg:p-20 lg:mb-0 mb-20 p-4">
      <p class="lg:max-w-[600px] lg:text-[55px] text-[28px] tracking-tight font-bold lg:mb-0 mb-4">
        Why is RetailPay the very best tool for you.
      </p>

      <p class="text-center lg:text-left lg:max-w-[400px] max-w-[620px] lg:text-2xl text-[17px] tracking-[1px] leading-[40px] lg:leading-[40px] ">
        The RetailPay <strong>Bizwiz</strong> Suite comprises of multiple software organs that assist businesses in their day-to-day functions.
      </p>
    </div>

    <div class="flex lg:flex-row flex-col justify-center items-center text-white lg:space-x-12 space-y-5">
      
      <div class=" border bg-custom-blue-2 rounded-2xl lg:p-6 p-4 shadow-2xl lg:pr-6 lg:m-0 m-3 max-w-[700px] lg:mt-6">
       
        <img src="/public/shield-icon.png" alt="" class="lg:w-[65px] lg:h-auto">

        <h1 class=" font-bold lg:text-2xl text-xl pt-4 lg:pt-8">Bizwiz ERP</h1>
        <p class="max-w-[1000px] lg:max-w-[330px] lg:pt-6 pt-4 lg:text-[18px] font-light">
          Streamline your operations and boost productivity with our intuitive ERP system, tailored for distributors, wholesalers and reatilers
        </p>
        <button class="lg:mt-16 lg:text-l mt-6 border rounded-full bg-white/20 border-white/30 lg:p-[10px] p-2 flex lg:hover:bg-white/30 w-full justify-between ">Learn more 
          <span class=" ">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      </div>

      <div class=" border bg-custom-blue-2 rounded-2xl lg:p-6 p-4 shadow-2xl lg:pr-6 lg:m-0 m-3 max-w-[700px]">
       
        <img src="/public/shield-icon.png" alt="" class="lg:w-[65px] lg:h-auto">

        <h1 class=" font-bold lg:text-2xl text-xl pt-4 lg:pt-8">Bizwiz POS</h1>
        <p class="max-w-[1000px] lg:max-w-[330px] lg:pt-6 pt-4 lg:text-[18px] font-light">
          Transform your retail experience with our sleek and efficient POS system, designed to streamline transactions and enhance customer interactions.
        </p>
        <button class="lg:mt-16 lg:text-l mt-6 border rounded-full bg-white/20 border-white/30 lg:p-[10px] p-2 flex lg:hover:bg-white/30 w-full justify-between ">Learn more 
          <span class=" ">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      </div>

      <div class=" border bg-custom-blue-2 rounded-2xl lg:p-6 p-4 shadow-2xl lg:pr-6 lg:m-0 m-3 max-w-[700px]">
       
        <img src="/public/shield-icon.png" alt="" class="lg:w-[65px] lg:h-auto">

        <h1 class=" font-bold lg:text-2xl text-xl pt-4 lg:pt-8">Bizwiz Supplier Portal</h1>
        <p class="max-w-[1000px] lg:max-w-[330px] lg:pt-6 pt-4 lg:text-[18px] font-light">
          Empower your suppliers with our intuitive portal, simplifying communication, streamlining orders, and fostering stronger partnerships.
        </p>
        <button class="lg:mt-16 lg:text-l mt-6 border rounded-full bg-white/20 border-white/30 lg:p-[10px] p-2 flex lg:hover:bg-white/30 w-full justify-between ">Learn more 
          <span class=" ">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      </div>

      <div class=" border bg-custom-blue-2 rounded-2xl lg:p-6 p-4 shadow-2xl lg:pr-6 lg:m-0 m-3 max-w-[700px]">
       
        <img src="/public/shield-icon.png" alt="" class="lg:w-[65px] lg:h-auto">

        <h1 class="lg:max-w-[330px] font-bold lg:text-2xl text-xl pt-4 lg:pt-6">Bizwiz Order-taking & Delivery App</h1>
        <p class="max-w-[1000px] lg:max-w-[330px] lg:pt-4 pt-4 lg:text-[18px] font-light">
          Elevate your distribution business with our user-friendly app, empowering you to manage orders, track inventory, and optimise logistics with ease.
        </p>
        <button class="lg:mt-12 lg:text-l mt-6 border rounded-full bg-white/20 border-white/30 lg:p-[10px] p-2 flex lg:hover:bg-white/30 w-full justify-between ">Learn more 
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
      <div class="flex flex-col lg:flex-row justify-center items-center lg:space-x-30">
        <div class="relative pt-8 lg:mr-0 mr-8">
          <!-- <div class="absolute bg-blue-300 blur-[70px] z-0 opacity-80  w-96 h-[500px] rounded-full top-[100px] left-[200px]"></div> -->
          <!-- <img src="/src/assets/light-blue-globe.png" alt="" class="absolute top-[80px] z-0"> -->
          <img src="/public/phone.png" alt="black phone" class="w-[840px] h-auto lg:w-[700px] object-contain">
        </div>
        <div class="lg:mt-20 lg:p-0 p-2 flex flex-col justify-center items-center lg:grid">

          <h2 class="text-2xl font-bold lg:text-2xl ">Our product</h2>
          <h1 class="lg:text-5xl text-5xl font-extrabold text-custom-blue-2 lg:mt-8 mt-6">Bizwiz Features</h1>

          <p class="text-center lg:text-left lg:text-2xl text-xl lg:pt-12 pt-6 lg:pb-10 pb-8 lg:leading-[38px] max-w-[550px] lg:max-w-[420px]">With <strong> Bizwiz</strong>, you'll benefit from a one- stop commerce platform that gives you innovative tools that will improve your bsiness management.Below are some benefits:</p>
          <a href="#" class="text-custom-blue lg:text-l p-4 font-semibold flex lg:hover:border-b-4 lg:hover:border-l-4 lg:hover:shadow hover:rounded-full hover: transition w-full justify-between max-w-[440px] lg:max-w-[1000px]">learn more about POS hardware 
            <!-- <span class="text-blue-400">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="current" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span> -->
          <img class="lg:h-4 w-auto h-5 lg:mt-1.5" src="/public/vector.png" alt="arrow-icon">
          </a>

        </div>
      </div>

    </main>


    <main class="flex flex-col justify-center items-center lg:mt-0 mt-14  ">
      <div >
        <img src="/src/assets/business-structurex2.png" alt="" class="lg:w-[1300px] w-[600px] h-auto m-6 mt-12 mb-20">
      </div>

      <div class="text-center ">
        <h1 class=" font-bold text-[24px] lg:text-2xl ">Sales & Distribution</h1>
      <p class="lg:text-[27px] text-xl lg:mt-10 mt-4 tracking-wide lg:leading-[38px]">
        With <strong> Bizwiz</strong> you'll benefit from a one-stop commerce platform that<br/>  gives you innovative tools  that will improve yourbusiness <br/>
        management. Below are some benefits: 
      </p>
      </div>
      

    </main>


  </article>


<!-- Forth section -->


  <article>

    <div class="flex lg:flex-row flex-col justify-center items-center">
    <section class=" bg-purple bg-cover bg-center text-white flex lg:flex-row flex-col justify-center items-center lg:mt-72 mt-36 rounded-3xl p-2 lg:m-0 m-8">
      <div>
        <img src="/src/assets/woman-in-blue.png" alt="woman" class=" lg:h-auto lg:w-full  ">
      </div>

      <div class="flex lg:grid flex-col justify-center items-center lg:pr-12">
        <p class=" text-center lg:text-left max-w-[500px] font-bold lg:text-[60px] text-5xl tracking-tight lg:max-w-[800px] lg:pt-0 pt-8" >Let us be part of<br/> your growth journey.</p>
        <p class=" text-center lg:text-left lg:text-2xl font-light text-xl leading-[1.4] lg:mt-6 mt-12 lg:max-w-[650px] max-w-[500px]">
          Whether you’re a micro, small, medium or large enterprise, <strong class="font-bold">Bizwiz</strong> has the tools for you to scale up and achieve maximum profit.
        </p>
        <button class="lg:max-w-[200px] bg-yellow-300 rounded-full lg:p-4 p-2 mt-10 lg:mb-0 mb-4 pl-14 pr-14 text-black font-bold lg:text-xl lg:hover:bg-yellow-500">Book a Demo</button>
      </div>

    </section>
    </div>
    <div class="lg:m-14 m-8 flex flex-col justify-center items-center lg:mb-24">
      
      <h1 class="font-bold lg:text-2xl text-[23px] lg:mb-8 mb-4">Our Benefits</h1>
      <p class="text-center lg:text-6xl text-5xl text-custom-blue-2 font-bold lg:mb-12 mb-6 lg:leading-[70px] leading-[50px] lg:max-w-[800px] max-w-[500px]">Level up Your Business With Bizwiz</p>
      <img src="/public/line.png" alt="line" class="w-60 h-0.5">
      <p class="text-center lg:text-2xl text-xl lg:leading-[45px] leading-[35px] lg:mt-12 mt-6 lg:max-w-[750px]">With  <strong>Bizwiz,</strong> you'll benefit from a one-stop commerce platform that
      gives you innovative tools that will improve your businesses 
      management. Below are some benefits:
      </p>

    </div>

    <section class="flex lg:flex-row flex-col justify-center items-center ">
      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-20">

        <h2 class="text-3xl font-medium lg:mt-6 mt-6 lg:max-w-[250px] lg:text-[25px] ">
          Reduced Operating  Costs
        </h2>
        
        <p class="lg:text-[18px] lg:mt-8 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[300px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-l font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[350px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-20">

        <h2 class="text-3xl font-medium lg:mt-6 mt-6 lg:max-w-[250px] lg:text-[25px] ">
          Streamlined Supply Chain Processes
        </h2>
        
        <p class="lg:text-[18px] lg:mt-8 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[300px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-l font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[350px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-20">

        <h2 class="text-3xl font-medium lg:mt-6 mt-6 lg:max-w-[250px] lg:text-[25px] ">
          Optimized Inventory Management
        </h2>
        
        <p class="lg:text-[18px] lg:mt-8 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[300px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-l font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[350px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

    </section>

    <section class="flex lg:flex-row flex-col justify-center items-center ">

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-20">

        <h2 class="text-3xl font-medium lg:mt-6 mt-6 lg:max-w-[250px] lg:text-[25px] ">
         Simplified Sales Processes
        </h2>
        
        <p class="lg:text-[18px] lg:mt-8 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[300px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-l font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[350px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-20">

        <h2 class="text-3xl font-medium lg:mt-6 mt-6 lg:max-w-[250px] lg:text-[25px] ">
          Improved Business Performance
        </h2>
        
        <p class="lg:text-[18px] lg:mt-8 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[300px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-l font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[350px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-20">

        <h2 class="text-3xl font-medium lg:mt-6 mt-6 lg:max-w-[250px] lg:text-[25px] ">
          Improved Reporting Accuracy
        </h2>
        
        <p class="lg:text-[18px] lg:mt-8 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[300px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-l font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[350px]">
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

           
    <main class="bg-blend text-white lg:h-[1100px] h-full bg-cover bg-center z-0 lg:mt-96 mt-72">

    <!-- floating section (header) -->


    <div class="flex items-center justify-center">

    <main class=" bg-blue-3 bg-cover bg-center border-b border-l lg:w-[1400px] lg:h-[600px] flex lg:flex-row flex-col justify-center items-center text-white rounded-3xl lg:-translate-y-[290px] -translate-y-[200px] lg:m-0 m-4">

      <div class="lg:pl-40 lg:p-0 p-8" >
        <h1 class="font-bold lg:text-xl text-xl lg:pt-4">
          Our product
        </h1>
        <p class="text-[45px] font-bold lg:mt-4 mt-4 leading-[47px] lg:max-w-[450px] lg:text-4xl">
          Here's a message from some of our clients.
        </p>
        <p class="mt-5 lg:text-xl font-light text-xl lg:max-w-[500px]">
          It's helped us better track our sales, manage our
          inventory and improve our customer service.
        </p>


        <fieldset class=" bg-yellow-400 text-black mt-8  rounded-2xl lg:p-6 p-4 ">
          <h1 class="lg:text-2xl text-2xl font-bold mt-2">Prime Mattresses ltd - Nakuru</h1>
          <p class="lg:text-xl text-xl font-light lg:mt-6 mt-4 lg:max-w-[380px] max-w-[500px]">It's helped us better track our sales,
            manage our inventory, and improve our
            customer service.
          </p>
          <i class="text-5xl text-white "> <span class="text-black">.</span>...........</i>
        </fieldset>
      </div>

      <div class="lg:flex hidden">
        
        <img src="/src/assets/woman-in-blue2.png" alt="woman" class=" lg:h-auto lg:w-full">
      </div>

    </main>
    </div>

    <!-- footer -->

      <div class="lg:-translate-y-96 -translate-y-[100px]">

      <section class=" flex lg:flex-row flex-col space-y-8 justify-center items-cente lg:pt-44 space-x-20 ">

      <div class=" bg-custom-black lg:p-8 p-6 rounded-xl lg:m-0 m-8 h-full">
        <figure class="flex ">
          <img src="/public/r-icon.png" alt="" class="lg:w-12 h-auto w-8 " >
          <h1 class="lg:text-[35px] text-2xl pl-2 lg:pt-3 font-bold ">
            RetailPay
          </h1>
        </figure>

        <p class="mt-8 mb-8 lg:mt-8 lg:mb-6 leading-[30px] lg:leading-[25px] lg:text-[15px] font-light lg:max-w-[250px] max-w-[500px]"> Whether you're a micro, small, medium or large enterprise Bizwiz
        has the tools for you to sclae up and archive maximum profit.
        </p>

        <h2 class="font-bold lg:text-[15px]">Email Address</h2>
        <input type="text" placeholder="sanjeevk@gmail.com" class="border rounded-full p-3 lg:p-1 lg:pl-2 w-full lg:mb-4 lg:text-[15px] mb-4 mt-2 bg-transparent max-w-[500px]" />
        
        <button class="bg-[#115c99] lg:text-[15px] flex rounded-full lg:py-2 lg:px-6 p-2 pl-8 lg:mb-8 mb-6">Book a Demo 
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="ml-4 lg:mt-0 mt-1" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <img src="" alt="">
        </button>

        <P class="font-medium lg:text-l">Find us at:<br> <em class="font-thin">13 Lavington, Jacaranda Avenue</em> </P>

      </div>

      <div>

        <h1 class="font-bold lg:text-[25px] text-xl">Main</h1>
        <p class="lg:leading-[38px] leading-[30px] lg:text-l text-sm font-light lg:mt-8 mt-4" >Home<br/>About<br/>Blog<br/>Carrer<br/>Pricing<br/>Integration<br/>
        Book Demo<br/>Privacy Policy<br/>Terms of Service
        </p>

      </div>

      <div>
        <h1 class="font-bold lg:text-[25px] text-xl">Our<br/> Solutions</h1>
        <p class="lg:leading-[38px] leading-[30px] lg:text-l text-sm font-light lg:mt-8 mt-4">ERP<br/>POS<br/>Suppliers portal<br/>Mobile Application<br/>Bizwiz cloud<br/>
        </p>

      </div>

      <div class="">
        <h1 class="font-bold lg:text-[25px] text-xl">Our Contacts</h1>
        <p class="lg:text-l  lg:mt-8 mt-4 font-light">Contact our technical support <br/>team<br/>
        <span class="text-yellow-200">support@retailpay.africa</span>
        </p>

        <p class="lg:text-l lg:mt-8 mt-4 font-light">Submit your enquiries to<br>
        <span class="text-yellow-200">info@retailpay.africa</span>
        </p>

        <p class="lg:mb-24 mb-20 lg:text-l mt-8 font-light">Talk to us on<br/>
        +254 790 345260
        </p>

        <div class="flex space-x-4 cursor-pointer">

        <div class="lg:w-10 lg:h-10 w-10 h-10 rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24"
              class="w-4 h-auto text-white lg:group-hover:text-black transition-colors duration-300">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </div>

        <div class="lg:w-10 lg:h-10 w-10 h-10  rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white lg:group-hover:text-black transition-colors duration-300">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
        </div>

        <div class="lg:w-10 lg:h-10 w-10 h-10 rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white lg:group-hover:text-black transition-colors duration-300">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </div>

        

        <div class="lg:w-10 lg:h-10 w-10 h-10 rounded-full p-3 bg-[#07609b] flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white lg:group-hover:text-black transition-colors duration-300">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
        </div>

        <div class="lg:w-10 lg:h-10 w-10 h-10  rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white lg:group-hover:text-black transition-colors duration-300">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </div>



        </div>

      </div>


      </section>

      <p class="border-t lg:text-l lg:tracking-wide text-sm font-light flex justify-center items-center mt-16 pt-14 border-white/40"> <i class="mr-2"><Copyright /></i><span class="flex"> Copyright - Retailpay </span> <span class="hidden lg:flex">| Designed by RetailPay - Powered by Retailpay</span></p>

  </div>
    </main>

  </article>



  </template>

  <style scoped>
    .bg-blue{
      background-image: url('/public/blue-bg2.png');
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
class="fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16 bg-white shadow-lg"
class="fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16"
-->