/**
 *
 *
 * @export
 * @class Employee
 */
export class Employee {
  /**
   * Creates an instance of Employee.
   *
   * @param {string} firstName
   * @param {string} lastName
   * @param {boolean} isFullTime
   * @param {string} paymentType
   * @param {string} primaryLanguage
   *
   * @memberOf Employee
   */
  constructor(
    public firstName: string,
    public lastName: string,
    public isFullTime: boolean,
    public paymentType: string,
    public primaryLanguage: string
  ) { }
}
