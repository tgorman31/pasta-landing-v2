<script>
	import { fade } from 'svelte/transition';
	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header>
	<div class="container">
		<a href="/" class="logo">PASTA</a>
		<nav class="hidden md:block">
			<ul>
				<li><a href="/#features">Features</a></li>
				<li><a href="/#pricing">Pricing</a></li>
				<li><a href="/#about">About</a></li>
				<li class="cta"><a href="/#signup">Get Started</a></li>
			</ul>
		</nav>
		<div class="md:hidden">
			<button
				on:click={toggleMenu}
				class="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
				aria-label="Menu"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
					/>
				</svg>
			</button>
			{#if isMenuOpen}
				<div
					class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
					transition:fade={{ duration: 100 }}
				>
					<a
						href="/#features"
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						on:click={toggleMenu}
					>
						Features
					</a>
					<a
						href="/#pricing"
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						on:click={toggleMenu}
					>
						Pricing
					</a>
					<a
						href="/#about"
						class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
						on:click={toggleMenu}
					>
						About
					</a>
					<a
						href="/#signup"
						class="block px-4 py-2 text-sm text-theme-1 font-semibold hover:bg-gray-100"
						on:click={toggleMenu}
					>
						Get Started
					</a>
				</div>
			{/if}
		</div>
	</div>
</header>

<style>
	header {
		background: white;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		color: var(--color-theme-1);
		font-weight: 800;
		font-size: 1.5rem;
		text-decoration: none;
		letter-spacing: -0.03em;
	}

	nav ul {
		display: flex;
		gap: 2rem;
		list-style: none;
		margin: 0;
		padding: 0;
		align-items: center;
	}

	nav a {
		color: var(--color-text);
		text-decoration: none;
		font-weight: 500;
		font-size: 0.95rem;
		transition: color 0.2s;
	}

	nav a:hover {
		color: var(--color-theme-1);
	}

	.cta a {
		background-color: var(--color-theme-1);
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 6px;
		transition: all 0.2s;
	}

	.cta a:hover {
		background-color: var(--color-theme-2);
		transform: translateY(-1px);
	}

	@media (max-width: 768px) {
		nav ul {
			gap: 1rem;
		}

		.cta a {
			padding: 0.4rem 0.8rem;
		}

		.hidden {
			display: none;
		}

		.md\\:hidden {
			display: block;
		}

		.md\\:block {
			display: none;
		}
	}

	@media (min-width: 769px) {
		.md\\:hidden {
			display: none;
		}

		.md\\:block {
			display: block;
		}
	}
</style>