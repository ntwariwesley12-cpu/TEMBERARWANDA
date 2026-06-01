<script setup>
import akageraImage from '../Assets/Image/image2.png'
</script>

<template>
  <section class="bg-white text-green-900 min-h-screen w-full mt-12 px-6 py-10 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <!-- Hero Section -->
      <div class="mb-12 grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <p class="uppercase tracking-[0.4em] text-sm text-green-700 mb-4">Eastern Province</p>
          <h1 class="text-5xl font-bold text-green-800 mb-6">Akagera National Park</h1>
          <p class="text-lg leading-8 text-green-700 mb-6">
            Rwanda's largest national park and only true savannah reserve, Akagera offers exciting wildlife safaris with opportunities to see the Big Five. This pristine ecosystem of grasslands, woodlands, and water bodies is a world-class destination for safari adventures.
          </p>
          <router-link to="/contact" class="inline-block rounded-full bg-green-800 px-8 py-3 text-white font-semibold hover:bg-green-900 transition">
            Book Your Safari
          </router-link>
        </div>
        <img :src="akageraImage" alt="Akagera National Park" class="rounded-3xl shadow-lg" />
      </div>

      <!-- Safari Experiences -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Safari Experiences</h2>
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🚗 Game Drives</h3>
            <p class="text-green-700 leading-7 mb-4">Guided game drives in open 4x4 vehicles offer excellent opportunities to encounter lions, leopards, buffalo, zebras, and antelopes. Early morning and late afternoon drives provide the best wildlife viewing.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 3-4 hours per drive | <strong>Best Time:</strong> Dawn & Dusk</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🚤 Boat Safaris</h3>
            <p class="text-green-700 leading-7 mb-4">Experience Africa's wildlife from the water. Boat safaris on Lake Ihema provide unique perspectives for spotting hippos, crocodiles, water birds, and drinking wildlife including elephants and buffalo.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 2-3 hours | <strong>Type:</strong> Scenic & Educational</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🦁 Big Five Tracking</h3>
            <p class="text-green-700 leading-7 mb-4">Akagera is home to the Big Five: lions, leopards, elephants, buffalo, and rhinos. Multi-day safari packages maximize chances of encountering these iconic African animals.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 2-4 days | <strong>Group Size:</strong> Flexible</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="text-xl font-semibold text-green-800 mb-3">🦅 Birdwatching</h3>
            <p class="text-green-700 leading-7 mb-4">Over 500 bird species have been identified in Akagera. Guided birding walks and drives are perfect for ornithologists and nature enthusiasts of all levels.</p>
            <p class="text-sm text-green-600"><strong>Duration:</strong> 2-6 hours | <strong>Difficulty:</strong> Easy to Moderate</p>
          </div>
        </div>
      </section>

      <!-- Wildlife You'll See -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Wildlife of Akagera</h2>
        <div class="grid gap-4 lg:grid-cols-5">
          <div class="rounded-xl bg-green-50 border border-green-100 p-4 text-center">
            <div class="text-3xl mb-2">🦁</div>
            <p class="font-semibold text-green-800">Lions</p>
            <p class="text-xs text-green-600 mt-2">Large prides across the park</p>
          </div>
          <div class="rounded-xl bg-green-50 border border-green-100 p-4 text-center">
            <div class="text-3xl mb-2">🦓</div>
            <p class="font-semibold text-green-800">Zebras</p>
            <p class="text-xs text-green-600 mt-2">Striped herds in grasslands</p>
          </div>
          <div class="rounded-xl bg-green-50 border border-green-100 p-4 text-center">
            <div class="text-3xl mb-2">🐘</div>
            <p class="font-semibold text-green-800">Elephants</p>
            <p class="text-xs text-green-600 mt-2">Majestic herds year-round</p>
          </div>
          <div class="rounded-xl bg-green-50 border border-green-100 p-4 text-center">
            <div class="text-3xl mb-2">🦒</div>
            <p class="font-semibold text-green-800">Giraffes</p>
            <p class="text-xs text-green-600 mt-2">Graceful giants of the savannah</p>
          </div>
          <div class="rounded-xl bg-green-50 border border-green-100 p-4 text-center">
            <div class="text-3xl mb-2">🦛</div>
            <p class="font-semibold text-green-800">Hippos</p>
            <p class="text-xs text-green-600 mt-2">Throughout Lake Ihema</p>
          </div>
        </div>
      </section>

      <!-- Practical Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Practical Information</h2>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">🎫</span> Park Entry</h3>
            <p class="text-green-700 text-sm leading-6"><strong>Cost:</strong> $50 USD per person per day<br><strong>Hours:</strong> 6am - 6pm daily</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">📅</span> Best Time to Visit</h3>
            <p class="text-green-700 text-sm leading-6"><strong>Dry Season:</strong> Jan-Feb & Aug-Sep<br><strong>Year-round destination:</strong> Green season offers lush scenery</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3 flex items-center"><span class="text-2xl mr-3">🏨</span> Accommodation</h3>
            <p class="text-green-700 text-sm leading-6">Lodge and eco-tourism options inside the park and in nearby Kibimba. All-inclusive safari packages available.</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-green-800 text-white rounded-3xl p-10 text-center">
        <h2 class="text-3xl font-bold mb-4">Experience African Wildlife at Its Best</h2>
        <p class="text-lg mb-6 text-green-100">Book your Akagera safari adventure with expert guides and eco-conscious operators.</p>
        <router-link to="/contact" class="inline-block rounded-full bg-yellow-300 px-8 py-3 font-semibold text-green-900 hover:bg-yellow-400 transition">
          Plan Your Safari
        </router-link>
      </section>
    </div>
  </section>
</template>