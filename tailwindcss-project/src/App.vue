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
</script>

<template>

<!-- first section -->

  <article class="bg-blue  min-h-screen bg-cover bg-center text-white">  
      <div class="absolute inset-0 bg-white/5"></div>
      <main className="flex justify-between items-center ml-64 pt-20">

      <div className="flex ml-12">
        <img src="/public/r-icon.png" alt="icon" class="w-14 h-14  " />
        <h1 class="text-[40px] font-bold ml-2  ">RetailPay</h1>
      </div>

      


        <nav className="flex items-center justify-center space-x-20 mr-52">
          <ul class="flex space-x-7 text-[17px] font-medium mb-2">

            <li><a href="home" class="hover:text-purple-400">Home</a></li>

            <li class="relative group cursor-pointer">
              <div class="flex items-center hover:text-purple-400 ">
                Our solutions
                <span class="ml-1">⌄</span>
              </div>
              <ul class=" p-2 absolute hidden group-hover:block group-hover:border-b-2 group-hover:border-l-2 group-hover:mb-20 ">
                <li><a href="home" class="block text-xl  hover:text-purple-400"> Inventory Management</a></li>
                <li><a href="home" class="block text-xl  hover:text-purple-400">Sales & Billing</a></li>
              </ul>
            </li>
            
            <li><a href="about" class="hover:text-purple-400">About us</a></li>
            

            <li class="relative group cursor-pointer">
              <div class="flex items-center hover:text-purple-400">
                Resources
                <span class="ml-1">⌄</span>
      
              </div>
              <ul class="absolute hidden p-2 group-hover:block group-hover:border-b-2 group-hover:border-l-2">
                <li><a href="home" class="block text-xl  hover:text-purple-400">FAQS</a></li>
                <li><a href="home" class="block text-xl  hover:text-purple-400">Customer Stories</a></li>
              </ul>
            </li>
            
            <li><a href="contact" class="hover:text-purple-400">Contact us</a></li>

          </ul>
        

        <button className="bg-custom-blue-3 rounded-b-3xl rounded-t-3xl px-8 py-3 hover:bg-purple-400">
          Book a Demo
        </button>

        <img src="/public/line2.png" alt="" class="w- h-12 ">

        <img src="/public/message-icon.png" alt="" class="w-10 h-10 cursor-pointer">
        </nav>
        <!-- <p><MessageCircleMore class="w-10 h-10 text-blue-400 hover:text-purple-400 cursor-pointer"/></p> -->
         <!-- <p class="cursor-pointer"> 
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="#8cc1fd" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7A8.38 8.38 0 019 19.9L3 21l1.1-5.4A8.38 8.38 0 013.5 11.5a8.5 8.5 0 0117 0z"/>
            <circle cx="8" cy="11" r="1.5" fill="white" />
            <circle cx="12" cy="11" r="1.5" fill="white" />
            <circle cx="16" cy="11" r="1.5" fill="white" />
            </svg>
          </p> -->
          <!-- <p><svg class="w-16 h-16 text-[#8cc1fd] hover:text-purple-500 cursor-pointer transition-colors duration-200"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="currentColor"
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7A8.38 8.38 0 019 19.9L3 21l1.1-5.4A8.38 8.38 0 013.5 11.5a8.5 8.5 0 0117 0z"
                    />
                    <circle cx="8" cy="11" r="1.5" fill="white" />
                    <circle cx="12" cy="11" r="1.5" fill="white" />
                    <circle cx="16" cy="11" r="1.5" fill="white" />
                  </svg>

          </p> -->

    </main>
    <div class="text-center text-[80px] leading-[90px] mt-20 font-bold tracking-tight">
      <p> Forging the Future <br/> of Retail, Wholesale & <br/> Distribution. </p>
    </div>

    <p class="text-center mt-[40px] text-2xl leading-[37px]">RetailPay provides a digital end-to-end platform that connects all members<br/> of the supply chain ecosystem for maximum value</p>
    <button className="bg-custom-blue-3 ml-[44%] mt-14 py-5 rounded-full px-16 text-[20px] font-bold hover:bg-purple-400">
      Get Started
    </button>

    <section class="border mx-[10%] flex items-center justify-between mt-28 rounded-t-3xl mr-48 ml-48 backdrop-blur-sm bg-blue-2 bg-cover bg-center border-white/80">
      <div class=" text-white text-[41px] leading-[57px] tracking-tight absolute font-light left-[170px]">
        <p>
          Our product, <strong class="font-bold">Bizwiz</strong> is a state-of-<br/>the-art software solution tailored<br/> for
          <strong class="font-bold">Wholesalers</strong>, <strong class="font-bold">Distributors</strong>,<br/> <strong class="font-bold">Retailers</strong> and <strong>Hoteliers</strong>.
        </p>
      </div>

      <div class=" flex justify-center items-center relative">
        <!-- <div class="absolute bg-yellow-300 blur-[60px] z-0 opacity-80  w-full h-full rounded-full top-[80px]"></div> -->
        <img src="/src/assets/lady-in-yellow.png" alt="woman_smiling" class="w-[800px] h-auto object-contain z-10 ml-[650px]" />
      </div>
    </section>


  </article>

  <!-- Second section -->

  <article>

    <div class=" border-2 shadow-lg flex justify-center items-center space-x-44 rounded-b-3xl p-8 mr-48 ml-48">
      <p>
        <span class="text-[83px] font-bold text-custom-blue-2 tracking-tighter">100K+</span><br/>
        <code class="text-custom-blue-2 text-[25px] tracking-tight ml-16">Clients</code>
      </p>
      <p>
        <span class="text-[83px] font-bold text-custom-blue-2 tracking-tighter">40M + USD</span><br/>
        <code class="text-custom-blue-2 text-[25px] tracking-tight ml-16">Turnover per month</code>
      </p>
      <p>
        <span class="text-[83px] font-bold text-custom-blue-2 tracking-tighter">15+</span><br/>
        <code class="text-custom-blue-2 text-[25px] tracking-tight ml-4">Counties</code>
      </p>
    </div>

    <div class="flex justify-center items-center space-x-40 leading-[60px] p-32 mr-">
      <p class="text-[60px] tracking-tight font-bold mr-32">
        Why is RetailPay the<br/>very best tool for you.
      </p>

      <p class="text-3xl tracking-[1px] leading-[40px] ">
        The RetailPay <strong>Bizwiz</strong> Suite<br/> comprises of multiple software<br/> organs that assist businesses in<br/> their day-to-day functions.
      </p>
    </div>

    <div class="flex justify-center items-center text-white space-x-12 ">
      <div class="border bg-custom-blue-2 rounded-xl p-5 shadow-2xl pr-6">
        <!-- <em class="">

          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6l4 2v3.6c0 2.485-1.5 4.708-4 5.4-2.5-.692-4-2.915-4-5.4V8l4-2z" />
          </svg>


        </em> -->
        <img src="/public/shield-icon.png" alt="" class="w-[80px] h-[80px]">

        <h1 class="font-bold text-3xl pt-10">Bizwiz ERP</h1>
        <p class="pt-10 text-[18px] font-light">
          Streamline your operations and boost<br/> productivity with our intuitive ERP<br/> system, tailored for distributors,<br/> wholesalers and reatilers
        </p>
        <button class="mt-16 border rounded-full bg-white/20 border-white/30 p-[10px]  flex hover:bg-custom-blue">Learn more <span class="ml-56"><CircleChevronRight /></span></button>
      </div>

      <div class="border bg-custom-blue-2 rounded-xl shadow-2xl p-5 pr-6">
        <img src="/public/shield-icon.png" alt="" class="w-[80px] h-[80px]">
        <h1 class="font-bold text-3xl pt-10">Bizwiz POS</h1>
        <p class="pt-10 text-[18px] font-light">
          Tranform your retail experience with<br/> our sleek and efficient POS system,<br/>designed to streamline transactions<br/>and enhance customer interactions.
        </p>
        <button class="mt-16 border rounded-full bg-white/20 border-white/30 p-2 flex hover:bg-custom-blue">Learn more <span class="ml-56"><CircleChevronRight /></span></button>      </div>

      <div class="border bg-custom-blue-2 rounded-xl p-5 pr-6 shadow-2xl">
        <img src="/public/shield-icon.png" alt="" class="w-[80px] h-[80px] ">
        <h1 class="font-bold text-3xl pt-10">Bizwiz Supplier Portal</h1>
        <p class="pt-10 text-[18px] font-light">
          Empower your suppliers with our<br/> instuitive portal, simplifying<br/> communication, streamlining orders,<br/> and fostering stronger partnerships.
        </p>
        <button class="mt-16 border rounded-full bg-white/20 border-white/30 p-[10px] flex hover:bg-custom-blue">Learn more <span class="ml-56"><CircleChevronRight /></span></button>      </div>

      <div class="border bg-custom-blue-2 rounded-xl p-5 pr-6 shadow-2xl">
        <img src="/public/shield-icon.png" alt="" class="w-[80px] h-[80px] ">
        <h1 class="font-bold text-3xl pt-10">Bizwiz Order-taking <br/>Deivery App</h1>
        <p class="pt-6 text-[18px] font-light">
          Revolutionize your order-taking<br/> and delivery process <br/>with our user-friendly app,<br/> ensuring seamless communication,<br/> and efficiency.
        </p>
        <button class="mt-6 border rounded-full bg-white/20 border-white/30 p-[10px] flex hover:bg-custom-blue">Learn more <span class="ml-56"><CircleChevronRight /></span></button>      </div>
    </div>


  </article>


