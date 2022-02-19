

export const PgUpdateDataException = (msg: string) => {
    let err = new Error(msg);
    err.name = 'PgUpdateDataException';
    return err;
}