import {TrackingStatus} from "../constant/enum";

export interface Table {
  id: number;
  uuid: null;
  tracking_source: null;
  partner_id: number;
  tracking_type: string;
  tracking_status: TrackingStatus;
  tracking_click_id: string;
  revenue: number;
  conversion_time: number;
}
