<template>

<a :href="link" target="_blank"><button  class="button" >{{text}}</button> </a>

</template>

<script>


export default {
props:{

text: String,
link: String,

},
};




</script>

<style scoped>

.button {

background-color: hsl(218, 17%, 35%);
border-color: #e5e7eb;
border-radius: 8px;
color: #ffffff;
font-weight: 600;
gap: normal;
line-height: 24px;
padding: 12px 20px;

}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>

