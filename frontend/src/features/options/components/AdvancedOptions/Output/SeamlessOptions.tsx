import { Flex } from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import IAISwitch from 'common/components/IAISwitch';
import { setSeamless } from 'features/options/store/optionsSlice';

/**
 * Seamless tiling toggle
 */
const SeamlessOptions = () => {
  const dispatch = useAppDispatch();

  const seamless = useAppSelector((state: RootState) => state.options.seamless);

  const handleChangeSeamless = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(setSeamless(e.target.checked));

  return (
    <Flex gap={2} direction={'column'}>
      <IAISwitch
        label="Seamless tiling"
        fontSize={'md'}
        isChecked={seamless}
        onChange={handleChangeSeamless}
      />
    </Flex>
  );
};

export default SeamlessOptions;
