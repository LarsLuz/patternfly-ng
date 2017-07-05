import { SortField } from './sort-field';
/**
 * An object containing properties for sort events
 */
export declare class SortEvent {
    /**
     * The currently selected filterable field
     */
    field: SortField;
    /**
     * True if sort is ascending
     */
    isAscending: boolean;
}
