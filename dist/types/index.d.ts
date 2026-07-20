/**
 * CSV Core Tool with Rust/WASM processing.
 *
 * Provides high-performance CSV parsing with two modes:
 * - Stream mode: For browsers supporting transferable ReadableStreams (Chromium)
 * - Chunk mode: For browsers without transferable stream support (Safari)
 */
/**
 * Tool configuration.
 */
export declare const config: {
    readonly id: "rust-csv-core";
    readonly name: "Rust CSV Core";
    readonly version: "0.1.0";
};
/**
 * CSV processing options.
 */
export interface CsvProcessingOptions {
    delimiter?: string;
    hasHeaders?: boolean;
}
/**
 * CSV processing result summary.
 */
export interface CsvProcessingSummary {
    processedRowCount: number;
    failedRowCount: number;
    durationMs?: number;
}
/**
 * Tool class implementing CSV parsing with Rust core.
 */
declare class Tool {
    readonly config: {
        readonly id: "rust-csv-core";
        readonly name: "Rust CSV Core";
        readonly version: "0.1.0";
    };
    /**
     * Process CSV data using transferable ReadableStream (Chromium path).
     */
    processWithTransferableStream(stream: ReadableStream<Uint8Array>, options?: CsvProcessingOptions, onProgress?: (rowCount: number) => void): Promise<CsvProcessingSummary>;
    /**
     * Process CSV data using chunk-by-chunk approach (Safari fallback).
     */
    processWithChunks(stream: ReadableStream<Uint8Array>, options?: CsvProcessingOptions, onProgress?: (rowCount: number) => void): Promise<CsvProcessingSummary>;
}
export { Tool };
