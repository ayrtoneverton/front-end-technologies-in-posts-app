<script>
  import axios from 'axios';
	import { push } from 'svelte-spa-router';
  import { createEventDispatcher } from 'svelte';
  import Card from '../components/Card.svelte';
  import Loading from '../components/Loading.svelte';
  import SearchBar from '../components/SearchBar.svelte';
  export let params;

  const dispatch = createEventDispatcher();
  let posts;
  let search = '';
  $: filteredPosts = posts && posts.filter(
    p => p.title.indexOf(search) >= 0 || p.description.indexOf(search) >= 0
  );

  const loadPosts = () => {
    axios.get(process.env.API_URL).then(({ data }) => {
      posts = data;
    });
  };
  loadPosts();

  const onRemove = async (id) => {
    posts = null;
    await axios.delete(process.env.API_URL + id);
    dispatch('routeEvent', { text: 'Post removed successfully!' });
    loadPosts();
  };
</script>

<SearchBar bind:search />
{#if posts}
  {#each filteredPosts as post}
    <Card
      title={post.title}
      description={post.description}
      on:view={() => push('/view/' + post._id)}
      on:edit={() => push('/post/' + post._id)}
      on:remove={() => onRemove(post._id)}
    />
  {:else}
    <h4>Nothing added yet</h4>
  {/each}
{:else}
  <Loading />
{/if}
