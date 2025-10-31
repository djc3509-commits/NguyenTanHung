<script setup>
const handleLogin = () => {
  const success = true

  if (success) {
    $toast.success('Đăng nhập thành công!')
  } else {
    $toast.error('Sai tài khoản hoặc mật khẩu!')
  }
}
</script>

<template>
  <button @click="handleLogin">Đăng nhập</button>
</template>
