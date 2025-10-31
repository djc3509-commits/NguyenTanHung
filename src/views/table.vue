<script setup>
</script>

<template>
    <div class="wrapper">
        <p>Table view</p>

        <RouterLink class="btn" to="/table/chill">Chill Table</RouterLink>
        <RouterLink class="btn" to="/table/chill2">Sibling Table</RouterLink>

        <Transition name="fade">
            <RouterView />
        </Transition>
    </div>
</template>

<style scoped>
.wrapper {
    margin-top: 20px;
    padding: 20px;
    background: rgb(211, 178, 31);
    border: 1px solid #ccc;
    border-radius: 6px;
}

/* Transition */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

.fade-enter-active,
.fade-leave-active {
    transition: 0.5s ease;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: translateY(0);
}

/* RouterLink styled as button */
.btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    padding: 8px 12px;
    background: rgb(213, 51, 51);
    border: 2px solid #ccc;
    border-radius: 4px;
    text-decoration: none;
    color: #fff;
    margin-right: 5px;
    cursor: pointer;
}
</style>
