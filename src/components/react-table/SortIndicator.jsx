export const SortIndicator = ({isSorted, isSortedDesc}) => {
    if (isSorted) {
        return isSortedDesc ? ' 🔽' : ' 🔼';
    }

    return null;
};
