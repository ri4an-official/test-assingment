import { call, put } from 'redux-saga/effects'
import { User } from './User'
export function* getUser(id: number) {
    try {
        const data = call(() =>
            fetch('https://graphqlzero.almansi.me/api', {
                body: JSON.stringify({
                    query: `{
                            user(id: ${id}) {
                            id
                            name
                        }
                    }`,
                }),
            }).then((r) => r.json())
        )
        return data.payload.context as User
    } catch (error) {
        put({ type: 'ERROR', error })
    }
}
