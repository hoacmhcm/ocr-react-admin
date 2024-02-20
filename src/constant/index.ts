import {
  ChartType,
  ImageTypeStatus,
  PartnerType,
  ResponseRole,
  Role,
  ServiceType,
  StateStatus,
} from './enum';

export const IS_DEVELOPMENT =
  document.location.href.indexOf('localhost') > -1 ||
  document.location.href.indexOf('dev') > -1;
export const IS_PRODUCTION = import.meta.env.VITE_ENV === 'production';

export const DOMAIN_API_URL = import.meta.env.VITE_API_URL;

export interface ResponseData<T> {
  msg: string;
  code: number;
  data: T;
  success: boolean;
  total?: number;
  not_empty?: boolean;
  empty?: boolean;
}

export const MAP_STATE_STATUS = [
  { value: StateStatus.ACTIVE, label: 'Active' },
  { value: StateStatus.INACTIVE, label: 'Inactive' },
];


export const MAP_RESPONSE_ROLES = [
  { value: ResponseRole.GUEST, label: 'Guest' },
  { value: ResponseRole.ROOT_ADMIN, label: 'Root Admin' },
  { value: ResponseRole.SYSTEM_ADMIN, label: 'System Admin' },
  { value: ResponseRole.ADMIN, label: 'Admin' },
  { value: ResponseRole.USER, label: 'User' },
];


export const MAPPING_CHART_TYPE_AND_PICKER_TYPE = {
  [ChartType.DAY]: 'date',
  [ChartType.WEEK]: 'week',
  [ChartType.MONTH]: 'month',
  [ChartType.YEAR]: 'year',
};


export const DEFAULT_PAGE_SIZE = 50;

export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];
