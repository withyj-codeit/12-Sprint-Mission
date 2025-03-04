import classNames from 'classnames/bind'
import styles from './WineRegistration.module.scss'
import { Button } from "@/shared/design-system"
import { TextFieldController } from "@/shared/feature-form-field"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import { useCreateWine } from '@/wine/data-access-wines'
import { WineType } from '@/wine/util-types/wine'

const cx = classNames.bind(styles)

type WineInput = {
  name: string
  region: string
  price: number
}

export const WineRegistration = () => {
  const formContext = useForm<WineInput>()
  const { handleSubmit } = formContext
  const { mutate } = useCreateWine()
  const onSubmit: SubmitHandler<WineInput> = (data) => {
    mutate({
      ...data,
      image: "https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Wine/user/639/1739698796075/type=image4.png",
      type: WineType.Sparkling
    })
  }

  return (
    <FormProvider {...formContext}>
      <form className={cx('container')} onSubmit={handleSubmit(onSubmit)}>
        <TextFieldController
          name="name"
          label="와인 이름"
          placeholder="와인 이름을 입력해주세요."
        />
        <TextFieldController
          name="region"
          label="원산지"
          placeholder="원산지를 입력해주세요."
        />
        <TextFieldController
          name="price"
          label="가격"
          placeholder="가격을 입력해주세요."
          type="number"
        />
        <Button variant="primary" type="submit">등록하기</Button>
      </form>
    </FormProvider>
  )
}
