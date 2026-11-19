/** Base class for errors the SDK throws on purpose. Match on `code`, not on the message. */
export class XebraError extends Error {
  readonly code: string;
  readonly retryable: boolean;

  constructor(code: string, message: string, opts?: { retryable?: boolean; cause?: unknown }) {
    super(message, opts?.cause === undefined ? undefined : { cause: opts.cause });
    this.name = "XebraError";
    this.code = code;
    this.retryable = opts?.retryable ?? false;
  }
}
