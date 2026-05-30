<script></script>

<template>
  <div>
  <header>
    <ul class="header-contents">
      <li><a href="#">NEWS</a></li>
      <li><a href="#">プロフィール</a></li>
      <li><a href="#">SNS</a></li>
      <li><a href="#">質問はこちらから！</a></li>
    </ul>
  </header>
   <main>
    <slot />
   </main>
  </div>
</template>

<style scoped>
header{
  background-color: aquamarine;
}

li{
  list-style:none;
}

ul{
  padding-left: 0;
}

.header-contents{
  display: flex;
}
</style>