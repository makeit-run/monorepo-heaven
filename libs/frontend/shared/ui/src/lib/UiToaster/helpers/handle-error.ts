
import { ClientError } from "graphql-request"
import { isRedirectError } from "next/dist/client/components/redirect-error"
import { z } from "zod"

import { toast } from "@frontend/shared/ui/UiToaster"

export function getErrorMessage(err: unknown) {
  const unknownError = "Something went wrong, please try again later."

  if (err instanceof ClientError) {
    const errors = err?.response?.errors
      ?.map((issue) => issue?.message)
      ?.filter(Boolean) as string[]

    return errors?.join("\n")
  } else if (typeof err === "string") {
    return err
  } else if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message
    })
    return errors.join("\n")
  } else if (err instanceof Error) {
    return err.message
  } else if (isRedirectError(err)) {
    throw err
  } else if (
    err &&
    typeof err === "object" &&
    "detail" in err &&
    typeof err?.detail === "string"
  ) {
    return err?.detail
  } else {
    return unknownError
  }
}

export function showErrorToast(err?: unknown) {
  console.warn(err)

  const errorMessage = getErrorMessage(err)

  return toast({
    title: errorMessage,
    variant: "destructive"
  })
}
