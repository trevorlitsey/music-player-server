export default (sequelize, DataTypes) => {
  const Artist = sequelize.define('artist', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  return Artist;
};
