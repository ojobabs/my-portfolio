<script setup lang="ts"></script>

<template>
  <div class="space-y-4">
    <h1 class="text-5xl">&lt;Hey /&gt;</h1>
    <h2 class="text-3xl">My name is <strong>Babatunde</strong>.</h2>
    <p class="text-lg">
     Please be free to call me ** Victor **
     <br/> I am cloud engineer with over three years experience in cloud engineering and software engineering. 
      </p>
    <p class="text-lg">
    I love books and football, I tend to listen more than talk.
    <br/> *Profile loading, please check back.....
    </p>
    <transition
      enter-active-class="animate__animated animate__bounceIn animate__faster animate__delay-2s"
      leave-active-class="animate__animated animate__bounceOut animate__faster animate__delay-2s"
      appear
    >
      <div class="flex space-x-4 justify-end">
        <img align="center" src="https://github-readme-stats.vercel.app/api?username=ojobabs&count_private=true&show_icons=true">
      </div>
    </transition>
  </div>
</template>
