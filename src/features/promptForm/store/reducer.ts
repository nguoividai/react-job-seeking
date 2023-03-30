import { createReducer } from '@reduxjs/toolkit';
import { PromptFormBody, PromptFormReducer } from '../types/store.type';
import { onChangePromptForm } from './action';

const initialState = {};

const checkAllowNextStepOne = (promptForm: PromptFormBody) => {
  return promptForm?.name && promptForm?.phone_number && promptForm?.agreeTerm ? true : false;
};

const promptFormReducer = createReducer<PromptFormReducer>(initialState, (builder) => {
  builder.addCase(onChangePromptForm, (state, { payload }) => {
    state.form = { ...state.form, ...payload };
  });
  builder.addDefaultCase((state, action) => {});
});

export default promptFormReducer;
