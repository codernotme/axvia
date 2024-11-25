import { useAuthActions } from "@convex-dev/auth/react";
import { GoogleLogo } from "@/components/GoogleLogo";
import { Button } from "@nextui-org/button";

export default function SignInWithGoogle() {
  const { signIn } = useAuthActions();
  return (
    <Button
      className="flex-1"
      variant="bordered"
      type="button"
      onClick={() => void signIn("google")}
    >
      <GoogleLogo className="mr-2 h-4 w-4" /> Google
    </Button>
  );
}
