import { useFormContext } from 'react-hook-form';

import type { FieldPath, FieldValues } from 'react-hook-form';

import styles from './text-field.module.css';

type TextFieldProps<T extends FieldValues> = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'name'
> & {
  name: FieldPath<T>;
  label: string;
};

export function TextField<T extends FieldValues>({
  name,
  id = name,
  label,
  ...props
}: TextFieldProps<T>) {
  const { formState, getFieldState, register } = useFormContext<T>();
  const { error } = getFieldState(name, formState);

  const errorId = `${id}-error-message`;
  const describedBy =
    [props['aria-describedby'], error ? errorId : undefined].filter(Boolean).join(' ') || undefined;

  return (
    <div className={styles['text-field']}>
      <label className={styles['text-field-label']} htmlFor={id}>
        {label}
        <input
          {...props}
          aria-describedby={describedBy}
          aria-invalid={!!error}
          className={styles['text-field-input']}
          id={id}
          {...register(name)}
        />
      </label>

      {error?.message && (
        <p className={styles['text-field-error-message']} id={errorId}>
          {error.message}
        </p>
      )}
    </div>
  );
}
