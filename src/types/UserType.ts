interface Name {
  title: string;
  first: string;
  last: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserType {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: Picture;
  nat: string;
}
