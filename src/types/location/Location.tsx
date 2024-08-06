export interface Location {
  id: number;
  name: string;
  address: string;
  position: {
    lat: number;
    lng: number;
  };
}
