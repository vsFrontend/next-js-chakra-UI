export interface UserDataType {
  _id: string;
  name: string;
  trips: number;
  airline: Airline[];
}

interface Airline {
  id: number;
  name: string;
  country: string;
  Switzerland;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

export interface ApiResponseType {
  data: UserDataType[];
  totalPassengers: number;
  totalPages: number;
}
