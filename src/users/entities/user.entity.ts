import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../enums/role.enum';
import {
  Permission,
  PermissionType,
} from '../../iam/authorization/permission.type';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ enum: Role, default: Role.Regular })
  role: Role;

  // Nota: No tiene caso tener "role" si usamos permisos, solo se dejo
  // para ejemplificacion de como se implementa.
  @Column({ enum: Permission, default: [], type: 'json' })
  permissions: PermissionType[];
}
