/**
 * Interface for the Response of /api/urls GET call.
 *
 * @interface IPaginatedUrls
 * @typedef {IPaginatedUrls}
 */
interface IPaginatedUrls {
  /**
   * List of URLS.
   *
   * @type {Url[]}
   */
  results: Url[];

  /**
   * Total URL count for the user.
   *
   * @type {number}
   */
  totalCount: number;

  /**
   * The skip parameter used for the Prisma query.
   *
   * @type {number}
   */
  skip: number;

  /**
   * The take parameter used for the Prisma query.
   *
   * @type {number}
   */
  take: number;
}
