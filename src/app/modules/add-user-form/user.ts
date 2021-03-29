export class User {
    constructor(
        private userName: string,
        private firstName: string,
        private lastName: string,
        private email: string,
        private password: string,
        private status: string
    ) { }
}