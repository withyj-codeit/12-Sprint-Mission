import { useMutation } from "@/hooks/useMutation"

type CreateProductResponse = {
  createdAt: string,
  favoriteCount: number,
  ownerNickname: string,
  ownerId: number,
  images: string[],
  tags: string[],
  price: number,
  description: string,
  name: string,
  id: number
}

type CreateProductInput = {
  images: string[]
  name: string
  price: number
  description: string
  tags: string[]
}

type MutateParams = {
  image: FormData
  name: string
  price: number
  description: string
  tags: string[]
}

export const useCreateProduct = () => {
  const { mutate: uploadImage } = useMutation<{ url: string }, FormData>({
    mutationUrl: "images/upload",
    onError: () => alert("이미지 업로드 실패")
  })
  const { mutate: createProduct } = useMutation<CreateProductResponse, CreateProductInput>({
    mutationUrl: "products",
    onSuccess: () => window.location.reload(), // 실제 프로젝트에서는 products 조회 refetch 또는 products state를 업데이트 하는게 좋아요. 편의상 새로고침으로 만들었어요.
    onError: () => alert("상품 등록 실패")
  })

  const mutate = async ({ image, name, price, description, tags }: MutateParams) => {
    if (!image) {
      alert("이미지를 선택해주세요.")
      return
    }
    const response = await uploadImage(image)
    if (!response?.data.url) {
      alert("이미지 업로드 실패")
      return
    }
    createProduct({
      images: [response.data.url],
      name,
      price,
      description,
      tags
    })
  }

  return { mutate }
}
