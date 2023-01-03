import {StorageItem} from './storage-item';

/**
 * This is generic interface interact with the underlying storage backends. 
 * Examples of storage underlying storage backends are AWS S3 or GCP Cloud storge etc.
 */
export interface Storage
{
    getSignedUrlForUpload : (obj: StorageItem, contentType: string) => Promise<string>;
    getSignedUrlForDownload: (obj: StorageItem, contentType: string) =>  Promise<string>;
    fileToStorage : (localFilename: string, destObjectname: string) => Promise<boolean> ;
    storageToFile : (objectName: string, localFilename: string) => Promise<boolean> ;
}