<!-- Third section -->

  <article>

    <main>
      <div class="flex justify-center items-center mr-36 ">
        <div class=" flex justify-center items-center relative pt-8">
          <!-- <div class="absolute bg-blue-300 blur-[70px] z-0 opacity-80  w-96 h-[500px] rounded-full top-[100px] left-[200px]"></div> -->
          <!-- <img src="/src/assets/light-blue-globe.png" alt="" class="absolute top-[80px] z-0"> -->
          <img src="/public/phone.png" alt="black phone" class="w-[840px] h-auto object-contain">
        </div>
        <div class="mt-20">

          <h2 class="text-2xl font-bold">Our product</h2>
          <h1 class="text-6xl font-extrabold text-custom-blue-2 mt-12">Bizwiz Features</h1>

          <p class="text-3xl pt-12 pb-10 leading-[44px]">With <strong> Bizwiz</strong>, you'll benefit from a one-<br/>stop commerce platform that gives <br/>you innovative tools that will improve<br/> your bsiness management.Below<br/> are some benefits:</p>
          <a href="#" class="text-custom-blue text-[18px] p-2 font-semibold flex hover:border-b-4 hover:border-l-4 hover:shadow hover:rounded-full hover: transition">learn more about POS hardware <span class=" ml-40"><CircleChevronRight /></span></a>

        </div>
      </div>

    </main>


    <main>
      <div>
        <img src="/src/assets/business-structure.png" alt="" class="ml-[265px]  h-auto w-[72%] m-6 mt-12 mb-10">
      </div>

      <div class="text-center">
        <h1 class="font-bold text-[24px] ">Sales & Distribution</h1>
      <p class="text-3xl mt-10 tracking-wide leading-[44px]">
        With <strong> Bizwiz</strong> you'll benefit from a one-stop commerce platform that<br/>  gives you innovative tools  that will improve yourbusiness <br/>
        management. Below are some benefits: 
      </p>
      </div>
      

    </main>


  </article>


