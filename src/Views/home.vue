<script setup>
import heroImage from '../Assets/Image/pic3.png'
import volcanoImage from '../Assets/Image/image1.png'
import akageraImage from '../Assets/Image/image2.png'
import nyungweImage from '../Assets/Image/image4.png'
import kigaliImage from '../Assets/Image/pic5.png'
</script>

<template>
  <!-- Hero section -->
  <section class="relative h-screen bg-cover bg-center flex items-center justify-center text-white" :style="`background-image: url(${heroImage})`">
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative z-10 text-center px-6 sm:px-10">
      <p class="uppercase tracking-[0.4em] mb-4 text-sm text-yellow-300">Visit Rwanda</p>
      <h1 class="text-5xl font-bold mb-6">Welcome to Rwanda’s Natural Paradise</h1>
      <p class="max-w-3xl mx-auto text-lg leading-8 mb-8 text-gray-100">
        Discover breathtaking landscapes, unforgettable wildlife, warm local culture, and curated travel services for every visitor.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link to="/Services" class="rounded-full bg-yellow-300 px-8 py-3 text-green-900 font-semibold hover:bg-yellow-400 transition">
          Explore Services
        </router-link>
        <router-link to="/Contact" class="rounded-full border border-white px-8 py-3 text-white hover:bg-white hover:text-green-900 transition">
          Plan Your Trip
        </router-link>
      </div>
    </div>
  </section>

  <!-- Features section -->
  <section class="bg-white text-green-900 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="grid gap-8 lg:grid-cols-3">
        <div class="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm">
          <h2 class="text-2xl font-bold mb-3">Gorilla Trekking</h2>
          <p class="leading-8">Track mountain gorillas in Volcanoes National Park with expert guides, permits, and full support from arrival to departure.</p>
        </div>
        <div class="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm">
          <h2 class="text-2xl font-bold mb-3">Wildlife Safaris</h2>
          <p class="leading-8">Experience Akagera’s big game, Nyungwe’s chimpanzees, and Rwanda’s rich birdlife on personalized safari packages.</p>
        </div>
        <div class="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm">
          <h2 class="text-2xl font-bold mb-3">Culture & City Tours</h2>
          <p class="leading-8">Enjoy Kigali city highlights, local markets, cultural performances, and meaningful visits to heritage sites.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Places to visit -->
  <section class="bg-green-50 text-green-900 py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-10 text-center">
        <p class="uppercase tracking-[0.4em] text-sm text-green-700 mb-2">Top Destinations</p>
        <h2 class="text-4xl font-bold">Must-see Places in Rwanda</h2>
        <p class="max-w-2xl mx-auto mt-4 text-lg leading-8 text-green-800">
          Explore Rwanda’s best destinations for nature, wildlife, culture, and adventure. Each place offers a unique visit experience.
        </p>
      </div>

      <div class="grid gap-8 lg:grid-cols-3">
        <article class="rounded-3xl overflow-hidden border border-green-100 bg-white shadow-sm">
          <img :src="volcanoImage" alt="Volcanoes National Park" class="h-56 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">Volcanoes National Park</h3>
            <p class="leading-7 mb-4">Home to mountain gorillas and golden monkeys, this park is Rwanda’s most iconic wildlife destination.</p>
            <router-link to="/North" class="inline-block text-sm font-semibold text-yellow-600 hover:text-yellow-700">Learn more →</router-link>
          </div>
        </article>

        <article class="rounded-3xl overflow-hidden border border-green-100 bg-white shadow-sm">
          <img :src="akageraImage" alt="Akagera National Park" class="h-56 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">Akagera National Park</h3>
            <p class="leading-7 mb-4">Savannah landscapes, big game, and boat safaris make Akagera perfect for classic African wildlife adventures.</p>
            <router-link to="/East" class="inline-block text-sm font-semibold text-yellow-600 hover:text-yellow-700">Learn more →</router-link>
          </div>
        </article>

        <article class="rounded-3xl overflow-hidden border border-green-100 bg-white shadow-sm">
          <img :src="nyungweImage" alt="Nyungwe Forest" class="h-56 w-full object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">Nyungwe Forest</h3>
            <p class="leading-7 mb-4">Enjoy rainforest walks, chimpanzee tracking, and the canopy walkway in one of Africa’s oldest forests.</p>
            <router-link to="/South" class="inline-block text-sm font-semibold text-yellow-600 hover:text-yellow-700">Learn more →</router-link>
          </div>
        </article>
      </div>

      <div class="mt-10 grid gap-8 lg:grid-cols-2">
        <article class="rounded-3xl overflow-hidden border border-green-100 bg-white shadow-sm flex flex-col lg:flex-row">
          <img :src="kigaliImage" alt="Kigali city" class="h-72 w-full lg:w-1/2 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-3">Kigali City</h3>
            <p class="leading-7 mb-4">A vibrant capital with modern dining, markets, museums, and a warm gateway into Rwanda’s culture and hospitality.</p>
            <router-link to="/Kigali" class="inline-block text-sm font-semibold text-yellow-600 hover:text-yellow-700">Learn more →</router-link>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Get started CTA -->
  <section class="bg-green-800 text-white py-16">
    <div class="max-w-5xl mx-auto px-6 text-center">
      <h2 class="text-4xl font-bold mb-4">Ready to Visit Rwanda?</h2>
      <p class="max-w-3xl mx-auto mb-8 text-lg leading-8 text-green-100">
        Book your personalized itinerary today and let us handle the details: accommodations, transportation, tours, and unforgettable experiences.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <router-link to="/Contact" class="rounded-full bg-yellow-300 px-10 py-3 text-green-900 font-semibold hover:bg-yellow-400 transition">
          Start Your Journey
        </router-link>
        <router-link to="/Services" class="rounded-full border border-white px-10 py-3 text-white hover:bg-white hover:text-green-900 transition">
          View Our Tours
        </router-link>
      </div>
    </div>
  </section>
</template>

