import { Contact } from '../models/contact';

export class ContactsService {
	constructor() {
	}

	public async GetContacts() {
		let contacts = new Array<Contact>();
		await fetch('api/contacts', {
			credentials: 'same-origin'
		}).then((response) => {
			return response.json() as Promise<Array<any>>;
		}).then((json) => {
			for (let contact of json) {
				contacts.push(new Contact(contact.id, contact.name, contact.phone, contact.email));
			}
		}).catch((error) => {
			console.log(error);
			return [];
		});

		return contacts;
	}
}