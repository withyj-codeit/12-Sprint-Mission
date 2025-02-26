import { SignupInput } from "@/auth/util-types"
import { axiosInstance } from "@/shared/utils/axiosInstance"
import { useMutation } from "@tanstack/react-query"
import { AxiosError } from "axios"

type SignupResponse = {
  accessToken: string
  refreshToken: string
  user: {
    id: number
    email: string
    nickname: string
    teamId: string
    updatedAt: string
    createdAt: string
    image: string | null
  }
}

const signup = async (input: SignupInput) => {
  try {
    const response = await axiosInstance.post<SignupResponse>("/auth/signup", input)
    return response.data
  } catch (err) {
    console.error(err)
    throw err
  }
}

export const useSignup = () => {
  const { mutate } = useMutation<SignupResponse, AxiosError, SignupInput>({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data)
    },
  })

  return { mutate }
}
