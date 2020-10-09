<script>
  import { onMount, createEventDispatcher } from 'svelte';
  import { pop } from 'svelte-spa-router';
  import { Button } from 'sveltestrap';
  import axios from 'axios';
  import Loading from '../components/Loading.svelte';
  import TextEditor from '../components/TextEditor.svelte';
  export let params;

  const dispatch = createEventDispatcher();
  $: isUpdate = params.id !== 'new';
  let post;

  onMount(() => {
    if (isUpdate) {
      axios.get(process.env.API_URL + params.id).then(({ data }) => {
        post = data;
        post._id = undefined;
      });
    } else {
      post = {};
    }
  });

  const save = async () => {
    if (!(post.title && post.description && post.body)) {
      return dispatch('routeEvent', { text: 'All fields are required!', color: 'danger' });
    }
    if (isUpdate) {
      await axios.put(process.env.API_URL + params.id, post);
    } else {
      await axios.post(process.env.API_URL, post);
    }
    dispatch('routeEvent', { text: `Post ${isUpdate ? 'updated' : 'created'} successfully!` });
    pop();
  };
</script>

<h1>{isUpdate ? 'Update' : 'Create'} Post</h1>

{#if post}
  <input bind:value={post.title} placeholder="Title" class="form-control" />
  <textarea bind:value={post.description} placeholder="Description" class="form-control" rows="3" />
  <TextEditor bind:value={post.body} placeholder="Post body" />

  <div id="actions">
    <Button color="primary" on:click={save}>SAVE</Button>
    <Button on:click={pop}>CANCEL</Button>
  </div>
{:else}
  <Loading />
{/if}

<style>
  input, textarea, #actions {
    margin: .8rem 0;
    resize: none;
  }
  #actions > :global(*) {
    margin-right: .5rem;
  }
</style>
