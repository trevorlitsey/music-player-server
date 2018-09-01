export default (sequelize, DataTypes) => {
  const Song = sequelize.define('song', {
    name: DataTypes.STRING,
    albumIndex: DataTypes.INTEGER,
  });

  Song.associate = (models) => {
    Song.belongsTo(models.Artist, {
      foreignKey: {
        name: 'artistId',
        field: 'artist_id',
      },
    });
    Song.belongsTo(models.Album, {
      foreignKey: {
        name: 'albumId',
        field: 'album_id',
      },
    });
  };

  return Song;
};
