<script setup>
import volcanoImage from '../Assets/Image/image1.png'
</script>

<template>
  <section class="bg-white text-green-900 min-h-screen w-full mt-12 px-6 py-10 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="mb-12 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <p class="uppercase tracking-[0.4em] text-sm text-green-700 mb-4">Northern Province</p>
          <h1 class="text-5xl font-bold text-green-800 mb-6">Volcanoes National Park</h1>
          <p class="text-lg leading-8 text-green-700 mb-6">
            Home to the legendary mountain gorillas, Volcanoes National Park is Rwanda's crown jewel. This biodiverse sanctuary encompasses three stunning volcanic peaks and pristine rainforest, offering visitors an unparalleled wildlife experience in the heart of Africa.
          </p>
          <router-link to="/contact" class="inline-block rounded-full bg-green-800 px-8 py-3 text-white font-semibold hover:bg-green-900 transition">
            Book Your Trek
          </router-link>
        </div>
        <img :src="volcanoImage" alt="Volcanoes National Park" class="rounded-3xl shadow-lg" />
      </div>

      <!-- What to Experience -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">What to Experience</h2>
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🦍 Mountain Gorilla Trekking</h3>
            <p class="text-green-700 leading-7 mb-4">Trek through misty rainforests to encounter mountain gorillas in their natural habitat. These magical encounters, lasting up to 1 hour in the presence of these majestic creatures, create memories that last a lifetime.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 4-6 hours | <strong>Difficulty:</strong> Moderate to High</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🐵 Golden Monkey Trekking</h3>
            <p class="text-green-700 leading-7 mb-4">Encounter the rare golden monkeys, endemic to the Virunga Mountains. These playful primates live in family groups among the bamboo forests and offer delightful wildlife viewing experiences.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 2-3 hours | <strong>Difficulty:</strong> Moderate</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🏔️ Volcanic Crater Hikes</h3>
            <p class="text-green-700 leading-7 mb-4">Climb the volcanic peaks of Karisimbi, Bisoke, or Muhavura for breathtaking panoramic views, crater lakes, and opportunities to spot highland birds and wildlife.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 6-8 hours | <strong>Difficulty:</strong> High</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🌿 Forest Walks & Birding</h3>
            <p class="text-green-700 leading-7 mb-4">Explore diverse rainforest ecosystems with guided nature walks. Over 700 bird species have been recorded here, making it a paradise for birdwatchers and nature enthusiasts.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 2-4 hours | <strong>Difficulty:</strong> Easy to Moderate</p>
          </div>
        </div>
      </section>

      <!-- Practical Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Practical Information</h2>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">🎫</span> Gorilla Permit</h3>
            <p class="text-green-700 text-sm leading-6"><strong>Cost:</strong> $1,500 USD per person<br><strong>Duration:</strong> 1-2 hour trek (up to 8 people per group)</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">📅</span> Best Time to Visit</h3>
            <p class="text-green-700 text-sm leading-6"><strong>Dry Seasons:</strong> Jan-Feb & Aug-Sep<br><strong>Shoulder Seasons:</strong> Mar-May & Oct-Dec (lush, fewer crowds)</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">🏨</span> Accommodation</h3>
            <p class="text-green-700 text-sm leading-6">Options from budget guesthouses to luxury eco-lodges in nearby towns like Musanze (Ruhengeri) and Kinigi.</p>
          </div>
        </div>
      </section>

      <!-- What to Pack -->
      <section class="bg-green-50 rounded-3xl p-8 border border-green-100 mb-16">
        <h2 class="text-2xl font-bold mb-6 text-green-800">What to Pack</h2>
        <div class="grid gap-4 lg:grid-cols-2 text-green-700">
          <ul class="space-y-2">
            <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Waterproof jacket and hiking boots</li>
            <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Warm layers (altitude reaches 2,500m+)</li>
            <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Camera with extra batteries</li>
            <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Binoculars for birding</li>
          </ul>
          <ul class="space-y-2">
            <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Sun protection (sunscreen, hat)</li>
            <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Insect repellent</li>
            <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> First aid kit & medications</li>
            <li class="flex items-start"><span class="mr-3 text-yellow-600">✓</span> Portable water and snacks</li>
          </ul>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-green-800 text-white rounded-3xl p-10 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready for an Unforgettable Adventure?</h2>
        <p class="text-lg mb-6 text-green-100">Let our specialized guides lead you to encounter mountain gorillas and explore the magic of Rwanda's Northern Province.</p>
        <router-link to="/contact" class="inline-block rounded-full bg-yellow-300 px-8 py-3 font-semibold text-green-900 hover:bg-yellow-400 transition">
          Plan Your Visit
        </router-link>
      </section>
    </div>
  </section>
</template>