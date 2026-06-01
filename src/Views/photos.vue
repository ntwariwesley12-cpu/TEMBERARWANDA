<script setup>
import { computed, ref } from 'vue';
import gorillaImage from '../Assets/Image/image3.png';
import safariImage from '../Assets/Image/image2.png';
import landscapeImage from '../Assets/Image/image1.png';
import forestImage from '../Assets/Image/image4.png';
import primateImage from '../Assets/Image/pic4.png';
import lakeImage from '../Assets/Image/image6.png';
import cultureImage from '../Assets/Image/pic2.png';
import cityImage from '../Assets/Image/pic4.png';
import sunsetImage from '../Assets/Image/image5.png';

const categories = [
  'All',
  'Gorillas',
  'Safari',
  'Landscapes',
  'Forest',
  'Primates',
  'Lakes',
  'Culture',
  'City',
  'Sunsets',
];

const selectedCategory = ref('All');

const galleryItems = [
  {
    id: 1,
    title: 'Mountain Gorillas',
    description: 'Majestic gorillas in Volcanoes National Park with expert guides.',
    category: 'Gorillas',
    image: gorillaImage,
    link: '/north',
  },
  {
    id: 2,
    title: 'Safari Adventures',
    description: 'Big Five and savannah wildlife encounters in Akagera.',
    category: 'Safari',
    image: safariImage,
    link: '/east',
  },
  {
    id: 3,
    title: 'Volcanic Landscapes',
    description: 'Dramatic peaks and crater views around Volcanoes National Park.',
    category: 'Landscapes',
    image: landscapeImage,
    link: '/north',
  },
  {
    id: 4,
    title: 'Rainforest Trails',
    description: 'Lush Nyungwe Forest walks and canopy experiences.',
    category: 'Forest',
    image: forestImage,
    link: '/south',
  },
  {
    id: 5,
    title: 'Primates & Chimps',
    description: 'Chimpanzees, colobus monkeys, and forest primates on display.',
    category: 'Primates',
    image: primateImage,
    link: '/south',
  },
  {
    id: 6,
    title: 'Lakes & Water',
    description: 'Serene Lake Kivu viewpoints and water reflections.',
    category: 'Lakes',
    image: lakeImage,
    link: '/west',
  },
  {
    id: 7,
    title: 'Culture & People',
    description: 'Local communities, markets, and cultural storytelling.',
    category: 'Culture',
    image: cultureImage,
    link: '/kigali',
  },
  {
    id: 8,
    title: 'Kigali City',
    description: 'Modern city life, museums, and vibrant Kigali scenes.',
    category: 'City',
    image: cityImage,
    link: '/kigali',
  },
  {
    id: 9,
    title: 'Golden Sunsets',
    description: 'Warm sunset moments across Rwanda’s hills and lakes.',
    category: 'Sunsets',
    image: sunsetImage,
    link: '/west',
  },
];

const filteredGallery = computed(() => {
  return selectedCategory.value === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory.value);
});
</script>

