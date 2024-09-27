/**
 * Utility function for populate file information from byte buffers.
 */
export declare class FileUtil {
    /**
     * Processes a files extension when received over data channel
     * @param view - the file extension data
     */
    static setExtensionFromBytes(view: Uint8Array, file: FileTemplate): void;
    /**
     * Processes a files mime type when received over data channel
     * @param view - the file mime type data
     */
    static setMimeTypeFromBytes(view: Uint8Array, file: FileTemplate): void;
    /**
     * Processes a files contents when received over data channel
     * @param view - the file contents data
     */
    static setContentsFromBytes(view: Uint8Array, file: FileTemplate): void;
}
/**
 * A class that represents a template for a downloaded file
 */
export declare class FileTemplate {
    mimetype: string;
    extension: string;
    receiving: boolean;
    size: number;
    data: Array<Uint8Array>;
    valid: boolean;
    timestampStart: number;
}
