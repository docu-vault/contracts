export interface Configuration {
    
    getContext : (ctx: Object) => Promise<any> ;
    get       : (key: string) => Promise<any> ;
    put       : (key: string, value: any) => Promise<void> ; 

}