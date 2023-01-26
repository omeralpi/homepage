import type { ISVGProps } from "@/types/index";

export default function IconMedium({ size = 22, ...props }: ISVGProps) {
  return (
    <svg
      role="img"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      fill="#fff"
      clipRule="evenodd"
      viewBox="0 0 30 30"
      {...props}>
      <path d="M8.5 7A8.5 8.5 0 108.5 24 8.5 8.5 0 108.5 7zM22 8A4 7.5 0 1022 23 4 7.5 0 1022 8zM28.5 9A1.5 6.5 0 1028.5 22 1.5 6.5 0 1028.5 9z" />
    </svg>
  );
}
