<template >

<!-- first section -->

  <article class="bg-blue lg:min-h-screen bg-cover bg-center text-white relative" >  
      <div class="absolute inset-0 bg-white/5 "></div>
      <header
    :class="[
      'fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16 ',
      isScrolled ? 'bg-white shadow-lg' : ''
    ]"
  >
  
    <div class="flex justify-between items-center lg:pt-12 lg:pb-6 p-4 lg:p-0 ">
      <!-- Logo -->
      <div class="flex items-center justify-center lg:ml-[450px]">
        <img
          :src="isScrolled ? '/public/r-icon2.png' : '/public/r-icon.png'"
          alt="RetailPay Logo"
          class="w-14 h-14 transition-all duration-300 "
        />
        <h1 class="text-2xl lg:text-[50px] font-bold mt-4 ml-2 lg:mb-2 " :class="isScrolled ? 'text-black' : 'text-white'">
          RetailPay
        </h1>
      </div>

      <!-- Hamburger -->
      <button @click="toggleMenu" class="lg:hidden focus:outline-none ">
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
      <nav class="hidden lg:flex items-center justify-center space-x-20 lg:mr-80 relative">
        <ul class="flex space-x-7 text-[20px] font-medium lg:mb-2 ">
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
        <button class="bg-custom-blue-3 text-white rounded-full px-6 py-2 hover:bg-purple-400 lg:text-xl lg:px-10 lg:py-4">Book a Demo</button>
        <img src="/public/line2.png" alt="" class="h-10" />
        <img src="/public/message-icon.png" alt="" class="w-8 h-8 lg:w-12 lg:h-12 cursor-pointer" />
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
  
    <div class="text-center lg:text-[100px] text-[33px] lg:leading-[110px] leading-[40px] mt-20 font-bold tracking-tight">
      <p> Forging the Future <br/> of Retail, Wholesale & <br/> Distribution. </p>
    </div>

    <div class="flex flex-col items-center justify-center">
      <p class=" lg:max-w-[1000px] font-light text-center mt-[40px] lg:text-3xl text-xl lg:leading-[45px]">RetailPay provides a digital end-to-end platform that connects all members of the supply chain ecosystem for maximum value</p>
      <button className="relative bg-custom-blue-3  lg:mt-14 lg:py-8 rounded-full lg:px-16 lg:text-[25px] font-bold lg:hover:bg-purple-400  mt-8 text-sm py-2 px-6">
        Get Started
      </button>
    </div>

    <div class="flex justify-center items-center">
    <section class="border flex lg:flex-row items-center justify-center lg:mt-28 rounded-t-3xl lg:max-w-[1800px] backdrop-blur-sm bg-blue-2 bg-cover bg-center border-white/80 lg:mx-0 mx-5  mt-14 flex-col">
      <div class="text-white lg:text-[55px] lg:leading-[63px] tracking-tight font-light lg:p-0 lg:pl-28 pl-0 lg:pt-0 pt-4 text-[25px] lg:w-[45%] w-[60%]">
        <p class="text-center lg:text-left">
          Our product, <strong class="font-bold">Bizwiz</strong> is a state-of-the-art software solution tailored for
          <strong class="font-bold">Wholesalers</strong>, <strong class="font-bold">Distributors</strong>, <strong class="font-bold">Retailers</strong> and <strong class="font-bold">Hoteliers</strong>.
        </p>
      </div>

      <div class=" ">
        <!-- <div class="absolute bg-yellow-300 blur-[60px] z-0 opacity-80  w-full h-full rounded-full top-[80px]"></div> -->
        <img src="/src/assets/lady-in-yellow.png" alt="woman_smiling" class="w-[800px] h-full z-10 lg:w-[1000px]" />
      </div>
    </section>
    </div>


  </article>