<!-- Forth section -->


  <article>


    <section class=" bg-purple bg-cover bg-center text-white flex justify-center items-center mt-80 rounded-3xl mr-40 ml-44 p-2">
      <div>
        <img src="/src/assets/woman-in-blue.png" alt="woman" class=" h-[600px] w-[800px] ">
      </div>

      <div class="">
        <p class="font-bold text-7xl tracking-tight" >Let us be part of<br/> your growth journey.</p>
        <p class="text-[26px] leading-[1.4] mt-12">
          Whether you’re a micro, small, medium or large<br/> enterprise, <strong class="font-bold">Bizwiz</strong> has the tools for you to scale up and<br/> achieve maximum profit.
        </p>
        <button class="bg-yellow-300 rounded-full p-5 mt-10 pl-14 pr-14 text-black font-bold text-xl hover:bg-yellow-500">Book a Demo</button>
      </div>

    </section>
    <div class="m-14 text-center">
      
      <h1 class="font-bold text-[23px] mb-8">Our Benefits</h1>
      <p class="text-6xl text-custom-blue-2 font-bold mb-8 leading-[70px]">Level up Your Business<br/> With Bizwiz</p>
      <img src="/public/line.png" alt="line" class="ml-[45%] w-52">
      <p class="text-3xl leading-[45px] mt-12 text-center">With  <strong>Bizwiz,</strong> you'll benefit from a one-stop commerce platform that<br/>
      gives you innovative tools that will improve your businesses <br/>
      management. Below are some benefits:
      </p>

    </div>

    <section class="flex justify-center items-center ">
      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto">

        <h2 class="text-3xl font-medium mt-6 ">
          Reduced Operating <br/> Costs
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light"> 
          Empower your suppliers with our <br/>instuitive portal, simplifying comms,<br/> streamlining orders, and fostering<br> stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex hover:bg-custom-blue-3 rounded-full p-3 hover:text-white ">Learn More <em class="ml-64"><CircleChevronRight /></em></button>

      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto hover:fill">

        <h2 class="text-3xl font-medium mt-6">
          Streamlined Supply<br/> Chain Processes
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light">
          Empower your suppliers with our <br/>instuitive portal, simplifying comms,<br/> streamlining orders, and fostering<br> stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex hover:bg-custom-blue-3 rounded-full p-3 hover:text-white">Learn More <em class="ml-64"><CircleChevronRight /></em></button>


      </div>

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto">

        <h2 class="text-3xl font-medium mt-6">
          Optimised Inventory<br/> Management
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light">
          Empower your suppliers with our <br/>instuitive portal, simplifying comms,<br/> streamlining orders, and fostering<br> stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex hover:bg-custom-blue-3 rounded-full p-3 hover:text-white">Learn More <em class="ml-64" ><CircleChevronRight /></em></button>

      </div>

    </section>

    <section class="flex justify-center items-center ">

      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto">

        <h2 class="text-3xl font-medium mt-6">
          Simplified Sales<br/> Processes
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light">
          Empower your suppliers with our <br/>instuitive portal, simplifying comms,<br/> streamlining orders, and fostering<br> stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex hover:bg-custom-blue-3 rounded-full p-3 hover:text-white">Learn More <em class="ml-64"><CircleChevronRight /></em></button>

      </div>
      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto">

        <h2 class="text-3xl font-medium mt-6">
          Improved Business <br/> Perfomance
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light">
          Empower your suppliers with our <br/>instuitive portal, simplifying comms,<br/> streamlining orders, and fostering<br> stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex hover:bg-custom-blue-3 rounded-full p-3 hover:text-white">Learn More <em class="ml-64"><CircleChevronRight /></em></button>

      </div>
      <div class="border-2 rounded-3xl m-4 p-5 shadow-2xl ">
        <img src="/public/laptop-icon.png" alt="" class="w-20 h-auto">

        <h2 class="text-3xl font-medium mt-6">
          Improved Reporting<br/> Accuracy
        </h2>
        
        <p class="mt-8 mb-8 text-xl font-light">
          Empower your suppliers with our <br/>instuitive portal, simplifying comms,<br/> streamlining orders, and fostering<br> stronger partnerships.
        </p>

        <button class="text-custom-blue-3 font-medium flex hover:bg-custom-blue-3 rounded-full p-3 hover:text-white">Learn More <em class="ml-64"><CircleChevronRight /></em></button>

      </div>

    </section>

  </article>


