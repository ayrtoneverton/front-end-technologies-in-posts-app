<template>
  <div>
    <SearchBar @change="onSearch($event)"/>
    <Loading v-if="!filteredPosts"/>
    <Card
      v-for="p in filteredPosts"
      :key="p._id"
      :title="p.title"
      :description="p.description"
      @view="$router.push(`/view/${p._id}`)"
      @edit="$router.push(`/post/${p._id}`)"
      @remove="onRemove(p._id)"
    />
    <h4 v-if="filteredPosts && !filteredPosts.length">Nothing added yet</h4>
  </div>
</template>

<script>
  import axios from 'axios';
  import Card from '../components/Card.vue';
  import Loading from '../components/Loading.vue';
  import SearchBar from '../components/SearchBar.vue';

  export default {
    name: 'Home',
    components: {
      Card,
      Loading,
      SearchBar
    },
    data: () => ({
      posts: null,
      search: '',
      filteredPosts: null
    }),
    methods: {
      onSearch(search = this.search) {
        this.search = search;
        this.filteredPosts = this.posts.filter(
          p => p.title.indexOf(search) >= 0 || p.description.indexOf(search) >= 0
        );
      },
      async onRemove(id) {
        this.filteredPosts = null;
        await axios.delete(process.env.VUE_APP_URL_API + id);

        this.$bvToast.toast('Post removed successfully!', {
          noCloseButton: true,
          variant: 'success'
        });

        axios.get(process.env.VUE_APP_URL_API).then(({ data }) => {
          this.posts = data;
          this.onSearch();
        });
      }
    },
    mounted() {
      axios.get(process.env.VUE_APP_URL_API).then(({ data }) => {
        this.posts = data;
        this.filteredPosts = data;
      });

      if (this.$route.query.m) {
        this.$bvToast.toast(`Post ${this.$route.query.m} successfully!`, {
          noCloseButton: true,
          variant: 'success'
        });
        this.$router.replace('/');
      }
    }
  };
</script>
