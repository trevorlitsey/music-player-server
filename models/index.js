import Sequelize from 'sequelize';

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASS,
	{
		dialect: 'postgres',
		define: {
			underscored: true,
		},
	}
);

const models = {
	Album: sequelize.import('./album'),
	Artist: sequelize.import('./artist'),
	Playlist: sequelize.import('./playlist'),
	Song: sequelize.import('./song'),
};

Object.keys(models).forEach(modelName => {
	if ('associate' in models[modelName]) {
		models[modelName].associate(models);
	}
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
