import { axiosInstance } from "@/api/axiosInstance"
import { Modal } from "@/components/Modal"
import { useMutation } from "@/hooks/useMutation"
import { useCreateProduct } from "@/products/useCreateProduct"
import { useState } from "react"

type CreatingProductModalProps = {
  open: boolean
  onCloseClick: () => void
}

type Input = {
  images: string[]
  name: string
  price: number
  description: string
  tags: string[]
}

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

export const CreatingProductModal = ({ open, onCloseClick }: CreatingProductModalProps) => {
  const [imageInput, setImageInput] = useState<File | null>(null)
  const [input, setInput] = useState<Input>({
    images: [],
    name: "",
    price: 0,
    description: "",
    tags: [],
  })
  // step 2
  const { mutate: uploadImage } = useMutation<{ url: string }, FormData>({
    mutationUrl: "images/upload",
    // onSuccess: (data) => {
    //   if (!data?.url) {
    //     alert("이미지 업로드 실패")
    //     return
    //   }
    //   const productInput = {
    //     ...input,
    //     images: [data.url]
    //   }
    //   createProduct(productInput)
    // },
    onError: () => alert("이미지 업로드 실패")
  })
  const { mutate: createProduct } = useMutation<CreateProductResponse, Input>({
    mutationUrl: "products",
    onSuccess: () => window.location.reload(), // 실제 프로젝트에서는 products 조회 refetch 또는 products state를 업데이트 하는게 좋아요. 편의상 새로고침으로 만들었어요.
    onError: () => alert("상품 등록 실패")
  })
  // step 3
  const { mutate } = useCreateProduct()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData()
    if (!imageInput) {
      alert("이미지를 선택해주세요")
      return
    }
    formData.append("image", imageInput)

    // step 1
    // try {
    //   const imgResponse = await axiosInstance.post("images/upload", formData)
    //   const imageUrl = imgResponse.data?.url
    //   if (!imageUrl) {
    //     alert("이미지 업로드 실패")
    //     return
    //   }

    //   const product = {
    //     ...input,
    //     images: [imageUrl]
    //   }
    //   const response = await axiosInstance.post("products", product)
    //   if (!response.data) {
    //     alert("상품 등록 실패")
    //     return
    //   }
    //   window.location.reload()
    // } catch (err) {
    //   console.error(err)
    // }

    // step 2, onSuccess 또는 아래 로직 둘 중 하나 선택
    // const response = await uploadImage(formData)
    // if (!response) {
    //   alert("이미지 업로드 실패")
    //   return
    // }
    // const productInput = {
    //   ...input,
    //   images: [response?.data.url]
    // }
    // createProduct(productInput)

    // step 3
    mutate({ image: formData, ...input })
  }

  return (
    <Modal open={open} onCloseClick={onCloseClick}>
      <form
        style={{ backgroundColor: "white", padding: 20, display: "flex", flexDirection: "column", gap: 10 }}
        onSubmit={handleSubmit}
      >
        <h2>상품 등록</h2>
        <label>
          이미지
          <input
            type="file"
            onChange={(event) => 
              setImageInput(event.target.files?.[0] ? event.target.files[0] : null)
            }
          />
        </label>
        <label>
          상품명
          <input
            type="text"
            value={input.name}
            onChange={(event) =>
              setInput((prev) => ({
                ...prev,
                name: event.target.value
              }))
            }
          />
        </label>
        <label>
          가격
          <input
            type="number"
            value={input.price}
            onChange={(event) =>
              setInput((prev) => ({
                ...prev,
                price: Number(event.target.value)
              }))
            }
          />
        </label>
        <label>
          설명
          <textarea
            value={input.description}
            onChange={(event) =>
              setInput((prev) => ({
                ...prev,
                description: event.target.value
              }))
            }
          />
        </label>
        <label>
          태그
          <input
            type="text"
            value={input.tags[0]}
            onChange={(event) =>
              setInput((prev) => ({
                ...prev,
                tags: [event.target.value]
              }))
            }
          />
        </label>
        <button>등록</button>
      </form>
    </Modal>
  )
}
