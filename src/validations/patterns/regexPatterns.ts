/* eslint-disable no-useless-escape */
export const regexPattern = (pattern: string) => {
    const regex = {
        link: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    };
    // @ts-ignore
    return regex[pattern];
};
