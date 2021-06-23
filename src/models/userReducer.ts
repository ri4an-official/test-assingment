import { createSlice } from '@reduxjs/toolkit'
import { call, put, takeEvery } from 'redux-saga/effects'
import { User } from './User'

const slice = createSlice({
    name: 'user',
    initialState: {
        user: {} as User,
    },
    reducers: {
        setUser(s, { payload }: { payload: User }) {
            s.user = { ...payload }
        },
    },
})
export default slice.reducer
export const { setUser } = slice.actions

export function* watchUser() {
    yield takeEvery('setUser', getUser)
}
export function* getUser() {
    const USER_ID = 1
    const data: User = yield call(fetchUser, USER_ID)
    yield put(setUser(data))
}
const fetchUser = (id: number): Promise<User> =>
    fetch('https://graphqlzero.almansi.me/api', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            query: `{
                user(id: ${id}) {
                    id
                    name
                    email
                }
            }`,
        }),
    })
        .then((r) => r.json())
        .then((r) => r.data.user)
