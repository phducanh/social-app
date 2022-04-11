import { Space } from 'antd';
import clsx from 'clsx';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

enum ButtonVariant {
  'primary',
  'outline',
  'linear',
  'text',
}

enum ButtonColor {
  'red',
  'orange',
  'blue',
  'yellow',
  'gray',
  'green',
  'purple',
  'lightlyOrange',
}
enum ButtonSize {
  'small',
  'medium',
  'large',
}

type ButtonProps = {
  size?: keyof typeof ButtonSize;
  icon?: React.ReactNode;
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
  color?: keyof typeof ButtonColor;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  size = 'medium',
  icon,
  children,
  className,
  disabled: buttonDisabled,
  isLoading,
  variant = 'primary',
  color = 'orange',
  ...rest
}: ButtonProps) {
  const disabled = isLoading || buttonDisabled;
  // eslint-disable-next-line prefer-const
  let overrideClassNames: string[] = [];
  const getColors = (): Array<string> => {
    switch (color) {
      case 'blue':
        return ['blue', 'white'];
      case 'red':
        return ['red', 'black'];
      case 'yellow':
        return ['yellow', 'black'];
      case 'green':
        return ['green', 'white'];
      case 'gray':
        return ['gray', 'white'];
      case 'orange':
      default:
        return ['orange', 'white'];
    }
  };

  const [mainColor, subColor] = getColors();

  const initArgs = () => {
    switch (size) {
      case 'small':
        overrideClassNames.push('px-[24px] py-[12px] h-[48px]');
        break;
      case 'large':
        overrideClassNames.push('px-[40px] py-[24px] h-[64px]');
        break;
      case 'medium':
      default:
        overrideClassNames.push('px-[32px] py-[16px] h-[56px]');
        break;
    }

    switch (variant) {
      case 'primary':
        switch (color) {
          case 'green':
            overrideClassNames.push(
              `bg-green-400 text-white`,
              `hover:bg-green-500 hover:text-white`,
              `active:bg-green-600`,
              `disabled:bg-green-600 disabled:hover:bg-white-600`
            );
            break;
          case 'blue':
            overrideClassNames.push(
              `bg-primary-400 text-white`,
              `hover:bg-primary-500 hover:text-white`,
              `active:bg-primary-600`,
              `disabled:bg-indigo-400 disabled:hover:bg-white-600`
            );
            break;
          case 'gray':
            overrideClassNames.push(
              `bg-gray-400 text-white`,
              `hover:bg-gray-500 hover:text-white`,
              `active:bg-gray-600`,
              `disabled:bg-gray-600 disabled:hover:bg-white-600`
            );
            break;
          case 'red':
            overrideClassNames.push(
              `bg-red-400 text-black`,
              `hover:bg-red-500 hover:text-black`,
              `active:bg-red-600`,
              `disabled:bg-red-600 disabled:hover:bg-black-600`
            );
            break;
          case 'orange':
            overrideClassNames.push(
              `bg-[#FF511A] text-white`,
              `hover:bg-[#B72C00] hover:text-white`,
              `active:bg-[#E64210]`,
              `disabled:bg-[#FFCABA] disabled:hover:bg-[#FFCABA]`
            );
            break;
          case 'yellow':
            overrideClassNames.push(
              `bg-yellow-400 text-black`,
              `hover:bg-yellow-500 hover:text-black`,
              `active:bg-yellow-600`,
              `disabled:bg-yellow-600 disabled:hover:bg-black-600`
            );
            break;
          case 'lightlyOrange':
            overrideClassNames.push(
              'bg-[#FF511A] text-white',
              'hover:bg-[#B72C00]',
              'active:bg-[#B72C00]'
            );
            break;
        }
        break;
      case 'outline':
        switch (color) {
          case 'gray':
            overrideClassNames.push(
              `text-gray-500 border border-gray-500`,
              `hover:bg-gray-500 hover:text-white`,
              `active:bg-gray-600`,
              `disabled:bg-gray-600 disabled:hover:bg-gray-600`
            );
            break;
          case 'blue':
            overrideClassNames.push(
              `text-primary-500 border border-primary-500`,
              `hover:bg-primary-500 hover:text-white`,
              `active:bg-primary-600`,
              `disabled:bg-primary-600 disabled:hover:bg-primary-600`
            );
            break;
          case 'purple':
            overrideClassNames.push(
              `text-indigo-500 border border-indigo-500`,
              `hover:bg-indigo-700 hover:text-white`,
              `active:bg-primary-600`,
              `disabled:bg-primary-600 disabled:hover:bg-primary-600`
            );
            break;
          case 'green':
            overrideClassNames.push(
              `text-green-500 border border-green-500`,
              `hover:bg-green-500 hover:text-white`,
              `active:bg-green-600`,
              `disabled:bg-green-600 disabled:hover:bg-green-600`
            );
            break;
          case 'red':
            overrideClassNames.push(
              `text-red-500 border border-red-500`,
              `hover:bg-red-500 hover:text-black`,
              `active:bg-red-600`,
              `disabled:bg-red-600 disabled:hover:bg-red-600`
            );
            break;
          case 'orange':
            overrideClassNames.push(
              `text-[#FF511A] border border-[#FF511A] bg-transparent`,
              `hover:text-[#B72C00] hover:border-[#B72C00]`,
              `active:text-[#E64210] border-[#E64210]`,
              `disabled:text-orange-600 disabled:hover:text-orange-600`
            );
            break;
          case 'yellow':
            overrideClassNames.push(
              `text-yellow-500 border border-yellow-500`,
              `hover:bg-yellow-500 hover:text-black`,
              `active:bg-yellow-600`,
              `disabled:bg-yellow-600 disabled:hover:bg-yellow-600`
            );
            break;
          case 'lightlyOrange':
            overrideClassNames.push(
              'text-[#FF511A] bg-white border-[#FF511A] border-[1px]',
              'hover:text-[#B72C00] hover:bg-white hover:border-[#B72C00]',
              'active:text-[#B72C00] active:bg-white active:border-[#B72C00]'
            );
        }
        break;
      case 'linear':
        switch (color) {
          case 'blue':
            overrideClassNames.push(`text-white bg-blue-linear`);
        }
        break;
      case 'text':
        switch (color) {
          case 'orange':
            overrideClassNames.push(
              `text-[#FF511A] bg-transparent !shadow-none`,
              `hover:text-[#B72C00]`,
              `active:text-[#E64210]`,
              `disabled:text-orange-600 disabled:hover:text-orange-600`
            );
            break;
        }
        break;
      default:
        break;
    }
  };

  initArgs();

  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        'flex ',
        'font-bold leading-[16px] text-base whitespace-nowrap',
        'items-center justify-center rounded-lg',
        variant != 'text' && 'shadow-sm',
        'duration-75 transition-colors',
        overrideClassNames,
        className,
        'disabled:cursor-not-allowed',
        isLoading &&
          'relative !text-transparent hover:!text-transparent !cursor-wait !transition-none',
        `${mainColor}`
      )}
    >
      {isLoading && (
        <div
          className={clsx(
            '-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2',
            `text-${subColor}`
          )}
        >
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
      <Space className='h-min whitespace-nowrap'>
        {icon}
        {children}
      </Space>
    </button>
  );
}