<!-- Second section -->

  <article>

    <section class="flex justify-center items-center">
    <div class=" lg:border-2 lg:shadow-lg flex lg:flex-row flex-col space-y-4 lg:space-y-0 justify-center items-center lg:space-x-56 space-x-10  rounded-b-3xl lg:mb-10 lg:p-8 p-4 lg:min-w-[1800px] ">
      <p class="leading-[60px] ">
        <span class="lg:text-8xl text-[50px] font-bold text-custom-blue-2 tracking-tighter ">100K+</span><br/>
        <code class="text-custom-blue-2 lg:text-[30px] text-[20px] tracking-tight lg:ml-16 ml-12 ">Clients</code>
      </p>
      <p class="leading-[60px] ">
        <span class="lg:text-8xl text-[50px] font-bold text-custom-blue-2 tracking-tighter">40M + USD</span><br/>
        <code class="text-custom-blue-2 lg:text-[30px] text-[20px] tracking-tight lg:ml-16 ml-4">Turnover per month</code>
      </p>
      <p class="leading-[60px] ">
        <span class="lg:text-8xl text-[50px] font-bold text-custom-blue-2 tracking-tighter">15+</span><br/>
        <code class="text-custom-blue-2 lg:text-[30px] text-[20px] tracking-tight lg:ml-8 lg:mr-0 mr-2 ">Counties</code>
      </p>
    </div>
    </section>

    <div class="flex lg:flex-row flex-col  justify-center items-center lg:space-x-40 lg:leading-[80px] lg:p-32 lg:mb-0 mb-20 p-4">
      <p class="lg:max-w-[800px] lg:text-[75px] text-[28px] tracking-tight font-bold lg:mr-32 lg:mb-0 mb-4">
        Why is RetailPay the very best tool for you.
      </p>

      <p class="text-center lg:text-left lg:max-w-[600px] max-w-[620px] lg:text-4xl text-[17px] tracking-[1px] leading-[40px] lg:leading-[50px] ">
        The RetailPay <strong>Bizwiz</strong> Suite comprises of multiple software organs that assist businesses in their day-to-day functions.
      </p>
    </div>

    <div class="flex lg:flex-row flex-col justify-center items-center text-white lg:space-x-12 space-y-5">
      <div class=" border bg-custom-blue-2 rounded-2xl lg:p-8 p-4 shadow-2xl lg:pr-6 lg:m-0 m-3 max-w-[700px]">
       
        <img src="/public/shield-icon.png" alt="" class="lg:w-[90px] lg:h-auto">

        <h1 class=" font-bold lg:text-4xl text-xl pt-4 lg:pt-12">Bizwiz ERP</h1>
        <p class="max-w-[1000px] lg:max-w-[437px] lg:pt-10 pt-4 lg:text-[24px] font-light">
          Streamline your operations and boost productivity with our intuitive ERP system, tailored for distributors, wholesalers and reatilers
        </p>
        <button class="lg:mt-20 lg:text-xl mt-6 border rounded-full bg-white/20 border-white/30 lg:p-[10px] p-2 flex lg:hover:bg-white/30 w-full justify-between ">Learn more 
          <span class=" ">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      </div>

      <div class=" border bg-custom-blue-2 rounded-2xl lg:p-8 p-4 shadow-2xl lg:pr-6 lg:m-0 m-3 max-w-[700px]">
       
        <img src="/public/shield-icon.png" alt="" class="lg:w-[90px] lg:h-auto">

        <h1 class=" font-bold lg:text-4xl text-xl pt-4 lg:pt-12">Bizwiz POS</h1>
        <p class="max-w-[1000px] lg:max-w-[437px] lg:pt-10 pt-4 lg:text-[24px] font-light">
          Transform your retail experience with our sleek and efficient POS system, designed to streamline transactions and enhance customer interactions.
        </p>
        <button class="lg:mt-20 lg:text-xl mt-6 border rounded-full bg-white/20 border-white/30 lg:p-[10px] p-2 flex lg:hover:bg-white/30 w-full justify-between ">Learn more 
          <span class=" ">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      </div>

      <div class=" border bg-custom-blue-2 rounded-2xl lg:p-8 p-4 shadow-2xl lg:pr-6 lg:m-0 m-3 max-w-[700px]">
       
        <img src="/public/shield-icon.png" alt="" class="lg:w-[90px] lg:h-auto">

        <h1 class=" font-bold lg:text-4xl text-xl pt-4 lg:pt-12">Bizwiz Supplier Portal</h1>
        <p class="max-w-[1000px] lg:max-w-[437px] lg:pt-10 pt-4 lg:text-[24px] font-light">
          Empower your suppliers with our intuitive portal, simplifying communication, streamlining orders, and fostering stronger partnerships.
        </p>
        <button class="lg:mt-20 lg:text-xl mt-6 border rounded-full bg-white/20 border-white/30 lg:p-[10px] p-2 flex lg:hover:bg-white/30 w-full justify-between ">Learn more 
          <span class=" ">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
      </button>
      </div>

      <div class=" border bg-custom-blue-2 rounded-2xl lg:p-8 p-4 shadow-2xl lg:pr-6 lg:m-0 m-3 max-w-[700px]">
       
        <img src="/public/shield-icon.png" alt="" class="lg:w-[90px] lg:h-auto">

        <h1 class="lg:max-w-[400px] font-bold lg:text-4xl text-xl pt-4 lg:pt-10">Bizwiz Order-taking & Delivery App</h1>
        <p class="max-w-[1000px] lg:max-w-[437px] lg:pt-10 pt-4 lg:text-[24px] font-light">
          Elevate your distribution business with our user-friendly app, empowering you to manage orders, track inventory, and optimise logistics with ease.
        </p>
        <button class="lg:mt-12 lg:text-xl mt-6 border rounded-full bg-white/20 border-white/30 lg:p-[10px] p-2 flex lg:hover:bg-white/30 w-full justify-between ">Learn more 
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
          <img src="/public/phone.png" alt="black phone" class="w-[840px] h-auto lg:w-[1000px] object-contain">
        </div>
        <div class="lg:mt-20 lg:p-0 p-2 flex flex-col justify-center items-center lg:grid">

          <h2 class="text-2xl font-bold lg:text-3xl ">Our product</h2>
          <h1 class="lg:text-7xl text-5xl font-extrabold text-custom-blue-2 lg:mt-12 mt-6">Bizwiz Features</h1>

          <p class="text-center lg:text-left lg:text-4xl text-xl lg:pt-12 pt-6 lg:pb-10 pb-8 lg:leading-[44px] max-w-[550px] lg:max-w-[650px]">With <strong> Bizwiz</strong>, you'll benefit from a one- stop commerce platform that gives you innovative tools that will improve your bsiness management.Below are some benefits:</p>
          <a href="#" class="text-custom-blue lg:text-2xl p-4 font-semibold flex lg:hover:border-b-4 lg:hover:border-l-4 lg:hover:shadow hover:rounded-full hover: transition w-full justify-between max-w-[440px] lg:max-w-[1000px]">learn more about POS hardware 
            <!-- <span class="text-blue-400">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="current" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span> -->
          <img class="lg:h-6 h-5 " src="/public/vector.png" alt="arrow-icon">
          </a>

        </div>
      </div>

    </main>


    <main class="flex flex-col justify-center items-center lg:mt-0 mt-14  ">
      <div >
        <img src="/src/assets/business-structure.png" alt="" class="lg:w-[1600px] w-[600px] h-auto m-6 mt-12 mb-20">
      </div>

      <div class="text-center ">
        <h1 class=" font-bold text-[24px] lg:text-3xl ">Sales & Distribution</h1>
      <p class="lg:text-4xl text-xl lg:mt-10 mt-4 tracking-wide lg:leading-[44px]">
        With <strong> Bizwiz</strong> you'll benefit from a one-stop commerce platform that<br/>  gives you innovative tools  that will improve yourbusiness <br/>
        management. Below are some benefits: 
      </p>
      </div>
      

    </main>


  </article>


