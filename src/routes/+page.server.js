export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const organization = data.get('organization');
		const challenges = data.get('challenges');

		// Here you would typically save this to a database
		console.log('Sign-up submission:', { name, email, organization, challenges });

		// Return success status
		return {
			success: true
		};
	}
};