import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { GithubIcon } from '../icons/github';
import { LinkedinIcon } from '../icons/linkedin';

import styles from './socialLinks.css?inline'

export const SocialLinks = component$(() => {
  useStylesScoped$(styles)

  return (
    <section>
      <ul>
        <li>
          <a href="https://github.com/brscherer/">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brunorphl/">
            <LinkedinIcon />
          </a>
        </li>
      </ul>
    </section>
  )
})