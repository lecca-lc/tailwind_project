<script setup>
import { MessageCircleMore } from 'lucide-vue-next';
</script>

<template>

  <article class="bg-blue min-h-screen bg-cover bg-center text-white ">  
    <main className="flex justify-between items-center ml-40 mr-40 ">
      <div className="text-5xl font-semibold mt-20">
        <img src="" alt="">
        <h1 class="ml-10">RetailPay</h1>
      </div>

        <nav className=" ml-[90px] font-medium ">
          <ul class="flex space-x-5">

            <li><a href="home" class="hover:text-purple-400">Home</a></li>

            <li class="relative group cursor-pointer">
              <div class="flex items-center hover:text-purple-400">
                Our solutions
                <span class="ml-1">⌄</span>
              </div>
              <ul class="absolute hidden group-hover:block ">
                <li><a href="home" class="block hover:text-purple-400"> Inventory Management</a></li>
                <li><a href="home" class="block hover:text-purple-400">Sales & Billing</a></li>
                <li><a href="home" class="block hover:text-purple-400">Distributor Tools</a></li>
              </ul>
            </li>
            
            <li><a href="about" class="hover:text-purple-400">About us</a></li>
            

            <li class="relative group cursor-pointer">
              <div class="flex items-center hover:text-purple-400">
                Resources
                <span class="ml-1">⌄</span>
      
              </div>
              <ul class="absolute hidden group-hover:block">
                <li><a href="home" class="block hover:text-purple-400">FAQS</a></li>
                <li><a href="home" class="block hover:text-purple-400">Customer Stories</a></li>
                <li><a href="home" class="block hover:text-purple-400">Blog & News</a></li>
              </ul>
            </li>
            
            <li><a href="contact" class="hover:text-purple-400">Contact us</a></li>

          </ul>
        </nav>

        <button className="bg-custom-blue rounded-b-3xl rounded-t-3xl px-9 py-3 hover:bg-purple-400">
          Book a Demo
        </button>

        <p>|</p>

        <!-- <p><MessageCircleMore class="w-10 h-10 text-blue-400 hover:text-purple-400 cursor-pointer"/></p> -->
         <p class="hover:text-purple-400 cursor-pointer"> 
            <svg class="w-16 h-16" viewBox="0 0 24 24" fill="#8cc1fd" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7A8.38 8.38 0 019 19.9L3 21l1.1-5.4A8.38 8.38 0 013.5 11.5a8.5 8.5 0 0117 0z"/>
            <circle cx="8" cy="11" r="1.5" fill="white" />
            <circle cx="12" cy="11" r="1.5" fill="white" />
            <circle cx="16" cy="11" r="1.5" fill="white" />
            </svg>
          </p>
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
    <div class="text-center text-7xl mt-20 font-medium ">
      <p> Forging the future <br/> of retail, wholesale & <br/> distribution. </p>
    </div>

    <p class="text-center mt-[60px] text-xl">RetailPay provides a digital end-to-end platform that connects all members<br/> of the supply chain ecosystem for maximum value</p>
    <button className="bg-custom-blue ml-[45%] mt-8 py-4 rounded-full px-12 text-1xl font-medium hover:bg-purple-400">
      get started
    </button>

    <section class="border mx-[10%] flex items-center justify-between mt-8 rounded-3xl mr-80 ml-60 backdrop-blur-sm bg-white/10 border-white/30">
      <div class="w-1/2 text-white text-4xl leading-relaxed ml-10">
        <p>
          Our product, <strong>Bizwiz</strong> is a state-of-<br/>the-art software solution tailored<br/> for
          <strong>wholesalers</strong>, <strong>Distributors</strong>,<br/> <strong>Retailers</strong> and <strong>Hoteliers</strong>.
        </p>
      </div>

      <div class="w-1/2 flex bg-[#FFF8E7] justify-center items-center  ">
        <img src="/public/woman.png" alt="woman_smiling" class="w-full h-auto object-contain " />
      </div>
    </section>


  </article>
  </template>

  <style scoped>
    .bg-blue{
      background-image: url('/public/blue-background.jpg');
    }

  </style>
    




