import React, { useEffect, useRef, useState } from 'react';
import Select, { Props } from 'react-select';
import { LocationSeeker } from 'src/features/promptForm/types/location.type';
import { axiosInceptors } from 'src/services/axiosInceptors';
import { ResponseServerAPI } from 'src/types/server.types';

interface LocationSelectProps extends Props<LocationSeeker, false> {
  initialValue?: LocationSeeker;
  label?: string;
}

interface SelectInput extends LocationSeeker {
  value: string;
  label: string;
}

const convertLocationsToReactSelect = (data: LocationSeeker[]): SelectInput[] => {
  return data?.map((e) => ({
    ...e,
    value: e.id,
    label: `${e.title}}`,
  }));
};

const LocationSelect: React.FC<LocationSelectProps> = (props) => {
  const { initialValue, label, ...rest } = props;
  const [data, setData] = useState<LocationSeeker[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const ref = useRef<any>(null);

  useEffect(() => {
    const getListData = async () => {
      try {
        setLoading(true);
        const { data } = await axiosInceptors.get<ResponseServerAPI<LocationSeeker[]>>(
          'seeker/seeker_locations'
        );
        setData(convertLocationsToReactSelect(data.data));
      } catch (err) {
        console.error('Err', err);
      } finally {
        setLoading(false);
      }
    };

    getListData();
  }, []);

  return (
    <>
      {label && (
        <label className="form-label">
          {label} {rest.required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}

      <Select
        styles={{
          // Fixes the overlapping problem of the component
          menu: (provided) => ({ ...provided, zIndex: 9999 }),
        }}
        ref={ref}
        isLoading={loading}
        placeholder="--Select--"
        options={data}
        {...rest}
      ></Select>
    </>
  );
};

export default React.memo(LocationSelect);
