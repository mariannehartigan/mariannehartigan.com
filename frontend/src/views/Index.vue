<template>
  <div class="home">
    <Moods />
  </div>
</template>

<script>
// @ is an alias to /src
import Moods from '@/components/Cats.vue'

export default {
  name: 'Index',
  components: {
    Moods
  }
}
</script>
