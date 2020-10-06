<template>
  <div>
    <Loading v-if="!post.title"/>
    <h1>{{post.title}}</h1>
    <div class="ql-snow">
      <div class="ql-editor" v-html="post.body"/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Loading from '../components/Loading.vue';

  export default {
    name: 'ViewPost',
    components: {
      Loading
    },
    data: () => ({
      post: {}
    }),
    mounted() {
      axios.get(process.env.VUE_APP_URL_API + this.$route.params.id)
        .then(({ data }) => {
          this.post = data;
        });
    }
  };
</script>

<style scoped>
  .ql-snow {
    margin: 1.5rem -15px;
  }
</style>
