export default (sequelize, DataTypes) => {
  const Album = sequelize.define('album', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  return Album;
};
