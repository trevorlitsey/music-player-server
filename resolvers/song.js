export default {
	Query: {
		song: (parent, { id }, { models }) =>
			models.Song.findOne({ where: { id } }),
		allSongs: (parent, args, { models }) => models.Song.findAll(),
	},
	Mutation: {
		createSong: (parent, args, { models }) => models.Song.create(args),
	},
};
