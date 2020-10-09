<script>
  import axios from 'axios';
  import Loading from '../components/Loading.svelte';
  export let params;

  let post;

  axios.get(process.env.API_URL + params.id).then(({ data }) => {
    post = data;
  });
</script>

{#if post}
  <h1>{post.title}</h1>
  <div class="ql-snow">
    <div class="ql-editor">
      {@html post.body}
    </div>
  </div>
{:else}
  <Loading />
{/if}

<style>
  .ql-snow {
    margin: 1.5rem -15px;
  }
</style>
