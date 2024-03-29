import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { loginReducer } from '../../../../features/AuthByUsername/model/slice/loginSlice';
import { userReducer } from '../../../../entities/User/model/slice/userSlice';
import { registrationReducer } from '../../../../features/Registration/model/slice/registrationSlce';
import { anomalyReducer } from '../../../../entities/Annomally/model/slice/anomalySlice';

export function createRootStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        login: loginReducer,
        user: userReducer,
        registration: registrationReducer,
        anomaly: anomalyReducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createRootStore>['dispatch']
