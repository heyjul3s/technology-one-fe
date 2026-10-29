import { FormProvider } from 'react-hook-form';

import type { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
import type { ComponentPropsWithoutRef } from 'react';

import './form.module.css';

type FormProps<T extends FieldValues> = Omit<ComponentPropsWithoutRef<'form'>, 'onSubmit'> & {
  methods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
};

export function Form<T extends FieldValues>({
  children,
  methods,
  onSubmit,
  ...props
}: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form {...props} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
