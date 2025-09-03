import { useRouter } from 'next/router';
import { cn } from '@shared/utils/cn';
import { type VariantProps } from 'class-variance-authority';
import { backButtonVariants, backButtonIconVariants } from './config';

interface UiBackButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof backButtonVariants> {
  prevPage: string;
}

export const UiBackButton = ({
  prevPage,
  variant,
  className,
  ...props
}: UiBackButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(prevPage);
  };

  return (
    <button
      onClick={handleClick}
      aria-label="back-button"
      type="button"
      className={cn(backButtonVariants({ variant }), className)}
      {...props}
    >
      <svg
        className={backButtonIconVariants({ variant })}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12l4-4m-4 4 4 4"
        />
      </svg>
    </button>
  );
};
UiBackButton.displayName = 'BackButton';