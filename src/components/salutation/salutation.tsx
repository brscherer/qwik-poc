import Typed from 'typed.js'
import { component$, useSignal, useStylesScoped$, useBrowserVisibleTask$ } from '@builder.io/qwik';
import type { Profile } from '~/types/profile';
import styles from './salutation.css?inline'

type SalutationProps = {
  profile: Profile
}

export const Salutation = component$(({ profile }: SalutationProps) => {
  useStylesScoped$(styles)
  const typedTextEl = useSignal<Element>();

  useBrowserVisibleTask$(({ cleanup }) => {
    if (!typedTextEl.value || !profile) return;

    const typed = new Typed(typedTextEl.value, {
      strings: [
        profile.name,
        profile.bio
      ],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 500,
      loop: true,
    });

    cleanup(() => typed.destroy())
  })

  return (
    <p>Hello! I'm <br /><span ref={typedTextEl}></span></p>
  )
})