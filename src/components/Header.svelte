<style type="text/sass">
	header {
		padding: 0 15px;
		height: 45px;
		background-color: #00CC44;
		border-bottom: 1px solid #E5E5E5;
	}

  .title {
			color: #FFFFFF;
			line-height: 45px;
			font-family: 'Helvetica';
		}
		.actions {
			float: right;
			position: relative;
			width: 35px;
			height: 35px;
			margin-top: 5px;
			cursor: pointer;
		}
		.icon {
			color: #FFF;
			font-size: 30px;
		}
		.count {
			position: absolute;
			color: #FFF;
			font-size: 13px;
		}
	
	.dropdown {
		position: absolute;
		right: 0;
		background-color: #ffffff;
		box-shadow: 0px 3px 5px #00000035;
		ul {
			margin: 0;
			padding: 0;
			width: 200px;

			li {
				list-style: none;
				padding: 7.5px 10px;
				font-size: 14px;
			}
		}
	}
	
	.hide {
		display: none;
	}
</style>
<script>
	export let name = 'Quikr Homes';
	export let notifications = [];
	export let collapsed = true;
	
	function show() {
		collapsed = !collapsed;
	}
</script>
<header>
	<span class="title">{name}</span>
	<slot />
	<div class="actions" on:click={show} >
		<span class="icon">&hearts;</span>
		<span class="count">{notifications && notifications.length}</span>
		
		<div class="dropdown" class:hide={collapsed}>
			<ul>
				{#each notifications as notification }
					<li>{notification.message}</li>
				{/each}
			</ul>
		</div>
	</div>
</header>