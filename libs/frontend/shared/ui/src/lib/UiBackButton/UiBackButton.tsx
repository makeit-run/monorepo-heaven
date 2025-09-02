import { useRouter } from "next/router"

interface BackButtonProps {
  prevPage: string
}

export const UiBackButton = ({ prevPage }: BackButtonProps) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(prevPage)
  }

  return (
    <button
      onClick={handleClick}
      aria-label="back-button"
      type="button"
      className="hover:bg-secondary/10 bg-app-background me-2 inline-flex items-center rounded-full p-2.5 text-black"
    >
      <svg
        className="size-4"
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
  )
}
UiBackButton.displayName = "BackButton"
