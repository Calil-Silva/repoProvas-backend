class ParamsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ParamsError';
    }
}

export { ParamsError };
