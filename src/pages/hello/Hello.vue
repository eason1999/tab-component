<template>
  <div class="hello">
    <h1>Welcome to vue-demo System</h1>
    <p v-for="(item, key) in list" :key="key"></p>
  </div>
</template>

<script>
import { getHello } from '@/service/index'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'hello',
  computed: {
    ...mapState({
      name: ({ hello }) => hello.name,
    }),
  },
  created() {
    getHello().then((json) => {
      this.list = json.data
    })
    this.setHelloName('XXX')
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    ...mapActions(['setHelloName']),
  },
}
</script>

<style scoped>
.hello {
  font-size: 24px;
}
</style>
