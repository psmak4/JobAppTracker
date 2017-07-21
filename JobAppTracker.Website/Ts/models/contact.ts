export class Contact {
	public Id: number;
	public Name: string;
	public Phone: string;
	public Email: string;

	constructor(id: number, name: string, phone: string, email: string) {
		this.Id = id;
		this.Name = name;
		this.Phone = phone;
		this.Email = email;
	}
}