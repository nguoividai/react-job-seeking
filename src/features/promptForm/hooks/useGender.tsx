import React, { useEffect, useState } from 'react';
import { axiosInceptors } from 'src/services/axiosInceptors';
import { ResponseServerAPI } from 'src/types/server.types';
import { Gender } from '../types/gender.type';

export default function useGender() {
  const [genders, setGenders] = useState<Gender[] | undefined>();
  const [loading, setLoading] = useState<boolean | undefined>();

  useEffect(() => {
    const getListItem = async () => {
      try {
        setLoading(true);
        const { data } = await axiosInceptors.get<ResponseServerAPI<Gender[]>>('seeker/genders');
        setGenders([...data.data]);
      } catch (err) {
        throw new Error('Error ' + err);
      } finally {
        setLoading(false);
      }
    };
    getListItem();
  }, []);

  return { genders, loading };
}
