<template>
  <div class="import-css"></div>
</template>

<script>
const css = require('css');
const converted = require('./css.js')
const convertedCss = require('./css.css')

export default {
  name: 'ImportCss',
  data() {
    return {

    }
  },
  components: {

  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
  created() {

  },
  mounted() {
    console.log(convertedCss);
    // console.log(css.parse('body { font-size: 12px; }'))
    // console.log(converted);
    // try {
    //   // console.log()
    //   css.stringify(converted, { sourcemap: true })
    // } catch (error) {
    //   console.log('error=', error);
    // }
  }
}
</script>

<style scoped>
</style>