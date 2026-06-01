<script setup>
import { i18nState, availableLocales, t } from '../i18n';
</script>

<template>
  <nav class="bg-green-800 text-white flex flex-wrap gap-4 px-8 py-4 items-center justify-between shadow-lg">
    <div class="flex items-center gap-6">
      <img src="../Assets/Image/logo.png" alt="Logo" class="h-10 w-20" />
      <ul class="hidden md:flex gap-8 text-sm font-medium justify-end">
        <li>
          <router-link to="/" class="hover:text-yellow-300">{{ t('navbar.home') }}</router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:text-yellow-300">{{ t('navbar.about') }}</router-link>
        </li>
        <li>
          <router-link to="/services" class="hover:text-yellow-300">{{ t('navbar.services') }}</router-link>
        </li>
        <li class="relative group">
          <button type="button" class="hover:text-yellow-300 inline-flex items-center gap-1">{{ t('navbar.gallery') }} <span>▼</span></button>
          <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-12 mt-2 z-50 left-0">
            <li class="block px-4 py-2 hover:bg-green-200 text-green-900">
              <router-link to="/photos">{{ t('navbar.photos') }}</router-link>
            </li>
            <li class="block px-4 py-2 hover:bg-green-200 text-green-900">
              <router-link to="/videos">{{ t('navbar.videos') }}</router-link>
            </li>
          </ul>
        </li>
        <li class="relative group">
          <button type="button" class="hover:text-yellow-300 inline-flex items-center gap-1">{{ t('navbar.destinations') }} <span>▼</span></button>
          <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-12 mt-2 z-50 left-0">
            <li class="block px-4 py-2 hover:bg-green-200 text-green-900">
              <router-link to="/north">Northern Province</router-link>
            </li>
            <li class="block px-4 py-2 hover:bg-green-200 text-green-900">
              <router-link to="/south">Southern Province</router-link>
            </li>
            <li class="block px-4 py-2 hover:bg-green-200 text-green-900">
              <router-link to="/west">Western Province</router-link>
            </li>
            <li class="block px-4 py-2 hover:bg-green-200 text-green-900">
              <router-link to="/east">Eastern Province</router-link>
            </li>
            <li class="block px-4 py-2 hover:bg-green-200 text-green-900">
              <router-link to="/kigali">Kigali City</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/contact" class="hover:text-yellow-300">{{ t('navbar.contact') }}</router-link>
        </li>
      </ul>
    </div>

    <div class="flex items-center gap-4">
      <div class="hidden md:block text-sm text-slate-100">Language:</div>
      <select
        v-model="i18nState.locale"
        class="rounded-full bg-white text-green-900 px-4 py-2 text-sm font-semibold border border-slate-200 shadow-sm focus:outline-none"
      >
        <option v-for="locale in availableLocales" :key="locale.code" :value="locale.code">
          {{ locale.label }}
        </option>
      </select>
    </div>
  </nav>
</template>
