export const formatThousandsAndMillions = (givenNumber) => {
    let formatNumber = givenNumber;
    if (givenNumber >= 1000000) {
        formatNumber = `${Math.floor(givenNumber / 1000000)}m`;
    } else if (givenNumber >= 1000) {
        formatNumber = `${Math.floor(givenNumber / 1000)}k`;
    }
    return formatNumber;
};
