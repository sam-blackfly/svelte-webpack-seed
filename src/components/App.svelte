<script>
	import Header from './Header.svelte';
	
	let name = 'Svelte is Awesome';
	let notifications = [];
	
	function increment() {
		notifications = [...notifications, {
			id: Math.round(Math.random() * 10),
			type: 'INBOX',
			message: 'Some random message',
		}];
  }
</script>

<style>
  .container {
    padding: 15px;
  }
</style>

<Header name={name} bind:notifications={notifications}></Header>
<div class="container">
  <h1>{name}!</h1>
  <button on:click={increment}>Increment</button>
</div>
