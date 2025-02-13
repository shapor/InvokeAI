import { createSelector } from '@reduxjs/toolkit';
import { FaRecycle } from 'react-icons/fa';
import { RootState } from 'app/store';
import { useAppDispatch, useAppSelector } from 'app/storeHooks';
import IAIIconButton from 'common/components/IAIIconButton';
import {
  OptionsState,
  setShouldLoopback,
} from 'features/options/store/optionsSlice';

const loopbackSelector = createSelector(
  (state: RootState) => state.options,
  (options: OptionsState) => options.shouldLoopback
);

const LoopbackButton = () => {
  const dispatch = useAppDispatch();
  const shouldLoopback = useAppSelector(loopbackSelector);

  return (
    <IAIIconButton
      aria-label="Toggle Loopback"
      tooltip="Toggle Loopback"
      styleClass="loopback-btn"
      asCheckbox={true}
      isChecked={shouldLoopback}
      icon={<FaRecycle />}
      onClick={() => {
        dispatch(setShouldLoopback(!shouldLoopback));
      }}
    />
  );
};

export default LoopbackButton;
