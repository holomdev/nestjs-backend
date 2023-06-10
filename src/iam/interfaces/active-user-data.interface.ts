import { Role } from '../../users/enums/role.enum';
import { PermissionType } from '../authorization/permission.type';
export interface ActiveUserData {
  sub: number;

  email: string;

  role: Role;

  // Nota: Puedes usar role o permission, segun te convenga.
  // Usar los dos no es tan logico
  permissions: PermissionType[];
}
