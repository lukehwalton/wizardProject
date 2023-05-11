class User {
  constructor(first = "", last = "", email = "", birthDate = "", city = "", street = "", number = null, image = "", hobbies = []) {
    this.first = first;
    this.last = last;
    this.email = email;
    this.birthDate = birthDate;
    this.city = city;
    this.street = street;
    this.number = number;
    this.image = image;
    this.hobbies = hobbies;
    this.currentPhase = 1;
  }

  updatePhase1(first, last, email, birthDate) {
    this.first = first.trim();
    this.last = last.trim();
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
  