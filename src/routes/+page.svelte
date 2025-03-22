<script>
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';

	const pricingTabs = [
		{
			title: 'Portfolio',
			price: '$25',
			period: 'per seat',
			features: [
				'Basic project data storage',
				'Portfolio-level oversight',
				'Project tracking dashboard',
				'Basic reporting',
				'Email support'
			]
		},
		{
			title: 'Basic',
			price: '$25',
			period: 'per project/month',
			features: [
				'Perfect for projects up to $500K',
				'Project timeline management',
				'Basic financial tracking',
				'Standard compliance templates',
				'Up to 10 team members',
				'Email support',
				'Basic analytics'
			]
		},
		{
			title: 'Standard',
			price: '$75',
			period: 'per project/month',
			features: [
				'Perfect for projects up to $5M',
				'Advanced project tracking',
				'Comprehensive financial management',
				'Custom compliance frameworks',
				'Up to 25 team members',
				'Priority support',
				'Advanced analytics',
				'Automated workflows',
				'API access'
			]
		},
		{
			title: 'Advanced',
			price: '$250',
			period: 'per project/month',
			features: [
				'Perfect for projects over $5M',
				'Enterprise-grade project management',
				'Advanced financial forecasting',
				'Custom compliance frameworks',
				'Unlimited team members',
				'24/7 dedicated support',
				'Advanced analytics and reporting',
				'Custom automated workflows',
				'Full API access',
				'Custom integrations'
			]
		},
		{
			title: 'Enterprise',
			price: 'Contact Sales',
			period: 'custom pricing',
			features: [
				'Custom solutions for large projects',
				'Specialized requirements support',
				'Dedicated account manager',
				'Custom feature development',
				'Unlimited everything',
				'Priority support',
				'Custom integrations',
				'On-premise deployment options',
				'Advanced security features',
				'Custom training and onboarding'
			]
		}
	];

	let activeTab = 0;
</script>

<svelte:head>
	<title>PASTA - Faster, Smarter Government Construction</title>
	<meta name="description" content="Specialized project management platform for government property and construction projects" />
</svelte:head>

