<template>
  <nav class="bg-green-800 text-white  flex px-8 py-4 items-center justify-between shadow-lg ">
  <img src="../Assets/Image/logo.png" alt="" class="h-10 w-20">
    <ul class="flex gap-8 text-sm font-medium justify-end">
      <li> <a href="/" class="hover:text-yellow-300">Home</a></li>
      <li><a href="/about" class="hover:text-yellow-300">About Us</a></li>
      <li><a href="/Services" class="hover:text-yellow-300">Services </a></li>

      <li class="relative group"><a href="#" class="hover:text-yellow-300 relative-group ">Gallery <span>▼</span>
      </a>
<ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100  absolute bg-white text-green-900 rounded shadow w-48 top-2.5  mt-2 z-50 left">
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><a href="/Photos"> Photos</a></li>
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><a href="/Videos">Videos</a></li>
    </ul>
    </li>

      <li class="relative group "><a href="#" class="hover:text-yellow-300">Destinations<span>▼</span></a>
      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100  absolute bg-white text-green-900  rounded  top-2.5 shadow w-48 mt-2 z-50 left">
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><a href="/North"> Northern Province</a></li>
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><a href="/South">Southern Province</a></li>
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><a href="/West"> Western Province</a></li>
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><a href="/East">Eastern Province</a></li>
      <li class="block px-4 py-2 hover:bg-green-200 text-green-900"><a href="/Kigali">Kigali City </a></li>
    </ul>
      
      </li>
      <li><a href="/Contact" class="hover:text-yellow-300">Contact Us</a></li>
    </ul>
  </nav>
</template>