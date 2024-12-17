export class Functionary {
  idFuncionary?: number;
  name!: string;
  surnamefather!: string;
  surnamemother!: string;
  dni!: string;
  phonenumber!: string;
  range?: string;
  confirmation?: string;
  department?: string;
  address?: string;
  email?: string;
  status!: string;  // Este campo se usa para gestionar el estado, 'A' para activo, 'I' para inactivo
}
