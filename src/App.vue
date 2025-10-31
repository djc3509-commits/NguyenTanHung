<script setup>
import { Transition } from 'vue';

</script>
<template>
    <div>
        <p> Minh Phuong - Nguyen Tan Hung </p>
        <RouterLink class="btn" to="/">Home</RouterLink>
        <RouterLink class="btn" to="/about">About</RouterLink>
        <RouterLink class="btn" to="/table">Table</RouterLink>
        <Transition name="fade">
            <RouterView />
        </Transition>
    </div>
</template>

<style scoped>
button {
    margin-right: 2px;
}

a {
    text-decoration: none;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.fade-enter-active,
.fade-leave-active {
    transition: .5s ease;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    padding: 8px 12px;
    background: rgb(147, 91, 91);
    border: 2px solid #ccc;
    border-radius: 4px;
    text-decoration: none;
    color: #301f1f;
    margin-right: 5px;
    cursor: pointer;
}

</style>
