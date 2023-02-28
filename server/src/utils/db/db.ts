import { DataSource } from 'typeorm';
import { User } from '../../entity';

const connection = new DataSource({
  type: 'sqljs',
  database: new Uint8Array(),
  logging: false,
  entities: [User],
  synchronize: true,
});

export default connection;
// connection.getRepository