<!-- Fifth section -->

  <article>


    <main class=" bg-blue-3 bg-cover bg-center border-b border-l flex justify-center items-center space-x-24 text-white rounded-3xl mt-20 absolute top-[678%]  ml-[180px] mr-[180px]  ">

      <div class="ml-12 absolute mr-[720px]">
        <h1 class="font-bold text-2xl">
          Our product
        </h1>
        <p class="text-[45px] font-bold mt-8 leading-[47px]">
          Here's a message from<br/>some of our clients.
        </p>
        <p class="mt-6 text-2xl">
          It's helped us better track our sales, manage our<br/>
          inventory and improve our customer service.
        </p>


        <fieldset class="bg-yellow-400 text-black mt-10 pr-[150px] rounded-3xl p-8">
          <h1 class="text-3xl font-bold mt-2">Prime Mattresses ltd - Nakuru</h1>
          <p class="text-xl mt-8">It's helped us better track our sales,<br/>
            manage our inventory, and improve our<br/>
            customer service.
          </p>
          <i class="text-5xl text-white"> <span class="text-black">.</span>...........</i>
        </fieldset>
      </div>

      <div class="flex justify-center items-center ">
        <!-- <div class="absolute bg-red-600 rounded-full blur-[90px] z-0 opacity-100  w-96 h-[350px] "></div> -->
         <!-- <img src="/src/assets/red_globe.png" alt="" class="absolute"> -->
        <img src="/src/assets/woman-in-blue2.png" alt="woman" class=" h-[700px] w-[900px] ml-[500px] mr-[40px]">
      </div>

    </main>

        
    <main class="bg-blend text-white mt-[440px] h-[1300px] bg-cover bg-center z-0">

      <section class="flex justify-center items-cente pt-[490px] space-x-20 ">

      <div class=" bg-custom-black p-12 rounded-xl ">
        <figure class="flex ">
          <img src="/public/r-icon.png" alt="" class="w-14 h-14 " >
          <h1 class="text-[40px] pl-2 font-bold ">
            RetailPay
          </h1>
        </figure>

        <p class="mt-8 mb-8 leading-[30px] text-[18px] font-light "> Whether you're a micro, small,<br/> medium or large enterprise Bizwiz<br/>
        has the tools for you to sclae up and <br/>archive maximum profit.
        </p>

        <h2 class="font-bold">Email Address</h2>
        <p class="border rounded-full p-1 pl-2 mb-6 mt-2">sanjeevk@gmail.com</p>

        <button class="bg-blue-500 flex rounded-full p-3 pl-8  mb-12">Book a Demo <i class="pl-8"><CircleChevronRight/></i></button>

        <P class="font-medium text-xl">Find us at:<br> <em class="font-thin">13 Lavington, Jacaranda Avenue</em> </P>

      </div>

      <div>

        <h1 class="font-bold text-3xl">Main</h1>
        <p class="leading-[50px] text-xl font-light mt-8" >Home<br/>About<br/>Blog<br/>Carrer<br/>Pricing<br/>Integration<br/>
        Book Demo<br/>Privacy Policy<br/>Terms of Service
        </p>

      </div>

      <div>
        <h1 class="font-bold text-3xl">Our<br/> Solutions</h1>
        <p class="leading-[50px] text-xl font-light mt-8">ERP<br/>POS<br/>Suppliers portal<br/>Mobile Application<br/>Bizwiz cloud<br/>
        </p>

      </div>

      <div class="">
        <h1 class="font-bold text-3xl">Our Contacts</h1>
        <p class="text-xl mt-8 font-light">Contact our technical support <br/>team<br/>
        <span class="text-yellow-200">support@retailpay.africa</span>
        </p>

        <p class="text-xl mt-8 font-light">Submit your enquiries to<br>
        <span class="text-yellow-200">info@retailpay.africa</span>
        </p>

        <p class="mb-36 text-[18px] mt-8 font-light">Talk to us on<br/>
        +254 790 345260
        </p>

        <div class="flex space-x-4">

        <div class="w-12 h-12 rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white group-hover:text-black transition-colors duration-300">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </div>

        <div class="w-12 h-12  rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white group-hover:text-black transition-colors duration-300">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
        </div>

        <div class="w-12 h-12 rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white group-hover:text-black transition-colors duration-300">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </div>

        

        <div class="w-12 h-12 rounded-full p-3 bg-[#07609b] flex items-center justify-center transition-colors duration-300 hover:bg-white group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white group-hover:text-black transition-colors duration-300">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
        </div>

        <div class="w-12 h-12  rounded-full bg-[#07609b] p-3 flex items-center justify-center transition-colors duration-300 hover:bg-white group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24"
              class="w-8 h-8 text-white group-hover:text-black transition-colors duration-300">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </div>



        </div>

      </div>


      </section>

      <p class="border-t text-xl font-light flex justify-center items-center mt-16 p-14 border-white/40"> <i class="mr-2"><Copyright /></i> Copyright - Retailpay | Designed by RetailPay - Powered by Retailpay</p>


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
    




