import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
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
        <li>
          <Link href="/about">
            About me
          </Link>
        </li>
      </ul>
    </section>
  )
})