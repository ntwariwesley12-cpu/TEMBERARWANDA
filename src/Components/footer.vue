<script setup>
import { t } from '../i18n';
</script>

<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-57">

        
        <div class="flex flex-wrap justify-between gap-8">
            <!--This is about of footer -->
            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.brand') }}</h3>
                <P class="text-sm text-green-200">{{ t('footer.tagline') }}</P>
            </div>
            <!--Quicklinks-->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footer.quickLinks') }}</h3>
            <ul class="space-y-2 text-sm">
                <li><RouterLink to="/" class="hover:text-yellow-300">{{ t('navbar.home') }}</RouterLink></li>
                <li><RouterLink to="/about" class="hover:text-yellow-300">{{ t('navbar.about') }}</RouterLink></li>
                <li><RouterLink to="/services" class="hover:text-yellow-300">{{ t('navbar.services') }}</RouterLink></li>
                <li><RouterLink to="/contact" class="hover:text-yellow-300">{{ t('navbar.contact') }}</RouterLink></li>
                <li><RouterLink to="/" class="hover:text-yellow-300">Locations</RouterLink></li>
            </ul>
         </div>
         <!--Destinations-->
         <div>
<h3 class="text-yellow-300  font-bold text-lg mb-3">{{ t('footer.destinations') }}</h3>
<ul class="space-y-2 text-sm ">
    <li><RouterLink to="/north" class="hover:text-yellow-300">Northern Province</RouterLink></li>
    <li><RouterLink to="/south" class="hover:text-yellow-300">Southern Province</RouterLink></li>
    <li><RouterLink to="/west" class="hover:text-yellow-300">Western Province</RouterLink></li>
    <li><RouterLink to="/east" class="hover:text-yellow-300">Eastern Province</RouterLink></li>
    <li><RouterLink to="/kigali" class="hover:text-yellow-300">Kigali City</RouterLink></li>
</ul>

         </div>

         <!--Contact info-->
         <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact Info</h3>
            <ul class="space-y-2 text-green-300">
                <li>ntwariwesley12@gmail.com</li>
                <li>+250 787390669</li>
                <li>kagugu kigali,Rwanda</li>

            </ul>
         

        </div>
        </div>
         <!-- place for Copyright-->
          <div class="border-t border-green-600 mt-8 pt-4 text-sm text-green">
            <p class="text-center">{{ t('footer.copyright') }}</p>

          </div>
    </footer>
</template>