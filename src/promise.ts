/**
 * wait for a certain period of time
 * @param milliseconds 
 * @returns 
 */
export function sleep(milliseconds: number) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}