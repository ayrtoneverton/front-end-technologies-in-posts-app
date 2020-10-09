<script>
  import { createEventDispatcher } from 'svelte';
  export let title;
  export let description;

  const dispatch = createEventDispatcher();
  let confirm = false;
</script>

<div class="card">
  <h4 on:click={() => dispatch('view')}>{title}</h4>
  <p>{description}</p>

  <div class="actions">
    {#if confirm}
      <span>Do you really want to remove?</span>
      <i class="material-icons-outlined" on:click={() => dispatch('remove')}>done</i>
      <i class="material-icons-outlined" on:click={() => confirm = false}>close</i>
    {:else}
      <i class="material-icons-outlined" on:click={() => dispatch('view')}>visibility</i>
      <i class="material-icons-outlined" on:click={() => dispatch('edit')}>edit</i>
      <i class="material-icons-outlined" on:click={() => confirm = true}>delete</i>
    {/if}
  </div>
</div>

<style scoped>
  .card {
    position: relative;
    border: solid .02rem #DDD;
    border-radius: 4px;
    padding: .8rem;
    margin-bottom: 1rem;
  }
  h4 {
    width: fit-content;
    cursor: pointer;
  }
  h4:hover {
    opacity: .7;
  }
  p {
    margin: 0;
  }
  .actions {
    position: absolute;
    top: 0;
    right: 0;
    padding: .8rem;
    display: none;
    background: #FFF;
    font-size: 1.1rem;
  }
  .card:hover > .actions {
    display: block;
  }
  .actions > :not(span) {
    display: inline-flex;
    vertical-align: top;
    margin-left: .5rem;
    cursor: pointer;
  }
  .actions > :not(span):hover {
    opacity: .7;
  }
</style>
