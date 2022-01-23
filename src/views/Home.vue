<script setup lang="ts"></script>

<template>
  <div class="space-y-4">
    <h1 class="text-5xl">&lt;Hello /&gt;</h1>
    <h2 class="text-3xl">My name is <strong>Josh</strong>.</h2>
    <p class="text-lg">
      I'm a full stack web and software developer and eager learner. JS and TS
      are my main languages for most things I work with.
    </p>
    <p class="text-lg">
      Currently NodeJS has been my prefered choice of environment, where I do
      web applications using Vue, backend solutions using MongoDB and Firebase
      and even pet projects like Discord bots.
    </p>
    <p class="text-lg">
      Outside of programming, I like to read, game, and have an active social
      life.
    </p>
    <transition
      enter-active-class="animate__animated animate__bounceIn animate__faster animate__delay-2s"
      leave-active-class="animate__animated animate__bounceOut animate__faster animate__delay-2s"
      appear
    >
      <div class="flex space-x-4 justify-end">
        <img
          src="../assets/profile.jpg"
          alt=""
          class="w-1/2 lg:w-40 rounded-full"
        />
        <img
          src="../assets/klaus.jpg"
          alt=""
          class="w-1/2 lg:w-40 rounded-full"
        />
      </div>
    </transition>
  </div>
</template>
