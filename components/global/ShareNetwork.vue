<template>
  <div>
    <input type="text" v-model="url">
    <ShareNetwork
    
        v-for="network in networks"
        :key="network.name"
        
      >
      <i class="fab fah fa-lg fa-twitter"></i>
      <span>Share on Twitter</span>
    </ShareNetwork>
  </div>
</template>

<script>
export default {
  data () {
    return 
       
    {
      networks:[]
   
    }
  }
}
</script>