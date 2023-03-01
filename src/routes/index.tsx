import { component$, useResource$, useStore, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Avatar } from "~/components/avatar/avatar";
import { Salutation } from "~/components/salutation/salutation";
import { SocialLinks } from "~/components/socialLinks/socialLinks";
import { getProfile } from "~/services/github";
import type { Profile } from "~/types/profile";

export default component$(() => {
  const github = useStore({
    profile: "brscherer",
  });

  const profileResource = useResource$<Profile>(({ track, cleanup }) => {
    // We need a way to re-run fetching data whenever the `github.profile` changes.
    // Use `track` to trigger re-running of this data fetching function.
    track(() => github.profile);

    // A good practice is to use `AbortController` to abort the fetching of data if
    // new request comes in. We create a new `AbortController` and register a `cleanup`
    // function which is called when this function re-runs.
    const controller = new AbortController();
    cleanup(() => controller.abort());

    // Fetch the data and return the promises.
    return getProfile(github.profile, controller);
  });

  return (
    <>
      <Resource
        value={profileResource}
        onPending={() => <>Loading...</>}
        onRejected={(error) => <>Error: {error.message}</>}
        onResolved={(profile) => <Salutation profile={profile} />}
      />
      <div class="container">
        <Resource
          value={profileResource}
          onPending={() => <>Loading...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(profile) => <Avatar profile={profile} />}
        />
        <SocialLinks />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Bruno Scherer",
  meta: [
    {
      name: "description",
      content: "Bruno Scherer personal website",
    },
  ],
};
