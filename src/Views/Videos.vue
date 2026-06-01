<template>
  <section class="bg-white text-green-900 min-h-screen w-full mt-12 px-6 py-10 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-16 text-center">
        <p class="uppercase tracking-[0.4em] text-sm text-green-700 mb-4">Video Gallery</p>
        <h1 class="text-5xl font-bold text-green-800 mb-6">Experience Rwanda in Motion</h1>
        <p class="max-w-3xl mx-auto text-lg leading-8 text-green-700">
          Watch stunning videos showcasing Rwanda's wildlife, landscapes, cultural experiences, and travel adventures. From gorilla trekking to safari moments, these videos bring the magic of Rwanda to life.
        </p>
      </div>

      <!-- Video Grid -->
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <!-- Featured Video 1 -->
        <div class="rounded-2xl overflow-hidden border border-green-100 shadow-md hover:shadow-lg transition">
          <div class="bg-black h-48 flex items-center justify-center relative group cursor-pointer">
            <div class="text-6xl absolute group-hover:scale-110 transition">▶️</div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p class="text-white text-sm font-semibold">Mountain Gorilla Encounter</p>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-green-800 mb-2">Gorilla Trekking Adventure</h3>
            <p class="text-sm text-green-700 mb-3">Witness the magical moment of encountering mountain gorillas in their natural habitat. A once-in-a-lifetime experience.</p>
            <p class="text-xs text-green-600">Duration: 12:45 min</p>
          </div>
        </div>

        <!-- Featured Video 2 -->
        <div class="rounded-2xl overflow-hidden border border-green-100 shadow-md hover:shadow-lg transition">
          <div class="bg-black h-48 flex items-center justify-center relative group cursor-pointer">
            <div class="text-6xl absolute group-hover:scale-110 transition">▶️</div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p class="text-white text-sm font-semibold">Akagera Safari</p>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-green-800 mb-2">Big Five Safari Experience</h3>
            <p class="text-sm text-green-700 mb-3">Experience thrilling game drives spotting lions, elephants, buffalo, leopards, and rhinos across Akagera's savannah.</p>
            <p class="text-xs text-green-600">Duration: 15:20 min</p>
          </div>
        </div>

        <!-- Featured Video 3 -->
        <div class="rounded-2xl overflow-hidden border border-green-100 shadow-md hover:shadow-lg transition">
          <div class="bg-black h-48 flex items-center justify-center relative group cursor-pointer">
            <div class="text-6xl absolute group-hover:scale-110 transition">▶️</div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p class="text-white text-sm font-semibold">Nyungwe Canopy Walk</p>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-green-800 mb-2">Rainforest Canopy Walkway</h3>
            <p class="text-sm text-green-700 mb-3">Walk among the treetops 270 meters high, witnessing rainforest life from a thrilling new perspective.</p>
            <p class="text-xs text-green-600">Duration: 8:15 min</p>
          </div>
        </div>

        <!-- Featured Video 4 -->
        <div class="rounded-2xl overflow-hidden border border-green-100 shadow-md hover:shadow-lg transition">
          <div class="bg-black h-48 flex items-center justify-center relative group cursor-pointer">
            <div class="text-6xl absolute group-hover:scale-110 transition">▶️</div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p class="text-white text-sm font-semibold">Chimpanzee Trek</p>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-green-800 mb-2">Chimpanzee Tracking</h3>
            <p class="text-sm text-green-700 mb-3">Follow habituated chimpanzees through Nyungwe Forest and observe their social behaviors and family dynamics.</p>
            <p class="text-xs text-green-600">Duration: 11:30 min</p>
          </div>
        </div>

        <!-- Featured Video 5 -->
        <div class="rounded-2xl overflow-hidden border border-green-100 shadow-md hover:shadow-lg transition">
          <div class="bg-black h-48 flex items-center justify-center relative group cursor-pointer">
            <div class="text-6xl absolute group-hover:scale-110 transition">▶️</div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p class="text-white text-sm font-semibold">Kigali City Tour</p>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-green-800 mb-2">Kigali Exploration</h3>
            <p class="text-sm text-green-700 mb-3">Discover Rwanda's vibrant capital with its museums, markets, and cultural attractions that showcase the nation's story.</p>
            <p class="text-xs text-green-600">Duration: 9:45 min</p>
          </div>
        </div>

        <!-- Featured Video 6 -->
        <div class="rounded-2xl overflow-hidden border border-green-100 shadow-md hover:shadow-lg transition">
          <div class="bg-black h-48 flex items-center justify-center relative group cursor-pointer">
            <div class="text-6xl absolute group-hover:scale-110 transition">▶️</div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p class="text-white text-sm font-semibold">Lake Kivu Sunset</p>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-green-800 mb-2">Lake Kivu Beauty</h3>
            <p class="text-sm text-green-700 mb-3">Experience the tranquility of Lake Kivu with boat safaris, sunset views, and island adventures in Rwanda's West.</p>
            <p class="text-xs text-green-600">Duration: 10:20 min</p>
          </div>
        </div>

        <!-- Featured Video 7: Happy March -->
        <div class="rounded-2xl overflow-hidden border border-green-100 shadow-md hover:shadow-lg transition">
          <div class="bg-black h-48 flex items-center justify-center relative group cursor-pointer">
            <div class="text-6xl absolute group-hover:scale-110 transition">▶️</div>
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <p class="text-white text-sm font-semibold">Happy March - Kigali Celebration</p>
            </div>
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-green-800 mb-2">Happy March - Visit Rwanda</h3>
            <p class="text-sm text-green-700 mb-3">Celebrate Rwanda's vibrant culture and joy in this uplifting video showcasing Kigali's energy, community spirit, and the warmth of Rwandan hospitality. #VisitRwanda #Kigali</p>
            <p class="text-xs text-green-600">Duration: 7:30 min</p>
          </div>
        </div>
      </div>

      <!-- Video Categories -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-green-800">Explore Videos by Category</h2>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <p class="text-3xl mb-3">🦍</p>
            <h3 class="font-semibold text-green-800 mb-3">Wildlife & Safari</h3>
            <p class="text-green-700 text-sm mb-4">Gorilla treks, safari adventures, chimpanzee encounters, and wildlife footage from Rwanda's national parks.</p>
            <a href="#" class="text-yellow-600 font-semibold text-sm hover:text-yellow-700">View Collection →</a>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <p class="text-3xl mb-3">🏞️</p>
            <h3 class="font-semibold text-green-800 mb-3">Landscapes & Nature</h3>
            <p class="text-green-700 text-sm mb-4">Volcanic peaks, rainforests, lake scenery, hiking trails, and stunning natural landscapes throughout Rwanda.</p>
            <a href="#" class="text-yellow-600 font-semibold text-sm hover:text-yellow-700">View Collection →</a>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <p class="text-3xl mb-3">🎭</p>
            <h3 class="font-semibold text-green-800 mb-3">Culture & Travel Tips</h3>
            <p class="text-green-700 text-sm mb-4">Local cultural experiences, city tours, travel guides, and insider tips for visiting Rwanda.</p>
            <a href="#" class="text-yellow-600 font-semibold text-sm hover:text-yellow-700">View Collection →</a>
          </div>
        </div>
      </section>

      <!-- Elite Cinematic Journeys -->
      <section class="mb-16 bg-slate-950 text-white rounded-3xl p-10">
        <div class="mb-8 text-center">
          <p class="uppercase tracking-[0.35em] text-sm text-emerald-300 mb-3">Elite Videos</p>
          <h2 class="text-4xl font-bold">Cinematic Journeys Through Rwanda</h2>
          <p class="max-w-3xl mx-auto mt-4 text-slate-300">Enjoy premium travel films featuring Rwanda’s most iconic wildlife, cultural celebrations, and luxury escapes.</p>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-3xl bg-slate-900 p-6 border border-slate-800">
            <h3 class="text-2xl font-semibold mb-3 text-white">Luxury Lodge Tours</h3>
            <p class="text-slate-300 leading-7 mb-4">Take a behind-the-scenes look at Rwanda’s top luxury lodges and premium guest experiences.</p>
            <a href="#" class="text-emerald-300 font-semibold hover:text-emerald-200">Watch tour →</a>
          </div>
          <div class="rounded-3xl bg-slate-900 p-6 border border-slate-800">
            <h3 class="text-2xl font-semibold mb-3 text-white">Private Guide Stories</h3>
            <p class="text-slate-300 leading-7 mb-4">Meet local expert guides and explore the stories behind Rwanda’s most memorable journeys.</p>
            <a href="#" class="text-emerald-300 font-semibold hover:text-emerald-200">View story →</a>
          </div>
          <div class="rounded-3xl bg-slate-900 p-6 border border-slate-800">
            <h3 class="text-2xl font-semibold mb-3 text-white">Cultural Cinema</h3>
            <p class="text-slate-300 leading-7 mb-4">Witness vibrant ceremonies, performances, and authentic cultural celebrations in immersive video form.</p>
            <a href="#" class="text-emerald-300 font-semibold hover:text-emerald-200">Explore now →</a>
          </div>
        </div>
      </section>

      <!-- Premium AI Content -->
      <section class="mb-16 bg-slate-950 text-white rounded-3xl p-10">
        <div class="mb-8 text-center">
          <p class="uppercase tracking-[0.35em] text-sm text-emerald-300 mb-3">AI-Generated Premium Content</p>
          <h2 class="text-4xl font-bold">Cinematic Rwanda Journeys</h2>
          <p class="max-w-3xl mx-auto mt-4 text-slate-300">Immersive AI-enhanced travel films featuring Rwanda's most iconic wildlife, cultural celebrations, and luxury escapes with professional cinematography.</p>
        </div>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-3xl bg-slate-900 p-6 border border-slate-800 hover:border-emerald-500 transition">
            <div class="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-4 flex items-center justify-center">
              <span class="text-5xl">🎬</span>
            </div>
            <h3 class="text-2xl font-semibold mb-3 text-white">Luxury Lodge Tours</h3>
            <p class="text-slate-300 leading-7 mb-4">AI-enhanced cinematic tours of Rwanda's top luxury lodges and premium guest experiences.</p>
            <a href="#" class="text-emerald-300 font-semibold hover:text-emerald-200">Watch now →</a>
          </div>
          <div class="rounded-3xl bg-slate-900 p-6 border border-slate-800 hover:border-emerald-500 transition">
            <div class="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-4 flex items-center justify-center">
              <span class="text-5xl">🎬</span>
            </div>
            <h3 class="text-2xl font-semibold mb-3 text-white">AI Wildlife Chronicles</h3>
            <p class="text-slate-300 leading-7 mb-4">AI-enhanced ultra high-definition wildlife documentaries with dramatic narratives and expert guide stories.</p>
            <a href="#" class="text-emerald-300 font-semibold hover:text-emerald-200">Explore now →</a>
          </div>
          <div class="rounded-3xl bg-slate-900 p-6 border border-slate-800 hover:border-emerald-500 transition">
            <div class="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl mb-4 flex items-center justify-center">
              <span class="text-5xl">🎬</span>
            </div>
            <h3 class="text-2xl font-semibold mb-3 text-white">Cultural Cinema</h3>
            <p class="text-slate-300 leading-7 mb-4">AI-edited vibrant ceremonies, performances, and authentic cultural celebrations in immersive formats.</p>
            <a href="#" class="text-emerald-300 font-semibold hover:text-emerald-200">Discover →</a>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="mb-16 bg-green-50 rounded-3xl p-10 border border-green-100">\n
        <h2 class="text-3xl font-bold mb-8 text-green-800 text-center">What Our Travelers Say</h2>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="bg-white rounded-xl p-6 border border-green-100">
            <p class="text-green-700 leading-7 mb-4 italic">"The gorilla trekking experience was absolutely life-changing. Your guides made it unforgettable!"</p>
            <p class="font-semibold text-green-800">Sarah Johnson</p>
            <p class="text-sm text-green-600">USA</p>
          </div>
          <div class="bg-white rounded-xl p-6 border border-green-100">
            <p class="text-green-700 leading-7 mb-4 italic">"Rwanda's natural beauty exceeded all my expectations. Every moment was perfect."</p>
            <p class="font-semibold text-green-800">Pierre Dubois</p>
            <p class="text-sm text-green-600">France</p>
          </div>
          <div class="bg-white rounded-xl p-6 border border-green-100">
            <p class="text-green-700 leading-7 mb-4 italic">"Professional service, amazing wildlife, incredible people. Rwanda is a must-visit destination!"</p>
            <p class="font-semibold text-green-800">Emma Williams</p>
            <p class="text-sm text-green-600">UK</p>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-green-800 text-white rounded-3xl p-10 text-center">
        <h2 class="text-3xl font-bold mb-4">Ready to Create Your Own Adventure Video?</h2>
        <p class="text-lg mb-6 text-green-100">Book your Rwanda experience today and capture memories that will last a lifetime.</p>
        <router-link to="/contact" class="inline-block rounded-full bg-yellow-300 px-8 py-3 font-semibold text-green-900 hover:bg-yellow-400 transition">
          Start Your Adventure
        </router-link>
      </section>
    </div>
  </section>
</template>