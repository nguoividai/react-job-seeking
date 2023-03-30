import { AppUI } from 'src/types/common.types';
import { LocationSeeker } from './location.type';

export interface PromptForm {
  name: string;
  email?: string | null;
  phone_number?: string | null;
  gender_id?: string | null;
  year_of_bird?: string | null;
  seeker?: {
    location_id?: string | null;
    location_seeker?: LocationSeeker | null;
    type_id?: string | null;
    description?: string | null;
    salary?: number | null;
    skills?: string[] | null;
  };
}

export type PromptFormBody = Partial<PromptForm> & {
  allowNextStepOne?: boolean;
  agreeTerm?: boolean;
};

export type PromptFormReducer = {
  ui?: AppUI;
  form?: PromptFormBody;
};
