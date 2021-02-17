<template>
<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
<!--- load iframe Youtube player inside this div -->
<iframe 
style="border: 1; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
src="https://www.youtube-nocookie.com/embed/HUBNt18RFbo?start=65&end=900" 
allowfullscreen scrolling="no" 
allow="encrypted-media; accelerometer; 
gyroscope; picture-in-picture">
</iframe>

</div>
</template>

<script>
export default {
props:{
VideoId: string
}


</script>