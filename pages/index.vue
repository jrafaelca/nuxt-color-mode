<template>
  <div class="px-6 py-8 rounded shadow bg-white dark:bg-gray-900 mx-auto w-1/5">
    <h1 class="text-center text-2xl text-gray-700 dark:text-white mb-6">
      Color mode: {{ $colorMode.value }}
    </h1>

    <select v-model="$colorMode.preference"
            class="w-full px-1.5 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  </div>
</template>