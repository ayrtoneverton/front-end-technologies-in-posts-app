<script>
	import Router from 'svelte-spa-router';
	import { Container, Alert, Button } from 'sveltestrap';
	import Home from './Home.svelte';
	import Post from './Post.svelte';
	import View from './View.svelte';

	let msg;
	const onMsg = (e) => {
		msg = e.detail;
		setTimeout(() => {
			msg = null;
		}, 4000)
	};

	const routes = {
    '/post/:id': Post,
    '/view/:id': View,
    '*': Home
	};
</script>

<Container id="main">
	{#if msg}
		<Alert id="msg" color={msg.color}>{msg.text}</Alert>
	{/if}
	<nav>
		<Button color="primary" href="#/">HOME</Button>
		<Button color="primary" href="#/post/new">NEW POST</Button>
	</nav>

	<Router {routes} on:routeEvent={onMsg} />
</Container>

<style>
	:global(#main) {
    margin-top: 3rem;
    margin-bottom: 2rem;
	}
	nav {
    margin-bottom: 2rem;
		border-bottom: solid .05rem rgba(0, 0, 0, .12);
	}
  nav > :global(*) {
    margin: 0 .5rem .5rem 0;
	}

	:global(#msg) {
		position: fixed;
		top: 1rem;
		right: 1rem;
		width: 22rem;
		max-width: 90%;
	}
</style>
