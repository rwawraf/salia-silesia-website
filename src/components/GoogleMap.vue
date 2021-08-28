<template>
    <div id="map-container-google-2">
        <iframe src="https://maps.google.com/maps?q=Salia+Silesia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe>
    </div>
</template>

<script>

export default {
  name: "googleMap",
  components: {
  },
};
</script>

 <style lang="scss" scoped>
    iframe {
        width: 100%;
        height: 250px;
        border: 0;
    }
 </style>
