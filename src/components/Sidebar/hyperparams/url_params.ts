// data is a map of string-number which is the param name and its corresponding number

export function dataToQueryString(data: Map<string, number>): string {
    const encoded: string[] = [];
    data.forEach((value, key) => {
        if (value !== undefined) {
            encoded.push(key + '=' + encodeURIComponent(value));
        }
    });
    return '?' + encoded.join('&');
}
/*
export function getHyperParams(): Map<string, number> {
    let hyperParams: Map<string, number> =
    return hyperParams
}
*/