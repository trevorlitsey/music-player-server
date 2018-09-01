import fs from 'fs';
import path from 'path';
import { mergeStrings } from 'gql-merge';

const artistSchema = loadGQLFile('artist.gql');
const albumSchema = loadGQLFile('album.gql');
const playlistSchema = loadGQLFile('playlist.gql');
const songSchema = loadGQLFile('song.gql');
const errorSchema = loadGQLFile('error.gql');

const typeDefs = mergeStrings([
	artistSchema,
	albumSchema,
	playlistSchema,
	songSchema,
	errorSchema,
]);

export default typeDefs;

// ----------------
function loadGQLFile(filename) {
	const filePath = path.join(__dirname, filename);
	return fs.readFileSync(filePath, 'utf-8');
}
