import { createAction } from '@reduxjs/toolkit';
import { PromptFormBody } from '../types/store.type';

export const onChangePromptForm = createAction<PromptFormBody>('promptForm/onChangePromptForm');
