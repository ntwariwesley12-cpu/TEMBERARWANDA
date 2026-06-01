<script setup>
import volcanoImage from '../Assets/Image/image1.png'
import akageraImage from '../Assets/Image/image2.png'
import nyungweImage from '../Assets/Image/image4.png'
import cityImage from '../Assets/Image/pic4.png'
</script>

<template>
  <section class="bg-white text-green-900 min-h-screen w-full mt-12 px-6 py-10 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-16 text-center">
        <p class="uppercase tracking-[0.4em] text-sm text-green-700 mb-4">Our Offerings</p>
        <h1 class="text-5xl font-bold text-green-800 mb-6">Comprehensive Rwanda Travel Services</h1>
        <p class="max-w-3xl mx-auto text-lg leading-8 text-green-800">
          From wildlife adventures to cultural immersion, we design bespoke experiences tailored to your interests, timeline, and budget.
        </p>
      </div>

      <!-- Main Services Grid -->
      <div class="grid gap-8 lg:grid-cols-2 mb-16">
        <article class="rounded-3xl overflow-hidden border border-green-100 bg-green-50 shadow-sm">
          <img :src="volcanoImage" alt="Gorilla Trekking" class="h-64 w-full object-cover" />
          <div class="p-8">
            <h2 class="text-2xl font-bold mb-4 text-green-800">Gorilla Trekking Expeditions</h2>
            <p class="leading-8 mb-4 text-green-700">Track mountain gorillas in their natural habitat at Volcanoes National Park. Our expert guides provide permit arrangements, pre-trek briefings, and post-trek support to ensure a safe and unforgettable experience.</p>
            <ul class="space-y-2 text-green-700">
              <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Full permit coordination</li>
              <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Expert local guides</li>
              <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> 1-2 day itineraries available</li>
              <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Photography support</li>
            </ul>
          </div>
        </article>

        <article class="rounded-3xl overflow-hidden border border-green-100 bg-green-50 shadow-sm">
          <img :src="akageraImage" alt="Safari Adventure" class="h-64 w-full object-cover" />
          <div class="p-8">
            <h2 class="text-2xl font-bold mb-4 text-green-800">Safari & Wildlife Adventure</h2>
            <p class="leading-8 mb-4 text-green-700">Explore Rwanda's savannah and forests with guided wildlife safaris. Experience big game, bird watching, and boat tours across Akagera, Nyungwe, and other protected areas.</p>
            <ul class="space-y-2 text-green-700">
              <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Multi-day safari packages</li>
              <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Morning & evening game drives</li>
              <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Chimpanzee tracking</li>
              <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Birding expeditions</li>
            </ul>
          </div>
        </article>
      </div>

      <!-- Additional Services -->
      <div class="grid gap-8 lg:grid-cols-3 mb-16">
        <div class="rounded-3xl border border-green-100 bg-green-50 p-8">
          <div class="text-3xl mb-4 text-yellow-600">🏙️</div>
          <h3 class="text-xl font-bold mb-3 text-green-800">City & Cultural Tours</h3>
          <p class="leading-7 text-green-700 mb-4">Discover Kigali's vibrant culture, visit historical sites, local markets, and engage with community-led cultural experiences.</p>
          <p class="text-sm text-green-600 font-semibold">From 1 to 3-day experiences</p>
        </div>

        <div class="rounded-3xl border border-green-100 bg-green-50 p-8">
          <div class="text-3xl mb-4 text-yellow-600">✈️</div>
          <h3 class="text-xl font-bold mb-3 text-green-800">Complete Travel Logistics</h3>
          <p class="leading-7 text-green-700 mb-4">Hassle-free airport transfers, lodge bookings, visa assistance, and detailed itinerary management from start to finish.</p>
          <p class="text-sm text-green-600 font-semibold">24/7 on-ground support</p>
        </div>

        <div class="rounded-3xl border border-green-100 bg-green-50 p-8">
          <div class="text-3xl mb-4 text-yellow-600">👥</div>
          <h3 class="text-xl font-bold mb-3 text-green-800">Group & Corporate Travel</h3>
          <p class="leading-7 text-green-700 mb-4">Tailored group packages, team-building adventures, conference coordination, and special event planning for companies and organizations.</p>
          <p class="text-sm text-green-600 font-semibold">Flexible group sizes</p>
        </div>

        <div class="rounded-3xl border border-green-100 bg-green-50 p-8">
          <div class="text-3xl mb-4 text-yellow-600">📷</div>
          <h3 class="text-xl font-bold mb-3 text-green-800">Photography Tours</h3>
          <p class="leading-7 text-green-700 mb-4">Dedicated photo safaris and gorilla trekking experiences led by guides trained to support photographers of all skill levels.</p>
          <p class="text-sm text-green-600 font-semibold">Professional guidance included</p>
        </div>

        <div class="rounded-3xl border border-green-100 bg-green-50 p-8">
          <div class="text-3xl mb-4 text-yellow-600">🏨</div>
          <h3 class="text-xl font-bold mb-3 text-green-800">Accommodation Partnerships</h3>
          <p class="leading-7 text-green-700 mb-4">Curated selections of eco-lodges, boutique hotels, and luxury resorts that match your preferences and budget across all regions.</p>
          <p class="text-sm text-green-600 font-semibold">Best rates guaranteed</p>
        </div>

        <div class="rounded-3xl border border-green-100 bg-green-50 p-8">
          <div class="text-3xl mb-4 text-yellow-600">🌱</div>
          <h3 class="text-xl font-bold mb-3 text-green-800">Sustainable Travel</h3>
          <p class="leading-7 text-green-700 mb-4">Eco-friendly itineraries that prioritize conservation, support local communities, and minimize environmental impact.</p>
          <p class="text-sm text-green-600 font-semibold">Responsible tourism certified</p>
        </div>
      </div>

      <!-- Pricing & Customization -->
      <section class="bg-green-50 rounded-3xl p-10 mb-16 border border-green-100">
        <h2 class="text-3xl font-bold mb-6 text-green-800">Flexible Pricing & Customization</h2>
        <p class="text-lg leading-8 mb-8 text-green-700">All our services are 100% customizable. We work with travelers on every budget level, from budget-conscious backpackers to luxury experience seekers.</p>
        
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="p-6 bg-white rounded-xl border border-green-100">
            <h3 class="font-semibold text-green-800 mb-2">Budget-Friendly</h3>
            <p class="text-green-700">Essential experiences with locally-owned partners. Perfect for travelers seeking authentic connections.</p>
          </div>
          <div class="p-6 bg-white rounded-xl border border-green-100">
            <h3 class="font-semibold text-green-800 mb-2">Mid-Range</h3>
            <p class="text-green-700">Comfortable lodges, quality services, and balanced itineraries for the typical tourist.</p>
          </div>
          <div class="p-6 bg-white rounded-xl border border-green-100">
            <h3 class="font-semibold text-green-800 mb-2">Luxury Experience</h3>
            <p class="text-green-700">Premium accommodations, private guides, and exclusive access to Rwanda's finest offerings.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-green-800 text-white rounded-3xl p-10">
        <h2 class="text-3xl font-bold mb-4">Ready to Plan Your Rwanda Adventure?</h2>
        <p class="text-lg mb-6 text-green-100">Contact our travel specialists today to discuss your interests and receive a personalized service proposal.</p>
        <router-link to="/contact" class="inline-block rounded-full bg-yellow-300 px-8 py-3 font-semibold text-green-900 hover:bg-yellow-400 transition">
          Get in Touch
        </router-link>
      </section>
    </div>
  </section>
</template>