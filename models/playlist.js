export default (sequelize, DataTypes) => {
  const Playlist = sequelize.define('playlist', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    songs: DataTypes.STRING,
  });

  return Playlist;
};
