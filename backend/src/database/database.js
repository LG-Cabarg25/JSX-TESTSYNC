import { Sequelize } from 'sequelize';

export const bd = 'db_aae9a9_testsyn';
export const user = 'aae9a9_testsyn';
export const password = 'Arguet2024Guss';
export const host = 'MYSQL8003.site4now.net';
export const port = '3306';

// Crear la instancia de Sequelize
const sequelize = new Sequelize(bd, user, password, {
  host: host,
  port: null,
  dialect: 'mysql',
  logging: false, // Deshabilitar el logging si no quieres ver las consultas SQL en la consola
});

// Exportar la instancia de Sequelize como default
export default sequelize;