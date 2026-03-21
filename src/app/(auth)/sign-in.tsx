//Native component for sign in and sign up using Clerk's AuthView. It checks if the user is already signed in
//and redirects to the home screen if they are. Otherwise, it displays the sign in/sign up view.

import { useAuth } from "@clerk/expo";
import { AuthView } from "@clerk/expo/native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function SignInScreen() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.replace("/(home)");
    }
  }, [isSignedIn]);

  return <AuthView mode="signInOrUp" />;
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
