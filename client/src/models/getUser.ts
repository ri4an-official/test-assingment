import { createEffect, restore } from 'effector'
import { User } from './User'

export const getUserFx = createEffect(
    async (id: number) =>
        await fetch('https://graphqlzero.almansi.me/api', {
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
            .then((r) => r.data.user as User)
)
export const $user = restore(getUserFx.doneData, {} as User)
$user.watch(console.log)