<!-- Forth section -->


  <article>

    <div class="flex lg:flex-row flex-col justify-center items-center">
    <section class=" bg-purple bg-cover bg-center text-white flex lg:flex-row flex-col justify-center items-center lg:mt-80 mt-36 rounded-3xl p-2 lg:m-0 m-8">
      <div>
        <img src="/src/assets/woman-in-blue.png" alt="woman" class=" lg:h-auto lg:w-[1000px]  ">
      </div>

      <div class="flex lg:grid flex-col justify-center items-center lg:pr-12">
        <p class=" text-center lg:text-left max-w-[500px] font-bold lg:text-[80px] text-5xl tracking-tight lg:max-w-[800px] lg:pt-0 pt-8" >Let us be part of<br/> your growth journey.</p>
        <p class=" text-center lg:text-left lg:text-3xl text-xl leading-[1.4] mt-12 lg:max-w-[650px] max-w-[500px]">
          Whether you’re a micro, small, medium or large enterprise, <strong class="font-bold">Bizwiz</strong> has the tools for you to scale up and achieve maximum profit.
        </p>
        <button class="lg:max-w-[300px] bg-yellow-300 rounded-full lg:p-5 p-2 mt-10 lg:mb-0 mb-4 pl-14 pr-14 text-black font-bold lg:text-2xl lg:hover:bg-yellow-500">Book a Demo</button>
      </div>

    </section>
    </div>
    <div class="lg:m-14 m-8 flex flex-col justify-center items-center lg:mb-36">
      
      <h1 class="font-bold lg:text-3xl text-[23px] lg:mb-8 mb-4">Our Benefits</h1>
      <p class="text-center lg:text-7xl text-5xl text-custom-blue-2 font-bold lg:mb-12 mb-6 lg:leading-[70px] leading-[50px] lg:max-w-[800px] max-w-[500px]">Level up Your Business With Bizwiz</p>
      <img src="/public/line.png" alt="line" class="w-60 h-0.5">
      <p class="text-center lg:text-4xl text-xl lg:leading-[45px] leading-[35px] lg:mt-12 mt-6 lg:max-w-[1150px]">With  <strong>Bizwiz,</strong> you'll benefit from a one-stop commerce platform that
      gives you innovative tools that will improve your businesses 
      management. Below are some benefits:
      </p>

    </div>

    <section class="flex lg:flex-row flex-col justify-center items-center ">
      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-28">

        <h2 class="text-3xl font-medium lg:mt-10 mt-6 lg:max-w-[350px] lg:text-4xl ">
          Reduced Operating  Costs
        </h2>
        
        <p class="lg:text-[25px] lg:mt-10 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[400px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-xl font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[450px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-28">

        <h2 class="text-3xl font-medium lg:mt-10 mt-6 lg:max-w-[350px] lg:text-4xl ">
          Streamlined Supply Chain Processes
        </h2>
        
        <p class="lg:text-[25px] lg:mt-10 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[400px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-xl font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[450px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-28">

        <h2 class="text-3xl font-medium lg:mt-10 mt-6 lg:max-w-[350px] lg:text-4xl ">
          Optimized Inventory Management
        </h2>
        
        <p class="lg:text-[25px] lg:mt-10 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[400px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-xl font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[450px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

    </section>

    <section class="flex lg:flex-row flex-col justify-center items-center ">

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-28">

        <h2 class="text-3xl font-medium lg:mt-10 mt-6 lg:max-w-[350px] lg:text-4xl ">
         Simplified Sales Processes
        </h2>
        
        <p class="lg:text-[25px] lg:mt-10 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[400px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-xl font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[450px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-28">

        <h2 class="text-3xl font-medium lg:mt-10 mt-6 lg:max-w-[350px] lg:text-4xl ">
          Improved Business Performance
        </h2>
        
        <p class="lg:text-[25px] lg:mt-10 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[400px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-xl font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[450px]">
          Learn More 

          
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          

        </button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto lg:w-28">

        <h2 class="text-3xl font-medium lg:mt-10 mt-6 lg:max-w-[350px] lg:text-4xl ">
          Improved Reporting Accuracy
        </h2>
        
        <p class="lg:text-[25px] lg:mt-10 mt-8 mb-8 lg:mb-10 text-xl font-light lg:max-w-[400px] max-w-[500px]"> 
          Empower your suppliers with our instuitive portal, simplifying comms, streamlining orders, and fostering stronger partnerships.
        </p>

        <button class="text-custom-blue-3 lg:text-xl font-medium flex lg:hover:bg-custom-blue-3 rounded-full p-3 lg:hover:text-white w-full justify-between lg:min-w-[450px]">
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

           
    <main class="bg-blend text-white lg:h-[1500px] h-full bg-cover bg-center z-0 lg:mt-96 mt-72">

    <!-- floating section (header) -->


    <div class="flex items-center justify-center">

    <main class=" bg-blue-3 bg-cover bg-center border-b border-l flex lg:flex-row flex-col justify-center items-center text-white rounded-3xl lg:-translate-y-[290px] -translate-y-[200px] lg:m-0 m-4">

      <div class="lg:pl-40 lg:p-0 p-8" >
        <h1 class="font-bold lg:text-3xl text-xl">
          Our product
        </h1>
        <p class="text-[45px] font-bold lg:mt-8 mt-4 leading-[47px] lg:max-w-[600px] lg:text-5xl">
          Here's a message from some of our clients.
        </p>
        <p class="mt-6 lg:text-3xl text-xl lg:max-w-[700px]">
          It's helped us better track our sales, manage our
          inventory and improve our customer service.
        </p>


        <fieldset class=" bg-yellow-400 text-black mt-10  rounded-3xl lg:p-8 p-4 ">
          <h1 class="lg:text-3xl text-2xl font-bold mt-2">Prime Mattresses ltd - Nakuru</h1>
          <p class="lg:text-2xl text-xl font-light lg:mt-8 mt-4 lg:max-w-[380px] max-w-[500px]">It's helped us better track our sales,
            manage our inventory, and improve our
            customer service.
          </p>
          <i class="text-5xl text-white "> <span class="text-black">.</span>...........</i>
        </fieldset>
      </div>

      <div class="lg:flex hidden">
        
        <img src="/src/assets/woman-in-blue2.png" alt="woman" class=" lg:h-auto lg:w-[1000px]">
      </div>

    </main>
    </div>

    <!-- footer -->

      <div class="lg:-translate-y-96 -translate-y-[100px]">

      <section class=" flex lg:flex-row flex-col space-y-8 justify-center items-cente lg:pt-44 space-x-20 ">

      <div class=" bg-custom-black lg:p-12 p-6 rounded-xl lg:m-0 m-8">
        <figure class="flex ">
          <img src="/public/r-icon.png" alt="" class="lg:w-14 lg:h-14 w-8 h-8 " >
          <h1 class="lg:text-[45px] text-2xl pl-2 lg:pt-3 font-bold ">
            RetailPay
          </h1>
        </figure>

        <p class="mt-8 mb-8 lg:mt-16 lg:mb-12 leading-[30px] lg:text-[23px] font-light lg:max-w-[380px] max-w-[500px]"> Whether you're a micro, small, medium or large enterprise Bizwiz
        has the tools for you to sclae up and archive maximum profit.
        </p>

        <h2 class="font-bold lg:text-xl">Email Address</h2>
        <input type="text" placeholder="sanjeevk@gmail.com" class="border rounded-full p-3 w-full lg:mb-6 lg:text-xl mb-4 mt-2 bg-transparent max-w-[500px]" />
        
        <button class="bg-blue-500 lg:text-xl flex rounded-full lg:p-4 lg:px-10 p-2 pl-8 lg:mb-12 mb-6">Book a Demo 
          <svg width="20" height="24" viewBox="0 0 20 24" fill="none" class="ml-4 mt-1" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.63281 18L12.3875 12L7.63281 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <P class="font-medium lg:text-2xl">Find us at:<br> <em class="font-thin">13 Lavington, Jacaranda Avenue</em> </P>

      </div>

      <div>

        <h1 class="font-bold lg:text-4xl text-xl">Main</h1>
        <p class="lg:leading-[55px] leading-[30px] lg:text-2xl text-sm font-light lg:mt-12 mt-4" >Home<br/>About<br/>Blog<br/>Carrer<br/>Pricing<br/>Integration<br/>
        Book Demo<br/>Privacy Policy<br/>Terms of Service
        </p>

      </div>

      <div>
        <h1 class="font-bold lg:text-4xl text-xl">Our<br/> Solutions</h1>
        <p class="lg:leading-[55px] leading-[30px] lg:text-2xl text-sm font-light lg:mt-12 mt-4">ERP<br/>POS<br/>Suppliers portal<br/>Mobile Application<br/>Bizwiz cloud<br/>
        </p>

      </div>

      <div class="">
        <h1 class="font-bold lg:text-4xl text-xl">Our Contacts</h1>
        <p class="lg:text-2xl  lg:mt-8 mt-4 font-light">Contact our technical support <br/>team<br/>
        <span class="text-yellow-200">support@retailpay.africa</span>
        </p>

        <p class="lg:text-2xl lg:mt-8 mt-4 font-light">Submit your enquiries to<br>
        <span class="text-yellow-200">info@retailpay.africa</span>
        </p>

        <p class="lg:mb-36 mb-20 lg:text-2xl mt-8 font-light">Talk to us on<br/>
        +254 790 345260
        </p>

        <div class="flex space-x-4 cursor-pointer">

        <div class="lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white lg:group-hover:text-black transition-colors duration-300">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </div>

        <div class="lg:w-12 lg:h-12 w-10 h-10  rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white lg:group-hover:text-black transition-colors duration-300">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
        </div>

        <div class="lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white lg:group-hover:text-black transition-colors duration-300">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </div>

        

        <div class="lg:w-12 lg:h-12 w-10 h-10 rounded-full p-3 bg-[#07609b] flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white lg:group-hover:text-black transition-colors duration-300">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
        </div>

        <div class="lg:w-12 lg:h-12 w-10 h-10  rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 lg:hover:bg-white group">
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

      <p class="border-t lg:text-2xl text-sm font-light flex justify-center items-center mt-16 p-14 border-white/40"> <i class="mr-2"><Copyright /></i><span class="flex"> Copyright - Retailpay </span> <span class="hidden lg:flex">| Designed by RetailPay - Powered by Retailpay</span></p>

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
class="fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16 bg-white shadow-lg"
class="fixed top-0 left-0 w-full transition-all duration-100 z-50 px-6 lg:px-16"
-->