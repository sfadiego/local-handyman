import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

/**
 * Returns the full name of a user.
 * @param {Object} user - An object containing the user's first name and last name.
 * @return {string} The user's full name.
 */
export const getUserName = ({
  user,
  format = 'full',
}: {
  user: { firstName: string; lastName: string };
  format?: 'full' | 'first' | 'initials';
}): string => {
  const { firstName, lastName } = user;
  switch (format) {
    case 'full':
      return `${firstName} ${lastName}`;
    case 'first':
      return firstName;
    case 'initials':
      return `${firstName.charAt(0)}${lastName.charAt(0)}`;
    default:
      return `${firstName} ${lastName}`;
  }
};

export const getGreeting = (): string => {
  const dayHour = new Date().getHours();
  return dayHour < 12
    ? 'Buenos días'
    : dayHour < 18
      ? 'Buenas tardes'
      : 'Buenas noches';
};

export const getGreetingIcon = (): string => {
  const dayHour = new Date().getHours();
  return dayHour < 12 ? '☀️' : dayHour < 18 ? '🌤️' : '🌙';
};