<section class="landing">
	<div class="hero">
		<h1>PASTA</h1>
		<p class="tagline">Faster, Smarter Government Construction</p>
		<p class="subtitle">Streamline your government property and construction projects with our specialized project management platform</p>
		<div class="cta-buttons">
			<button class="btn-primary">Request Demo</button>
			<button class="btn-outline">Learn More</button>
		</div>
	</div>

	<div class="features-section">
		<h2>Key Features</h2>
		<div class="features-grid">
			<div class="feature-card">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
					</svg>
				</div>
				<h3>Project Tracking</h3>
				<p>Manage timelines, milestones, and tasks with clarity and precision</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75c-1.036 0-1.875-.84-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75C3.84 21.75 3 20.91 3 19.875v-6.75z" />
					</svg>
				</div>
				<h3>Financial Management</h3>
				<p>Real-time budget tracking, forecasting, and expenditure control</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
					</svg>
				</div>
				<h3>Compliance & Security</h3>
				<p>Built-in modules to ensure regulatory compliance and robust audit trails</p>
			</div>

			<div class="feature-card">
				<div class="feature-icon">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
						<path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
					</svg>
				</div>
				<h3>Contractor Collaboration</h3>
				<p>Secure portals with role-based access for external contractors</p>
			</div>
		</div>
	</div>

	<div class="pricing-section">
		<h2>Simple, Transparent Pricing</h2>
		<div class="pricing-grid">
			{#each pricingTabs as tab}
				<div class="pricing-card">
					<h3>{tab.title}</h3>
					<div class="price">
						<span class="amount">{tab.price}</span>
						<span class="period">{tab.period}</span>
					</div>
					<ul class="features-list">
						{#each tab.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>
					<button class="btn-primary w-full">Get Started</button>
				</div>
			{/each}
		</div>
	</div>

	<div class="signup-section">
		<div class="signup-card">
			<h2>Get Started with PASTA</h2>
			<form method="POST" use:enhance>
				<div class="form-group">
					<label for="name">Full Name</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						placeholder="Enter your full name"
						class="input"
					/>
				</div>

				<div class="form-group">
					<label for="email">Work Email</label>
					<input
						type="email"
						id="email"
						name="email"
						required
						placeholder="your.name@govt.nz"
						class="input"
					/>
				</div>

				<div class="form-group">
					<label for="organization">Organization</label>
					<input
						type="text"
						id="organization"
						name="organization"
						required
						placeholder="Your government department"
						class="input"
					/>
				</div>

				<div class="form-group">
					<label for="challenges">What challenges do you face in property project management?</label>
					<textarea
						id="challenges"
						name="challenges"
						rows="4"
						required
						placeholder="Tell us about your current challenges..."
						class="input"
					></textarea>
				</div>

				<button type="submit" class="btn-primary w-full">Request Access</button>
			</form>
		</div>
	</div>
</section>

<style>
	.landing {
		width: 100%;
	}

	.hero {
		background: linear-gradient(160deg, var(--color-bg-0) 0%, var(--color-bg-1) 100%);
		padding: 6rem 2rem;
		text-align: center;
	}

	h1 {
		font-size: 4rem;
		color: var(--color-theme-1);
		margin: 0;
		font-weight: 800;
		letter-spacing: -0.03em;
	}

	.tagline {
		font-size: 1.75rem;
		color: var(--color-theme-2);
		margin: 1rem 0;
		font-weight: 600;
	}

	.subtitle {
		font-size: 1.25rem;
		color: var(--color-text-light);
		max-width: 600px;
		margin: 0 auto 2rem;
	}

	.cta-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	.btn-primary {
		padding: 0.75rem 1.5rem;
		background-color: var(--color-theme-1);
		color: white;
		border: none;
		border-radius: 0.5rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
	}

	.btn-primary:hover {
		background-color: var(--color-theme-2);
		transform: translateY(-1px);
	}

	.btn-outline {
		padding: 0.75rem 1.5rem;
		background-color: transparent;
		color: var(--color-theme-1);
		border: 2px solid var(--color-theme-1);
		border-radius: 0.5rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
	}

	.btn-outline:hover {
		background-color: var(--color-theme-1);
		color: white;
		transform: translateY(-1px);
	}

	.features-section,
	.pricing-section,
	.signup-section {
		padding: 4rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	h2 {
		text-align: center;
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: var(--color-text);
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.feature-card {
		background: white;
		padding: 2rem;
		border-radius: 1rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		text-align: center;
	}

	.feature-icon {
		width: 3rem;
		height: 3rem;
		color: var(--color-theme-1);
		margin: 0 auto 1.5rem;
	}

	.feature-card h3 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
		color: var(--color-text);
	}

	.feature-card p {
		color: var(--color-text-light);
		margin: 0;
	}

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1rem;
		padding: 0 1rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.pricing-card {
		background: white;
		padding: 2rem 1.5rem;
		border-radius: 0.75rem;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
		text-align: center;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.price {
		margin: 1rem 0;
	}

	.amount {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--color-theme-1);
	}

	.period {
		color: var(--color-text-light);
		margin-left: 0.5rem;
	}

	.features-list {
		list-style: none;
		padding: 0;
		margin: 1.5rem 0;
		text-align: left;
		flex-grow: 1;
	}

	.features-list li {
		margin-bottom: 0.5rem;
		padding-left: 1.25rem;
		position: relative;
		font-size: 0.95rem;
		color: var(--color-text);
	}

	.signup-card {
		background: white;
		padding: 2.5rem;
		border-radius: 1rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		max-width: 500px;
		margin: 0 auto;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		color: var(--color-text);
		font-weight: 500;
	}

	.input {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid var(--color-bg-2);
		border-radius: 0.5rem;
		font-size: 1rem;
		transition: all 0.2s;
		background-color: var(--color-bg-0);
	}

	.input:focus {
		border-color: var(--color-theme-1);
		outline: none;
		box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1);
	}

	textarea.input {
		resize: vertical;
		min-height: 100px;
	}

	.w-full {
		width: 100%;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 4rem 1rem;
		}

		h1 {
			font-size: 3rem;
		}

		.tagline {
			font-size: 1.5rem;
		}

		.cta-buttons {
			flex-direction: column;
		}

		.features-section,
		.pricing-section,
		.signup-section {
			padding: 2rem 1rem;
		}

		.pricing-grid {
			grid-template-columns: 1fr;
		}
	}
</style>