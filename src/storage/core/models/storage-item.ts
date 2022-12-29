/**
 * Specifies the basic storage object attributes. 
 */
export interface StorageItem 
{
    'pathKey' : string;
    'expiryInSeconds'? : number;
    'contentType'? : string
}