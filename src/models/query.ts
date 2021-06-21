import { call, put } from 'redux-saga/effects'
import { User } from './User'
export function* getUser(id: number) {
    try {
        const { data } = call(() =>
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
            }).then((r) => r.json())
        )
        return data as User
    } catch (error) {
        put({ type: 'ERROR', error })
    }
}
