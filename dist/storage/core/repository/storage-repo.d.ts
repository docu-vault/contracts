import { StorageItem } from '../models/storage';
/**
 * This is generic interface interact with the underlying storage backends.
 * Examples of storage underlying storage backends are AWS S3 or GCP Cloud storge etc.
 */
export interface StorageInterface {
    getUploadURL: (obj: StorageItem, contentType: string) => Promise<string>;
    getDownloadURL: (obj: StorageItem, contentType: string) => Promise<string>;
}
