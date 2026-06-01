<script setup>
import cityImage from '../Assets/Image/pic4.png'
</script>

<template>
  <section class="bg-white text-green-900 min-h-screen w-full mt-12 px-6 py-10 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="mb-12 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <p class="uppercase tracking-[0.4em] text-sm text-green-700 mb-4">Capital City</p>
          <h1 class="text-5xl font-bold text-green-800 mb-6">Kigali City</h1>
          <p class="text-lg leading-8 text-green-700 mb-6">
            Rwanda's vibrant capital is a dynamic blend of modern development, cultural heritage, and warm hospitality. From historical museums to contemporary restaurants, lively markets to peaceful gardens, Kigali offers a rich tapestry of experiences that showcase Rwanda's resilience and growth.
          </p>
          <router-link to="/contact" class="inline-block rounded-full bg-green-800 px-8 py-3 text-white font-semibold hover:bg-green-900 transition">
            Book Your City Tour
          </router-link>
        </div>
        <img :src="cityImage" alt="Kigali City" class="rounded-3xl shadow-lg" />
      </div>

      <!-- Must-See Attractions -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Must-See Attractions</h2>
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🏛️ Kigali Genocide Memorial</h3>
            <p class="text-green-700 leading-7 mb-4">A powerful and respectful museum documenting Rwanda's history. Essential for understanding the nation's past and its remarkable journey toward reconciliation and peace.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 2-3 hours | <strong>Entry:</strong> $12 USD</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🎨 Kigali Art Museum</h3>
            <p class="text-green-700 leading-7 mb-4">Showcasing contemporary Rwandan and African art. The museum features works by local artists and hosts rotating exhibitions highlighting Rwanda's creative community.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 1-2 hours | <strong>Entry:</strong> $8 USD</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">✨ Kimironko Market</h3>
            <p class="text-green-700 leading-7 mb-4">Experience authentic local life at this bustling market. Browse colorful handicrafts, fresh produce, traditional crafts, and immerse yourself in Rwandan daily culture.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 1-2 hours | <strong>Best Time:</strong> Early morning</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🌳 Serena Botanical Garden</h3>
            <p class="text-green-700 leading-7 mb-4">A peaceful oasis in the city with lush gardens, local plants, and small animals. Perfect for a relaxing stroll and nature photography.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 1-2 hours | <strong>Entry:</strong> $5 USD</p>
          </div>
        </div>
      </section>

      <!-- Cultural Experiences -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Cultural Experiences</h2>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <p class="text-3xl mb-3">🍽️</p>
            <h3 class="font-semibold text-green-800 mb-2">Local Cuisine</h3>
            <p class="text-green-700 text-sm leading-6">From street food to fine dining, taste authentic Rwandan dishes and East African cuisine at diverse restaurants throughout Kigali.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <p class="text-3xl mb-3">🎭</p>
            <h3 class="font-semibold text-green-800 mb-2">Traditional Music & Dance</h3>
            <p class="text-green-700 text-sm leading-6">Experience traditional Rwandan performances, drum shows, and cultural events that showcase the nation's artistic heritage.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <p class="text-3xl mb-3">🛍️</p>
            <h3 class="font-semibold text-green-800 mb-2">Shopping & Crafts</h3>
            <p class="text-green-700 text-sm leading-6">Browse artisan crafts, traditional textiles, beadwork, and contemporary goods at markets and boutique shops.</p>
          </div>
        </div>
      </section>

      <!-- Districts & Neighborhoods -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Key Neighborhoods to Explore</h2>
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3">Downtown/CBD</h3>
            <p class="text-green-700 text-sm leading-6 mb-3">The commercial heart with modern shopping centers, hotels, restaurants, and business districts. Best for city exploration and dining.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3">Kacyiru</h3>
            <p class="text-green-700 text-sm leading-6 mb-3">Home to museums and cultural sites. Quieter residential area with historical significance and peaceful surroundings.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3">Kimihurura</h3>
            <p class="text-green-700 text-sm leading-6 mb-3">Trendy neighborhood with upscale restaurants, cafes, nightlife, and modern entertainment venues. Great for evening outings.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3">Nyarutarama</h3>
            <p class="text-green-700 text-sm leading-6 mb-3">Residential area on hills with scenic views, boutique hotels, and local experiences away from the city center.</p>
          </div>
        </div>
      </section>

      <!-- Practical Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Kigali Essentials</h2>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">✈️</span> Getting Around</h3>
            <p class="text-green-700 text-sm leading-6">Taxis, moto-taxis (motorcycle taxis), and ride-hailing services. We arrange transportation and guided city tours.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">🏨</span> Accommodation</h3>
            <p class="text-green-700 text-sm leading-6">Range from budget hostels to luxury 5-star hotels. All neighborhoods offer various options for all budgets and preferences.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">💱</span> Currency & Money</h3>
            <p class="text-green-700 text-sm leading-6">Currency is Rwandan Franc (RWF). ATMs widely available. USD accepted at tourist venues. Mobile money (MTN, Airtel) very popular.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-green-800 text-white rounded-3xl p-10 text-center">
        <h2 class="text-3xl font-bold mb-4">Explore Rwanda's Dynamic Capital</h2>
        <p class="text-lg mb-6 text-green-100">Kigali serves as an excellent gateway to Rwanda's natural wonders. Combine city tours with national park adventures for a complete experience.</p>
        <router-link to="/contact" class="inline-block rounded-full bg-yellow-300 px-8 py-3 font-semibold text-green-900 hover:bg-yellow-400 transition">
          Plan Your Kigali Visit
        </router-link>
      </section>
    </div>
  </section>
</template>