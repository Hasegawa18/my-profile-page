<script setup lang="ts">
</script>

<template>
  <div class="page-root">
  <header>
    <ul class="header-contents">
      <li><a href="/news">NEWS</a></li>
      <li><a href="/profile">プロフィール</a></li>
      <li><a href="/SNS">SNS</a></li>
      <li><a href="/faq">質問はこちらから！</a></li>
    </ul>
  </header>
   <main>
    <slot />
   </main>
   <footer>

   </footer>
  </div>
</template>

<style scoped>
header{
  background-color: rgb(4, 116, 78);
}

li{
  list-style:none;
  margin-left: 80px;
}

ul{
  padding-left: 0;
}

.header-contents{
  display: flex;
  margin-left: 30px;
}

.header-contents a{
  text-decoration: none;
  color:aliceblue;
}
</style>