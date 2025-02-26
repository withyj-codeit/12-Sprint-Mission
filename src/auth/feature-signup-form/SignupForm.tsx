import classNames from 'classnames/bind'
import styles from './SignupForm.module.scss'
import { TextFieldController } from '@/shared/feature-form-field'
import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/shared/design-system'
import { useSignup } from '@/auth/data-access-signup'
import { TestComponent } from '@/auth/feature-signup-form/TestComponent'
import { Test2Component } from '@/auth/feature-signup-form/Test2Component'
import { SignupInput } from '@/auth/util-types'

const cx = classNames.bind(styles)

const schema = z
  .object({
    email: z.string()
      .min(1, "이메일을 입력해 주세요.")
      .email("이메일 양식에 맞지 않습니다."),
    nickname: z.string()
      .min(1, "닉네임을 입력해 주세요.")
      .max(10, "닉네임은 10자 이내로 입력해 주세요.")
      .regex(/^[a-zA-Z0-9가-힣]*$/, "닉네임은 영문, 숫자, 한글만 입력 가능합니다."),
    password: z.string()
      .min(8, "비밀번호는 8자 이상 입력해 주세요.")
      .max(20, "비밀번호는 20자 이내로 입력해 주세요.")
      .regex(/^[a-zA-Z0-9]*$/, "비밀번호는 영문, 숫자만 입력 가능합니다."),
    passwordConfirmation: z.string()
      .min(8, "비밀번호는 8자 이상 입력해 주세요.")
      .max(20, "비밀번호는 20자 이내로 입력해 주세요.")
      .regex(/^[a-zA-Z0-9]*$/, "비밀번호는 영문, 숫자만 입력 가능합니다.")
  })
  .refine(data => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "비밀번호가 일치하지 않습니다.",
  })

const DEFAULT_VALUES = {
  email: '',
  nickname: '',
  password: '',
  passwordConfirmation: ''
}

export const SignupForm = () => {
  const formContext = useForm<SignupInput>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULT_VALUES,
    mode: 'onBlur'
  })
  const { handleSubmit, control, watch } = formContext
  const email = useWatch({ control: control, name: 'email' })
  const nickname = useWatch({ control: control, name: 'nickname' })
  const password = useWatch({ control: control, name: 'password' })
  const passwordConfirmation = useWatch({ control: control, name: 'passwordConfirmation' })
  const { mutate } = useSignup()
  
  const onSubmit: SubmitHandler<SignupInput> = (data) => {
    mutate(data)
  }

  return (
    <FormProvider {...formContext}>
      <form className={cx('container')} onSubmit={handleSubmit(onSubmit)}>
        <TestComponent control={control} />
        <Test2Component watch={watch} />
        <TextFieldController
          name="email"
          label="이메일"
          placeholder="abcd@email.com"
        />
        <TextFieldController
          name="nickname"
          label="닉네임"
          placeholder="abcd가나다"
        />
        <TextFieldController
          name="password"
          label="비밀번호"
          type="password"
          placeholder="영문, 숫자만 허용, 특수문자(!@#$%^&*) 제한"
        />
        <TextFieldController
          name="passwordConfirmation"
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호 확인"
        />
        <Button
          variant='primary'
          disabled={!email || !nickname || !password || !passwordConfirmation}
          type="submit"
        >
          가입하기
        </Button>
      </form>
    </FormProvider>
  )
}
