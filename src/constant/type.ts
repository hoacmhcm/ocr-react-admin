import {TrackingStatus} from "./enum";

export type Filter = Partial<{
  from: number;
  to: number;
  partner_id: string;
  tracking_status: TrackingStatus | string;
  tracking_click_id: string;
  tracking_type: string;
}>;

export type ListItem = {
  value: number | string;
  label: string;
  disabled?: boolean;
};

export type List = ListItem[];
