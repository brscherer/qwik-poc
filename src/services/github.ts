import { DEFAULT_PROFILE } from "~/constants/config";
import type { Profile } from "~/types/profile";

export async function getProfile(
  username: string,
  controller?: AbortController
): Promise<Profile> {
  const resp = await fetch(`https://api.github.com/users/${username}`, {
    signal: controller?.signal,
  });
  if (resp.status != 200) return DEFAULT_PROFILE 
  const json = await resp.json();
  return json
}