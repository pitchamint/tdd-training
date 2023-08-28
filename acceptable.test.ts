it('password should length more than 6 return true',()=> {
    expect(acceptablePassword("short")).toBe(false);
    expect(acceptablePassword("shorts")).toBe(false);
    expect(acceptablePassword("password")).toBe(true);
    expect(acceptablePassword("short ")).toBe(false);
    expect(acceptablePassword("       ")).toBe(true);
});

function acceptablePassword(password: string) {
    return password.length > 6
}