<script setup>
import { onMounted, ref } from 'vue';

const courses = ref([])


  const res = await fetch('https://684997f345f4c0f5ee72230e.mockapi.io/v1/courses')
  courses.value = await res.json()

</script>

<template>
  <div>
    <h2>Danh sach khoa hoc</h2>
    <ul>
      <li v-for="course in courses" :key="course.id">

        {{ course.name }}
      </li>
    </ul>
  </div>
</template>


