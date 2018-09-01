export default {
	Mutation: {
		createArtist: async (parent, args, { models }) => {
			return {
				ok: true,
			};
		},
	},
};
