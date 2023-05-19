import typia from 'typia';

interface IMember {
  /**
   * @format uuid
   */
  id: string;

  /**
   * @format email
   */
  email: string;

  /**
   * @type int
   * @exclusiveMinimum 19
   * @maximum 100
   */
  age: number;
}

export const validateTypia = (value: any) => {
  const matched: boolean = typia.is<IMember>(value);
  return matched;
};
