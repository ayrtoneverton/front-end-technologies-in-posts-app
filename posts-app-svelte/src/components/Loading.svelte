<script>
  import { Spinner } from 'sveltestrap';
</script>

<Spinner class="cp-loading" color="primary" />

<style>
  :global(.cp-loading) {
    margin: 6rem auto 0 auto;
    display: block !important;
    width: 3rem !important;
    height: 3rem !important;
  }
</style>
