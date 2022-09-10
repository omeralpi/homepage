import A from "components/a";
import IconGithub from "components/icons/github";
import { meta } from "../site.config";

function SocialButton({ href, children }) {
  return (
    <A
      href={href}
      blank
      className="
      flex items-center rounded-full bg-zinc-200 p-3 text-zinc-600 transition-colors
      hover:bg-indigo-100 hover:text-indigo-900 hover:no-underline
      dark:bg-zinc-700 dark:text-zinc-200
      dark:hover:bg-indigo-800 dark:hover:text-indigo-100"
    >
      {children}
    </A>
  );
}

function Social() {
  const { github } = meta.social;

  return (
    <div className="flex items-center space-x-3">
      <SocialButton href={"mailto:" + meta.author.email}>
        <span className="mx-2 font-medium">Email</span>
      </SocialButton>

      <SocialButton href={github}>
        <IconGithub />
      </SocialButton>
    </div>
  );
}

export default Social;
