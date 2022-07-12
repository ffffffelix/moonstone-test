import * as Icons from '~/icons';
export const iconsName = Object.keys(Icons);

export function capitalize(str: string) {
    return str.replace(/^\w/, c => c.toUpperCase());
}

// Note: It seems to not be used ...
// Export function optionsFromArray(arr: string[]) {
//     // Get rid of this any
//     return arr.reduce((list: any, option) => {
//         list[capitalize(option)] = option;
//         return list;
//     }, {});
// }
