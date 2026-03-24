//Native component for sign in and sign up using Clerk's AuthView. It checks if the user is already signed in
//and redirects to the home screen if they are. Otherwise, it displays the sign in/sign up view.

import useSocialAuth from "../Hooks/useSocialAuth";


export default function SignInScreen() {
  const { handleSocialAuth, loadingStrategy } = useSocialAuth();

  const isGoogleClicked = loadingStrategy === "oauth_google";
  const isAppleClicked = loadingStrategy === "oauth_apple";
  const isGitHubClicked = loadingStrategy === "oauth_github";

  const isloading = isGoogleClicked || isAppleClicked || isGitHubClicked;
  return;
}

/*import { useAuth } from "@clerk/expo";
import { Redirect, Stack } from "expo-router";

export default function Layout() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return <Stack />;
}
*/
