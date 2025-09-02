
import { ClientError } from "graphql-request"
import { z } from "zod"

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
  } else {
    return unknownError
  }
}
