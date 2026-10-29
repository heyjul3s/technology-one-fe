import { useFormContext } from 'react-hook-form';

import type { FieldPath, FieldValues } from 'react-hook-form';

import styles from './checkbox.module.css';

type CheckboxProps<T extends FieldValues> = Omit<
  React.ComponentPropsWithoutRef<'input'>,
  'name' | 'type'
> & {
  name: FieldPath<T>;
  label: string;
};

export function Checkbox<T extends FieldValues>({
  name,
  id = name,
  label,
  ...props
}: CheckboxProps<T>) {
  const { formState, getFieldState, register } = useFormContext<T>();
  const { error } = getFieldState(name, formState);

  const errorId = `${id}-error-message`;
  const describedBy =
    [props['aria-describedby'], error ? errorId : undefined].filter(Boolean).join(' ') || undefined;

  return (
    <div className={styles.checkbox}>
      <label className={styles['checkbox-label']} htmlFor={id}>
        <input
          {...props}
          aria-describedby={describedBy}
          aria-invalid={!!error}
          className={styles['checkbox-input']}
          id={id}
          type="checkbox"
          {...register(name)}
        />
        {label}
      </label>

      {error?.message && (
        <p className={styles['checkbox-error-message']} id={errorId}>
          {error.message}
        </p>
      )}
    </div>
  );
}
