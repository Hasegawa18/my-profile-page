<script setup lang="ts">
</script>

<template>
  <div class="page-root">
    <header>
      <div class="header-inner">
        <div class="logo"><a href="/">MySite</a></div>
        <nav>
          <ul class="header-contents">
            <li><a href="/news">NEWS</a></li>
            <li><a href="/profile">プロフィール</a></li>
            <li><a href="/SNS">SNS</a></li>
            <li><a href="/faq">質問はこちらから！</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>

<style scoped>
header {
  background-color: rgb(107, 181, 234);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
}

.header-inner {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding: 0 40px;
  height: 64px;
}

.logo {
  color: white;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0.05em;
}

.logo a{
   color: rgba(255, 255, 255, 0.85);
   text-decoration: none;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 8px; 
}

.header-contents a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9rem;
  letter-spacing: 0.08em; 
  padding: 6px 14px;
  border-radius: 4px;
  transition: background-color 0.2s, color 0.2s; 
}

.header-contents a:hover {
  background-color: rgba(255, 255, 255, 0.15); 
  color: white;
}

.page-root{
  font-family: 'Noto serif JP';
}
</style>