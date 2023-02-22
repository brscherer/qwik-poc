import { component$, useStylesScoped$, } from '@builder.io/qwik';
import type { Profile } from '~/types/profile';
import styles from './avatar.css?inline'

type AvatarProps = {
  profile: Profile
}

export const Avatar = component$(({ profile }: AvatarProps) => {
  useStylesScoped$(styles)

  return (
    <div class="picture">
      <img class="photo" src={profile.avatar_url} alt={profile.name} />
    </div>
  )
})