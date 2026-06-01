<template>
  <section class="bg-white text-green-900 min-h-screen w-full mt-12 px-6 py-10 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <div class="mb-10 text-center">
        <p class="uppercase tracking-[0.4em] text-sm text-green-700 mb-4">Our Story</p>
        <h1 class="text-5xl font-bold text-green-800 mb-6">About Rwanda Tourism & Services</h1>
        <p class="max-w-3xl mx-auto text-lg leading-8 text-green-800">
          We connect travelers with Rwanda’s richest nature, culture, and hospitality. Our team blends local knowledge, sustainable travel, and bespoke planning to create journeys that feel truly unforgettable.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-3 mb-12">
        <router-link to="/services" class="block rounded-xl border border-green-200 bg-green-50 p-6 hover:bg-green-100 transition">
          <h2 class="text-xl font-semibold mb-2">Tailor-Made Tours</h2>
          <p>Custom itineraries for gorilla trekking, safari adventures, and city experiences that fit your travel pace.</p>
        </router-link>
        <router-link to="/contact" class="block rounded-xl border border-green-200 bg-green-50 p-6 hover:bg-green-100 transition">
          <h2 class="text-xl font-semibold mb-2">Local Travel Experts</h2>
          <p>Get fast guidance from local guides, accommodation specialists, and transport coordinators for smooth travel.</p>
        </router-link>
        <router-link to="/kigali" class="block rounded-xl border border-green-200 bg-green-50 p-6 hover:bg-green-100 transition">
          <h2 class="text-xl font-semibold mb-2">Explore Rwanda</h2>
          <p>Discover destinations from Kigali’s vibrant streets to the national parks, scenic hills, and cultural villages.</p>
        </router-link>
      </div>

      <section class="mb-12">
        <h2 class="text-3xl font-semibold mb-4">What Makes Us Different</h2>
        <p class="text-lg leading-8 mb-4">
          Our service combines authentic local partnerships with responsible travel choices. We create experiences that benefit communities, protect wildlife, and leave a positive footprint.
        </p>
        <div class="grid gap-6 lg:grid-cols-3">
          <div class="rounded-3xl border border-green-200 bg-green-50 p-6">
            <h3 class="font-semibold mb-2">Trusted Guides</h3>
            <p>All tours are led by experienced local guides who know Rwanda’s parks, culture, and conservation stories.</p>
          </div>
          <div class="rounded-3xl border border-green-200 bg-green-50 p-6">
            <h3 class="font-semibold mb-2">Responsible Travel</h3>
            <p>We support ethical wildlife experiences, eco-friendly stays, and community-owned tourism initiatives.</p>
          </div>
          <div class="rounded-3xl border border-green-200 bg-green-50 p-6">
            <h3 class="font-semibold mb-2">Flexible Support</h3>
            <p>From visa help to airport transfers and last-minute adjustments, we handle logistics so you can relax.</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-semibold mb-4">Our Mission</h2>
        <p class="text-lg leading-8 mb-4">
          To make every Rwanda visit meaningful by creating immersive travel experiences, protecting natural heritage, and empowering local communities through tourism.
        </p>
        <div class="grid gap-6 lg:grid-cols-2 text-lg leading-8">
          <div class="rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 class="font-semibold mb-2">Community First</h3>
            <p>We work with village hosts, artisan projects, and cultural centers to ensure tourism revenue supports local life.</p>
          </div>
          <div class="rounded-xl border border-green-200 bg-green-50 p-6">
            <h3 class="font-semibold mb-2">Nature First</h3>
            <p>Our recommended experiences prioritize conservation areas and habitats, helping preserve Rwanda’s unique wildlife.</p>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-3xl font-semibold mb-4">Services at a Glance</h2>
        <ul class="list-disc list-inside space-y-3 text-lg leading-8">
          <li><strong>Custom itineraries</strong> for families, couples, photographers, and solo adventurers.</li>
          <li><strong>Gorilla and chimpanzee treks</strong> in Volcanoes and Nyungwe with full permit support.</li>
          <li><strong>Wildlife safaris</strong> in Akagera, plus boat tours, birding, and evening game drives.</li>
          <li><strong>Cultural experiences</strong> including Kigali city tours, local markets, and community visits.</li>
          <li><strong>Logistics & transfers</strong> from airport pickup to lodge bookings and private transport.</li>
          <li><strong>Group travel</strong> planning, conference support, and special event coordination.</li>
        </ul>
      </section>

      <section class="bg-green-800 text-white rounded-3xl p-8">
        <h2 class="text-3xl font-semibold mb-4">Ready to Design Your Perfect Visit?</h2>
        <p class="text-lg mb-6">
          Our Rwanda tourism specialists are ready to answer questions, adjust plans, and build an itinerary that matches your interests and timing.
        </p>
        <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
          <router-link to="/services" class="inline-block rounded-full bg-yellow-300 px-6 py-3 font-semibold text-green-900 hover:bg-yellow-400 transition">Explore Services</router-link>
          <router-link to="/contact" class="inline-block rounded-full border border-white px-6 py-3 font-semibold hover:bg-white hover:text-green-900 transition">Contact Us</router-link>
        </div>
      </section>
    </div>
  </section>
</template>