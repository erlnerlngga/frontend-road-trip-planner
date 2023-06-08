export interface AllDestinationType {
  destination_id: string;
  destination_name: string;
  destination_url: string;
  destination_lat: number;
  destination_long: number;
  image_url: string;
}

export interface SendAllDestinationType {
  city_name: string;
  city_lat: number;
  city_long: number;
  list_destination: AllDestinationType[];
}

export interface SpecificDestinationType {
  destination_id: string;
  destination_name: string;
  destination_url: string;
  list_image: ImageType[];
}

export interface ImageType {
  image_id: string;
  image_url: string;
  destination_id: string;
}

export interface jwtReturnType {
  user_id: number;
  iat: number;
  exp: number;
}

export interface BookmarkType {
  bookmark_id: string;
  bookmark_name: string;
  user_id: string;
}

export interface SendDataUser_SaveType {
  city_name: string;
  city_id: string;
  user_save_id: string;
  destination_id: string;
  destination_name: string;
  destination_url: string;
  image_url: string;
}

export interface JWTReturnType {
  user_id: string;
  jti: string;
  iat: number;
  exp: number;
}
