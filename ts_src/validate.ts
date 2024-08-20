function validateName(name: string) : boolean {
    if (!name) return false;
    if (name.trim().indexOf(" ") === -1) return false;
    return true;
}

module.exports = {
    validateName
}