<template>
  <!-- 每次切换路由的时候都会重新渲染一遍，影响性能，
  我们可以第一次切换之后，再次切换时，利用keep-alive进行缓存 -->
    <keep-alive>
     <router-view />
    
    </keep-alive>
   
 
</template>

<style lang="scss">

</style>
