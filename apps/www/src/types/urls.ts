export interface ShortUrlFormData {
  id?: string;
  userId: string;
  userName: string;
  target: string;
  url: string;
  visible: number;
  active: number;
  expiration: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type FormType = "add" | "edit";
