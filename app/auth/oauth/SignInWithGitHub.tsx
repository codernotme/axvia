import { useAuthActions } from "@convex-dev/auth/react";
import { GitHubLogo } from "@/components/GitHubLogo";
import { Button } from "@nextui-org/button";

export default function SignInWithGitHub() {
  const { signIn } = useAuthActions();
  return (
    <Button
      className="flex-1"
      variant="bordered"
      type="button"
      onClick={() => void signIn("github")}
    >
      <GitHubLogo className="mr-2 h-4 w-4" /> GitHub
    </Button>
  );
}
