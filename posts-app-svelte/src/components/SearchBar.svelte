<script>
  import { Input } from 'sveltestrap';
  export let search;
</script>

<div>
  <Input bind:value={search} type="search" placeholder="Search" readonly={false} />
  <i class="material-icons-outlined">search</i>
</div>

<style>
  div > :global(input) {
    max-width: 20rem;
    margin-bottom: 2rem;
    padding-right: 2.2rem;
    display: inline-block;
  }
  i {
    font-size: 1.5rem;
    margin-left: -2.3rem;
    vertical-align: text-top;
  }
</style>
