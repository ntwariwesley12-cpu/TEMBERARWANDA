<script setup>
import heroImage from '../Assets/Image/image4.png'
import photo1 from '../Assets/Image/image2.png'
import photo2 from '../Assets/Image/image5.png'
import photo3 from '../Assets/Image/pic4.png'
import photo4 from '../Assets/Image/image6.png'
</script>

<template>
  <section class="bg-white text-green-900 min-h-screen w-full mt-12 px-6 py-10 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="mb-12 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <p class="uppercase tracking-[0.4em] text-sm text-green-700 mb-4">Southern Province</p>
          <h1 class="text-5xl font-bold text-green-800 mb-6">Nyungwe Forest National Park</h1>
          <p class="text-lg leading-8 text-green-700 mb-6">
            One of Africa's largest and oldest tropical rainforests, Nyungwe spans over 970 square kilometers of pristine wilderness. This biodiverse sanctuary is home to chimpanzees, over 13 primate species, and 300+ bird species, offering immersive forest adventures.
          </p>
          <router-link to="/contact" class="inline-block rounded-full bg-green-800 px-8 py-3 text-white font-semibold hover:bg-green-900 transition">
            Book Your Adventure
          </router-link>
        </div>
        <img :src="nyungweImage" alt="Nyungwe Forest" class="rounded-3xl shadow-lg" />
      </div>

      <!-- Forest Experiences -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Forest Experiences</h2>
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🐵 Chimpanzee Trekking</h3>
            <p class="text-green-700 leading-7 mb-4">Track habituated chimpanzee communities through dense rainforest. Witness their social behaviors, feeding habits, and family dynamics in this intimate wildlife experience unlike any other.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 3-5 hours | <strong>Difficulty:</strong> Moderate to High</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🌲 Canopy Walkway</h3>
            <p class="text-green-700 leading-7 mb-4">Walk high above the forest floor on a suspended canopy walkway—270 meters of suspended bridges through the treetops. A thrilling perspective of rainforest life at all levels.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 1-2 hours | <strong>Difficulty:</strong> Easy to Moderate</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🦜 Birding Expeditions</h3>
            <p class="text-green-700 leading-7 mb-4">Nyungwe is a birding paradise with over 300 species including rarities like the Albertine Owlet. Guided walks and early morning expeditions maximize your sighting opportunities.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 2-6 hours | <strong>Difficulty:</strong> Easy to Moderate</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🥾 Forest Walks</h3>
            <p class="text-green-700 leading-7 mb-4">Explore diverse trails through pristine forests, discovering hidden waterfalls, scenic viewpoints, and encountering monkeys, insects, and rare plants along the way.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 2-4 hours | <strong>Difficulty:</strong> Easy to Moderate</p>
          </div>
        </div>
      </section>

      <!-- Primates of Nyungwe -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Meet Nyungwe's Primates</h2>
        <p class="text-lg leading-8 text-green-700 mb-8">Nyungwe is home to 13 primate species. Here are highlights:</p>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <p class="text-2xl mb-3">🐵</p>
            <h3 class="font-semibold text-green-800 mb-2">Chimpanzees</h3>
            <p class="text-green-700 text-sm leading-6">Our closest relatives. Nyungwe's chimps are habituated and offer remarkable viewing opportunities for behavior observation.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <p class="text-2xl mb-3">🐵</p>
            <h3 class="font-semibold text-green-800 mb-2">Colobus Monkeys</h3>
            <p class="text-green-700 text-sm leading-6">Acrobatic tree-dwellers with white and black coats. Often seen in large groups making stunning aerial displays through the canopy.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <p class="text-2xl mb-3">🐵</p>
            <h3 class="font-semibold text-green-800 mb-2">Other Primates</h3>
            <p class="text-green-700 text-sm leading-6">Blue monkeys, L'Hoest's monkeys, grey-cheeked mangabeys, and more create a symphony of forest life.</p>
          </div>
        </div>
      </section>

      <!-- Practical Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Practical Information</h2>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">🎫</span> Park Fees & Permits</h3>
            <p class="text-green-700 text-sm leading-6"><strong>Park Entry:</strong> $50 USD/day<br><strong>Chimp Trek:</strong> $100 USD<br><strong>Canopy Walk:</strong> $15 USD</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">📅</span> Best Time to Visit</h3>
            <p class="text-green-700 text-sm leading-6"><strong>Dry Seasons:</strong> Jan-Feb & Aug-Sep<br><strong>Green Seasons:</strong> Mar-May & Oct-Dec (lush & misty)</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">🏨</span> Accommodation</h3>
            <p class="text-green-700 text-sm leading-6">Luxury eco-lodges and mid-range hotels in nearby Cyangugu. Forest camps available for immersive experiences.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-green-800 text-white rounded-3xl p-10 text-center">
        <h2 class="text-3xl font-bold mb-4">Discover the Heart of Africa's Rainforests</h2>
        <p class="text-lg mb-6 text-green-100">Trek through ancient forests, encounter chimpanzees, and experience the raw beauty of Nyungwe.</p>
        <router-link to="/contact" class="inline-block rounded-full bg-yellow-300 px-8 py-3 font-semibold text-green-900 hover:bg-yellow-400 transition">
          Book Your Forest Adventure
        </router-link>
      </section>
    </div>
  </section>
</template>