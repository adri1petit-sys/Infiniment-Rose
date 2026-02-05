export interface Participant {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface DonationState {
  amount: number | '';
  isCustom: boolean;
}

export enum RegistrationStatus {
  IDLE,
  SUBMITTING,
  SUCCESS,
  ERROR
}