<template>
  <section class="bg-slate-50 text-slate-900 min-h-screen w-full mt-12 px-6 py-10 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <div class="mb-10 text-center">
        <p class="uppercase tracking-[0.35em] text-sm text-emerald-700 mb-4">Visual Gallery</p>
        <h1 class="text-5xl font-bold text-slate-900 mb-4">Discover Rwanda Through Photos</h1>
        <p class="max-w-3xl mx-auto text-lg leading-8 text-slate-700">
          Explore Rwanda’s landscapes, wildlife, cities, and culture in a gallery designed so you can choose the destination and experience that matches your travel style.
        </p>
      </div>

      <div class="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <router-link to="/north" class="rounded-3xl bg-white p-5 border border-slate-200 shadow-sm hover:shadow-lg transition text-slate-900 text-center">
          <p class="text-sm uppercase tracking-[0.25em] text-emerald-700 mb-2">Northern</p>
          <p class="font-semibold">Volcanoes</p>
        </router-link>
        <router-link to="/south" class="rounded-3xl bg-white p-5 border border-slate-200 shadow-sm hover:shadow-lg transition text-slate-900 text-center">
          <p class="text-sm uppercase tracking-[0.25em] text-emerald-700 mb-2">Southern</p>
          <p class="font-semibold">Nyungwe</p>
        </router-link>
        <router-link to="/east" class="rounded-3xl bg-white p-5 border border-slate-200 shadow-sm hover:shadow-lg transition text-slate-900 text-center">
          <p class="text-sm uppercase tracking-[0.25em] text-emerald-700 mb-2">Eastern</p>
          <p class="font-semibold">Akagera</p>
        </router-link>
        <router-link to="/west" class="rounded-3xl bg-white p-5 border border-slate-200 shadow-sm hover:shadow-lg transition text-slate-900 text-center">
          <p class="text-sm uppercase tracking-[0.25em] text-emerald-700 mb-2">Western</p>
          <p class="font-semibold">Lake Kivu</p>
        </router-link>
        <router-link to="/kigali" class="rounded-3xl bg-white p-5 border border-slate-200 shadow-sm hover:shadow-lg transition text-slate-900 text-center">
          <p class="text-sm uppercase tracking-[0.25em] text-emerald-700 mb-2">Kigali</p>
          <p class="font-semibold">City Life</p>
        </router-link>
      </div>

      <div class="mb-12 flex flex-wrap items-center gap-3">
        <p class="text-sm uppercase tracking-[0.25em] text-slate-500">Filter gallery:</p>
        <div class="flex flex-wrap gap-2">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="selectedCategory === category
              ? 'bg-emerald-800 text-white shadow-lg'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'"
            class="rounded-full px-4 py-2 text-sm font-semibold transition"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <div
          v-for="item in filteredGallery"
          :key="item.id"
          class="rounded-[2rem] overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition"
        >
          <img :src="item.image" :alt="item.title" class="h-64 w-full object-cover" />
          <div class="p-6">
            <p class="text-xs uppercase tracking-[0.3em] text-emerald-600 mb-3">{{ item.category }}</p>
            <h3 class="text-2xl font-semibold text-slate-900 mb-3">{{ item.title }}</h3>
            <p class="text-slate-600 leading-7 mb-6">{{ item.description }}</p>
            <router-link
              :to="item.link"
              class="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-900 transition"
            >
              Explore
              <span>→</span>
            </router-link>
          </div>
        </div>
      </div>

      <div class="text-center">
        <p class="text-sm text-slate-500">Select a category or destination above to filter the gallery and explore the option that fits your trip.</p>
      </div>

      <!-- AI-Generated Gallery Section -->
      <section class="mt-20 mb-16">
        <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 class="text-3xl font-bold text-slate-900">AI-Enhanced Premium Gallery</h2>
            <p class="mt-3 text-slate-600 max-w-2xl">Ultra high-definition AI-enhanced imagery showcasing Rwanda's beauty, luxury experiences, and immersive travel moments.</p>
          </div>
          <span class="text-sm uppercase tracking-[0.25em] text-emerald-700">Generated with advanced AI</span>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <div class="rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl">
            <div class="h-64 flex items-center justify-center text-6xl">🤖</div>
            <div class="p-6">
              <p class="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-3">AI Enhanced</p>
              <h3 class="text-2xl font-semibold text-white mb-3">Wildlife 8K Ultra HD</h3>
              <p class="text-slate-300 leading-7 mb-6">Hyper-realistic AI-enhanced wildlife photography showcasing gorillas, safari moments, and forest life in stunning detail.</p>
              <a href="#" class="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition">
                View Gallery
                <span>→</span>
              </a>
            </div>
          </div>

          <div class="rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl">
            <div class="h-64 flex items-center justify-center text-6xl">🎨</div>
            <div class="p-6">
              <p class="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-3">AI Artistry</p>
              <h3 class="text-2xl font-semibold text-white mb-3">Landscape Masterpieces</h3>
              <p class="text-slate-300 leading-7 mb-6">AI-created landscape photography combining real Rwanda vistas with artistic enhancement for dramatic visual impact.</p>
              <a href="#" class="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition">
                View Gallery
                <span>→</span>
              </a>
            </div>
          </div>

          <div class="rounded-[2rem] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-2xl">
            <div class="h-64 flex items-center justify-center text-6xl">✨</div>
            <div class="p-6">
              <p class="text-xs uppercase tracking-[0.3em] text-emerald-400 mb-3">AI Cinematic</p>
              <h3 class="text-2xl font-semibold text-white mb-3">Luxury Experience Visions</h3>
              <p class="text-slate-300 leading-7 mb-6">AI-enhanced luxury lodge interiors, premium safari camps, and exclusive travel moments designed for discerning travelers.</p>
              <a href="#" class="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-700 transition">
                View Gallery
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
