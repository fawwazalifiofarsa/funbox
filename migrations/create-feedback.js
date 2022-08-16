'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('feedback', {
      id_feedback: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        primaryKey: true,
        references: {
          model: 'user',
          key: 'id_user'
        }
      },  
      id_lapangan: {
        type: Sequelize.STRING,
        allowNull: false,
        foreignKey: true,
        primaryKey: true,
        references: {
          model: 'lapangan',
          key: 'id_lapangan'
        }
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      ulasan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('feedback');
  }
};