<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const submitForm = () => {
  if (formData.value.name && formData.value.email && formData.value.message) {
    submitted.value = true
    setTimeout(() => {
      formData.value = { name: '', email: '', phone: '', subject: '', message: '' }
      submitted.value = false
    }, 3000)
  }
}
</script>

<template>
  <section class="bg-white text-green-900 min-h-screen w-full mt-12 px-6 py-10 lg:px-20">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-16 text-center">
        <p class="uppercase tracking-[0.4em] text-sm text-green-700 mb-4">Get in Touch</p>
        <h1 class="text-5xl font-bold text-green-800 mb-6">Contact Our Travel Specialists</h1>
        <p class="max-w-3xl mx-auto text-lg leading-8 text-green-800">
          Have questions about Rwanda? Looking to book a tour? Our team is here to help you plan the perfect journey.
        </p>
      </div>

      <div class="grid gap-12 lg:grid-cols-3 mb-16">
        <!-- Contact Info -->
        <div class="lg:col-span-1 space-y-8">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <div class="text-3xl mb-3 text-yellow-600">📍</div>
            <h3 class="font-semibold text-green-800 mb-2">Location</h3>
            <p class="text-green-700">Kigali, Rwanda</p>
          </div>

          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <div class="text-3xl mb-3 text-yellow-600">📱</div>
            <h3 class="font-semibold text-green-800 mb-2">Phone</h3>
            <p class="text-green-700">+250 799 123 456</p>
            <p class="text-sm text-green-600 mt-2">Available Monday - Sunday, 7am - 9pm EAT</p>
          </div>

          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <div class="text-3xl mb-3 text-yellow-600">✉️</div>
            <h3 class="font-semibold text-green-800 mb-2">Email</h3>
            <p class="text-green-700">temberaurwanda@gmail.com</p>
            <p class="text-sm text-green-600 mt-2">Response time: Within 2 hours</p>
          </div>

          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <div class="text-3xl mb-3 text-yellow-600">🕐</div>
            <h3 class="font-semibold text-green-800 mb-2">Business Hours</h3>
            <p class="text-green-700 text-sm">
              <strong>Mon - Fri:</strong> 8am - 6pm<br>
              <strong>Sat - Sun:</strong> 9am - 5pm<br>
              <strong>Holidays:</strong> 24/7 Emergency Support
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2">
          <form @submit.prevent="submitForm" class="bg-green-50 rounded-3xl border border-green-100 p-8 lg:p-10">
            <div v-if="submitted" class="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
              ✓ Thank you for your message! We'll respond shortly.
            </div>

            <div class="grid gap-6 lg:grid-cols-2 mb-6">
              <div>
                <label class="block text-green-800 font-semibold mb-2">Full Name *</label>
                <input 
                  v-model="formData.name"
                  type="text" 
                  required
                  placeholder="Your name"
                  class="w-full px-4 py-3 border border-green-200 rounded-lg bg-white text-green-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                />
              </div>
              <div>
                <label class="block text-green-800 font-semibold mb-2">Email Address *</label>
                <input 
                  v-model="formData.email"
                  type="email" 
                  required
                  placeholder="your@email.com"
                  class="w-full px-4 py-3 border border-green-200 rounded-lg bg-white text-green-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                />
              </div>
            </div>

            <div class="grid gap-6 lg:grid-cols-2 mb-6">
              <div>
                <label class="block text-green-800 font-semibold mb-2">Phone Number</label>
                <input 
                  v-model="formData.phone"
                  type="tel" 
                  placeholder="+250 7xx xxx xxx"
                  class="w-full px-4 py-3 border border-green-200 rounded-lg bg-white text-green-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                />
              </div>
              <div>
                <label class="block text-green-800 font-semibold mb-2">Subject</label>
                <input 
                  v-model="formData.subject"
                  type="text" 
                  placeholder="Tour inquiry / General question"
                  class="w-full px-4 py-3 border border-green-200 rounded-lg bg-white text-green-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
                />
              </div>
            </div>

            <div class="mb-6">
              <label class="block text-green-800 font-semibold mb-2">Message *</label>
              <textarea 
                v-model="formData.message"
                required
                placeholder="Tell us about your travel plans, interests, or questions..."
                rows="5"
                class="w-full px-4 py-3 border border-green-200 rounded-lg bg-white text-green-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full bg-green-800 text-white font-semibold py-3 rounded-lg hover:bg-green-900 transition"
            >
              Send Message
            </button>
            <p class="text-sm text-green-600 mt-4 text-center">
              * Required fields. We respect your privacy and will only use your information to respond to your inquiry.
            </p>
          </form>
        </div>
      </div>

      <!-- FAQ Section -->
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-8 text-center text-green-800">Frequently Asked Questions</h2>
        <div class="grid gap-6 lg:grid-cols-2">
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3">How do I book a gorilla trekking permit?</h3>
            <p class="text-green-700 text-sm leading-6">Contact us with your preferred dates, and we'll secure your permit, arrange guides, and organize all logistics. Permits are $1,500 USD per person.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3">What's the best time to visit Rwanda?</h3>
            <p class="text-green-700 text-sm leading-6">Year-round, but short dry seasons (Jan-Feb, Aug-Sep) are ideal. Green season (Mar-May, Oct-Dec) offers lush landscapes and fewer tourists.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3">Do you offer custom itineraries?</h3>
            <p class="text-green-700 text-sm leading-6">Absolutely! Every tour is customizable. Tell us your interests, duration, and budget, and we'll design the perfect experience for you.</p>
          </div>
          <div class="rounded-2xl border border-green-100 bg-green-50 p-6">
            <h3 class="font-semibold text-green-800 mb-3">What's included in tour packages?</h3>
            <p class="text-green-700 text-sm leading-6">Guided activities, transport, permits, and accommodations (if selected). Meals, visas, and travel insurance are typically arranged separately.</p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>