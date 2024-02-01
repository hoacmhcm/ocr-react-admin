export enum ApiStatus {
  SUCCESS = 0,
  UNAUTHORIZED = 403,
}

export enum ResponseRole {
  GUEST = 1,
  ROOT_ADMIN = 2,
  ADMIN = 3,
  SYSTEM_ADMIN = 4,
  USER = 5,
}

export enum Role {
  AGENCY_OBSERVER = 'AGENCY_OBSERVER',
}

export enum StateStatus {
  INACTIVE = 0,
  ACTIVE = 1,
}


export enum PartnerType {
  PARTNER = 1,
  AGENCY = 2,
}

export enum ChartType {
  DAY = '0',
  WEEK = '1',
  MONTH = '2',
  YEAR = '3',
}

export enum TrackingStatus {
  SUCCESS = "SUCCESS",
  PENDING = "PENDING",
}


// should update accroding to theme.less
export enum Color {
  PRIMARY = '#4113C6',
  PRIMARY_2 = '#854EE1',
  PRIMARY_3 = '#B863D8',
  LINK = '#4113C6',
  TEXT = '#2D2D2D',
  HEADING = '#2D2D2D',
  SUCCESS = '#00C853',
  ERROR = '#F64B4B',
  WARNING = '#eca52b',
  INFO = '#17a2b8',
  DARK = '#343a40',
  LIGHT_DARK = '#6c757d',
  WHITE = '#fff',
}
