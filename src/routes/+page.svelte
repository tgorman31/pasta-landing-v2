<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import { dev } from '$app/environment';

	const features = [
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
			</svg>`,
			title: 'Project Tracking',
			description: 'Manage timelines, milestones, and tasks with clear dashboards and visualizations'
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75c-1.036 0-1.875-.84-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75C3.84 21.75 3 20.91 3 19.875v-6.75z" />
			</svg>`,
			title: 'Financial Management',
			description: 'Real-time budget tracking, expenditure forecasting, and cost control'
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
			</svg>`,
			title: 'Compliance & Security',
			description: 'Built-in audit trails, regulatory compliance modules, and role-based access controls'
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
			</svg>`,
			title: 'Contractor Collaboration',
			description: 'Secure portals for external contractors with controlled data access'
		},
		{
			icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
				<path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
			</svg>`,
			title: 'Workflow Automation',
			description: 'Automate project approvals, funding requests, and contract changes, integrated with Microsoft 365'
		}
	];

	const pricingTabs = [
		{
			name: 'Monthly',
			plans: [
				{
					name: 'Portfolio',
					price: '$25',
					annualPrice: '$20',
					period: 'per seat/month',
					purpose: 'Designed for portfolio management',
					features: [
						'Basic storage and project data aggregation (bundled Pico functionality)',
						'High-level portfolio dashboard for multi-project oversight',
						'Role-based access tailored for management-level reviews',
						'Compliance and security features'
					]
				},
				{
					name: 'Essential',
					price: '$25',
					annualPrice: '$20',
					period: 'per project/month',
					purpose: 'Ideal for smaller projects (up to $500K)',
					features: [
						'Essential project tracking and task management',
						'Basic financial tracking and budget oversight',
						'Core compliance checklists and audit trail features',
						'Standard reporting dashboard for progress monitoring'
					]
				},
				{
					name: 'Standard',
					price: '$75',
					annualPrice: '$60',
					period: 'per project/month',
					purpose: 'Ideal for medium-sized projects (up to $5M)',
					features: [
						'Includes all Essential Tier features',
						'Enhanced financial management with forecasting capabilities',
						'Per Project Invoice Management',
						'Advanced reporting tools (Kanban boards, Gantt charts)',
						'Improved contractor collaboration with role-based data sharing',
						'Integration with external tools (e.g., Microsoft 365)',
					]
				},
				{
					name: 'Advanced',
					price: '$250',
					annualPrice: '$200',
					period: 'per project/month',
					purpose: 'Tailored for larger projects (above $5M)',
					features: [
						'Includes all Standard Tier features',
						'Advanced workflow automation (customizable approval processes)',
						'Comprehensive financial analytics and multi-project integration',
						'Predictive insights and risk assessment tools',
						'Extended API access and customizable dashboards',
						'Premium security and compliance enhancements'
					]
				},
				// {
				// 	name: 'Enterprise',
				// 	price: 'Custom Pricing (Contact Sales)',
				// 	annualPrice: 'Custom Pricing (Contact Sales)',
				// 	period: '',
				// 	purpose: 'For very large projects or specialized requirements (often projects over $50M)',
				// 	features: [
				// 		'Fully customizable feature set',
				// 		'Option for isolated databases and enhanced data security',
				// 		'Dedicated account management and premium support',
				// 		'Advanced integrations (on-premise systems, custom APIs)',
				// 		'Custom reporting, consulting, and deployment options'
				// 	]
				// }
			]
		},
		{
			name: 'Annual',
			plans: [
			]
		}
	];

	let activeTab = 0;
	let sending = false;
	let success = false;
	let error = false;
	let showModal = false;
	let calculationResults = {
		monthlyLicenseCost: 0,
		portfolioSize: 0,
		potentialSavings: 0
	};

	$: isDisabled = sending;

	interface ProjectRange {
		range: string;
		count: number;
		value: number;
		licensePrice: number;
	}

	const PROJECT_RANGES = [
		{ range: "$0 - $100K", value: 50000, licensePrice: 25 },
		{ range: "$100K - $500K", value: 250000, licensePrice: 75 },
		{ range: "$500K - $5M", value: 2500000, licensePrice: 75 },
		{ range: "$5M - $10M", value: 7500000, licensePrice: 250 },
		{ range: "$10M - $50M", value: 25000000, licensePrice: 250 },
		{ range: ">$50M", value: 50000000, licensePrice: 250 }
	];

	function calculateResults(formData: FormData): void {
		let totalPortfolioSize = 0;
		let totalMonthlyCost = 0;

		PROJECT_RANGES.forEach((range) => {
			const count = parseInt(formData.get(`project_range_${range.range}`) as string) || 0;
			totalPortfolioSize += count * range.value;
			totalMonthlyCost += count * range.licensePrice;
		});

		const reworkCost = totalPortfolioSize * 0.05; // 5% of portfolio is rework
		const avoidableRework = reworkCost * 0.1419; // 14.19% of rework is avoidable
		
		calculationResults = {
			monthlyLicenseCost: totalMonthlyCost,
			portfolioSize: totalPortfolioSize,
			potentialSavings: avoidableRework
		};

		showModal = true;
	}

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault(); // Prevent default form submission
		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);
		
		// Calculate results and show modal
		calculateResults(formData);
		
		sending = true;
		try {
			// Submit to Netlify forms
			const response = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams(formData as any).toString()
			});
			
			if (!response.ok) {
				throw new Error(`Form submission failed with status ${response.status}`);
			}
			
			success = true;
			form.reset();
		} catch (err) {
			console.error('Form submission error:', err);
			error = true;
		}
		sending = false;
	}
</script>

<svelte:head>
	<title>PASTA - Faster, Smarter Government Construction</title>
	<meta name="description" content="Specialized project management platform for government property and construction projects" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-white to-slate-50">
	<header class="relative overflow-hidden bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="relative z-10 py-8 bg-white sm:py-16 md:py-20 lg:max-w-2xl lg:w-full lg:py-28 xl:py-32">
				<div class="sm:text-center lg:text-left">
					<h1 class="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
						<span class="block xl:inline">PASTA</span>
						<span class="block text-sky-600 text-3xl mt-3">Faster, Smarter Government Construction</span>
					</h1>
					<p class="mt-3 text-base text-slate-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
						Streamline your government property and construction projects with our specialized project management platform
					</p>
					<div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
						<div class="rounded-md shadow">
							<a href="#contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 md:py-4 md:text-lg md:px-10">
								Find out more
							</a> 
						</div>
						<!-- <div class="mt-3 sm:mt-0 sm:ml-3">
							<button class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10">
								Learn More
							</button>
						</div> -->
					</div>
				</div>
			</div>
		</div>
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<div class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-sky-400 to-sky-600">
				<div class="h-full w-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
					<svg class="w-48 h-48 text-white/20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
					</svg>
				</div>
			</div>
		</div>
	</header>

	<div class="py-24 bg-white" id="features">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="lg:text-center">
				<h2 class="text-3xl font-extrabold text-slate-900 sm:text-4xl">Key Features</h2>
				<p class="mt-4 max-w-2xl text-xl text-slate-600 lg:mx-auto">
					Everything you need to manage complex government construction projects effectively
				</p>
			</div>

			<div class="mt-20">
				<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{#each features as feature}
						<div class="pt-6" transition:fade>
							<div class="flow-root bg-white rounded-lg px-6 pb-8 h-full border border-slate-200 hover:border-sky-500 transition-all shadow-sm hover:shadow-lg">
								<div class="-mt-6">
									<div class="inline-flex items-center justify-center p-3 bg-sky-500 rounded-md shadow-lg">
										<div class="h-8 w-8 text-white">
											{@html feature.icon}
										</div>
									</div>
									<h3 class="mt-8 text-lg font-medium text-slate-900 tracking-tight">{feature.title}</h3>
									<p class="mt-5 text-base text-slate-600">{feature.description}</p>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="py-16 px-8" id="pricing">
		<h2 class="text-4xl font-bold text-center mb-12 text-slate-900">Simple, Transparent Pricing</h2>
		<div class="pricing-section">
			<div class="pricing-tabs flex justify-center gap-4 mb-12">
				{#each pricingTabs as tab, i}
					<button
						class="px-6 py-2 rounded-full text-lg font-medium transition-all {activeTab === i
							? 'bg-sky-600 text-white'
							: 'bg-slate-100 text-slate-600 hover:bg-slate-200'}"
						on:click={() => (activeTab = i)}
					>
						{tab.name}
					</button>
				{/each}
			</div>

			<div class="pricing-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each pricingTabs[0].plans as plan}
					<div class="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
						<h3 class="text-2xl font-bold mb-2 text-slate-900">{plan.name}</h3>
						<div class="flex items-baseline mb-8">
							<span class="text-4xl font-bold text-sky-600">{activeTab === 1 ? plan.annualPrice : plan.price}</span>
							<span class="text-slate-600 ml-2">{plan.period}</span>
							</div>
							<p class="text-slate-600 mb-4 text-l">{plan.purpose}</p>
						
						<ul class="space-y-4 mb-8">
							{#each plan.features as feature}
								<li class="flex items-center text-slate-600">
									<div class="flex-shrink-0 h-8 w-8 text-sky-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clip-rule="evenodd"
											/>
										</svg>
									</div>
									<span class="ml-3">{feature}</span>
								</li>
							{/each}
						</ul>
						
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="py-16 px-8" id="contact">
		<div class="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
			<div class="p-8 border-b border-slate-200">
				<h2 class="text-2xl font-bold text-slate-900">Get Started with PASTA</h2>
				<p class="mt-2 text-slate-600">Tell us about your needs and we'll help you get started with the right solution.</p>
			</div>
			<div class="p-8">
				<div class="signup-section">
					<form
						name="contact"
						method="POST"
						data-netlify="true"
						data-netlify-recaptcha="true"
						data-netlify-honeypot="bot-field"
						action="/"
						on:submit={handleSubmit}
						class="space-y-8"
					>
						<input type="hidden" name="form-name" value="contact" />
						<p class="hidden">
							<label>
								Don't fill this out if you're human: <input name="bot-field" />
							</label>
						</p>
						
						<div class="space-y-6">
							<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
								<label class="block">
									<span class="text-slate-700 mb-2 block">Name</span>
									<input
										type="text"
										name="name"
										class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
										required
									/>
								</label>
								<label class="block">
									<span class="text-slate-700 mb-2 block">Email</span>
									<input
										type="email"
										name="email"
										class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
										required
									/>
								</label>
							</div>

							<label class="block">
								<span class="text-slate-700 mb-2 block">Company</span>
								<input
									type="text"
									name="company"
									class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
									required
								/>
							</label>

							<div class="space-y-4">
								<span class="text-slate-700 block font-medium">Project Portfolio</span>
								<p class="text-slate-600 text-sm">Please indicate how many projects you have in each value range:</p>
								
								<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
									{#each PROJECT_RANGES as range}
										<label class="block">
											<span class="text-slate-600 mb-2 block">{range.range}</span>
											<input
												type="number"
												name="project_range_{range.range}"
												min="0"
												class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
												placeholder="Number of projects"
											/>
										</label>
									{/each}
								</div>
							</div>

							<label class="block">
								<span class="text-slate-700 mb-2 block">Additional Information</span>
								<textarea
									name="message"
									rows="4"
									class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent"
									placeholder="Tell us about issues you face in project management"
									required
								></textarea>
							</label>

							<div class="pt-4">
								<div data-netlify-recaptcha="true"></div>
							</div>

							<button
								type="submit"
								class="w-full py-4 px-6 rounded-lg bg-sky-600 text-white font-semibold hover:bg-sky-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
								disabled={sending}
							>
								{sending ? 'Sending...' : 'Calculate Savings'}
							</button>
						</div>
					</form>
					{#if success}
						<div class="mt-6 p-4 bg-green-50 text-green-700 rounded-lg" transition:fade>
							Thank you for your message! We'll get back to you soon.
						</div>
					{/if}
					{#if error}
						<div class="mt-6 p-4 bg-red-50 text-red-700 rounded-lg" transition:fade>
							Sorry, there was an error sending your message. Please try again later.
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

{#if showModal}
	<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
		<button 
			class="absolute inset-0 w-full h-full cursor-default"
			on:click={() => showModal = false}
			on:keydown={(e) => e.key === 'Escape' && (showModal = false)}
		>
			<span class="sr-only">Close modal</span>
		</button>
		<div class="relative bg-white rounded-xl p-8 max-w-2xl w-full mx-4 space-y-6">
			<h3 class="text-2xl font-bold text-slate-900">Your Potential Savings with PASTA</h3>
			
			<div class="space-y-8">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div class="p-6 bg-slate-50 rounded-lg">
						<h4 class="text-lg font-semibold text-slate-700">Monthly Investment</h4>
						<p class="text-3xl font-bold text-sky-600">${calculationResults.monthlyLicenseCost}</p>
						<p class="text-sm text-slate-600 mt-2">Total monthly license cost</p>
					</div>
					
					<div class="p-6 bg-slate-50 rounded-lg">
						<h4 class="text-lg font-semibold text-slate-700">Portfolio Size</h4>
						<p class="text-3xl font-bold text-sky-600">${(calculationResults.portfolioSize / 1000000).toFixed(1)}M</p>
						<p class="text-sm text-slate-600 mt-2">Estimated total value</p>
					</div>
				</div>

				<div class="p-6 bg-green-50 rounded-lg">
					<h4 class="text-lg font-semibold text-green-700">Potential Annual Savings</h4>
					<p class="text-4xl font-bold text-green-600">${(calculationResults.potentialSavings / 1000000).toFixed(1)}M</p>
					<p class="text-sm text-green-600 mt-2">Based on industry statistics for avoidable rework costs</p>
				</div>

				<div class="space-y-4">
					<h4 class="font-semibold text-slate-700">How we calculated this:</h4>
					<ul class="list-disc list-inside text-sm text-slate-600 space-y-2">
						<li>Industry research shows 5% of construction spend goes to rework</li>
						<li>14.19% of rework is caused by decisions using bad data</li>
						<li>PASTA helps eliminate these avoidable costs through better data management</li>
					</ul>
				</div>
			</div>

			<div class="flex justify-end mt-6">
				<button 
					class="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
					on:click={() => showModal = false}
				>
					Close
				</button>
			</div>
		</div>
	</div>
{/if}

<style>
	:global(body) {
		background-color: rgb(248 250 252);
	}
</style>