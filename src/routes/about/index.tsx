import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const About = component$(() => {
  return (
    <section>
      <Link href="/">
        Back to home
      </Link>

      <h1>🙋 About me</h1>

      <p>
        I have my first contact with a PC at a very young age since my
        grandfather is a computer repair technician and has a computer store.
        This environment led me to a passion about technology.
      </p>

      <p>
        I graduate in Computer Information Systems in 2018, and have been
        working with frontend development since then.
      </p>

      <p>
        Throughout my career there were always people willing to help me with
        any questions that arose, so I created this blog to share some things I
        learn so that i can also help in some way.
      </p>

      <h2>❔ Some other facts...</h2>
      <ul>
        <li>🛹 Skater</li>
        <li>🎸 Guitarrist</li>
        <li>🎮 Gamer</li>
        <li>🐱 Father of &quot;Manu&quot;</li>
        <li>🙀 Father of &quot;Banguela&quot;</li>
        <li>🐶 Father of &quot;Luna&quot;</li>
      </ul>
    </section>
  );
});

export default About;
