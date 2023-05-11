class User {
  constructor(name = "", email = "", birthDate = "", city = "", street = "", number = null, image = "", hobbies = []) {
    this.name = name;
    this.email = email;
    this.birthDate = birthDate;
    this.city = city;
    this.street = street;
    this.number = number;
    this.image = image;
    this.hobbies = hobbies;
    this.currentPhase = 1;
  }

  get formattedBirthDate() {
    return this.birthDate;
  }

  get address() {
    let address = this.street;
    if (this.number) {
      address += ` ${this.number}`;
    }
    address += `, ${this.city}`;
    return address;
  }

  get hobbiesList() {
    if (this.hobbies === []) {
      return false;
    }
    return hobbies.join(", ");
  }

  updatePhase1(name, email, birthDate) {
    this.name = name.trim();
    this.email = email.trim();
    this.birthDate = birthDate.trim();
    this.currentPhase = 2;
  }

  updatePhase2(city, street, number) {
    this.city = city.trim();
    this.street = street.trim();
    this.number = number === "" ? null : number.trim();
    this.currentPhase = 3;
  }

  updatePhase3(image, hobbies) {
    this.image = image.trim();
    this.hobbies = hobbies.length > 0 ? hobbies : [];
    this.currentPhase = 4;
  }
}
  