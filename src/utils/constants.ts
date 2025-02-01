export const STATUS = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DELETED: 'DELETED',
} as const;
export enum RoleType {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

export enum TokenType {
  ACCESS_TOKEN = 'ACCESS_TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
}
